import { NextApiRequest, NextApiResponse } from 'next';
import { ComplianceService } from '../../../lib/compliance-service';
import { getSession } from 'next-auth/react';
import { connectToDatabase } from '../../../lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const session = await getSession({ req });
    if (!session) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { customerId, kycData } = req.body;
    if (!customerId || !kycData) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const complianceService = ComplianceService.getInstance();
    
    // Verify STIR/SHAKEN compliance
    const attestationResult = await complianceService.verifySTIRSHAKENCompliance(kycData);
    
    // Validate robocall mitigation
    const mitigationValid = await complianceService.validateRobocallMitigation(kycData);
    
    if (!mitigationValid) {
      return res.status(400).json({
        error: 'Robocall mitigation validation failed',
        details: 'Customer does not meet robocall mitigation requirements',
      });
    }

    // Prepare RMDB submission
    const rmdbSubmission = await complianceService.prepareRMDBSubmission(customerId, attestationResult);
    
    // Generate compliance report
    const complianceReport = await complianceService.generateComplianceReport(customerId);

    // Store compliance data in database
    const { db } = await connectToDatabase();
    await db.collection('compliance_records').insertOne({
      customerId,
      attestationResult,
      rmdbSubmission,
      complianceReport,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return res.status(200).json({
      success: true,
      data: {
        attestationResult,
        rmdbSubmission,
        complianceReport,
      },
    });
  } catch (error) {
    console.error('Error in compliance verification:', error);
    return res.status(500).json({
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
} 