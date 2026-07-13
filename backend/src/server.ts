import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables in development
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Log folder & database path for contacts
const DATA_DIR = path.join(__dirname, '..');
const MESSAGES_FILE = path.join(DATA_DIR, 'messages.json');

// POST /api/contact - process contact form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  const newMessage = {
    id: Date.now().toString(36) + Math.random().toString(36).substring(2, 7),
    name,
    email,
    message,
    timestamp: new Date().toISOString(),
  };

  try {
    let messages = [];
    if (fs.existsSync(MESSAGES_FILE)) {
      const data = fs.readFileSync(MESSAGES_FILE, 'utf8');
      messages = JSON.parse(data || '[]');
    }

    messages.push(newMessage);
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2), 'utf8');
    
    console.log(`[Contact Form] Message received from ${name} (${email}): "${message.substring(0, 50)}..."`);

    // Asynchronously forward message to email if SMTP credentials are configured
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpUser && smtpPass) {
      const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
      const smtpPort = parseInt(process.env.SMTP_PORT || '587');
      const emailTo = process.env.EMAIL_TO || 'tanaychauhanwork@gmail.com';

      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const mailOptions = {
        from: `"Portfolio Contact Form" <${smtpUser}>`,
        to: emailTo,
        replyTo: email,
        subject: `New Portfolio Message from ${name}`,
        text: `You have received a new contact submission from your portfolio website:\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}\n\n---\nSent automatically by your Express Backend.`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 8px;">
            <h2 style="color: #f2ca50; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-top: 0;">New Portfolio Message</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #f2ca50; border-radius: 4px; margin-top: 20px; white-space: pre-wrap;">
              ${message}
            </div>
            <hr style="border: none; border-top: 1px solid #eee; margin-top: 25px;" />
            <p style="font-size: 11px; color: #888; margin-bottom: 0;">Sent automatically by your Express Backend.</p>
          </div>
        `,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('[Contact Email] Failed to send email:', error);
        } else {
          console.log('[Contact Email] Message forwarded successfully:', info.messageId);
        }
      });
    }
    
    return res.status(200).json({ success: true, message: 'Message received successfully.' });
  } catch (error) {
    console.error('Failed to write message:', error);
    return res.status(500).json({ success: false, message: 'Failed to process message on server.' });
  }
});

// GET /api/resume - download the resume PDF file
app.get('/api/resume', (req, res) => {
  // Try several potential locations to ensure we find the PDF
  const localPath = path.join(__dirname, '..', 'SDEResume.pdf');
  const parentPath = path.join(__dirname, '..', '..', 'SDEResume.pdf');
  
  let targetPath = '';
  if (fs.existsSync(localPath)) {
    targetPath = localPath;
  } else if (fs.existsSync(parentPath)) {
    targetPath = parentPath;
  } else {
    // If not found in dev or workspace structure, check system default path
    const absoluteParent = '/Users/tanay/Desktop/SDEResume.pdf';
    if (fs.existsSync(absoluteParent)) {
      targetPath = absoluteParent;
    }
  }

  if (targetPath) {
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Tanay_Singh_Chauhan_Resume.pdf"');
    return res.sendFile(targetPath);
  } else {
    console.error('Resume PDF file not found at expected paths.');
    return res.status(404).json({ success: false, message: 'Resume file not found on the server.' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`[Server] Antique Parian backend listening on http://localhost:${PORT}`);
});
