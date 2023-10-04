const nodemailer = require("nodemailer");

async function sendContactEmail(
  { name, email, subject, message },
  { adminRecipient, adminSubject }
) {
  try {
    // const transporter = nodemailer.createTransport({
    //   service: "Gmail",
    //   auth: {
    //     user: "thesatishjassal@gmail.com", // Your Gmail address
    //     pass: "ulryvkevtlebqtff", // Your Gmail password or an app-specific password
    //   },
    // });
    const transporter = nodemailer.createTransport({
        host: 'mail.thesatishjassal.com',
        port: 465,  // Use the appropriate port for TLS
        secure: true,  // Set to true if using SSL
        auth: {
          user: 'mail@thesatishjassal.com',
          pass: 'wsI]t(Q40G{-',
        },
      });
    
    const mailOptions = {
      from: "mail@thesatishjassal.com",
      to: email,
      subject,
      text: message,
      html: `
      <html>
        <head>
          <style>
            /* Inline CSS styles for email compatibility */
            body {
              font-family: Arial, sans-serif;
            }
            .email-container {
              background-color: #f5f5f5;
              padding: 20px;
              border-radius: 5px;
              border: 1px solid #ccc;
            }
            .header {
              font-size: 24px;
              margin-bottom: 10px;
            }
            .message {
              font-size: 16px;
              line-height: 1.5;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="header">Thank You for Contacting Us</div>
            <p>Hello ${name},</p>
            <p class="message">We're glad you reached out to us. We'll get back to you soon.</p>
            <p class="message">If you have any questions, don't hesitate to ask.</p>
            <p class="message">Best regards,</p>
            <p class="message">Your Team</p>
          </div>
        </body>
      </html>
    `,
    };
    const adminMailOptions = {
      from: "thesatishjassal@gmail.com",
      to: adminRecipient,
      subject: adminSubject,
      html: `
        <html>
          <head>
            <style>
              /* Inline CSS styles for email compatibility */
              body {
                font-family: Arial, sans-serif;
              }
              .email-container {
                background-color: #f5f5f5;
                padding: 20px;
                border-radius: 5px;
                border: 1px solid #ccc;
              }
              .header {
                font-size: 24px;
                margin-bottom: 10px;
              }
              .message {
                font-size: 16px;
                line-height: 1.5;
              }
            </style>
          </head>
          <body>
            <div class="email-container">
              <div class="header">New Contact Form Submission</div>
              <p style="font-size: 16px; line-height: 1.5; color: #666666;">Hello Admin,</p>
              <p style="font-size: 16px; line-height: 1.5; color: #666666;">A new contact form has been submitted:</p>
              <ul style="font-size: 16px; line-height: 1.5; color: #666666;">
                <li><strong>Name:</strong> ${name}</li>
                <li><strong>Subject:</strong> ${subject}</li>
                <li><strong>Message:</strong> ${message}</li>
              </ul>
              <p style="font-size: 16px; line-height: 1.5; color: #666666;">Please take appropriate action to respond to the inquiry.</p>
              <p style="font-size: 16px; line-height: 1.5; color: #666666;">Best regards,</p>
              <p class="message">Your Team</p>
            </div>
          </body>
        </html>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    const admininfo = await transporter.sendMail(adminMailOptions);

    console.log("Email sent:", info.response);
    console.log("Email sent to admin:", admininfo.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

module.exports = { sendContactEmail };
