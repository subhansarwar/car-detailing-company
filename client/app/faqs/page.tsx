import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import FaqsClient from "@/components/sections/faqs/FaqsClient";
import CtaBanner from "@/components/sections/home/CtaBanner";
import { faqs, business } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQs",
  description: `Answers to common questions about pricing, scheduling, and service area for ${business.name}.`,
};

export default function FaqsPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Frequently Asked Questions"
        description="Everything you need to know before booking your pressure washing or car detailing appointment."
      />

      <section className="py-20 sm:py-28">
        <Container className="max-w-3xl">
          <FaqsClient faqs={faqs} />
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
