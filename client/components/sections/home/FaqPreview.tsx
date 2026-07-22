import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { AccordionItem } from "@/components/ui/Accordion";
import Reveal from "@/components/ui/Reveal";
import { faqs } from "@/lib/site";

export default function FaqPreview() {
  const preview = faqs.slice(0, 5);

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Got Questions?"
          title="Frequently Asked Questions"
          description="Quick answers about pricing, service area, and what to expect on the day of your appointment."
        />

        <div className="mt-12 flex flex-col gap-4">
          {preview.map((faq) => (
            <AccordionItem key={faq.question} question={faq.question}>
              {faq.answer}
            </AccordionItem>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <Button href="/faqs" variant="outlineDark">
            View All FAQs
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
