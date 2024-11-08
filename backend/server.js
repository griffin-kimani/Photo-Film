// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',   
  },
});

app.post('/api/contact', (req, res) => {
  const { name, email, phone, location, event, date, budget, details } = req.body;

  const mailOptions = {
    from: email,
    to: 'photographer-email@gmail.com', 
    subject: 'New Booking Request',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nLocation: ${location}\nEvent: ${event}\nDate: ${date}\nBudget: ${budget}\nDetails: ${details}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Booking request sent successfully.');
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
