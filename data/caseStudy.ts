import { caseStudyImages } from "@/lib/images";
import type { ImageAsset } from "@/lib/images";

export type CaseStudyPhoto = {
  id: string;
  image: ImageAsset;
};

export const caseStudyPhotos: CaseStudyPhoto[] = caseStudyImages.map((image, i) => ({
  id: `case-study-${i + 1}`,
  image,
}));
