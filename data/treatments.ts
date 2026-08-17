import { images, type ImageAsset } from "@/lib/images";

export type Treatment = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  duration: string;
  visits: string;
  startingPrice: string;
  internationalAveragePrice: string;
  image: ImageAsset;
  category: "implants" | "veneers" | "smile-makeover" | "full-mouth";
  whatsIncluded: string[];
};

export const treatments: Treatment[] = [
  {
    slug: "dental-implants",
    name: "Dental Implants",
    shortDescription:
      "A permanent, natural-looking solution for missing teeth using titanium implants.",
    description:
      "Dental implants replace missing teeth from the root up, giving you a permanent, natural-looking result that restores confidence and function. Our partner clinics use advanced 3D imaging and premium implant systems trusted by dentists worldwide.",
    duration: "7–10 Days",
    visits: "2–3 Visits",
    startingPrice: "$900",
    internationalAveragePrice: "$3,500",
    image: images.clinic.dentistAtWork,
    category: "implants",
    whatsIncluded: [
      "Comprehensive diagnostic scans (CT/X-ray)",
      "Premium titanium implant placement",
      "Personal treatment coordinator",
      "Post-treatment care kit and guidance",
    ],
  },
  {
    slug: "all-on-4",
    name: "All-on-4",
    shortDescription:
      "A full arch of new teeth supported by just four strategically placed implants.",
    description:
      "All-on-4 replaces an entire arch of missing or failing teeth using only four implants, giving you a fixed, full set of teeth often in a single visit. It's a life-changing option for patients with extensive tooth loss.",
    duration: "5–7 Days",
    visits: "1–2 Visits",
    startingPrice: "$4,200",
    internationalAveragePrice: "$16,000",
    image: images.clinic.treatmentRoom,
    category: "full-mouth",
    whatsIncluded: [
      "Full arch diagnostic workup",
      "Four-implant fixed bridge placement",
      "Temporary and final prosthesis",
      "Dedicated aftercare follow-up plan",
    ],
  },
  {
    slug: "full-mouth-rehabilitation",
    name: "Full Mouth Rehabilitation",
    shortDescription:
      "A complete restoration combining implants, crowns and bridges for a fully renewed smile.",
    description:
      "Full mouth rehabilitation is a tailored combination of restorative treatments — implants, crowns, bridges and more — designed together to rebuild both function and aesthetics for patients with complex dental needs.",
    duration: "10–14 Days",
    visits: "2–4 Visits",
    startingPrice: "$6,500",
    internationalAveragePrice: "$24,000",
    image: images.clinic.reception,
    category: "full-mouth",
    whatsIncluded: [
      "Complete oral health assessment",
      "Custom multi-treatment plan",
      "Coordinated specialist care",
      "Extended recovery support",
    ],
  },
  {
    slug: "veneers",
    name: "Veneers",
    shortDescription:
      "Ultra-thin porcelain shells that transform the shape, color and alignment of your smile.",
    description:
      "Porcelain veneers are custom-crafted to correct chips, gaps, discoloration and minor misalignment, giving you a refined, natural-looking smile that's built to last.",
    duration: "4–6 Days",
    visits: "2 Visits",
    startingPrice: "$280 / tooth",
    internationalAveragePrice: "$1,000 / tooth",
    image: images.clinic.cosmetic,
    category: "veneers",
    whatsIncluded: [
      "Smile design consultation",
      "Digital smile preview",
      "Custom porcelain veneer fabrication",
      "Fit and finish follow-up",
    ],
  },
  {
    slug: "crowns-bridges",
    name: "Crowns & Bridges",
    shortDescription:
      "Durable restorations that repair damaged teeth or replace short spans of missing teeth.",
    description:
      "Crowns and bridges restore strength, shape and function to damaged or missing teeth using durable, natural-looking materials matched precisely to your smile.",
    duration: "4–5 Days",
    visits: "2 Visits",
    startingPrice: "$220 / unit",
    internationalAveragePrice: "$1,200 / unit",
    image: images.clinic.crownsBridges,
    category: "smile-makeover",
    whatsIncluded: [
      "Precision digital impressions",
      "Metal-free ceramic materials",
      "Bite and comfort calibration",
      "Long-term warranty guidance",
    ],
  },
  {
    slug: "root-canal-treatment",
    name: "Root Canal Treatment",
    shortDescription:
      "Pain-relieving treatment that saves an infected or damaged tooth from extraction.",
    description:
      "Modern, minimally uncomfortable root canal therapy removes infection and preserves your natural tooth, using rotary endodontic technology for precision and comfort.",
    duration: "1–2 Days",
    visits: "1–2 Visits",
    startingPrice: "$150",
    internationalAveragePrice: "$900",
    image: images.clinic.xray,
    category: "smile-makeover",
    whatsIncluded: [
      "Diagnostic imaging",
      "Rotary endodontic treatment",
      "Same-visit pain relief protocol",
      "Follow-up restoration guidance",
    ],
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    shortDescription:
      "Whitening, bonding and contouring treatments designed around your ideal smile.",
    description:
      "From professional whitening to subtle reshaping, our cosmetic dentistry treatments are tailored to enhance your natural smile with results that look effortless.",
    duration: "2–4 Days",
    visits: "1–2 Visits",
    startingPrice: "$180",
    internationalAveragePrice: "$650",
    image: images.clinic.closeupSmile,
    category: "veneers",
    whatsIncluded: [
      "Personalized smile assessment",
      "Whitening and/or bonding",
      "Shade matching and polish",
      "Take-home maintenance kit",
    ],
  },
  {
    slug: "smile-makeover",
    name: "Smile Makeover",
    shortDescription:
      "A fully personalized combination of treatments designed around your ideal smile.",
    description:
      "A smile makeover blends multiple treatments — veneers, whitening, contouring and more — planned together for a cohesive, natural transformation designed around your face and goals.",
    duration: "6–8 Days",
    visits: "2–3 Visits",
    startingPrice: "$1,800",
    internationalAveragePrice: "$8,000",
    image: images.clinic.interior,
    category: "smile-makeover",
    whatsIncluded: [
      "Digital smile design preview",
      "Multi-treatment coordinated plan",
      "Dedicated treatment coordinator",
      "Before and after documentation",
    ],
  },
];

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return treatments.find((treatment) => treatment.slug === slug);
}
