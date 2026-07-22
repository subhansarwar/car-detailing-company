import { CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const commitments = [
  "Free, no-obligation quotes on every job",
  "Licensed & insured for total peace of mind",
  "Eco-friendly, plant and pet-safe products",
  "Satisfaction guarantee — we make it right",
  "Flexible scheduling around your day",
  "Transparent, upfront pricing every time",
];

export default function Commitment() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="right">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              Our Promise
            </span>
            <h2 className="text-fluid-h2 mt-4 font-display font-bold text-navy-950">
              The Satisfaction Guarantee
            </h2>
            <p className="mt-4 text-navy-700/80">
              If any part of the job doesn&apos;t meet your expectations, tell
              us before we leave — we&apos;ll make it right on the spot. That&apos;s
              a promise on every property wash and every detail.
            </p>
            <div className="mt-8">
              <Button href="/contact">Book Your Service</Button>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {commitments.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-navy-900/8 bg-brand-50/50 p-4"
                >
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-brand-600" />
                  <span className="text-sm font-medium text-navy-800">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
