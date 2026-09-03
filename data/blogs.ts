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
    image: "/blog/bridge.png",
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
    image: "/blog/braces.png",
    publishedDate: "2026-01-20",
    author: "Dr. Swati S. Singhal",
    category: "Orthodontics",
    readTime: "10 min read",
  },
  {
    slug: "how-to-know-if-you-need-root-canal",
    title: "How to Know If You Need a Root Canal",
    metaTitle: "How to Know If You Need a Root Canal - Complete Guide (2026)",
    metaDescription: "Learn the signs and symptoms that may indicate you need a root canal treatment, including persistent tooth pain, sensitivity, and swelling.",
    excerpt: "A persistent toothache can be a sign that something is wrong inside your tooth. Learn the warning signs that may indicate you need a root canal.",
    image: "/blog/root%20canaling.jpeg",
    publishedDate: "2026-01-25",
    author: "Dr. Swati S. Singhal",
    category: "Root Canal",
    readTime: "7 min read",
  },
  {
    slug: "root-canal-treatment-step-by-step",
    title: "Root Canal Treatment: Step-by-Step Procedure Explained",
    metaTitle: "Root Canal Treatment: Step-by-Step Procedure Explained (2026)",
    metaDescription: "Understand the root canal procedure step-by-step, from examination to final restoration. Learn what to expect during treatment.",
    excerpt: "Root canal treatment is designed to treat infection or inflammation inside a tooth. Understanding the process can help you feel more prepared.",
    image: "/blog/root%20procedure.jpeg",
    publishedDate: "2026-01-28",
    author: "Dr. Swati S. Singhal",
    category: "Root Canal",
    readTime: "6 min read",
  },
  {
    slug: "stages-of-gum-disease",
    title: "Stages of Gum Disease: From Gingivitis to Periodontitis",
    metaTitle: "Stages of Gum Disease: From Gingivitis to Periodontitis (2026)",
    metaDescription: "Learn about the stages of gum disease, from healthy gums to advanced periodontitis. Understand symptoms, causes, and treatment options.",
    excerpt: "Gum disease is a common dental problem that affects the gums and supporting structures. Learn to recognize the stages and warning signs.",
    image: "/blog/gum%20disease.jpeg",
    publishedDate: "2026-02-01",
    author: "Dr. Swati S. Singhal",
    category: "Gum Disease",
    readTime: "8 min read",
  },
  {
    slug: "scaling-and-root-planing",
    title: "Scaling and Root Planing: Deep Cleaning for Healthier Gums",
    metaTitle: "Scaling and Root Planing: Deep Cleaning for Healthier Gums (2026)",
    metaDescription: "Learn about scaling and root planing, a deep cleaning procedure for treating gum disease. Understand benefits, procedure, and aftercare.",
    excerpt: "When plaque and tartar build up below the gumline, deep cleaning may be recommended. Learn about scaling and root planing treatment.",
    image: "/blog/gums.jpeg",
    publishedDate: "2026-02-05",
    author: "Dr. Swati S. Singhal",
    category: "Gum Disease",
    readTime: "6 min read",
  },
  {
    slug: "healthy-gums-vs-diseased-gums",
    title: "Healthy Gums vs Diseased Gums: How to Recognize the Difference",
    metaTitle: "Healthy Gums vs Diseased Gums: How to Recognize the Difference (2026)",
    metaDescription: "Learn to recognize the difference between healthy and diseased gums. Understand warning signs and when to see a dentist.",
    excerpt: "Your gums provide essential support for your teeth. Learn to recognize the difference between healthy and unhealthy gums.",
    image: "/blog/tooth.jpeg",
    publishedDate: "2026-02-08",
    author: "Dr. Swati S. Singhal",
    category: "Gum Disease",
    readTime: "7 min read",
  },
];
