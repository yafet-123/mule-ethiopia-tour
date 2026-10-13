import Seo from '@/components/Seo';
import { SITE_NAME } from '@/lib/config';

export default function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="Read the privacy policy for Mule Ethiopia Tours and Travel. Learn how your data is protected when booking your Ethiopia tours with us."
        path="/privacy-policy"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Privacy Policy', url: '/privacy-policy' },
        ]}
      />

      <div className="pt-32 pb-20 bg-sand-50 min-h-screen">
        <div className="container-x max-w-4xl">
          <header className="mb-12 border-b border-sand-200 pb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-clay-600">Legal & Transparency</span>
            <h1 className="mt-3 font-serif text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-ink/60">
              Last updated: October 2026 · {SITE_NAME}
            </p>
          </header>

          <article className="prose prose-sand max-w-none space-y-8 text-ink/80 text-base leading-relaxed">
            <section>
              <h2 className="font-serif text-2xl font-semibold text-ink">1. Introduction</h2>
              <p className="mt-2">
                At {SITE_NAME}, we value your privacy and are committed to safeguarding the personal information you share with us when planning, booking, and undertaking your travel experiences across Ethiopia. This Privacy Policy details the types of information we collect, how it is used, and the measures we take to protect it.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-ink">2. Information We Collect</h2>
              <p className="mt-2">
                To organize bespoke expeditions, national park permits, domestic flight tickets, and safari logistics, we may collect the following personal information:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-1.5 text-sm">
                <li><strong>Contact details:</strong> Full name, email address, telephone/WhatsApp number, and country of residence.</li>
                <li><strong>Travel details:</strong> Desired travel dates, group size, specific route interests, dietary requirements, and fitness levels.</li>
                <li><strong>Identification data (when booking):</strong> Passport numbers, nationality, and birth dates (required by the Ethiopian Civil Aviation Authority and regional tourism administrations for permits and domestic flights).</li>
                <li><strong>Technical data:</strong> Non-identifying analytics such as browser type, operating system, and general geographic location collected via web server logs.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-ink">3. How We Use Your Information</h2>
              <p className="mt-2">
                Your data is exclusively utilized to deliver genuine travel services:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-1.5 text-sm">
                <li>Responding promptly to tour inquiries and custom itinerary requests.</li>
                <li>Arranging hotels, community guesthouses, park scouts, and local guide logistics.</li>
                <li>Processing domestic flight reservations with Ethiopian Airlines.</li>
                <li>Communicating critical safety and weather updates regarding remote regions like the Danakil Depression and Simien Mountains.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-ink">4. Data Sharing & Third Parties</h2>
              <p className="mt-2">
                We never sell, rent, or trade your personal information. We share relevant data solely with licensed service providers necessary for your journey:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-1.5 text-sm">
                <li>Local licensed Ethiopian guides and regional drivers assigned to your specific itinerary.</li>
                <li>Afar and Tigray Regional Tourism Boards for security permits and scout assignments.</li>
                <li>Registered domestic lodging providers and transport operators.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-ink">5. Data Retention & Security</h2>
              <p className="mt-2">
                We implement industry-standard administrative and physical safeguards to prevent unauthorized access or disclosure of your information. Contact submissions and identification records are kept only as long as necessary to complete your travel arrangements and fulfill local legal and tax recordkeeping obligations.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-ink">6. Your Rights & Inquiries</h2>
              <p className="mt-2">
                You have the right to request a copy of the personal information we hold about you, request corrections, or request deletion of your information once travel has concluded. For inquiries regarding this policy, please reach out to our team at <a href="mailto:eshetiemulugeta4@gmail.com" className="text-clay-600 font-semibold underline">eshetiemulugeta4@gmail.com</a>.
              </p>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}
