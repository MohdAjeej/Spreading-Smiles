import { images, type ImageAsset } from "@/lib/images";

export type Treatment = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  duration: string;
  visits: string;
  startingPrice: string;
  startingPriceUSD: number;
  priceUnit?: "tooth" | "unit";
  image: ImageAsset;
  category: "implants" | "veneers" | "smile-makeover" | "full-mouth";
  whatsIncluded: string[];
};

export const treatments: Treatment[] = [
  {
    slug: "consultation",
    name: "Consultation",
    shortDescription:
      "A comprehensive dental check-up and treatment planning session with your specialist.",
    description:
      "Your journey starts with a thorough consultation — a full oral examination, diagnostic imaging where needed, and an honest conversation about your goals. You'll leave with a clear, personalized treatment plan and transparent pricing before committing to any procedure.",
    duration: "Same Day",
    visits: "1 Visit",
    startingPrice: "$5",
    startingPriceUSD: 5,
    image: images.hero.consultation,
    category: "smile-makeover",
    whatsIncluded: [
      "Full oral health examination",
      "Diagnostic X-rays if required",
      "Personalized treatment plan",
      "Transparent cost breakdown",
    ],
  },
  {
    slug: "dental-cleaning",
    name: "Dental Cleaning (Scaling)",
    shortDescription:
      "Professional scaling and polishing to remove plaque, tartar and surface stains.",
    description:
      "Routine professional cleaning removes built-up plaque and tartar that brushing alone can't reach, helping prevent gum disease and cavities while leaving your smile visibly brighter and healthier.",
    duration: "Same Day",
    visits: "1 Visit",
    startingPrice: "$10",
    startingPriceUSD: 10,
    image: images.treatments.dentalCleaning,
    category: "smile-makeover",
    whatsIncluded: [
      "Ultrasonic scaling and plaque removal",
      "Polishing and stain removal",
      "Gum health assessment",
      "Oral hygiene guidance",
    ],
  },
  {
    slug: "tooth-filling",
    name: "Tooth Filling (Composite)",
    shortDescription:
      "Tooth-colored composite fillings that repair cavities and restore natural tooth shape.",
    description:
      "Composite fillings repair decayed or damaged teeth using a durable, natural-looking resin that's shade-matched to your enamel, restoring both strength and appearance in a single visit.",
    duration: "Same Day",
    visits: "1 Visit",
    startingPrice: "$10 / tooth",
    startingPriceUSD: 10,
    priceUnit: "tooth",
    image: images.treatments.toothFilling,
    category: "smile-makeover",
    whatsIncluded: [
      "Decay removal and cavity preparation",
      "Tooth-colored composite restoration",
      "Shade matching to natural teeth",
      "Bite adjustment and polish",
    ],
  },
  {
    slug: "root-canal",
    name: "Root Canal (RCT)",
    shortDescription:
      "Pain-relieving treatment that saves an infected or damaged tooth from extraction.",
    description:
      "Modern, minimally uncomfortable root canal therapy removes infection from deep within the tooth and preserves your natural tooth, using rotary endodontic technology for precision and comfort.",
    duration: "1–2 Days",
    visits: "1–2 Visits",
    startingPrice: "$40",
    startingPriceUSD: 40,
    image: images.treatments.rootCanal,
    category: "smile-makeover",
    whatsIncluded: [
      "Diagnostic imaging",
      "Rotary endodontic treatment",
      "Same-visit pain relief protocol",
      "Follow-up restoration guidance",
    ],
  },
  {
    slug: "dental-crown",
    name: "Crown (Zirconia/Ceramic)",
    shortDescription:
      "Durable, natural-looking crowns that restore strength and shape to a damaged tooth.",
    description:
      "Zirconia and ceramic crowns restore strength, shape and function to damaged or heavily decayed teeth using durable, metal-free materials matched precisely to your smile.",
    duration: "4–5 Days",
    visits: "2 Visits",
    startingPrice: "$80 / tooth",
    startingPriceUSD: 80,
    priceUnit: "tooth",
    image: images.treatments.dentalCrown,
    category: "veneers",
    whatsIncluded: [
      "Precision digital impressions",
      "Metal-free zirconia/ceramic crown",
      "Bite and comfort calibration",
      "Long-term warranty guidance",
    ],
  },
  {
    slug: "tooth-extraction",
    name: "Tooth Extraction",
    shortDescription:
      "Safe, comfortable removal of damaged, infected or impacted teeth.",
    description:
      "When a tooth can't be saved, our specialists perform safe, minimally uncomfortable extractions using modern techniques, with clear aftercare guidance to support fast healing.",
    duration: "Same Day",
    visits: "1 Visit",
    startingPrice: "$10 / tooth",
    startingPriceUSD: 10,
    priceUnit: "tooth",
    image: images.treatments.toothExtraction,
    category: "smile-makeover",
    whatsIncluded: [
      "Diagnostic imaging",
      "Local anesthesia for comfort",
      "Safe tooth removal",
      "Aftercare and healing guidance",
    ],
  },
  {
    slug: "dental-implant",
    name: "Dental Implant (Single Tooth)",
    shortDescription:
      "A permanent, natural-looking solution for a single missing tooth using a titanium implant.",
    description:
      "A single-tooth dental implant replaces a missing tooth from the root up, giving you a permanent, natural-looking result that restores confidence and function. Our partner clinics use advanced 3D imaging and premium implant systems trusted by dentists worldwide.",
    duration: "7–10 Days",
    visits: "2–3 Visits",
    startingPrice: "$250 / tooth",
    startingPriceUSD: 250,
    priceUnit: "tooth",
    image: images.treatments.dentalImplant,
    category: "implants",
    whatsIncluded: [
      "Comprehensive diagnostic scans (CT/X-ray)",
      "Premium titanium implant placement",
      "Personal treatment coordinator",
      "Post-treatment care kit and guidance",
    ],
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    shortDescription:
      "Professional-grade whitening for a noticeably brighter smile in one visit.",
    description:
      "Our in-clinic whitening treatment lifts years of staining from coffee, tea and everyday life, delivering a safe, noticeably brighter smile in a single session under professional supervision.",
    duration: "1 Day",
    visits: "1 Visit",
    startingPrice: "$40",
    startingPriceUSD: 40,
    image: images.treatments.teethWhitening,
    category: "veneers",
    whatsIncluded: [
      "Shade assessment and consultation",
      "Professional-grade whitening treatment",
      "Sensitivity management",
      "Take-home maintenance kit",
    ],
  },
  {
    slug: "braces",
    name: "Braces (Full Treatment)",
    shortDescription:
      "A complete orthodontic treatment plan to align and straighten your smile.",
    description:
      "Whether you choose traditional braces or clear aligners, our orthodontic specialists design a complete treatment plan to gradually straighten your teeth and correct your bite, with regular progress reviews throughout.",
    duration: "12–18 Months",
    visits: "Multiple Visits",
    startingPrice: "$500",
    startingPriceUSD: 500,
    image: images.treatments.braces,
    category: "smile-makeover",
    whatsIncluded: [
      "Full orthodontic assessment",
      "Custom-fitted braces or aligners",
      "Scheduled adjustment visits",
      "Retainer after treatment completion",
    ],
  },
];

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return treatments.find((treatment) => treatment.slug === slug);
}
