require('dotenv').config();
const nodemailer = require('nodemailer');

const bank_email = process.env.EMAIL_USER
const client_id = process.env.CLIENT_ID
const client_secret = process.env.CLIENT_SECRET
const refresh_token = process.env.REFRESH_TOKEN

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
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
  const subject = "Welcome to Bhandari Bank";

  const text = `Hello ${name},

Welcome to Bhandari Bank.

Your account is now ready. You can securely manage transactions, track balances, and transfer funds anytime.

Login here: http://localhost:3000/login

If you did not sign up, please contact support immediately.

– Bhandari Bank`;

  const html = `
  <div style="background-color:#f5f7fb;padding:40px 0;font-family:Inter,Arial,sans-serif;">
    
    <table align="center" width="560" style="background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e6e9ef;">
      
      <!-- Header -->
      <tr>
        <td style="padding:24px 32px;border-bottom:1px solid #eef1f6;">
          <h2 style="margin:0;color:#1a1f36;font-weight:600;">Bhandari Bank</h2>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="padding:32px;color:#2e2e2e;">
          
          <p style="margin:0 0 16px;font-size:16px;">
            Hello <strong>${name}</strong>,
          </p>

          <p style="margin:0 0 20px;line-height:1.6;color:#555;">
            Your account has been successfully created. You now have access to secure and real-time banking services.
          </p>

          <!-- Feature box -->
          <div style="background:#f8fafc;border-radius:8px;padding:20px;margin:20px 0;">
            <p style="margin:0 0 10px;font-weight:500;color:#111;">What you can do now:</p>
            <ul style="margin:0;padding-left:18px;color:#555;">
              <li>Track your balance instantly</li>
              <li>Send and receive money securely</li>
              <li>Monitor transaction history</li>
            </ul>
          </div>

          <!-- CTA -->
          <div style="text-align:center;margin:30px 0;">
            <a href="http://localhost:3000/login"
               style="background:#111827;color:#ffffff;padding:12px 28px;text-decoration:none;border-radius:6px;font-size:14px;font-weight:500;display:inline-block;">
              Access Your Account
            </a>
          </div>

          <p style="margin-top:30px;font-size:14px;color:#777;">
            If this wasn’t you, please contact support immediately.
          </p>

        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="padding:20px 32px;background:#fafbfc;font-size:12px;color:#999;text-align:center;">
          © ${new Date().getFullYear()} Bhandari Bank  
          <br/>
          Secure banking infrastructure
        </td>
      </tr>

    </table>
  </div>
  `;

  await sendEmail(userEmail, subject, text, html);
}

async function sendTransactionEmail(email, name, amount, toAccount) {
  const subject = "Transaction Successful";

  const text = `Hello ${name},

Your transaction has been successfully processed.

Amount: ₹${amount}
To Account: ${toAccount}

If you did not initiate this transaction, contact support immediately.

– Bhandari Bank`;

  const html = `
  <div style="background-color:#f5f7fb;padding:40px 0;font-family:Inter,Arial,sans-serif;">
    
    <table align="center" width="560" style="background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e6e9ef;">
      
      <!-- Header -->
      <tr>
        <td style="padding:24px 32px;border-bottom:1px solid #eef1f6;">
          <h2 style="margin:0;color:#1a1f36;font-weight:600;">Bhandari Bank</h2>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="padding:32px;color:#2e2e2e;">
          
          <p style="margin:0 0 16px;font-size:16px;">
            Hello <strong>${name}</strong>,
          </p>

          <p style="margin:0 0 20px;color:#555;">
            Your transaction has been successfully completed.
          </p>

          <!-- Transaction Box -->
          <div style="background:#f8fafc;border-radius:8px;padding:20px;margin:20px 0;">
            
            <table width="100%" style="font-size:14px;color:#444;">
              <tr>
                <td style="padding:8px 0;">Amount</td>
                <td style="padding:8px 0;text-align:right;font-weight:600;">₹${amount}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;">Transferred To</td>
                <td style="padding:8px 0;text-align:right;">${toAccount}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;">Status</td>
                <td style="padding:8px 0;text-align:right;color:#16a34a;font-weight:600;">
                  Completed
                </td>
              </tr>
            </table>

          </div>

          <!-- CTA -->
          <div style="text-align:center;margin:30px 0;">
            <a href="http://localhost:3000/dashboard"
               style="background:#111827;color:#ffffff;padding:12px 28px;text-decoration:none;border-radius:6px;font-size:14px;font-weight:500;display:inline-block;">
              View Transaction
            </a>
          </div>

          <p style="margin-top:30px;font-size:14px;color:#777;">
            If you did not initiate this transaction, please contact support immediately.
          </p>

        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="padding:20px 32px;background:#fafbfc;font-size:12px;color:#999;text-align:center;">
          © ${new Date().getFullYear()} Bhandari Bank  
          <br/>
          Secure Transaction Notification
        </td>
      </tr>

    </table>
  </div>
  `;

  await sendEmail(email, subject, text, html);
}

module.exports = {sendRegistrationEmail, sendTransactionEmail};

