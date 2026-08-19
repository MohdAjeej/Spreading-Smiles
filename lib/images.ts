export type ImageAsset = {
  src: string;
  alt: string;
};

function unsplash(id: string, w = 1600, q = 80): string {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

/**
 * Centralized image registry. Every image used across the site is defined
 * here so imagery can be swapped for licensed/real photography later
 * without touching component code.
 */
export const images = {
  hero: {
    consultation: {
      src: unsplash("photo-1606811841689-23dfddce3e95", 1800),
      alt: "Dentist consulting with a smiling international patient in a modern clinic",
    } satisfies ImageAsset,
  },
  clinic: {
    reception: {
      src: unsplash("photo-1588776814546-1ffcf47267a5"),
      alt: "Dentist reviewing dental X-ray films with a patient",
    } satisfies ImageAsset,
    treatmentRoom: {
      src: unsplash("photo-1629909613654-28e377c37b09"),
      alt: "Modern dental treatment room with advanced equipment",
    } satisfies ImageAsset,
    interior: {
      src: unsplash("photo-1584362917165-526a968579e8"),
      alt: "Elegant interior of a premium dental clinic",
    } satisfies ImageAsset,
    dentistAtWork: {
      src: unsplash("photo-1609840114035-3c981b782dfe"),
      alt: "Dentist performing a procedure with a patient in the chair",
    } satisfies ImageAsset,
    chair: {
      src: unsplash("photo-1567013127542-490d757e51fc"),
      alt: "Modern dental treatment chair in a well-lit clinic",
    } satisfies ImageAsset,
    xray: {
      src: unsplash("photo-1601233749202-95d04d5b3c00"),
      alt: "Dental X-ray being reviewed as part of diagnosis",
    } satisfies ImageAsset,
    closeupSmile: {
      src: unsplash("photo-1666214280391-8ff5bd3c0bf0"),
      alt: "Close-up of a bright, healthy smile after treatment",
    } satisfies ImageAsset,
    cosmetic: {
      src: unsplash("photo-1552693673-1bf958298935"),
      alt: "Cosmetic dentistry consultation in progress",
    } satisfies ImageAsset,
    crownsBridges: {
      src: unsplash("photo-1571772996211-2f02c9727629"),
      alt: "Dental crown and bridge restoration work",
    } satisfies ImageAsset,
    hygiene: {
      src: unsplash("photo-1607613009820-a29f7bb81c04"),
      alt: "Bamboo toothbrushes representing dental hygiene and aftercare",
    } satisfies ImageAsset,
  },
  india: {
    tajMahal: {
      src: unsplash("photo-1587474260584-136574528ed5"),
      alt: "The Taj Mahal, one of India's iconic landmarks",
    } satisfies ImageAsset,
    tajMahalWater: {
      src: unsplash("photo-1477587458883-47145ed94245"),
      alt: "The Taj Mahal reflected in water at sunrise",
    } satisfies ImageAsset,
    cityLife: {
      src: unsplash("photo-1524492412937-b28074a5d7da"),
      alt: "Vibrant street life in a modern Indian city",
    } satisfies ImageAsset,
    street: {
      src: unsplash("photo-1602216056096-3b40cc0c9944"),
      alt: "Colourful streets of an Indian city",
    } satisfies ImageAsset,
    skyline: {
      src: unsplash("photo-1568084680786-a84f91d1153c"),
      alt: "Modern skyline of an Indian metropolitan city",
    } satisfies ImageAsset,
    monument: {
      src: unsplash("photo-1570168007204-dfb528c6958f"),
      alt: "Historic Indian architecture and monuments",
    } satisfies ImageAsset,
  },
  travel: {
    hotelRoom: {
      src: unsplash("photo-1566073771259-6a8506099945"),
      alt: "Comfortable luxury hotel room for visiting patients",
    } satisfies ImageAsset,
    hotelPool: {
      src: unsplash("photo-1571896349842-33c89424de2d"),
      alt: "Relaxing hotel pool for recovery and downtime",
    } satisfies ImageAsset,
    hotelLobby: {
      src: unsplash("photo-1551882547-ff40c63fe5fa"),
      alt: "Elegant hotel lobby arranged for international guests",
    } satisfies ImageAsset,
    airportPickup: {
      src: unsplash("photo-1436491865332-7a61a109cc05"),
      alt: "Airport terminal where patients are greeted on arrival",
    } satisfies ImageAsset,
    flight: {
      src: unsplash("photo-1544620347-c4fd4a3d5957"),
      alt: "Airplane wing above the clouds during a journey to India",
    } satisfies ImageAsset,
    coordinatorCall: {
      src: unsplash("photo-1521791136064-7986c2920216"),
      alt: "Patient coordinator on a call assisting an international patient",
    } satisfies ImageAsset,
    videoConsult: {
      src: unsplash("photo-1596524430615-b46475ddff6e"),
      alt: "Patient having an online video consultation before travel",
    } satisfies ImageAsset,
    giftBoxes: {
      src: unsplash("photo-1607344645866-009c320b63e0"),
      alt: "Wrapped gift boxes representing the patient referral reward",
    } satisfies ImageAsset,
  },
  dentists: {
    d1: { src: "/dr-swati-singhal.jpeg", alt: "Portrait of Dr. Swati S. Singhal" } satisfies ImageAsset,
  },
  treatments: {
    braces: { src: "/treatments/braces.jpg", alt: "Orthodontist adjusting braces on a patient's teeth" } satisfies ImageAsset,
    dentalCrown: { src: "/treatments/dental-crown.jpeg", alt: "3D illustration of a dental crown being fitted over a tooth" } satisfies ImageAsset,
    dentalCleaning: { src: "/treatments/dental-cleaning.jpg", alt: "Professional dental cleaning and scaling in progress" } satisfies ImageAsset,
    dentalImplant: { src: "/treatments/dental-implant.jpg", alt: "Dental implant procedure on a single tooth" } satisfies ImageAsset,
    rootCanal: { src: "/treatments/root-canal.jpg", alt: "Root canal treatment being performed by a dentist" } satisfies ImageAsset,
    teethWhitening: { src: "/treatments/teeth-whitening.jpg", alt: "Teeth whitening treatment for a brighter smile" } satisfies ImageAsset,
    toothExtraction: { src: "/treatments/tooth-extraction.jpg", alt: "Dentist performing a tooth extraction" } satisfies ImageAsset,
    toothFilling: { src: "/treatments/tooth-filling.jpg", alt: "Composite tooth filling procedure" } satisfies ImageAsset,
  },
  patients: {
    p1: { src: unsplash("photo-1633332755192-727a05c4013d", 400), alt: "Portrait of James, a patient from the UK" } satisfies ImageAsset,
    p2: { src: unsplash("photo-1552058544-f2b08422138a", 400), alt: "Portrait of Michael, a patient from the UK" } satisfies ImageAsset,
    p3: { src: unsplash("photo-1573497019940-1c28c88b4f3e", 400), alt: "Portrait of Linda, a patient from the USA" } satisfies ImageAsset,
    p4: { src: unsplash("photo-1507003211169-0a1dd7228f2d", 400), alt: "Portrait of Carlos, a patient from Canada" } satisfies ImageAsset,
    p5: { src: unsplash("photo-1544005313-94ddf0286df2", 400), alt: "Portrait of Sophie, a patient from Australia" } satisfies ImageAsset,
    p6: { src: unsplash("photo-1500648767791-00dcc994a43e", 400), alt: "Portrait of David, a patient from the UAE" } satisfies ImageAsset,
    p7: { src: unsplash("photo-1438761681033-6461ffad8d80", 400), alt: "Portrait of Emma, a patient from Singapore" } satisfies ImageAsset,
  },
} as const;

const CASE_STUDY_COUNT = 38;

export const caseStudyImages: ImageAsset[] = Array.from(
  { length: CASE_STUDY_COUNT },
  (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return {
      src: `/case-study/case-study-${n}.jpeg`,
      alt: `Spreading Smiles case study photo ${i + 1}`,
    } satisfies ImageAsset;
  }
);

export const beforeAfterImages = {
  implants: {
    before: images.hero.consultation,
    after: images.clinic.dentistAtWork,
  },
  veneers: {
    before: images.clinic.reception,
    after: images.clinic.hygiene,
  },
  smileMakeover: {
    before: images.clinic.crownsBridges,
    after: images.clinic.treatmentRoom,
  },
  fullMouth: {
    before: images.hero.consultation,
    after: images.clinic.treatmentRoom,
  },
};
