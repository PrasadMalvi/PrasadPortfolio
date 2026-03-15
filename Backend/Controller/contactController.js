const Contact = require("../Models/ContactSchema");
const { Resend } = require("resend");

// Initialize resend dynamically to ensure .env is loaded
function getResend() {
  if (process.env.RESEND_API_KEY) {
    return new Resend(process.env.RESEND_API_KEY);
  }
  return null;
}

exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Create a new Contact document
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    console.log("✅ Contact saved to database:", { name, email });

    // Send email notification to you
    const resend = getResend();
    if (resend) {
      try {
        const emailResult = await resend.emails.send({
          from: "Contact Form <onboarding@resend.dev>",
          to: "prasadmalvi23@gmail.com",
          subject: `New Contact Form Submission from ${name}`,
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4; border-radius: 8px; }
                .header { background: linear-gradient(135deg, #542581, #9b34eb); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
                .header h2 { margin: 0; font-size: 24px; }
                .content { background: white; padding: 30px; border-radius: 0 0 8px 8px; }
                .field { margin-bottom: 20px; }
                .label { font-weight: bold; color: #542581; font-size: 14px; text-transform: uppercase; }
                .value { color: #333; margin-top: 5px; padding: 10px; background-color: #f9f9f9; border-left: 4px solid #9b34eb; }
                .message-box { background-color: #f0f0f0; padding: 15px; border-radius: 5px; margin-top: 10px; white-space: pre-wrap; }
                .footer { background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; color: #666; border-radius: 0 0 8px 8px; }
                .reply-button { display: inline-block; background-color: #542581; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; margin-top: 20px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2>📧 New Contact Form Submission</h2>
                </div>
                <div class="content">
                  <div class="field">
                    <div class="label">👤 Name</div>
                    <div class="value">${name}</div>
                  </div>
                  
                  <div class="field">
                    <div class="label">📧 Email</div>
                    <div class="value"><a href="mailto:${email}">${email}</a></div>
                  </div>
                  
                  <div class="field">
                    <div class="label">💬 Message</div>
                    <div class="message-box">${message}</div>
                  </div>
                  
                  <div style="text-align: center; margin-top: 30px;">
                    <a href="mailto:${email}" class="reply-button">Reply to ${name}</a>
                  </div>
                </div>
                <div class="footer">
                  <p>This email was sent from your portfolio contact form.</p>
                  <p>&copy; 2026 Prasad Malvi Portfolio. All rights reserved.</p>
                </div>
              </div>
            </body>
            </html>
          `,
        });
        console.log("✅ Email sent successfully:", emailResult);
      } catch (emailError) {
        console.error("❌ Email sending failed:", emailError.message);
        // Continue anyway - message still saved to database
      }
    } else {
      console.log("⚠️ RESEND_API_KEY not set - skipping email");
    }

    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ error: "Server Error" });
  }
};
