import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-24 lg:py-28">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-500/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-amber-500/10 blur-[100px]" />

      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-200">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            {eyebrow}
          </span>
          <h1 className="text-fluid-hero mt-6 font-display font-extrabold tracking-tight text-white">
            {title}
          </h1>
          {description && (
            <p className="text-fluid-body mt-5 text-white/65">{description}</p>
          )}
          {children}
        </Reveal>
      </Container>
    </section>
  );
}
