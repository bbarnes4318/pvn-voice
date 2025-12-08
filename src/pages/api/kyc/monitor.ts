import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../lib/mongodb';
import { AIService } from '../../../lib/ai-service';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { userId, behaviorData } = req.body;

    if (!userId || !behaviorData) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const { db } = await connectToDatabase();
    const aiService = AIService.getInstance();

    // Get user's historical behavior
    const userHistory = await db.collection('user_behavior')
      .find({ userId })
      .sort({ timestamp: -1 })
      .limit(10)
      .toArray();

    // Perform AI behavior analysis
    const monitoringResult = await aiService.monitorBehavior(userId, {
      current: behaviorData,
      history: userHistory
    });

    // Save behavior data
    await db.collection('user_behavior').insertOne({
      userId,
      ...behaviorData,
      timestamp: new Date(),
      monitoringResult
    });

    // If alert is triggered, create an alert record
    if (monitoringResult.alert) {
      await db.collection('alerts').insertOne({
        userId,
        type: 'behavior_anomaly',
        severity: monitoringResult.severity,
        reason: monitoringResult.reason,
        timestamp: new Date(),
        status: 'new'
      });

      // For high severity alerts, trigger immediate action
      if (monitoringResult.severity === 'high') {
        // TODO: Implement immediate action (e.g., suspend account, notify admin)
        console.log('High severity alert triggered, immediate action required');
      }
    }

    return res.status(200).json({
      message: 'Behavior monitoring completed',
      alert: monitoringResult.alert,
      severity: monitoringResult.severity
    });
  } catch (error) {
    console.error('Error in behavior monitoring:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
} 