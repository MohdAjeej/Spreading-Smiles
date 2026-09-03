export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  image: string;
  publishedDate: string;
  author: string;
  category: string;
  readTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "dental-implants-vs-bridges",
    title: "Dental Implants vs Bridges: Which Is Better?",
    metaTitle: "Dental Implants vs Bridges: Which Is Better? A Complete Guide (2026)",
    metaDescription: "Compare dental implants vs dental bridges, including cost, durability, treatment time, maintenance, and long-term benefits. Find out which tooth replacement option may be right for you.",
    excerpt: "Losing a tooth can affect more than just your smile. Compare dental implants and bridges to find the right tooth replacement option for you.",
    image: "/spreadingSmiles/blog/bridge.png",
    publishedDate: "2026-01-15",
    author: "Dr. Swati S. Singhal",
    category: "Dental Implants",
    readTime: "8 min read",
  },
  {
    slug: "braces-vs-clear-aligners",
    title: "Braces vs Clear Aligners: Which Should You Choose?",
    metaTitle: "Braces vs Clear Aligners: Which Should You Choose? A Complete Guide (2026)",
    metaDescription: "Compare traditional braces and clear aligners, including appearance, comfort, treatment time, oral hygiene, effectiveness, and suitability. Find out which orthodontic treatment may be right for your smile.",
    excerpt: "A straight and healthy-looking smile can improve confidence. Compare traditional braces and clear aligners to find the best orthodontic treatment for you.",
    image: "/spreadingSmiles/blog/braces.png",
    publishedDate: "2026-01-20",
    author: "Dr. Swati S. Singhal",
    category: "Orthodontics",
    readTime: "10 min read",
  },
];
