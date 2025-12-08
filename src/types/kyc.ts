export interface KYCData {
  // Basic Information
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  nationality?: string;

  // Address Information
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country?: string;

  // Identity Verification
  idType: string;
  idNumber: string;
  idExpiry?: string;

  // Service Details
  expectedVolume?: number;
  callTypes?: string[];
  targetMarkets?: string[];

  // Device & Risk
  deviceFingerprint?: string;
  ipAddress?: string;
  ipLocation?: string;
  deviceType?: string;

  // Verification Status
  identityVerified: boolean;
  businessVerified: boolean;
  documentsVerified: boolean;
  riskScore: number;
  complianceStatus: 'COMPLIANT' | 'PENDING' | 'NON-COMPLIANT';
}

export interface BusinessKYCData extends KYCData {
  businessName: string;
  businessType?: string;
  registrationNumber?: string;
  businessAddress?: string;
  taxId?: string;
  website?: string;
  contactPerson?: string;
  contactPhone?: string;
  contactEmail?: string;
} 