import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import BlogGrid from "@/components/sections/blog/BlogGrid";
import CtaBanner from "@/components/sections/home/CtaBanner";
import { blogPosts, business } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: `Tips and guides on pressure washing and car detailing from ${business.name}.`,
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Blog"
        title="Tips, Guides & Behind the Scenes"
        description="Practical advice for keeping your home's exterior and your vehicle looking their best between visits."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <BlogGrid posts={blogPosts} />
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
