import type { FAQ } from "./types";

export const SIGNATURE_EXPERIENCE_PATH = "/signature-riviera-experience";

export interface SignatureBenefit {
  emoji: string;
  title: string;
  description: string;
}

export const signatureTangierExperience = {
  slug: "signature-riviera-experience",
  title: "Signature Strait of Gibraltar Discovery",
  seoTitle: "Signature Strait of Gibraltar Discovery — Future Private Day",
  metaDescription:
    "Preview a future small-group Tangier shore experience — maximum eight guests, Medina highlights, Kasbah viewpoints and flexible discovery. Not currently.",
  tagline:
    "A future small-group journey through Tangier — designed around your ship, not a generic coach tour.",
  overview:
    "Signature Strait of Gibraltar Discovery is a product concept in preparation. The proposed experience would take no more than eight guests from Tangier through the Medina, Kasbah and selected coastal viewpoints in a carefully paced format, with optional mint-tea lunch, artisan stops and enough flexibility to respond to the group, weather and port timings. It does not currently exist as a bookable excursion.",
  comingSoon: true,
  benefits: [
    {
      emoji: "👥",
      title: "Maximum 8 guests",
      description: "A proposed small-group format intended to avoid coach-tour delays and support personal attention.",
    },
    {
      emoji: "🕌",
      title: "Medina & Kasbah focus",
      description: "Grand Socco, souk lanes and Kasbah viewpoints at the heart of the concept.",
    },
    {
      emoji: "📸",
      title: "Photography stops",
      description: "Time for Strait panoramas and Medina colour rather than images through a coach window.",
    },
    {
      emoji: "🍵",
      title: "Mint tea pause",
      description: "A relaxed traditional café stop proposed as part of the experience, subject to final partner arrangements.",
    },
    {
      emoji: "🧭",
      title: "Flexible itinerary",
      description: "Room to adjust for weather, crowds and the interests of a small group.",
    },
    {
      emoji: "🚢",
      title: "Ship-first timing",
      description: "Planned backwards from all-aboard with a conservative Tangier return buffer.",
    },
  ] as SignatureBenefit[],
  faqs: [
    {
      question: "Can I book Signature Strait of Gibraltar Discovery now?",
      answer:
        "No. It is a future concept in preparation and is not bookable. Explore current Tangier shore excursions or enquire for updates.",
    },
    {
      question: "How is this different from Editor's Choice?",
      answer:
        "Editor's Choice is our current recommended introduction including Cape Spartel and the Hercules Caves. Signature is a future small-group flagship concept with a stricter guest limit and more flexible pacing.",
    },
  ] as FAQ[],
};

export function getSignatureEditorialRecommendation() {
  return {
    title: signatureTangierExperience.title,
    description: signatureTangierExperience.tagline,
    href: SIGNATURE_EXPERIENCE_PATH,
  };
}

/** @deprecated Compatibility alias for shared components */
export const signatureRivieraExperience = signatureTangierExperience;
