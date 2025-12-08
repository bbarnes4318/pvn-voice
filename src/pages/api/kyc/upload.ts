import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../lib/mongodb';
import { AIService } from '../../../lib/ai-service';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const form = new formidable.IncomingForm({ keepExtensions: true });

    const [fields, files] = await new Promise<[formidable.Fields, formidable.Files]>((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve([fields, files]);
      });
    });

    let file: formidable.File | undefined;
    const doc = files.document;
    if (Array.isArray(doc)) {
      file = doc[0];
    } else if (doc) {
      file = doc;
    }
    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    if (!allowedTypes.includes(file.mimetype || '')) {
      return res.status(400).json({ message: 'Invalid file type' });
    }

    // Validate file size (5MB limit)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return res.status(400).json({ message: 'File too large' });
    }

    // Create uploads directory if it doesn't exist
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    // Generate unique filename
    const timestamp = Date.now();
    const filename = `${timestamp}-${file.originalFilename}`;
    const filepath = path.join(uploadsDir, filename);

    // Move file to uploads directory
    fs.copyFileSync(file.filepath, filepath);
    fs.unlinkSync(file.filepath); // Remove temporary file

    // Perform AI document verification
    const aiService = AIService.getInstance();
    const fileBuffer = fs.readFileSync(filepath);
    const base64Image = fileBuffer.toString('base64');
    
    const verificationResult = await aiService.verifyDocument(base64Image);

    // Save document info to database
    const { db } = await connectToDatabase();
    const documentInfo = {
      filename,
      originalName: file.originalFilename,
      type: file.mimetype,
      size: file.size,
      uploadedAt: new Date(),
      path: `/uploads/${filename}`,
      documentType: fields.type,
      verificationResult
    };

    const result = await db.collection('kyc_documents').insertOne(documentInfo);

    // If document verification failed, trigger manual review
    if (!verificationResult.isValid || verificationResult.confidence < 80) {
      // TODO: Implement manual review workflow
      console.log('Document verification failed, manual review required');
    }

    return res.status(200).json({
      message: 'File uploaded successfully',
      documentId: result.insertedId,
      path: documentInfo.path,
      verificationResult
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
} 