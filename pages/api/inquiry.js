import { SITE, SITE_URL } from '../../lib/config.js';

/**
 * POST /api/inquiry
 *
 * Sends tour inquiries directly to eshetiemulugeta4@gmail.com.
 * Uses FormSubmit AJAX forwarding by default (zero API key needed).
 * Can also use Formspree if FORMSPREE_FORM_ID is provided in environment variables.
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { name, email, phone, tour, dates, groupSize, message } = body || {};

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        ok: false,
        error: 'Name, email, and message are required fields.',
      });
    }

    const recipient = process.env.INQUIRY_RECIPIENT_EMAIL || SITE.inquiryRecipient || 'eshetiemulugeta4@gmail.com';
    const formspreeId = process.env.FORMSPREE_FORM_ID;

    // Build human-friendly inquiry data
    const payload = {
      _subject: `New Tour Inquiry: ${name} (${tour || 'Custom / General Itinerary'})`,
      _replyto: email,
      _template: 'table',
      _captcha: 'false',
      'Full Name': name,
      'Email': email,
      'Phone / WhatsApp': phone || 'Not provided',
      'Tour of Interest': tour || 'Not specified / Custom itinerary',
      'Travel Dates': dates || 'Flexible',
      'Group Size': groupSize || 'Not specified',
      'Inquiry Message': message,
      'Submitted At': new Date().toISOString(),
    };

    let providerRes;
    let providerData = {};

    if (formspreeId) {
      // Forward to Formspree if configured
      providerRes = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      providerData = await providerRes.json().catch(() => ({}));
    } else {
      // Forward to FormSubmit directly with recipient email
      const origin = req.headers.origin || req.headers.referer || SITE_URL;
      providerRes = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Referer': origin,
          'Origin': origin,
        },
        body: JSON.stringify(payload),
      });
      providerData = await providerRes.json().catch(() => ({}));
    }

    const isActivation =
      typeof providerData?.message === 'string' &&
      providerData.message.toLowerCase().includes('activation');

    // If FormSubmit is requesting one-time activation, treat as success for customer
    // while logging instruction for the site owner.
    if (isActivation) {
      console.warn(`[FormSubmit] One-time activation required: FormSubmit sent an activation email to ${recipient}. Please click 'Activate Form' in that email.`);
      return res.status(200).json({
        ok: true,
        activationPending: true,
        message: 'Inquiry received successfully!',
      });
    }

    if (!providerRes.ok || providerData?.success === 'false') {
      const errMsg = providerData?.message || providerData?.error || `Email delivery returned error (${providerRes.status})`;
      return res.status(502).json({
        ok: false,
        error: errMsg,
      });
    }

    return res.status(200).json({
      ok: true,
      message: 'Inquiry sent successfully to our travel team!',
    });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      error: err.message || 'Internal server error while processing inquiry.',
    });
  }
}