import Seo from '@/components/Seo';
import { SITE_NAME } from '@/lib/config';

export default function Terms() {
  return (
    <>
      <Seo
        title="Terms of Service"
        description="Review the booking terms and conditions for Ethiopia tours and travel services provided by Mule Ethiopia Tours and Travel."
        path="/terms"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Terms of Service', url: '/terms' },
        ]}
      />

      <div className="pt-32 pb-20 bg-sand-50 min-h-screen">
        <div className="container-x max-w-4xl">
          <header className="mb-12 border-b border-sand-200 pb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-clay-600">Booking Agreement</span>
            <h1 className="mt-3 font-serif text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Terms & Conditions
            </h1>
            <p className="mt-2 text-sm text-ink/60">
              Last updated: October 2026 · {SITE_NAME}
            </p>
          </header>

          <article className="prose prose-sand max-w-none space-y-8 text-ink/80 text-base leading-relaxed">
            <section>
              <h2 className="font-serif text-2xl font-semibold text-ink">1. Contract & Booking Confirmation</h2>
              <p className="mt-2">
                A booking contract comes into effect when {SITE_NAME} issues written confirmation of your agreed itinerary following initial deposit receipt. By booking with us, you agree to these Terms and Conditions on behalf of all participants in your party.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-ink">2. Payments & Deposits</h2>
              <p className="mt-2">
                A deposit (typically 20% to 30%, depending on domestic flight requirements and advance lodge bookings) is required to secure reservations. The balance is payable upon arrival in Addis Ababa or as specified in your custom itinerary invoice via bank transfer or major international payment channels.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-ink">3. Cancellations & Refunds</h2>
              <p className="mt-2">
                We understand that travel plans can encounter unexpected disruptions. Notice of cancellation must be submitted in writing.
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-1.5 text-sm">
                <li><strong>30+ days prior to start:</strong> Full refund of deposit minus non-refundable third-party fees (e.g. issued domestic flights).</li>
                <li><strong>15 to 29 days prior:</strong> 50% refund of deposit.</li>
                <li><strong>Under 14 days prior:</strong> Deposit is non-refundable; however, credit may be applied to future travel within 12 months.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-ink">4. Travel Insurance & Health Requirements</h2>
              <p className="mt-2">
                Comprehensive travel insurance—including emergency medical evacuation, trip cancellation, and adventurous activities (such as trekking over 3,000 meters in the Simien or Bale mountains)—is mandatory for all participants. Travelers are responsible for ensuring appropriate vaccinations and yellow fever certificates as required by Ethiopian border regulations.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-ink">5. Flexibility & Unforeseen Circumstances</h2>
              <p className="mt-2">
                Expeditions in remote regions such as the Afar Triangle and Omo Valley require adaptability. While every effort is made to adhere to published itineraries, {SITE_NAME} reserves the right to adjust routes, vehicles, or accommodations in response to weather conditions, road closures, or governmental safety directives to ensure guest security.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-ink">6. Responsible Tourism & Local Laws</h2>
              <p className="mt-2">
                All travelers are expected to respect local customs, religious observances, and tribal cultural protocols as advised by our guides. Compliance with Ethiopian laws and cultural heritage protection acts is required throughout the journey.
              </p>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}
