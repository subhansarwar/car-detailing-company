import { Droplets } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { business } from "@/lib/site";

export default function Story() {
  const yearsActive = 2026 - business.founded;

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="right">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              Our Story
            </span>
            <h2 className="text-fluid-h2 mt-4 font-display font-bold text-navy-950">
              Built on Hard Work, Grown by Word of Mouth
            </h2>
            <div className="mt-5 space-y-4 text-navy-700/80">
              <p>
                {business.name} started with a simple idea: bring
                professional-grade pressure washing and detailing directly to
                homeowners and drivers in {business.city}, {business.state} —
                no drop-offs, no scheduling around someone else&apos;s shop hours.
              </p>
              <p>
                For over {yearsActive} years, we&apos;ve grown almost entirely
                through referrals and repeat customers across Troup County.
                Every driveway, siding job, and vehicle detail is treated like
                it&apos;s the one that earns the next recommendation.
              </p>
              <p>
                Today, our fully-equipped mobile unit handles everything from
                soft-washing a family home to a full ceramic-coat detail —
                all backed by eco-friendly products and a satisfaction
                guarantee on every job.
              </p>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1} className="relative">
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-navy-900 shadow-2xl shadow-brand-900/20">
              <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="animate-float flex h-28 w-28 items-center justify-center rounded-full bg-white/10 backdrop-blur sm:h-36 sm:w-36">
                  <Droplets size={64} className="text-white/90" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-navy-950/40 p-6 backdrop-blur-sm">
                <p className="font-display text-2xl font-extrabold text-white">
                  {yearsActive}+ Years
                </p>
                <p className="text-sm text-white/70">
                  Proudly serving {business.city} & Troup County
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
