const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
  const { name, email, subject, message } = req.body;
 
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
 
  const mailOptions = {
    from: email,
    to: 'your-email@gmail.com', 
    subject: `New Message from ${name}: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to send message." });
  }
};

module.exports = { sendEmail };