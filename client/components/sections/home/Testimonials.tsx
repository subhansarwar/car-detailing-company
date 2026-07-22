import { Quote, Star } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/site";

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div className="flex w-[320px] shrink-0 flex-col rounded-2xl border border-navy-900/8 bg-white p-6 shadow-sm shadow-navy-950/5 sm:w-[380px]">
      <Quote size={28} className="text-brand-300" />
      <div className="mt-3 flex gap-0.5">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-800/80">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="mt-5 border-t border-navy-900/8 pt-4">
        <p className="text-sm font-bold text-navy-950">{t.name}</p>
        <p className="text-xs text-navy-700/60">{t.location}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Customer Love"
          title="Trusted By Neighbors Across Troup County"
          description="Sample reviews shown below — real Facebook reviews will be swapped in once available."
        />
      </Container>

      <div className="mask-fade-x relative mt-14 overflow-hidden">
        <div className="flex w-max animate-marquee gap-6 hover:[animation-play-state:paused]">
          {loop.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
