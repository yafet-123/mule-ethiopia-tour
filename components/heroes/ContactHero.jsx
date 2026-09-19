import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '@/components/Icon';
import { SITE } from '@/lib/config';

/**
 * ContactHero — Style 2: "Dark Emerald Luxury Concierge & Instant WhatsApp Connect Command"
 * High trust dark mode hero with live Addis Ababa clock, quick contact action cards,
 * and instant WhatsApp trigger.
 */
export default function ContactHero() {
  const [addisTime, setAddisTime] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Addis Ababa is UTC+3
      const options = {
        timeZone: 'Africa/Addis_Ababa',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setAddisTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyPhone = () => {
    navigator.clipboard?.writeText(SITE.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative isolate overflow-hidden bg-forest-950 pt-28 pb-16 lg:pt-36 lg:pb-24 text-sand-50">
      {/* Dark Ambient & Topo Graphics */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-forest-600/20 blur-[120px]" />
        <div className="absolute bottom-0 left-10 h-[500px] w-[500px] rounded-full bg-gold-500/10 blur-[100px]" />

        {/* Subtle Topo Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, #EFCB82 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="container-x">
        {/* Top Live Status Ticker Pill */}
        <motion.div
          className="inline-flex flex-wrap items-center gap-3 rounded-full bg-forest-900/90 px-4 py-2 ring-1 ring-gold-400/30 backdrop-blur-md"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-sand-100">
            Local Team Online Now
          </span>
          <span className="hidden sm:inline text-gold-400/60">•</span>
          <span className="text-xs font-mono text-gold-300">
            Addis Ababa: {addisTime || 'GMT+3'}
          </span>
        </motion.div>

        <div className="mt-8 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">

          {/* Left Column: Direct Concierge Headline */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-serif text-[#000] text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Talk directly to a{' '}
              <em className="text-gold-400 not-italic font-normal italic">real local guide</em>,
              not an agent.
            </h1>

            <p className="mt-6 max-w-2xl text-[#000] leading-relaxed sm:text-lg">
              Have questions about altitude, Danakil weather, visas, or custom family routes? Speak directly with Mule and our Addis-based team. We usually reply within 30 minutes.
            </p>

            {/* High Trust Guarantee Badges */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { icon: 'zap', title: '< 30 Min Response', sub: 'Fastest via WhatsApp' },
                { icon: 'shield-check', title: 'Licensed & Insured', sub: 'Ethiopian Tourism Ministry' },
                { icon: 'sparkles', title: '100% Tailor Made', sub: 'Free custom itinerary' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 rounded-2xl bg-forest-900/90 p-3.5 ring-1 ring-white/10 backdrop-blur-sm">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gold-400/20 text-gold-300">
                    <Icon name={item.icon} size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-sand-50">{item.title}</p>
                    <p className="text-[10px] text-sand-200/70">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Action Bar */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl bg-emerald-500 px-7 py-4 font-semibold text-slate-950 shadow-lg shadow-emerald-900/30 transition hover:bg-emerald-400 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Icon name="whatsapp" size={20} />
                <span>Instant WhatsApp Chat</span>
              </a>

              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 rounded-2xl bg-forest-800 px-6 py-4 font-semibold text-sand-100 ring-1 ring-white/15 transition hover:bg-forest-700 hover:text-white"
              >
                <span>Send Inquiry Form</span>
                <Icon name="arrow-down" size={16} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Quick Channels Cards */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4">

              {/* WhatsApp Card */}
              <motion.a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-3xl bg-gradient-to-r from-emerald-900/60 to-forest-900/80 p-5 ring-1 ring-emerald-500/30 transition hover:ring-emerald-400/60 hover:-translate-y-1 shadow-lg"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-500 text-slate-950 shadow-md">
                    <Icon name="whatsapp" size={24} />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                      Fastest Reply Channel
                    </span>
                    <span className="block text-lg font-bold text-sand-50">WhatsApp Direct</span>
                    <span className="block text-xs text-sand-200/70">Tap to start chat with local guide</span>
                  </div>
                </div>
                <Icon name="arrow-up-right" size={20} className="text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </motion.a>

              {/* Phone Direct & Copy Card */}
              <div className="flex items-center justify-between rounded-3xl bg-forest-900/80 p-5 ring-1 ring-white/10 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gold-400/20 text-gold-300">
                    <Icon name="phone" size={22} />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-gold-400">
                      Call Us Directly
                    </span>
                    <a href={`tel:${SITE.phoneHref}`} className="block text-lg font-mono font-bold text-sand-50 hover:text-gold-300">
                      {SITE.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="rounded-xl bg-forest-800 px-3 py-2 text-xs font-semibold text-sand-200 hover:bg-forest-700 hover:text-white transition"
                >
                  {copied ? 'Copied! ✓' : 'Copy'}
                </button>
              </div>

              {/* Email & Office Info */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 rounded-2xl bg-forest-900/90 p-4 ring-1 ring-white/10 hover:bg-forest-800 transition"
                >
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-clay-500/20 text-clay-400">
                    <Icon name="mail" size={18} />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-sand-200/60">Email</span>
                    <span className="block truncate text-xs font-medium text-sand-100">{SITE.email}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 rounded-2xl bg-forest-900/90 p-4 ring-1 ring-white/10">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gold-400/20 text-gold-300">
                    <Icon name="map-pin" size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-sand-200/60">HQ Office</span>
                    <span className="block text-xs font-medium text-sand-100">Addis Ababa, ET</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
