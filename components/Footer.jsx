import { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import Icon from '@/components/Icon';
import { NAV_LINKS, SITE, STATS } from '@/lib/config';
import { getAllTours } from '@/data/tours';

/**
 * <Footer />, site footer with contact info, WhatsApp click-to-chat,
 * social links, quick links, popular tours and a newsletter signup.
 */
export default function Footer() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const socials = [
    { name: 'facebook', label: 'Facebook', href: SITE.social.facebook },
    { name: 'instagram', label: 'Instagram', href: SITE.social.instagram },
    { name: 'tiktok', label: 'TikTok', href: SITE.social.tiktok },
    { name: 'youtube', label: 'YouTube', href: SITE.social.youtube },
  ];

  const subscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    // TODO: wire to your newsletter provider (Mailchimp / ConvertKit / Resend).
    setDone(true);
    setEmail('');
  };

  return (
    <footer className="relative overflow-hidden bg-forest-900 text-sand-100">
      {/* decorative ridge */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-10">
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="h-full w-full text-forest-900">
          <path d="M0 40 V18 Q180 2 360 16 T720 12 T1080 18 T1440 10 V40 Z" fill="#F7F1E5" />
        </svg>
      </div>

      <div className="container-x relative pt-20 pb-10">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 lg:gap-12">
          {/* Brand + socials */}
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-sand-100/70">
              A licensed, locally-owned Ethiopian tour operator since {SITE.established}.
              We lead trekkers, photographers and families through the oldest
              country in Africa, with guides who call it home.
            </p>

            {/* Trust stats */}
            <dl className="mt-6 grid grid-cols-2 gap-3">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
                  <dd className="font-serif text-xl font-semibold text-gold-400">{s.value}</dd>
                  <dt className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-sand-100/55">
                    {s.label}
                  </dt>
                </div>
              ))}
            </dl>

            <div className="mt-7 flex items-center gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-sand-100/75 ring-1 ring-white/15 transition hover:-translate-y-0.5 hover:bg-clay-500 hover:text-white"
                >
                  <Icon name={s.name} size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <nav className="sm:col-span-1 lg:col-span-2" aria-label="Footer quick links">
            <h3 className="font-serif text-lg font-semibold text-sand-50">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {[{ label: 'Home', href: '/' }, ...NAV_LINKS].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sand-100/70 transition hover:text-gold-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Popular tours */}
          <nav className="sm:col-span-1 lg:col-span-3" aria-label="Popular tours">
            <h3 className="font-serif text-lg font-semibold text-sand-50">Popular Tours</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {getAllTours()
                .slice(0, 5)
                .map((t) => (
                  <li key={t.id}>
                    <Link
                      href={`/tours/${t.id}`}
                    className="group flex items-start justify-between gap-2 text-sand-100/70 transition hover:text-gold-300"
                  >
                    <span>{t.title}</span>
                    <Icon
                      name="arrow-up-right"
                      size={15}
                      className="mt-0.5 shrink-0 text-sand-100/30 transition group-hover:text-gold-300"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact + newsletter */}
          <div className="sm:col-span-2 md:col-span-1 lg:col-span-3">
            <h3 className="font-serif text-lg font-semibold text-sand-50">Talk to a local</h3>
            <ul className="mt-5 space-y-3 text-sm text-sand-100/75">
              <li className="flex items-start gap-3">
                <Icon name="phone" size={16} className="mt-0.5 text-gold-400" />
                <a href={`tel:${SITE.phoneHref}`} className="transition hover:text-gold-300">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="mail" size={16} className="mt-0.5 text-gold-400" />
                <a href={`mailto:${SITE.email}`} className="transition hover:text-gold-300">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="map-pin" size={16} className="mt-0.5 shrink-0 text-gold-400" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="clock" size={16} className="mt-0.5 text-gold-400" />
                <span>{SITE.hours}</span>
              </li>
            </ul>

            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_-10px_rgba(37,211,102,0.6)] transition hover:-translate-y-0.5"
            >
              <Icon name="whatsapp" size={17} />
              WhatsApp chat, we reply fast
            </a>

            {/* Newsletter */}
            <form onSubmit={subscribe} className="mt-6">
              <label htmlFor="footer-newsletter" className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-sand-100/55">
                Travel tips, new routes & deals
              </label>
              {done ? (
                <p className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-3 text-sm text-gold-300 ring-1 ring-white/10">
                  <Icon name="check" size={16} /> You&apos;re on the list, see you in the highlands!
                </p>
              ) : (
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    id="footer-newsletter"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-sand-50 placeholder:text-sand-100/40 outline-none transition focus:border-gold-400/60 focus:ring-2 focus:ring-gold-400/20"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-clay-500 px-5 text-sm font-semibold text-white transition hover:bg-clay-600 active:scale-95"
                  >
                    <span>Subscribe</span>
                    <Icon name="arrow-up-right" size={16} />
                  </button>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-sand-100/45 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Licensed by the Ethiopian Ministry of Tourism · Reg. 04123.
          </p>
          <div className="flex items-center gap-5">
            <a href="/sitemap.xml" className="transition hover:text-gold-300">Sitemap</a>
            <a href="#" className="transition hover:text-gold-300">Privacy</a>
            <a href="#" className="transition hover:text-gold-300">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}