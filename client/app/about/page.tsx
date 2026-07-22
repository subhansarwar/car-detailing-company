import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Story from "@/components/sections/about/Story";
import Values from "@/components/sections/about/Values";
import Stats from "@/components/sections/home/Stats";
import Commitment from "@/components/sections/about/Commitment";
import CtaBanner from "@/components/sections/home/CtaBanner";
import { business } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${business.name} — a locally owned mobile pressure washing and car detailing business serving ${business.city}, ${business.state}.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="The Team Behind Every Shine"
        description="Locally owned and operated, we're on a mission to make professional pressure washing and car detailing effortless — one driveway and one driver's seat at a time."
      />
      <Story />
      <Values />
      <Stats />
      <Commitment />
      <CtaBanner />
    </>
  );
}
