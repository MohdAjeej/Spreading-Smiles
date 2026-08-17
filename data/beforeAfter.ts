import { beforeAfterImages } from "@/lib/images";
import type { ImageAsset } from "@/lib/images";

export type BeforeAfterCase = {
  id: string;
  category: "implants" | "veneers" | "smile-makeover" | "full-mouth";
  categoryLabel: string;
  treatment: string;
  patient: string;
  duration: string;
  before: ImageAsset;
  after: ImageAsset;
};

export const beforeAfterCases: BeforeAfterCase[] = [
  {
    id: "case-1",
    category: "implants",
    categoryLabel: "Implants",
    treatment: "Dental Implants",
    patient: "Michael, UK",
    duration: "8 Days",
    before: beforeAfterImages.implants.before,
    after: beforeAfterImages.implants.after,
  },
  {
    id: "case-2",
    category: "veneers",
    categoryLabel: "Veneers",
    treatment: "Porcelain Veneers",
    patient: "Sophie, Australia",
    duration: "5 Days",
    before: beforeAfterImages.veneers.before,
    after: beforeAfterImages.veneers.after,
  },
  {
    id: "case-3",
    category: "smile-makeover",
    categoryLabel: "Smile Makeover",
    treatment: "Full Smile Makeover",
    patient: "Emma, Singapore",
    duration: "7 Days",
    before: beforeAfterImages.smileMakeover.before,
    after: beforeAfterImages.smileMakeover.after,
  },
  {
    id: "case-4",
    category: "full-mouth",
    categoryLabel: "Full Mouth Rehabilitation",
    treatment: "Full Mouth Rehabilitation",
    patient: "James, UK",
    duration: "12 Days",
    before: beforeAfterImages.fullMouth.before,
    after: beforeAfterImages.fullMouth.after,
  },
  {
    id: "case-5",
    category: "implants",
    categoryLabel: "Implants",
    treatment: "All-on-4",
    patient: "David, UAE",
    duration: "6 Days",
    before: beforeAfterImages.implants.before,
    after: beforeAfterImages.implants.after,
  },
  {
    id: "case-6",
    category: "veneers",
    categoryLabel: "Veneers",
    treatment: "Cosmetic Veneers",
    patient: "Linda, USA",
    duration: "4 Days",
    before: beforeAfterImages.veneers.before,
    after: beforeAfterImages.veneers.after,
  },
];

export const beforeAfterCategories = [
  { value: "all", label: "All" },
  { value: "implants", label: "Implants" },
  { value: "veneers", label: "Veneers" },
  { value: "smile-makeover", label: "Smile Makeover" },
  { value: "full-mouth", label: "Full Mouth Rehabilitation" },
] as const;
