import type { EditorialCategory } from "./types";
import { SIGNATURE_EXPERIENCE_PATH } from "./signature-experience";
import { EXPLORE_INDEPENDENTLY_PATH } from "./explore-independently";

/**
 * Shared Editorial Promise — destination may override copy in this module.
 * Tone: editorial trust, never a sales pitch. Editor's Choice badge stays separate.
 */
export const editorialPromise = {
  eyebrow: "Our editorial promise",
  title: "We'll always recommend the experience we'd choose ourselves",
  lead: "We'll always recommend the experience we'd choose ourselves.",
  points: [
    "Sometimes that's one of our carefully selected Editor's Choice excursions.",
    "Sometimes it's a free self-guided experience.",
  ],
  closing: "Our goal is to help you enjoy the best possible day ashore.",
} as const;

export interface EditorialCategoryDef {
  id: EditorialCategory;
  label: string;
  shortLabel: string;
  description: string;
}

export const EDITORIAL_CATEGORIES: EditorialCategoryDef[] = [
  { id: "editors-choice", label: "Editor's Choice", shortLabel: "Editor's Choice", description: "Our strongest overall choice for a well-timed Tangier cruise day." },
  { id: "best-historic", label: "Best Historic Experience", shortLabel: "Historic", description: "Medina, Kasbah and crossroads history within the old quarter." },
  { id: "best-independent", label: "Best Independent Experience", shortLabel: "Walk It Yourself", description: "A realistic self-guided Tangier day within easy reach of the ship — when independence is genuinely best." },
  { id: "best-coastal", label: "Best Coastal Experience", shortLabel: "Coastal", description: "Cape Spartel and the Hercules Caves when you want the Atlantic edge." },
  { id: "best-view", label: "Best Views", shortLabel: "Views", description: "Kasbah terraces, Café Hafa and lighthouse outlooks." },
  { id: "best-got", label: "Signature Experience", shortLabel: "Signature", description: "Our future Tangier small-group flagship, currently in preparation." },
  { id: "best-families", label: "Best for Families", shortLabel: "Families", description: "Manageable Medina walks with sensible pacing." },
  { id: "best-photography", label: "Best Photography", shortLabel: "Photography", description: "Medina colour, Kasbah panoramas and coastal light." },
  { id: "best-food", label: "Best Food & Wine", shortLabel: "Food & Wine", description: "Mint tea, markets and Tangier café culture." },
  { id: "best-luxury", label: "Best Private Tour", shortLabel: "Private", description: "Dedicated transport and flexible pacing for your own party." },
  { id: "hidden-gem", label: "Hidden Gem", shortLabel: "Hidden Gem", description: "Quieter lanes and local stops beyond the busiest squares." },
  { id: "best-value", label: "Best Value", shortLabel: "Best Value", description: "A rewarding port day without unnecessary transfers or expense." },
  { id: "best-short-port", label: "Best Short Port Call", shortLabel: "Short Port", description: "Medina highlights when usable hours are limited." },
];

export interface EditorsCollectionItem {
  id: string;
  emoji: string;
  label: string;
  description: string;
  href: string;
  cta: string;
  signature?: boolean;
  comingSoon?: boolean;
}

export const editorsCollectionItems: EditorsCollectionItem[] = [
  {
    id: "editors-choice",
    emoji: "⭐",
    label: "Editor's Choice",
    description: "Tangier Highlights, Cape Spartel & Hercules Caves — the best first-time balance of city and coast.",
    href: "/shore-excursions/tangier-highlights-cape-spartel-hercules-caves",
    cta: "View our top pick",
  },
  {
    id: "first-time",
    emoji: "⛵",
    label: "Best First-Time Tour",
    description: "Editor's Choice for first-time visitors who want Medina context and coastal highlights in one half day.",
    href: "/shore-excursions/tangier-highlights-cape-spartel-hercules-caves",
    cta: "Discover Tangier",
  },
  {
    id: "historic",
    emoji: "🕌",
    label: "Best Historic Walk",
    description: "Tangier Medina Cultural Walk — souks, squares and Kasbah lanes at a human pace.",
    href: "/shore-excursions/tangier-medina-cultural-walk",
    cta: "Explore on foot",
  },
  {
    id: "food-wine",
    emoji: "🍽️",
    label: "Best Food Experience",
    description: "Tangier Food & Markets Tasting — mint tea and market flavours without leaving the walkable core.",
    href: "/shore-excursions/tangier-food-markets-tasting",
    cta: "Taste Tangier",
  },
  {
    id: "private",
    emoji: "🚗",
    label: "Best Private Day",
    description: "Private Tangier Highlights or Chefchaouen when your party wants flexible pacing.",
    href: "/shore-excursions/private-tangier-highlights-hercules-caves",
    cta: "See private options",
  },
  {
    id: "photography",
    emoji: "📸",
    label: "Best Photography",
    description: "Kasbah viewpoints, Café Hafa and Cape Spartel for Strait and Atlantic light.",
    href: "/guides/best-viewpoints",
    cta: "Find the views",
  },
  {
    id: "families",
    emoji: "👨‍👩‍👧",
    label: "Best for Families",
    description: "Walk It Yourself and manageable Medina routes keep mixed-age parties close to the ship.",
    href: "/guides/one-day-in-tangier",
    cta: "Plan a family day",
  },
  {
    id: "independent",
    emoji: "🚶",
    label: "Walk It Yourself",
    description: "Walking from Tangier port — Medina, Kasbah and mint tea with a generous ship buffer.",
    href: EXPLORE_INDEPENDENTLY_PATH,
    cta: "Open the walking guide",
  },
  {
    id: "signature-experience",
    emoji: "✨",
    label: "Signature Strait of Gibraltar Discovery",
    description: "A future maximum-eight-guest Tangier day, currently in preparation and not bookable.",
    href: SIGNATURE_EXPERIENCE_PATH,
    cta: "Preview the concept",
    signature: true,
    comingSoon: true,
  },
];

export function getEditorialLabel(id: EditorialCategory): string {
  return EDITORIAL_CATEGORIES.find((category) => category.id === id)?.label ?? id;
}
