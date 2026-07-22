"use client";

import { motion } from "framer-motion";
import { ArrowRight, Award, Droplets, Phone, ShieldCheck, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { business } from "@/lib/site";

const badges = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Award, label: "6+ Years Experience" },
  { icon: Sparkles, label: "Satisfaction Guaranteed" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-24 pt-14 sm:pb-32 sm:pt-20 lg:pb-40 lg:pt-24">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="bg-noise pointer-events-none absolute inset-0" />

      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute left-[-10%] top-[10%] h-72 w-72 rounded-full bg-brand-500/25 blur-[100px] sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute right-[-8%] top-[35%] h-80 w-80 rounded-full bg-amber-500/15 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-[-10%] left-[30%] h-72 w-72 rounded-full bg-brand-400/10 blur-[100px]" />

      {/* Floating decorative icons */}
      <motion.div
        className="pointer-events-none absolute right-[8%] top-[18%] hidden text-brand-300/30 sm:block"
        animate={{ y: [0, -18, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Droplets size={56} />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute left-[6%] bottom-[20%] hidden text-amber-400/25 lg:block"
        animate={{ y: [0, 16, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <Sparkles size={48} />
      </motion.div>

      <Container className="relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-200 sm:text-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            Mobile Service — {business.city}, {business.state}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-fluid-hero mt-6 font-display font-extrabold tracking-tight text-white"
          >
            Pressure Washing &{" "}
            <span className="text-gradient-brand">Car Detailing</span> That
            Comes To You
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-fluid-body mt-6 max-w-2xl text-white/65"
          >
            {business.description} From driveways to daily drivers — we bring
            professional-grade equipment straight to your door.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="/contact" size="lg" icon={<ArrowRight size={20} />}>
              Get a Free Quote
            </Button>
            <Button
              href={`tel:${business.phoneHref}`}
              variant="outline"
              size="lg"
              icon={<Phone size={18} />}
            >
              {business.phone}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
          >
            {badges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm font-medium text-white/70">
                <Icon size={18} className="text-brand-300" />
                {label}
              </div>
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Bottom wave divider */}
      <div className="absolute inset-x-0 bottom-0 text-white">
        <svg viewBox="0 0 1440 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 45C240 90 480 0 720 22.5C960 45 1200 90 1440 45V90H0V45Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
