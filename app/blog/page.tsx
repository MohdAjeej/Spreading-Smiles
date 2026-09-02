import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTASection";
import Container from "@/components/ui/Container";
import { images } from "@/lib/images";
import { blogPosts } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read the latest articles, tips, and insights about dental care, dental tourism, and oral health from Spreading Smiles.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Dental Care Insights & Stories"
        subtitle="Expert advice, patient experiences, and the latest in dental tourism and oral health."
        image={images.clinic.reception}
      />
      
      <section className="bg-white py-24">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((blog, index) => (
              <BlogCard key={blog.slug} blog={blog} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
