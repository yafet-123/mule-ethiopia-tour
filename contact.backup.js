import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Seo from '@/components/Seo';
import ContactHero from '@/components/heroes/ContactHero';
import Icon from '@/components/Icon';
import { Reveal } from '@/components/Reveal';
import { SITE } from '@/lib/config';
import { getAllTours } from '@/data/tours';

/**
 * Contact / Inquiry page with specialized ContactHero and live inquiry submission.
 */
export default function Contact() {
  const router = useRouter();
  const tours = getAllTours();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tour: '',
    dates: '',
    groupSize: '2 travellers',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  // Sync selected tour from query parameter (?tour=xyz)
  useEffect(() => {
    if (router.isReady && router.query.tour) {
      const tourQuery = String(router.query.tour);
      setFormData((prev) => ({
        ...prev,
        tour: tourQuery,
      }));
    }
  }, [router.isReady, router.query.tour]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || data.ok === false) {
        // Fallback: Attempt direct FormSubmit request from the browser
        const directRecipient = SITE.inquiryRecipient || SITE.email || 'eshetiemulugeta4@gmail.com';
        const directRes = await fetch(`https://formsubmit.co/ajax/${directRecipient}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            _subject: `New Tour Inquiry: ${formData.name}`,
            _replyto: formData.email,
            _template: 'table',
            'Full Name': formData.name,
            'Email': formData.email,
            'Phone / WhatsApp': formData.phone || 'Not provided',
            'Tour of Interest': formData.tour || 'Custom / General',
            'Travel Dates': formData.dates || 'Flexible',
            'Group Size': formData.groupSize,
            'Message': formData.message,
          }),
        }).catch(() => null);

        const directData = directRes ? await directRes.json().catch(() => ({})) : null;

        if (directRes && (directRes.ok || directData?.message?.toLowerCase().includes('activation'))) {
          setStatus('success');
          return;
        }

        throw new Error(data.error || directData?.message || 'Failed to send inquiry. Please try again or message us on WhatsApp.');
      }

      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong while submitting. Please try again.');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setErrorMessage('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      tour: '',
      dates: '',
      groupSize: '2 travellers',
      message: '',
    });
  };

  return (
    <>
      <Seo title="Contact & Inquiries" path="/contact" />
      <ContactHero />

      <section id="contact-form" className="scroll-mt-20 py-16 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-5">
          {/* contact channels */}
          <Reveal className="lg:col-span-2">
            <h2 className="font-serif text-2xl font-semibold text-ink">Contact channels</h2>
            <p className="mt-2 text-sm text-ink/65">
              Reach out directly to our team in Addis Ababa or use the inquiry form.
            </p>

            <ul className="mt-6 space-y-4">
              {[
                { icon: 'phone', label: 'Call us', value: SITE.phone, href: `tel:${SITE.phoneHref}` },
                { icon: 'whatsapp', label: 'WhatsApp (fastest)', value: 'Chat with a local guide', href: SITE.whatsapp },
                { icon: 'mail', label: 'Direct Email', value: SITE.email, href: `mailto:${SITE.email}` },
                { icon: 'map-pin', label: 'Office', value: SITE.address },
              ].map((c) => (
                <li key={c.label}>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group flex items-start gap-4 rounded-2xl bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-clay-500/10 text-clay-600 ring-1 ring-clay-500/20">
                        <Icon name={c.icon} size={19} />
                      </span>
                      <span>
                        <span className="block text-[11px] font-bold uppercase tracking-wider text-ink/45">{c.label}</span>
                        <span className="block font-medium text-ink group-hover:text-clay-600">{c.value}</span>
                      </span>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-card">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-clay-500/10 text-clay-600 ring-1 ring-clay-500/20">
                        <Icon name={c.icon} size={19} />
                      </span>
                      <span>
                        <span className="block text-[11px] font-bold uppercase tracking-wider text-ink/45">{c.label}</span>
                        <span className="block font-medium text-ink">{c.value}</span>
                      </span>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-clay-500/15 bg-sand-200/60 p-5 text-sm text-ink/75">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-clay-500/15 text-clay-600">
                  <Icon name="check" size={14} />
                </span>
                <div>
                  <p className="font-semibold text-ink">Fast local responses</p>
                  <p className="mt-1 text-xs leading-relaxed text-ink/65">
                    All inquiries go directly to our lead coordinator at{' '}
                    <span className="font-mono font-medium text-clay-700">{SITE.email}</span>.
                    We craft custom itineraries within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* inquiry form */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="rounded-3xl bg-white p-6 shadow-card-hover sm:p-9 ring-1 ring-sand-300/40">
              {status === 'success' ? (
                <div className="py-8 text-center animate-fade-in">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600 ring-8 ring-emerald-50">
                    <Icon name="check" size={32} />
                  </div>

                  <h3 className="mt-5 font-serif text-2xl font-bold text-ink sm:text-3xl">
                    Inquiry Received!
                  </h3>

                  <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink/70">
                    Thank you! Your inquiry has been sent to our travel team.
                    Our local Ethiopian guides will review your details and get back to you within 24 hours.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={SITE.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn bg-emerald-600 text-white hover:bg-emerald-700 px-6 py-3 text-sm font-semibold inline-flex items-center gap-2"
                    >
                      <Icon name="whatsapp" size={18} />
                      <span>Chat on WhatsApp now</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="btn btn-secondary px-6 py-3 text-sm"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate={false}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-sand-200 pb-5">
                    <div>
                      <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
                        Plan Your Journey
                      </h2>
                      <p className="mt-1 text-sm text-ink/60">
                        Tell us your travel dreams and we&apos;ll craft the perfect Ethiopian adventure.
                      </p>
                    </div>
                  </div>

                  {status === 'error' && (
                    <div className="mt-5 rounded-2xl bg-rose-50 p-4 text-sm text-rose-800 ring-1 ring-rose-200">
                      <p className="font-semibold">Unable to submit inquiry</p>
                      <p className="mt-1 text-xs">{errorMessage}</p>
                      <div className="mt-3 flex gap-3 text-xs">
                        <a href={`mailto:${SITE.email}`} className="font-medium underline hover:text-rose-950">
                          Email directly ({SITE.email})
                        </a>
                        <span>·</span>
                        <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="font-medium underline hover:text-rose-950">
                          Message via WhatsApp
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block text-[13px] font-semibold text-ink/75">
                        Full name <span className="text-clay-600">*</span>
                      </span>
                      <input
                        id="inquiry-name"
                        name="name"
                        required
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Sarah Jenkins"
                        className="field w-full"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-1.5 block text-[13px] font-semibold text-ink/75">
                        Email address <span className="text-clay-600">*</span>
                      </span>
                      <input
                        id="inquiry-email"
                        name="email"
                        required
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="sarah@example.com"
                        className="field w-full"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-1.5 block text-[13px] font-semibold text-ink/75">
                        Phone / WhatsApp
                      </span>
                      <input
                        id="inquiry-phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 555 123 4567"
                        className="field w-full"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-1.5 block text-[13px] font-semibold text-ink/75">
                        Tour of interest
                      </span>
                      <select
                        id="inquiry-tour"
                        name="tour"
                        value={formData.tour}
                        onChange={handleChange}
                        className="field w-full"
                      >
                        <option value="">Not sure yet / Exploring options</option>
                        {tours.map((t) => (
                          <option key={t.id} value={t.id}>
                            {t.title} ({t.duration})
                          </option>
                        ))}
                        <option value="custom">Tailor-made / Custom Itinerary</option>
                      </select>
                    </label>

                    <label className="block">
                      <span className="mb-1.5 block text-[13px] font-semibold text-ink/75">
                        Estimated travel dates
                      </span>
                      <input
                        id="inquiry-dates"
                        name="dates"
                        type="date"
                        value={formData.dates}
                        onChange={handleChange}
                        className="field w-full"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-1.5 block text-[13px] font-semibold text-ink/75">
                        Group size
                      </span>
                      <select
                        id="inquiry-group-size"
                        name="groupSize"
                        value={formData.groupSize}
                        onChange={handleChange}
                        className="field w-full"
                      >
                        <option value="Solo traveller">Solo traveller (1 person)</option>
                        <option value="2 travellers">2 travellers (Couple / Duo)</option>
                        <option value="3 to 4 travellers">3 to 4 travellers (Small group)</option>
                        <option value="5 to 8 travellers">5 to 8 travellers (Medium group)</option>
                        <option value="9+ travellers">9+ travellers (Large group / Club)</option>
                      </select>
                    </label>

                    <label className="block sm:col-span-2">
                      <span className="mb-1.5 block text-[13px] font-semibold text-ink/75">
                        Your travel desires or questions <span className="text-clay-600">*</span>
                      </span>
                      <textarea
                        id="inquiry-message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about the destinations, activities (hiking, festivals, birding, tribal culture), accommodation preferences, or questions you have..."
                        className="field w-full resize-none"
                      />
                    </label>
                  </div>

                  <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn btn-primary w-full !py-3.5 text-base sm:w-auto sm:px-10 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>
                          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          <span>Sending inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send inquiry</span>
                          <Icon name="arrow-up-right" size={16} />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-ink/50">
                      🔒 Your details are never shared. Delivered securely to{' '}
                      <span className="font-medium text-ink/70">{SITE.email}</span>.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}