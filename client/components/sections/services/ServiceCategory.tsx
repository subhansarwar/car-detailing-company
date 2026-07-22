import { CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import ServiceIcon from "@/components/ui/ServiceIcon";
import Button from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import Reveal from "@/components/ui/Reveal";
import type { Service } from "@/lib/site";

export default function ServiceCategory({
  id,
  title,
  description,
  items,
}: {
  id: string;
  title: string;
  description: string;
  items: Service[];
}) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="text-fluid-h2 font-display font-bold text-navy-950">
            {title}
          </h2>
          <p className="text-fluid-body mt-3 text-navy-700/75">{description}</p>
        </Reveal>

        <RevealGroup className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {items.map((service) => (
            <RevealItem
              key={service.slug}
              id={service.slug}
              className="scroll-mt-24 flex flex-col rounded-2xl border border-navy-900/8 bg-white p-7 shadow-sm shadow-navy-950/5 transition-shadow hover:shadow-lg hover:shadow-brand-500/10 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <ServiceIcon icon={service.icon} size={28} />
                </span>
                <span className="rounded-full bg-amber-50 px-3 py-1.5 text-sm font-bold text-amber-700">
                  From {service.startingAt}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-navy-950">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-700/75">
                {service.description}
              </p>
              <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-navy-800">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button href="/contact" size="md">
                  Request This Service
                </Button>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
