import Link from 'next/link';
import FAQAccordion from '@/components/FAQAccordion';
import Icon from '@/components/Icon';
import { Reveal } from '@/components/Reveal';
import { FAQS } from '@/data/faqs';

/**
 * Homepage FAQ section (accordion + side panel).
 */
export default function FAQSection() {
  return (
    <section className="bg-sand-200/50 py-10 sm:py-16" aria-labelledby="faq-heading">
      <div className="container-x grid gap-12 lg:grid-cols-5">
        {/* left intro */}
        <div className="lg:col-span-2">
          <Reveal>
            <p className="eyebrow">Good to know</p>
            <h2
              id="faq-heading"
              className="mt-4 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              Questions, <em className="text-clay-600">answered honestly</em>
            </h2>
            <p className="mt-4 text-ink/60">
              Everything travellers usually ask before booking the trip of their life.
            </p>

            <div className="mt-8 rounded-3xl bg-forest-800 p-6 text-sand-50 shadow-card-hover">
              <Icon name="headset" size={22} className="text-gold-400" />
              <h3 className="mt-3 font-serif text-lg font-semibold">Still curious?</h3>
              <p className="mt-1.5 text-sm text-sand-100/70">
                Ask us anything, real guides reply, usually within the hour.
              </p>
              <Link href="/contact" className="btn btn-primary mt-5 !px-5 !py-2.5 text-sm">
                Ask a question
                <Icon name="arrow-up-right" size={14} />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* accordion */}
        <Reveal delay={0.1} className="lg:col-span-3">
          <FAQAccordion items={FAQS} defaultOpen={0} />
        </Reveal>
      </div>
    </section>
  );
}