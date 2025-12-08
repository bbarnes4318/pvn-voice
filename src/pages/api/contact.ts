// Next.js API route for handling contact form submissions
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  companySize: string;
  message: string;
  smsConsent: boolean;
};

type ResponseData = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const formData: ContactFormData = req.body;

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    // Create a transport for sending email
    // NOTE: In production, you should use your actual SMTP credentials
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Format the email message
    const mailOptions = {
      from: `"PVN Voice Contact Form" <${process.env.SMTP_FROM || 'noreply@pvnvoice.com'}>`,
      to: 'jimmy@getlifeassurance.com',
      subject: 'New PVN Voice Website Submission',
      text: `
New contact form submission from PVN Voice website:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company Size: ${formData.companySize}
SMS Consent: ${formData.smsConsent ? 'Yes' : 'No'}

Message:
${formData.message || 'No message provided'}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p>A new submission has been received from the PVN Voice contact form.</p>

<h3>Contact Details:</h3>
<ul>
  <li><strong>Name:</strong> ${formData.name}</li>
  <li><strong>Email:</strong> ${formData.email}</li>
  <li><strong>Phone:</strong> ${formData.phone}</li>
  <li><strong>Company Size:</strong> ${formData.companySize}</li>
  <li><strong>SMS Consent:</strong> ${formData.smsConsent ? 'Yes' : 'No'}</li>
</ul>

<h3>Message:</h3>
<p>${formData.message || 'No message provided'}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return res.status(200).json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting form:', error);
    // For now, we'll return success even if email fails in dev if SMTP isn't set up,
    // so the user sees the UI feedback. In prod, you'd want to handle this differently.
    // However, sticking to the requested requirement:
    if (process.env.NODE_ENV === 'development' && !process.env.SMTP_HOST) {
        console.log('Development mode: Email would have been sent to jimmy@getlifeassurance.com');
        return res.status(200).json({ success: true, message: 'Form submitted (Dev Mode - No SMTP)' });
    }
    return res.status(500).json({ success: false, message: 'Error submitting form' });
  }
} 