import { images, type ImageAsset } from "@/lib/images";

export type Testimonial = {
  name: string;
  country: string;
  flag: string;
  treatment: string;
  rating: number;
  quote: string;
  image: ImageAsset;
};

export const testimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    country: "India",
    flag: "🇮🇳",
    treatment: "Root Canal Treatment",
    rating: 5,
    quote:
      "Dr. Swati and her team made my root canal treatment completely painless. I was so nervous, but they put me at ease.",
    image: images.patients.p1,
  },
  {
    name: "Rahul Verma",
    country: "India",
    flag: "🇮🇳",
    treatment: "Teeth Whitening",
    rating: 5,
    quote:
      "The best dental clinic in Noida! Got my teeth whitening done here and the results are amazing.",
    image: images.patients.p2,
  },
  {
    name: "Ananya Gupta",
    country: "India",
    flag: "🇮🇳",
    treatment: "Pediatric Dentistry",
    rating: 5,
    quote:
      "My kids love coming here! The pediatric dentistry service is excellent. Dr. Swati is so gentle and patient with children.",
    image: images.patients.p3,
  },
  {
    name: "Vikram Singh",
    country: "India",
    flag: "🇮🇳",
    treatment: "Dental Implants",
    rating: 5,
    quote:
      "Got my dental implants done at Spreading Smiles. The procedure was smooth, and the follow-up care was exceptional.",
    image: images.patients.p4,
  },
];
