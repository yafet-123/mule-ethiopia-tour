import nodemailer from "nodemailer";

const hits = new Map();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_HITS;
}

const clean = (str) => String(str).replace(/[\r\n]+/g, " ").trim();
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function generateEmailHtml({ name, email, message }) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const formattedMessage = escapeHtml(message).replace(/\n/g, "<br />");
  const receivedAt = new Date().toLocaleString("en-US", {
    timeZone: "Africa/Addis_Ababa",
    dateStyle: "full",
    timeStyle: "short",
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Website Message</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4efe6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #232220;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4efe6; padding: 40px 15px;">
    <tr>
      <td align="center">
        <!-- Main Container -->
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.08); border: 1px solid #e7ded0;" cellspacing="0" cellpadding="0">
          
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #0e2417 0%, #1a3d28 100%); padding: 36px 36px 30px; text-align: left; border-bottom: 3px solid #d4af37;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <span style="display: inline-block; background-color: rgba(212, 175, 55, 0.18); color: #efcb82; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; padding: 5px 12px; rounded: 20px; border-radius: 20px; border: 1px solid rgba(212, 175, 55, 0.35); margin-bottom: 12px;">
                      Website Contact Form
                    </span>
                    <h1 style="margin: 8px 0 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: -0.3px; font-family: Georgia, serif;">
                      Mule Ethiopia Tours and Travel
                    </h1>
                    <p style="margin: 6px 0 0; color: #d1dcce; font-size: 13px;">
                      New traveler inquiry received · Addis Ababa (${receivedAt} EAT)
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 32px 36px 24px;">
              
              <!-- Sender Details Card -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #fbf9f5; border-radius: 14px; border: 1px solid #ede4d5; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 20px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="padding-bottom: 12px; border-bottom: 1px solid #eee4d4;">
                          <span style="font-size: 11px; font-weight: 700; color: #887d6e; text-transform: uppercase; letter-spacing: 1px;">From</span>
                          <div style="font-size: 17px; font-weight: 600; color: #1c1a17; margin-top: 3px;">
                            ${safeName}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top: 12px;">
                          <span style="font-size: 11px; font-weight: 700; color: #887d6e; text-transform: uppercase; letter-spacing: 1px;">Email Address</span>
                          <div style="font-size: 15px; margin-top: 3px;">
                            <a href="mailto:${safeEmail}" style="color: #b85d3b; text-decoration: none; font-weight: 600;">
                              ${safeEmail}
                            </a>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message Section -->
              <div style="margin-bottom: 12px;">
                <span style="font-size: 11px; font-weight: 700; color: #887d6e; text-transform: uppercase; letter-spacing: 1px;">
                  Message Content
                </span>
              </div>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 14px; border-left: 4px solid #b85d3b; border-top: 1px solid #ede4d5; border-right: 1px solid #ede4d5; border-bottom: 1px solid #ede4d5; margin-bottom: 28px;">
                <tr>
                  <td style="padding: 22px; font-size: 15px; line-height: 1.65; color: #2c2825; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                    ${formattedMessage}
                  </td>
                </tr>
              </table>

              <!-- Action Button -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 12px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${safeEmail}?subject=Re:%20Inquiry%20from%20${encodeURIComponent(safeName)}" style="display: inline-block; background-color: #1a3d28; color: #ffffff; font-size: 14px; font-weight: 600; text-decoration: none; padding: 13px 32px; border-radius: 12px; box-shadow: 0 4px 14px rgba(26, 61, 40, 0.25);">
                      Reply to ${safeName} &rarr;
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f7f3eb; padding: 22px 36px; border-top: 1px solid #e7ded0; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #7f7466; line-height: 1.5;">
                This message was sent from the contact form on <strong style="color: #4a4237;">www.muleethiopiatours.com</strong><br />
                Office: 4 Killo, in front of Birhana Selam, Kidus Plaza 3rd floor, Addis Ababa, Ethiopia
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const ip =
    (req.headers["x-forwarded-for"] || "").split(",")[0].trim() ||
    req.socket.remoteAddress ||
    "unknown";
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: "Too many requests. Try again later." });
  }

  const { name, email, message, website } = req.body || {};

  if (website) {
    return res.status(200).json({ ok: true });
  }

  if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
    return res.status(400).json({ error: "Invalid input" });
  }
  const safeName = clean(name);
  const safeEmail = clean(email);
  const safeMessage = message.trim();

  if (!safeName || !safeEmail || !safeMessage) {
    return res.status(400).json({ error: "All fields are required" });
  }
  if (safeName.length > 100 || safeEmail.length > 200 || safeMessage.length > 2000) {
    return res.status(400).json({ error: "Input too long" });
  }
  if (!emailRegex.test(safeEmail)) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const emailHtml = generateEmailHtml({
    name: safeName,
    email: safeEmail,
    message: safeMessage,
  });

  try {
    await transporter.sendMail({
      from: `"Mule Ethiopia Tours and Travel" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      replyTo: safeEmail,
      subject: `New Inquiry from ${safeName}`,
      text: `From: ${safeName} (${safeEmail})\n\nMessage:\n${safeMessage}`,
      html: emailHtml,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Mail error:", err.message);
    return res.status(500).json({ error: "Failed to send message" });
  }
}
