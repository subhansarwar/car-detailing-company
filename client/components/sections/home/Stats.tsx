import Container from "@/components/ui/Container";
import Counter from "@/components/ui/Counter";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { stats } from "@/lib/site";

export default function Stats() {
  return (
    <section className="relative bg-navy-950 py-16 sm:py-20">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
      <Container className="relative">
        <RevealGroup className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
          {stats.map((stat) => (
            <RevealItem
              key={stat.label}
              className="flex flex-col items-center text-center"
            >
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                className="font-display text-4xl font-extrabold text-white sm:text-5xl"
              />
              <span className="mt-2 text-xs font-medium uppercase tracking-widest text-white/50 sm:text-sm">
                {stat.label}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
