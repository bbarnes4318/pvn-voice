import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

interface RiskFactors {
  deviceFingerprint: string;
  ipAddress: string;
  emailDomain: string;
  userBehavior: {
    timeOfDay: number;
    location: string;
    deviceType: string;
  };
  callPatterns?: {
    volume: number;
    destinations: string[];
    frequency: number;
  };
}

interface DocumentVerificationResult {
  isValid: boolean;
  confidence: number;
  extractedData: {
    name?: string;
    idNumber?: string;
    expiryDate?: string;
    documentType?: string;
  };
  anomalies?: string[];
}

export class AIService {
  private static instance: AIService;
  private model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });

  private constructor() {}

  static getInstance(): AIService {
    if (!AIService.instance) {
      AIService.instance = new AIService();
    }
    return AIService.instance;
  }

  async assessRisk(factors: RiskFactors): Promise<{
    riskScore: number;
    riskLevel: 'low' | 'medium' | 'high';
    reasons: string[];
  }> {
    try {
      const prompt = `
        Analyze the following risk factors for a VoIP service user:
        - Device Fingerprint: ${factors.deviceFingerprint}
        - IP Address: ${factors.ipAddress}
        - Email Domain: ${factors.emailDomain}
        - User Behavior: ${JSON.stringify(factors.userBehavior)}
        ${factors.callPatterns ? `- Call Patterns: ${JSON.stringify(factors.callPatterns)}` : ''}

        Provide a risk assessment with:
        1. A risk score from 0-100
        2. Risk level (low/medium/high)
        3. Specific reasons for the assessment
      `;

      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      // Parse the AI response
      const riskScore = parseInt(text.match(/risk score: (\d+)/i)?.[1] || '50');
      const riskLevel = text.match(/risk level: (low|medium|high)/i)?.[1] || 'medium';
      const reasons = text.split('\n')
        .filter(line => line.startsWith('-'))
        .map(line => line.replace('-', '').trim());

      return {
        riskScore,
        riskLevel: riskLevel as 'low' | 'medium' | 'high',
        reasons
      };
    } catch (error) {
      console.error('Error in risk assessment:', error);
      throw new Error('Failed to assess risk');
    }
  }

  async verifyDocument(imageBase64: string): Promise<DocumentVerificationResult> {
    try {
      const prompt = `
        Analyze this document image and verify its authenticity.
        Extract and validate the following information:
        - Name
        - ID Number
        - Expiry Date
        - Document Type

        Also check for:
        - Signs of tampering
        - Inconsistencies in formatting
        - Suspicious patterns
      `;

      const result = await this.model.generateContent([
        prompt,
        {
          inlineData: {
            mimeType: 'image/jpeg',
            data: imageBase64
          }
        }
      ]);

      const response = await result.response;
      const text = response.text();

      // Parse the AI response
      const extractedData = {
        name: text.match(/name: ([^\n]+)/i)?.[1],
        idNumber: text.match(/id number: ([^\n]+)/i)?.[1],
        expiryDate: text.match(/expiry date: ([^\n]+)/i)?.[1],
        documentType: text.match(/document type: ([^\n]+)/i)?.[1]
      };

      const isValid = text.toLowerCase().includes('document appears valid');
      const confidence = parseInt(text.match(/confidence: (\d+)%/i)?.[1] || '0');
      const anomalies = text.split('\n')
        .filter(line => line.toLowerCase().includes('anomaly') || line.toLowerCase().includes('suspicious'))
        .map(line => line.trim());

      return {
        isValid,
        confidence,
        extractedData,
        anomalies: anomalies.length > 0 ? anomalies : undefined
      };
    } catch (error) {
      console.error('Error in document verification:', error);
      throw new Error('Failed to verify document');
    }
  }

  async monitorBehavior(userId: string, behaviorData: any): Promise<{
    alert: boolean;
    severity: 'low' | 'medium' | 'high';
    reason: string;
  }> {
    try {
      const prompt = `
        Analyze this user behavior data for suspicious activity:
        ${JSON.stringify(behaviorData, null, 2)}

        Consider:
        - Unusual patterns
        - Sudden changes in behavior
        - High-risk activities
        - Geographic anomalies

        Provide an alert assessment with:
        1. Whether an alert should be triggered (true/false)
        2. Alert severity (low/medium/high)
        3. Reason for the alert
      `;

      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      const alert = text.toLowerCase().includes('alert: true');
      const severity = text.match(/severity: (low|medium|high)/i)?.[1] || 'low';
      const reason = text.split('\n')
        .find(line => line.toLowerCase().includes('reason:'))
        ?.replace(/reason:/i, '')
        .trim() || 'No specific reason provided';

      return {
        alert,
        severity: severity as 'low' | 'medium' | 'high',
        reason
      };
    } catch (error) {
      console.error('Error in behavior monitoring:', error);
      throw new Error('Failed to monitor behavior');
    }
  }
} 