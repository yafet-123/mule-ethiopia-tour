import { useState } from "react";
import Seo from "@/components/Seo";
import ContactHero from "@/components/heroes/ContactHero";
import Icon from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/config";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    setStatus("sending");
    setError("");
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError(json.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  return (
    <>
      <Seo title="Contact Us" path="/contact" />
      <ContactHero />

      <section id="contact-form" className="scroll-mt-20 py-16 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-5">
          {/* contact channels */}
          <Reveal className="lg:col-span-2">
            <h2 className="font-serif text-2xl font-semibold text-ink">Contact channels</h2>
            <p className="mt-2 text-sm text-ink/65">
              Reach out directly to our team in Addis Ababa or use the contact form below.
            </p>

            <ul className="mt-6 space-y-4">
              {[
                { icon: "phone", label: "Call us (Ethiopia)", value: SITE.phone, href: `tel:${SITE.phoneHref}` },
                { icon: "phone", label: "Call us (UK)", value: SITE.phoneUk, href: `tel:${SITE.phoneUkHref}` },
                { icon: "whatsapp", label: "WhatsApp (fastest)", value: "Chat with a local guide", href: SITE.whatsapp },
                { icon: "mail", label: "Direct Email", value: SITE.email, href: `mailto:${SITE.email}` },
                { icon: "map-pin", label: "Office", value: SITE.address },
              ].map((c) => (
                <li key={c.label}>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
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
          </Reveal>

          {/* contact form */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="rounded-3xl bg-white p-6 shadow-card-hover sm:p-9 ring-1 ring-sand-300/40">
              <div className="border-b border-sand-200 pb-5">
                <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
                  Get in Touch
                </h2>
                <p className="mt-1 text-sm text-ink/60">
                  Have a question or planning an Ethiopian journey? Send us a message and we&apos;ll get back to you shortly.
                </p>
              </div>

              {status === "success" && (
                <div className="mt-6 rounded-2xl bg-emerald-50 p-6 text-center ring-1 ring-emerald-200">
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                    <Icon name="check" size={24} />
                  </div>
                  <p className="mt-3 font-semibold text-emerald-900">Message sent. Thank you!</p>
                  <p className="mt-1 text-xs text-emerald-700">We have received your message and will reply via email shortly.</p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-4 text-xs font-semibold text-emerald-800 underline hover:text-emerald-950"
                  >
                    Send another message
                  </button>
                </div>
              )}

              {status === "error" && (
                <div className="mt-6 rounded-2xl bg-rose-50 p-4 text-sm text-rose-800 ring-1 ring-rose-200">
                  <p className="font-semibold">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-[13px] font-semibold text-ink/75">
                    Name <span className="text-clay-600">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    placeholder="Name"
                    maxLength={100}
                    required
                    className="field w-full"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-[13px] font-semibold text-ink/75">
                    Email <span className="text-clay-600">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    maxLength={200}
                    required
                    className="field w-full"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-[13px] font-semibold text-ink/75">
                    Message <span className="text-clay-600">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Message"
                    maxLength={2000}
                    required
                    rows={5}
                    className="field w-full resize-none"
                  />
                </div>

                {/* Honeypot field - hidden from real users */}
                <input
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ position: "absolute", left: "-9999px" }}
                  aria-hidden="true"
                />

                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between pt-2">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn btn-primary w-full !py-3.5 text-base sm:w-auto sm:px-10 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Sending..." : "Send"}
                  </button>

                  <p className="text-xs text-ink/50">
                    🔒 Protected with rate limiting &amp; anti-spam validation.
                  </p>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}