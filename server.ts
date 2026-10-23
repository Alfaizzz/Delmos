import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// In-memory store for recent inquiries (handy for preview and local verification)
const inquiries: Array<{
  id: string;
  createdAt: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  companyName?: string;
  serviceRequired?: string;
  applicationTechnology?: string;
  query: string;
  preferredContact?: string;
  smtpStatus: 'sent' | 'pending_credentials' | 'failed';
}> = [];

// Contact form endpoint with Hostinger SMTP support
app.post('/api/contact', async (req: Request, res: Response) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      companyName,
      serviceRequired,
      applicationTechnology,
      query,
      preferredContact,
    } = req.body;

    if (!firstName || !lastName || !email || !query) {
      return res.status(400).json({
        success: false,
        error: 'First name, last name, email, and query are required fields.',
      });
    }

    const inquiryId = `INQ-${Date.now().toString(36).toUpperCase()}`;
    const timestamp = new Date().toISOString();

    const smtpHost = process.env.SMTP_HOST || 'smtp.hostinger.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
    const smtpSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || smtpUser || 'support@delmostech.com';

    let smtpStatus: 'sent' | 'pending_credentials' | 'failed' = 'pending_credentials';
    let emailFeedback = '';

    if (smtpUser && smtpPass && smtpUser !== 'your_hostinger_email' && smtpPass !== 'your_hostinger_email_password') {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpSecure,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        const mailOptions = {
          from: `"Delmos Tech Support Portal" <${smtpUser}>`,
          to: receiverEmail,
          replyTo: `"${firstName} ${lastName}" <${email}>`,
          subject: `[New Support Inquiry] ${serviceRequired || 'General'} - ${companyName || firstName + ' ' + lastName}`,
          text: `
NEW SUPPORT INQUIRY - DELMOS TECH PVT. LTD.
==============================================
Inquiry ID: ${inquiryId}
Date/Time: ${timestamp}

CONTACT DETAILS:
- Name: ${firstName} ${lastName}
- Email: ${email}
- Phone: ${phoneNumber || 'Not provided'}
- Company: ${companyName || 'Not provided'}
- Preferred Contact: ${preferredContact || 'Email'}

REQUIREMENTS:
- Service Required: ${serviceRequired || 'Application Support'}
- Application / Technology Stack: ${applicationTechnology || 'Not specified'}

QUERY / REQUIREMENT DESCRIPTION:
${query}

==============================================
Submitted via Delmos Tech Web Application.
          `,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <div style="background-color: #12233f; padding: 16px 20px; border-radius: 6px; margin-bottom: 20px;">
                <h2 style="color: #ffffff; margin: 0; font-size: 20px;">Delmos Tech Pvt. Ltd.</h2>
                <p style="color: #60a5fa; margin: 4px 0 0; font-size: 13px;">New Client Support Inquiry</p>
              </div>
              <p style="font-size: 14px; color: #475569;">A new inquiry has been submitted through the website contact form.</p>
              <table style="width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 14px;">
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 8px 0; color: #64748b; font-weight: bold; width: 160px;">Inquiry Reference:</td>
                  <td style="padding: 8px 0; color: #0f172a; font-family: monospace;">${inquiryId}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Full Name:</td>
                  <td style="padding: 8px 0; color: #0f172a;">${firstName} ${lastName}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Business Email:</td>
                  <td style="padding: 8px 0; color: #2563eb;"><a href="mailto:${email}">${email}</a></td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Phone Number:</td>
                  <td style="padding: 8px 0; color: #0f172a;">${phoneNumber || 'N/A'}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Company:</td>
                  <td style="padding: 8px 0; color: #0f172a;">${companyName || 'N/A'}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Service Required:</td>
                  <td style="padding: 8px 0; color: #0f172a;">${serviceRequired || 'Application Support'}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Technology Stack:</td>
                  <td style="padding: 8px 0; color: #0f172a;">${applicationTechnology || 'N/A'}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Preferred Contact:</td>
                  <td style="padding: 8px 0; color: #0f172a;">${preferredContact || 'Email'}</td>
                </tr>
              </table>
              <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-radius: 6px;">
                <h4 style="margin: 0 0 8px; color: #1e293b; font-size: 13px;">Requirement Details:</h4>
                <p style="margin: 0; color: #334155; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${query}</p>
              </div>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);
        smtpStatus = 'sent';
        emailFeedback = 'Email dispatched successfully via Hostinger SMTP.';
      } catch (err: unknown) {
        smtpStatus = 'failed';
        emailFeedback = `SMTP Dispatch failed: ${(err as Error).message}`;
        console.error('Hostinger SMTP Send Error:', err);
      }
    } else {
      smtpStatus = 'pending_credentials';
      emailFeedback =
        'Inquiry logged locally. Hostinger SMTP credentials (SMTP_USER & SMTP_PASS) can be added in .env to dispatch live emails.';
    }

    inquiries.push({
      id: inquiryId,
      createdAt: timestamp,
      firstName,
      lastName,
      email,
      phoneNumber,
      companyName,
      serviceRequired,
      applicationTechnology,
      query,
      preferredContact,
      smtpStatus,
    });

    return res.status(200).json({
      success: true,
      inquiryId,
      smtpStatus,
      message:
        smtpStatus === 'sent'
          ? 'Thank you! Your enquiry has been received and our engineering team will get in touch shortly.'
          : 'Thank you! Your enquiry has been received successfully.',
      feedback: emailFeedback,
    });
  } catch (error: unknown) {
    console.error('Error handling contact submission:', error);
    return res.status(500).json({
      success: false,
      error: 'An unexpected error occurred while processing your request.',
    });
  }
});

// Endpoint to view recent submissions or check SMTP readiness
app.get('/api/contact/status', (_req: Request, res: Response) => {
  const isSmtpConfigured = Boolean(
    process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.SMTP_USER !== 'your_hostinger_email'
  );
  return res.json({
    isSmtpConfigured,
    smtpHost: process.env.SMTP_HOST || 'smtp.hostinger.com',
    smtpPort: process.env.SMTP_PORT || '465',
    receiverEmail: process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER || 'Not set',
    totalInquiries: inquiries.length,
    recentInquiries: inquiries.slice(-5),
  });
});

async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
