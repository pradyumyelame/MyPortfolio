const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;
  console.log("Received data:", { name, email, message });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.TO_EMAIL,
      subject: `New message from ${name}`,
      text: `Email: ${email}\n\nMessage:\n${message}`,
    });

    res.status(200).json({ success: true, message: 'Message sent!' });
  } catch (err) {
    console.error("Email sending failed:", err);  // <-- THIS WILL HELP US
    res.status(500).json({ success: false, message: 'Failed to send message' });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
