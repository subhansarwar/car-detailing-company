import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { blogPosts } from "@/lib/site";

export default function BlogPreview() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="bg-brand-50/60 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="From the Blog"
          title="Tips, Guides & Behind the Scenes"
          description="Practical advice on keeping your home and vehicle looking their best between visits."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <RevealItem key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-900/8 bg-white shadow-sm shadow-navy-950/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-500/10"
              >
                <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-brand-500 to-brand-800">
                  <span className="shimmer-bg absolute inset-0 animate-shimmer" />
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white backdrop-blur">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-xs font-medium text-navy-700/60">
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                    <span>•</span>
                    {post.readTime}
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold text-navy-950 transition-colors group-hover:text-brand-600">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-700/70">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                    Read More
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-12 flex justify-center">
          <Button href="/blog" variant="outlineDark">
            Visit the Blog
          </Button>
        </div>
      </Container>
    </section>
  );
}
