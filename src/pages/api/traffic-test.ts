import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type SuccessResponse = { success: true };
type ErrorResponse = { success: false; message: string };
type ResponseData = SuccessResponse | ErrorResponse;

const field = (value: unknown, maxLength = 200) =>
  typeof value === 'string' ? value.trim().slice(0, maxLength) : '';

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;',
    };
    return entities[character];
  });

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const name = field(req.body?.name);
  const company = field(req.body?.company);
  const phone = field(req.body?.phone);
  const email = field(req.body?.email);
  const dialer = field(req.body?.dialer);
  const dials = field(req.body?.dials);
  const currentCarrier = field(req.body?.currentCarrier);
  const message = field(req.body?.message, 2000);
  const website = field(req.body?.website);
  const trustedForm = field(req.body?.xxTrustedFormCertUrl, 2000);

  if (website) {
    return res.status(200).json({ success: true });
  }

  if (!name || !company || !phone || !email) {
    return res.status(400).json({ success: false, message: 'Name, company, phone and email are required.' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ success: false, message: 'Enter a valid email address.' });
  }

  const forwarded = req.headers['x-forwarded-for'];
  const requesterIp = Array.isArray(forwarded)
    ? forwarded[0]
    : forwarded?.split(',')[0]?.trim() || req.socket.remoteAddress || '';
  const submittedAt = new Date().toISOString();

  const clean = {
    name: escapeHtml(name),
    company: escapeHtml(company),
    phone: escapeHtml(phone),
    email: escapeHtml(email),
    dialer: escapeHtml(dialer),
    dials: escapeHtml(dials),
    currentCarrier: escapeHtml(currentCarrier || 'Not provided'),
    message: escapeHtml(message || 'Not provided'),
    trustedForm: escapeHtml(trustedForm || 'Not provided'),
    submittedAt: escapeHtml(submittedAt),
    requesterIp: escapeHtml(requesterIp || 'Unknown'),
  };

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const safeSubjectCompany = company.replace(/[\r\n]+/g, ' ');

    await transporter.sendMail({
      from: `"PVN Voice Traffic Test" <${process.env.SMTP_FROM || 'noreply@pvnvoice.com'}>`,
      to: 'jimmy@getlifeassurance.com',
      subject: `Traffic test request: ${safeSubjectCompany}`,
      text: [
        'New PVN Voice traffic test request',
        '',
        `Name: ${name}`,
        `Company: ${company}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Dialer: ${dialer || 'Not provided'}`,
        `Outbound dials per day: ${dials || 'Not provided'}`,
        `Current carrier: ${currentCarrier || 'Not provided'}`,
        `Anything we should know: ${message || 'Not provided'}`,
        `TrustedForm certificate: ${trustedForm || 'Not provided'}`,
        `Submitted at: ${submittedAt}`,
        `Requester IP: ${requesterIp || 'Unknown'}`,
      ].join('\n'),
      html: `
        <h2>New PVN Voice Traffic Test Request</h2>
        <table cellpadding="6" cellspacing="0" border="0">
          <tr><td><strong>Name</strong></td><td>${clean.name}</td></tr>
          <tr><td><strong>Company</strong></td><td>${clean.company}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${clean.phone}</td></tr>
          <tr><td><strong>Email</strong></td><td>${clean.email}</td></tr>
          <tr><td><strong>Dialer</strong></td><td>${clean.dialer || 'Not provided'}</td></tr>
          <tr><td><strong>Outbound dials per day</strong></td><td>${clean.dials || 'Not provided'}</td></tr>
          <tr><td><strong>Current carrier</strong></td><td>${clean.currentCarrier}</td></tr>
          <tr><td><strong>Anything we should know</strong></td><td>${clean.message}</td></tr>
          <tr><td><strong>TrustedForm certificate</strong></td><td>${clean.trustedForm}</td></tr>
          <tr><td><strong>Submitted at</strong></td><td>${clean.submittedAt}</td></tr>
          <tr><td><strong>Requester IP</strong></td><td>${clean.requesterIp}</td></tr>
        </table>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Traffic test submission error:', error);
    return res.status(500).json({ success: false, message: 'Unable to submit the traffic test request.' });
  }
}
