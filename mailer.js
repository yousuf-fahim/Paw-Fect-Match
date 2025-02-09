const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendMail = async (to, subject, text, html) => {
  try {
    const info = await transporter.sendMail({
      from: `"Paw-Fect Match Admin" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
      html,
    });
    console.log("✅ Email sent successfully! Message ID:", info.messageId);
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
};

module.exports = sendMail;
