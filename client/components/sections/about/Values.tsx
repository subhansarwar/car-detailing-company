import { Handshake, Leaf, Sparkles, Timer } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

const values = [
  {
    icon: Sparkles,
    title: "Quality Craftsmanship",
    description:
      "We don't rush. Every surface and panel gets the attention it needs for a result that actually lasts.",
  },
  {
    icon: Handshake,
    title: "Honesty & Integrity",
    description:
      "Transparent pricing, no upsells you don't need, and straight answers about what your property or vehicle actually requires.",
  },
  {
    icon: Leaf,
    title: "Eco-Conscious Methods",
    description:
      "Biodegradable products and responsible water use protect your landscaping, pets, and the local environment.",
  },
  {
    icon: Timer,
    title: "Reliability",
    description:
      "We show up when we say we will, and we communicate early if anything ever needs to change.",
  },
];

export default function Values() {
  return (
    <section className="bg-brand-50/60 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What Drives Us"
          title="Our Values"
          description="The principles behind every wash, wax, and detail we deliver."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, description }) => (
            <RevealItem
              key={title}
              className="group rounded-2xl border border-navy-900/8 bg-white p-6 shadow-sm shadow-navy-950/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-500/10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500 text-white shadow-md shadow-brand-500/30 transition-transform group-hover:scale-110">
                <Icon size={24} />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-navy-950">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-700/70">
                {description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
