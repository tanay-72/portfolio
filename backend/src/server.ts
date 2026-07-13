import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';

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
