import { Car, Clock3, Leaf, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { business } from "@/lib/site";

const points = [
  {
    icon: Clock3,
    title: "We Come To You",
    description:
      "A fully-equipped mobile unit means no drop-offs and no waiting rooms — service happens right in your driveway.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description:
      "Biodegradable, plant-safe detergents that protect your landscaping, pets, and local waterways.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description:
      "Book with total confidence — your property and vehicle are protected on every visit.",
  },
  {
    icon: Car,
    title: "One Crew, Two Specialties",
    description:
      "From siding to steering wheels — bundle a property wash with a vehicle detail in a single appointment.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-28">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[80%] -translate-x-1/2 rounded-full bg-brand-600/15 blur-[120px]" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The Mobile Difference"
          description="Professional-grade results without the drop-off hassle — that's the promise behind every job."
          light
        />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map(({ icon: Icon, title, description }) => (
            <RevealItem
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:border-brand-400/40 hover:bg-white/[0.07]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                <Icon size={24} />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.2} className="mt-14 flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm text-white/60">
            <span className="font-semibold text-white">Serving:</span>
            {business.serviceArea.map(
              (city, i, arr) => (
                <span key={city}>
                  {city}
                  {i < arr.length - 1 && <span className="mx-2 text-brand-400">•</span>}
                </span>
              )
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
