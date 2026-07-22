import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import ServiceCategory from "@/components/sections/services/ServiceCategory";
import CtaBanner from "@/components/sections/home/CtaBanner";
import { services, business } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Explore mobile pressure washing and car detailing services offered by ${business.name} in ${business.city}, ${business.state}.`,
};

export default function ServicesPage() {
  const pressureWashing = services.filter((s) => s.category === "Pressure Washing");
  const carDetailing = services.filter((s) => s.category === "Car Detailing");

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Every Service, One Mobile Visit"
        description="Transparent pricing, professional-grade equipment, and eco-friendly products — for your home's exterior and every vehicle in the driveway."
      >
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="#pressure-washing"
            className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-brand-300 hover:bg-white/10"
          >
            Pressure Washing
          </Link>
          <Link
            href="#car-detailing"
            className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-brand-300 hover:bg-white/10"
          >
            Car Detailing
          </Link>
        </div>
      </PageHero>

      <ServiceCategory
        id="pressure-washing"
        title="Pressure Washing Services"
        description="Soft-wash and surface-clean techniques matched to every material — siding, concrete, wood, and commercial storefronts."
        items={pressureWashing}
      />
      <div className="mx-auto h-px w-full max-w-5xl bg-navy-900/8" />
      <ServiceCategory
        id="car-detailing"
        title="Car Detailing Services"
        description="From a quick wash-and-wax to a full ceramic coating — professional detailing that comes straight to your driveway."
        items={carDetailing}
      />

      <CtaBanner />
    </>
  );
}
