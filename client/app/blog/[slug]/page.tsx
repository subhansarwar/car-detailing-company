import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { blogPosts } from "@/lib/site";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-16 sm:py-24">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-500/20 blur-[100px]" />

        <Container className="relative max-w-3xl">
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-300 hover:text-brand-200"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>
            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-200">
              {post.category}
            </span>
            <h1 className="text-fluid-h2 mt-4 font-display font-extrabold tracking-tight text-white">
              {post.title}
            </h1>
            <div className="mt-5 flex items-center gap-4 text-sm text-white/60">
              <span className="flex items-center gap-1.5">
                <Calendar size={15} />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={15} />
                {post.readTime}
              </span>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <div className="space-y-5 text-fluid-body text-navy-800/90">
              {post.content.map((paragraph, i) => (
                <p key={i} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-brand-200 bg-brand-50/60 p-8 text-center sm:flex-row sm:justify-between sm:text-left"
          >
            <div>
              <h3 className="font-display text-lg font-bold text-navy-950">
                Ready to book your service?
              </h3>
              <p className="mt-1 text-sm text-navy-700/75">
                Get a free, no-obligation quote from our mobile crew today.
              </p>
            </div>
            <Button href="/contact" icon={<ArrowRight size={18} />}>
              Get a Free Quote
            </Button>
          </Reveal>

          {related.length > 0 && (
            <div className="mt-16 border-t border-navy-900/8 pt-12">
              <h3 className="font-display text-xl font-bold text-navy-950">
                More From the Blog
              </h3>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group rounded-xl border border-navy-900/8 p-4 transition-colors hover:border-brand-300/60 hover:bg-brand-50/40"
                  >
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
                      {p.category}
                    </span>
                    <p className="mt-2 text-sm font-semibold text-navy-950 group-hover:text-brand-700">
                      {p.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
