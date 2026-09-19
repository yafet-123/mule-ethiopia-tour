/**
 * POST /api/inquiry
 *
 * Placeholder inquiry endpoint for the Contact form.
 *
 * WIRING: choose a provider and return the code below:
 *   - Resend (https://resend.com)         → `fetch('https://api.resend.com/emails', …)`
 *   - Formspree (https://formspree.io)    → `fetch('https://formspree.io/f/YOUR_ID', …)`
 *
 * Add keys to a local .env.local (never commit them).
 */
export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { name, email, phone, tour, dates, groupSize, message } = body || {};

    // Basic validation so the contract is ready for the provider.
    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: 'name, email and message are required' });
    }

    // TODO(provider): forward `body` to your email/form service here.

    return res.status(200).json({
      ok: true,
      received: { name, email, phone, tour, dates, groupSize, message },
      note: 'Inquiry received, provider wiring (Resend/Formspree) pending.',
    });
  } catch (err) {
    return res.status(500).json({ ok: false, error: err.message });
  }
}