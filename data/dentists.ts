import { images, type ImageAsset } from "@/lib/images";

export type Dentist = {
  slug: string;
  name: string;
  qualification: string;
  specialty: string;
  yearsExperience: number;
  languages: string[];
  image: ImageAsset;
  bio: string;
};

export const dentists: Dentist[] = [
  {
    slug: "swati-singhal",
    name: "Dr. Swati S. Singhal",
    qualification: "BDS, MDS",
    specialty: "Chief Dentist | Founder of Spreading Smiles",
    yearsExperience: 14,
    languages: ["English", "Hindi"],
    image: images.dentists.d1,
    bio: "Dr. Swati S. Singhal is a highly experienced Chief Dentist with over 14 years of clinical excellence in providing comprehensive and compassionate dental care. Known for her gentle approach and patient-first philosophy, she believes every smile deserves expert attention and long-term care.",
  },
  {
    slug: "shalini-upadhyay",
    name: "Dr. Shalini Upadhyay",
    qualification: "BDS, MDS (Conservative Dentistry & Endodontics)",
    specialty: "Conservative Dentist & Endodontist",
    yearsExperience: 8,
    languages: ["English", "Hindi"],
    image: images.dentists.d2,
    bio: "Dr. Shalini Upadhyay is a Conservative Dentist and Endodontist and the Co-Founder of The Smile Habitat – Speciality Dental Care, Greater Noida. She completed her BDS from Krishnadevarya College of Dental Sciences and Hospital, affiliated with Rajiv Gandhi University of Health Sciences (RGUHS), followed by an MDS in Conservative Dentistry and Endodontics from Subharti Dental College.\n\nHer practice focuses on preserving natural teeth through meticulous, evidence-based and minimally invasive dentistry. Her areas of clinical expertise include root canal treatment and re-treatment, management of curved and complex canals, calcified canals, separated instrument retrieval, perforation management, traumatic dental injuries, restorative dentistry smile designing and aesthetic dental procedures.\n\nDr. Shalini has been associated with Ganesh Hospital since 2020 and also provides visiting consultations at private dental clinics across the NCR. She has undertaken additional courses in smile designing and aesthetic dentistry and is a member of the Indian Dental Association (IDA).\n\nFor Dr. Shalini, dentistry goes beyond simply treating a dental problem. She believes that patients deserve to understand their condition, feel heard and reassured, and have a positive experience throughout their treatment. Her approach combines specialist clinical expertise with patience, empathy and attention to detail.",
  },
];

export function getDentistBySlug(slug: string): Dentist | undefined {
  return dentists.find((dentist) => dentist.slug === slug);
}
