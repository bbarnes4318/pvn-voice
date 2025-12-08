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
    const { db } = await connectToDatabase();
    const kycData = req.body;

    // Validate required fields
    const requiredFields = [
      'fullName',
      'email',
      'phone',
      'dateOfBirth',
      'address',
      'city',
      'state',
      'zipCode',
      'idType',
      'idNumber'
    ];

    const missingFields = requiredFields.filter(field => !kycData[field]);
    if (missingFields.length > 0) {
      return res.status(400).json({
        message: 'Missing required fields',
        fields: missingFields
      });
    }

    // Perform AI risk assessment
    const aiService = AIService.getInstance();
    const riskAssessment = await aiService.assessRisk({
      deviceFingerprint: kycData.deviceFingerprint,
      ipAddress: kycData.ipAddress,
      emailDomain: kycData.email.split('@')[1],
      userBehavior: {
        timeOfDay: new Date().getHours(),
        location: kycData.ipLocation || 'unknown',
        deviceType: kycData.deviceType || 'unknown'
      }
    });

    // Add timestamp, status, and risk assessment
    const submission = {
      ...kycData,
      submittedAt: new Date(),
      status: riskAssessment.riskLevel === 'high' ? 'pending_review' : 'pending',
      riskAssessment,
      verificationStatus: {
        identity: 'pending',
        address: 'pending',
        documents: 'pending'
      }
    };

    // Save to database
    const result = await db.collection('kyc_submissions').insertOne(submission);

    // If high risk, trigger additional verification
    if (riskAssessment.riskLevel === 'high') {
      // TODO: Implement additional verification steps
      console.log('High risk submission detected, additional verification required');
    }

    // Send confirmation email
    // TODO: Implement email sending

    return res.status(200).json({
      message: 'KYC submission received',
      submissionId: result.insertedId,
      riskLevel: riskAssessment.riskLevel,
      status: submission.status
    });
  } catch (error) {
    console.error('Error processing KYC submission:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
} 