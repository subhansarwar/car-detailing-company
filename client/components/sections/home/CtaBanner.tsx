import { ArrowRight, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { business } from "@/lib/site";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 py-16 sm:py-20">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-amber-400/20 blur-3xl" />

      <Container className="relative">
        <Reveal className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
          <div>
            <h2 className="text-fluid-h2 font-display font-bold text-white">
              Ready for a Spotless Home & Vehicle?
            </h2>
            <p className="mt-3 max-w-xl text-white/80">
              Get a free, no-obligation quote today — most jobs booked within 48 hours.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" variant="secondary" size="lg" icon={<ArrowRight size={20} />}>
              Get a Free Quote
            </Button>
            <Button
              href={`tel:${business.phoneHref}`}
              variant="outline"
              size="lg"
              icon={<Phone size={18} />}
            >
              Call Now
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
