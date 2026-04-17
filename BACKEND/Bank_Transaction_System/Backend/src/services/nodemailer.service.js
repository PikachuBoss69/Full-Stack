require('dotenv').config();
const nodemailer = require('nodemailer');

const bank_email = process.env.EMAIL_USER
const client_id = process.env.CLIENT_ID
const client_secret = process.env.CLIENT_SECRET
const refresh_token = process.env.REFRESH_TOKEN

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: bank_email,
    clientId: client_id,
    clientSecret: client_secret,
    refreshToken: refresh_token,
  },
});

// Verify the connection configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Error connecting to email server:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

// Function to send email
const sendEmail = async (to, subject, text, html) => {
  try {
    const info = await transporter.sendMail({
      from: `"Bhandari Bank" <${bank_email}>`, // sender address
      to, // list of receivers
      subject, // Subject line
      text, // plain text body
      html, // html body
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

async function sendRegistrationEmail(userEmail, name) {
  const subject = "Welcome to Bhandari Bank 🎉";

  const text = `Hello ${name},

Welcome to Bhandari Bank! We're excited to have you on board.

You can now manage your transactions securely and efficiently.

Best regards,  
Bhandari Bank Team`;

  const html = `
  <div style="font-family: Arial, sans-serif; background-color: #f4f6f8; padding: 20px;">
    <table align="center" width="600" style="background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
      
      <!-- Header -->
      <tr>
        <td style="background: #0d6efd; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">🏦 Bhandari Bank</h1>
          <p style="margin: 5px 0 0;">Secure. Fast. Reliable.</p>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="padding: 30px; color: #333;">
          <h2>Hello ${name}, 👋</h2>
          
          <p>
            Welcome to <strong>Bhandari Bank</strong>! We're thrilled to have you join us.
          </p>

          <p>
            You can now enjoy:
          </p>

          <ul>
            <li>💳 Secure Transactions</li>
            <li>📊 Real-time Account Tracking</li>
            <li>⚡ Fast Money Transfers</li>
          </ul>

          <p style="margin-top: 20px;">
            Click below to get started:
          </p>

          <div style="text-align: center; margin: 30px 0;">
            <a href="http://localhost:3000/login"
               style="background: #0d6efd; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">
              Login to Your Account
            </a>
          </div>

          <p>
            If you have any questions, feel free to contact our support team.
          </p>

          <p>
            Best regards,<br/>
            <strong>Bhandari Bank Team</strong>
          </p>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background: #f1f1f1; text-align: center; padding: 15px; font-size: 12px; color: #777;">
          © ${new Date().getFullYear()} Bhandari Bank. All rights reserved.
        </td>
      </tr>

    </table>
  </div>
  `;

  await sendEmail(userEmail, subject, text, html);
}

module.exports = {sendRegistrationEmail};

