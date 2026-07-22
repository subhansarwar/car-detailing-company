import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactInfo from "@/components/sections/contact/ContactInfo";
import { business } from "@/lib/site";


export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get a free quote from ${business.name}. Serving ${business.city}, ${business.state} and surrounding areas.`,
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(business.address);

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Get Your Free Quote Started"
        description="Tell us a bit about your property or vehicle and we'll follow up with pricing and available appointment times."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-12">
            <ContactInfo />

            <Reveal direction="left">
              <div className="rounded-3xl border border-navy-900/8 bg-white p-6 shadow-sm shadow-navy-950/5 sm:p-8">
                <h2 className="font-display text-2xl font-bold text-navy-950">
                  Request a Free Quote
                </h2>
                <p className="mt-2 text-sm text-navy-700/75">
                  Fill out the form below and we&apos;ll get back to you shortly —
                  or call/text us directly for a faster response.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="mt-12 overflow-hidden rounded-3xl border border-navy-900/8 shadow-sm shadow-navy-950/5">
            <iframe
              title="Service area map"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="h-80 w-full grayscale-[15%] sm:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
