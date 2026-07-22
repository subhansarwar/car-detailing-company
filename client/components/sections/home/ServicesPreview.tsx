import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceIcon from "@/components/ui/ServiceIcon";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { services } from "@/lib/site";

export default function ServicesPreview() {
  return (
    <section className="relative bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What We Offer"
          title="Two Specialties. One Mobile Crew."
          description="From soft-washing your home's exterior to detailing every inch of your vehicle — we bring professional results directly to your driveway."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <RevealItem key={service.slug}>
              <Link
                href={`/services#${service.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-navy-900/8 bg-white p-6 shadow-sm shadow-navy-950/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300/60 hover:shadow-xl hover:shadow-brand-500/10"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                    <ServiceIcon icon={service.icon} size={24} />
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-navy-900/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-500"
                  />
                </div>
                <span className="mt-4 text-[0.7rem] font-bold uppercase tracking-widest text-amber-600">
                  {service.category}
                </span>
                <h3 className="mt-1.5 font-display text-lg font-bold text-navy-950">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-700/70">
                  {service.short}
                </p>
                <p className="mt-4 text-sm font-semibold text-brand-600">
                  Starting at {service.startingAt}
                </p>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-12 flex justify-center">
          <Button href="/services" variant="outlineDark">
            View All Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
