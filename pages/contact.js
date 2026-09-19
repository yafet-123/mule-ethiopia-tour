import Seo from '@/components/Seo';
import ContactHero from '@/components/heroes/ContactHero';
import Icon from '@/components/Icon';
import { Reveal } from '@/components/Reveal';
import { SITE } from '@/lib/config';
import { getAllTours } from '@/data/tours';

/**
 * Contact / Inquiry page with specialized ContactHero component.
 */
export default function Contact() {
  return (
    <>
      <Seo title="Contact" path="/contact" />
      <ContactHero />

      <section id="contact-form" className="py-16 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-5">
          {/* contact channels */}
          <Reveal className="lg:col-span-2">
            <h2 className="font-serif text-2xl font-semibold text-ink">Contact channels</h2>
            <ul className="mt-6 space-y-4">
              {[
                { icon: 'phone', label: 'Call us', value: SITE.phone, href: `tel:${SITE.phoneHref}` },
                { icon: 'whatsapp', label: 'WhatsApp (fastest)', value: 'Chat with a local guide', href: SITE.whatsapp },
                { icon: 'mail', label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
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
            <p className="mt-6 rounded-2xl bg-sand-200/70 p-4 text-sm text-ink/60">
              📍 Interactive map embed + working inquiry endpoint arrive in the
              next build step. This page documents the exact form fields we will wire up.
            </p>
          </Reveal>

          {/* inquiry form */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              className="rounded-3xl bg-white p-6 shadow-card-hover sm:p-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <h2 className="font-serif text-2xl font-semibold text-ink">
                Tell us about your dream trip
              </h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-[13px] font-semibold text-ink/70">Full name *</span>
                  <input required type="text" placeholder="Jane Traveller" className="field" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-[13px] font-semibold text-ink/70">Email *</span>
                  <input required type="email" placeholder="jane@example.com" className="field" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-[13px] font-semibold text-ink/70">Phone / WhatsApp</span>
                  <input type="tel" placeholder="+44 7…" className="field" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-[13px] font-semibold text-ink/70">Tour of interest</span>
                  <select className="field">
                    <option value="">Not sure yet</option>
                    {getAllTours().map((t) => (
                      <option key={t.id} value={t.id}>{t.title}</option>
                    ))}
                    <option value="custom">Fully custom itinerary</option>
                  </select>
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-[13px] font-semibold text-ink/70">Travel dates</span>
                  <input type="date" className="field" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-[13px] font-semibold text-ink/70">Group size</span>
                  <select className="field">
                    <option>2 travellers</option>
                    <option>3 to 4 travellers</option>
                    <option>5 to 8 travellers</option>
                    <option>9+ (group)</option>
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-[13px] font-semibold text-ink/70">Message</span>
                  <textarea rows={4} placeholder="Trekking, culture, volcanoes… what excites you most?" className="field resize-none" />
                </label>
              </div>
              <button type="submit" className="btn btn-primary mt-6 w-full !py-3.5 text-base sm:w-auto sm:px-10">
                Send inquiry <Icon name="arrow-up-right" size={16} />
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}