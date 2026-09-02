"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/data/blogs";

export default function BlogCard({
  blog,
  index = 0,
}: {
  blog: BlogPost;
  index?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
    >
      <Link href={`/blog/${blog.slug}`} className="relative block aspect-[16/9] overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {/* Category Badge */}
        <div className="absolute left-4 top-4 rounded-full bg-pink px-3 py-1 text-xs font-semibold text-white">
          {blog.category}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        {/* Meta Info */}
        <div className="flex items-center gap-4 text-xs text-navy-soft">
          <div className="flex items-center gap-1.5">
            <Calendar size={14} className="text-pink" />
            {new Date(blog.publishedDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={14} className="text-pink" />
            {blog.readTime}
          </div>
        </div>

        {/* Title */}
        <h3 className="mt-4 font-serif text-xl text-navy transition-colors group-hover:text-pink">
          <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
        </h3>

        {/* Excerpt */}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-soft">
          {blog.excerpt}
        </p>

        {/* Author & CTA */}
        <div className="mt-5 flex items-center justify-between border-t border-navy/10 pt-4">
          <p className="text-xs text-navy-soft">By {blog.author}</p>
          <Link
            href={`/blog/${blog.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-pink transition-all hover:gap-2"
          >
            Read More
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
