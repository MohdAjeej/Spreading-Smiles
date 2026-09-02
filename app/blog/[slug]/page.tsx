import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import CTASection from "@/components/CTASection";
import { blogPosts } from "@/data/blogs";
import { blogContent } from "@/data/blog-content";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = blogPosts.find((post) => post.slug === params.slug);

  if (!blog) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
  };
}

export default function BlogPostPage({ params }: Props) {
  const blog = blogPosts.find((post) => post.slug === params.slug);

  if (!blog) {
    notFound();
  }

  const content = blogContent[params.slug as keyof typeof blogContent];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blush to-white py-16">
        <Container>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy transition-colors hover:text-pink"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <div className="mt-8">
            {/* Category Badge */}
            <div className="inline-block rounded-full bg-pink px-4 py-1.5 text-sm font-semibold text-white">
              {blog.category}
            </div>

            {/* Title */}
            <h1 className="mt-4 font-serif text-4xl text-navy sm:text-5xl lg:text-6xl">
              {blog.title}
            </h1>

            {/* Meta Info */}
            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-navy-soft">
              <div className="flex items-center gap-2">
                <User size={18} className="text-pink" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-pink" />
                <span>
                  {new Date(blog.publishedDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-pink" />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
              priority
            />
          </div>
        </Container>
      </section>

      {/* Article Content */}
      <section className="bg-white py-16">
        <Container>
          <article className="prose prose-lg prose-navy mx-auto max-w-4xl">
            {content?.content}
          </article>

          {/* CTA Box */}
          <div className="mx-auto mt-16 max-w-4xl rounded-2xl border border-pink/20 bg-gradient-to-br from-pink/5 to-blue/5 p-8 text-center">
            <h3 className="font-serif text-2xl text-navy sm:text-3xl">
              Ready to Transform Your Smile?
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-navy-soft">
              Book a free consultation with our expert dental team to discuss your treatment options and create a personalized plan for your perfect smile.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="/book-consultation" variant="primary" size="lg">
                Book Free Consultation
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Contact Us
              </Button>
            </div>
          </div>

          {/* Share & Related */}
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="flex items-center justify-between border-t border-navy/10 pt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-navy transition-colors hover:text-pink"
              >
                <ArrowLeft size={16} />
                More Articles
              </Link>
              <Link
                href="/treatments"
                className="inline-flex items-center gap-2 text-sm font-medium text-pink transition-colors hover:text-pink-dark"
              >
                View All Treatments
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
