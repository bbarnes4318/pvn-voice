import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendEmail({ to, subject, html }: EmailOptions): Promise<void> {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to,
      subject,
      html,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
}

export async function sendVerificationEmail(email: string, token: string): Promise<void> {
  const verificationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/auth/verify-email?token=${token}`;
  
  await sendEmail({
    to: email,
    subject: 'Verify Your Email',
    html: `
      <p>Welcome! Please verify your email address.</p>
      <p>Click this <a href="${verificationUrl}">link</a> to verify your email.</p>
      <p>This link will expire in 24 hours.</p>
    `,
  });
}

export async function sendWelcomeEmail(email: string, name: string): Promise<void> {
  await sendEmail({
    to: email,
    subject: 'Welcome to Our Platform',
    html: `
      <p>Welcome ${name}!</p>
      <p>Thank you for creating an account with us.</p>
      <p>You can now proceed with the KYC process to start using our services.</p>
    `,
  });
} 