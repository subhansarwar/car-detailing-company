import Hero from "@/components/sections/home/Hero";
import ServicesPreview from "@/components/sections/home/ServicesPreview";
import Stats from "@/components/sections/home/Stats";
import Process from "@/components/sections/home/Process";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";
import Testimonials from "@/components/sections/home/Testimonials";
import BlogPreview from "@/components/sections/home/BlogPreview";
import FaqPreview from "@/components/sections/home/FaqPreview";
import CtaBanner from "@/components/sections/home/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <Stats />
      <Process />
      <WhyChooseUs />
      <Testimonials />
      <BlogPreview />
      <FaqPreview />
      <CtaBanner />
    </>
  );
}
