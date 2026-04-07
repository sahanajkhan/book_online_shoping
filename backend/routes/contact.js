const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  try {
    // Determine the email configuration from environment variables
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    
    if (!emailUser || !emailPass) {
      console.warn("Nodemailer requires EMAIL_USER and EMAIL_PASS. Simulating a successful email send.");
      return res.status(200).json({ message: 'Email sent successfully! (Simulated)' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass
      }
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      replyTo: email,
      to: 'riyabnsl2004@gmail.com, khanshahanaj621@gmail.com', // Sending to the requested recipients
      subject: `New Contact Form Message from ${name}`,
      text: `You have received a new message from your website contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<h3>New Contact Message</h3>
             <p><b>Name:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Message:</b></p>
             <p>${message.replace(/\n/g, '<br/>')}</p>`
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email. Please check server configuration.' });
  }
});

module.exports = router;
