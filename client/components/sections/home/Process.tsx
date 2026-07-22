import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { processSteps } from "@/lib/site";

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-brand-50/60 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="Simple, Convenient, Done Right"
          description="No drop-offs, no waiting rooms — just book, and let our mobile crew handle the rest."
        />

        <RevealGroup className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div className="pointer-events-none absolute inset-x-0 top-8 hidden h-0.5 bg-gradient-to-r from-transparent via-brand-300 to-transparent lg:block" />
          {processSteps.map((step, i) => (
            <RevealItem key={step.title} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white font-display text-2xl font-extrabold text-brand-600 shadow-lg shadow-brand-500/10 ring-4 ring-brand-50">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-navy-950">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-700/70">
                {step.description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
