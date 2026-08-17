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
];

export function getDentistBySlug(slug: string): Dentist | undefined {
  return dentists.find((dentist) => dentist.slug === slug);
}
