/**
 * Central cruise-positioning + Your Day Ashore experience categories.
 * Reusable World 2.0 pattern — destination copy lives here; component stays generic.
 */
export const cruisePositioning = {
  enabled: true,
  eyebrow: "Designed for Cruise Passengers",
  message: "Helping cruise passengers make every hour ashore count.",
  variantBMessage: "Everything here is built around your time in port.",
  activeVariant: "A" as "A" | "B",
  showDayAshoreSection: true,
} as const;

export function getCruiseTrustMessage(): string {
  if (cruisePositioning.activeVariant === "B") {
    return cruisePositioning.variantBMessage;
  }
  return cruisePositioning.message;
}

export interface DayAshoreItem {
  id: string;
  title: string;
  body: string;
  href?: string;
  icon: "clock" | "route" | "walk" | "sunrise" | "viewpoint" | "food" | "family" | "luxury";
}

export const dayAshoreIntro =
  "Where will your day in Tangier take you? Choose the experience that fits your hours ashore — then build everything around your ship's schedule.";

export const dayAshoreItems: DayAshoreItem[] = [
  {
    id: "history",
    title: "History",
    body: "Kasbah walls, Grand Socco and centuries at the crossroads of continents.",
    href: "/guides/kasbah-guide",
    icon: "route",
  },
  {
    id: "culture",
    title: "Culture",
    body: "Medina lanes, the American Legation and Tangier's artistic past.",
    href: "/guides/medina-guide",
    icon: "route",
  },
  {
    id: "markets",
    title: "Markets",
    body: "Souks, spices and artisan quarters in the colourful Medina.",
    href: "/guides/shopping-guide",
    icon: "sunrise",
  },
  {
    id: "walking",
    title: "Walking",
    body: "Uneven lanes and Kasbah slopes — Tangier rewards a human pace near the ship.",
    href: "/shore-excursions/tangier-medina-cultural-walk",
    icon: "walk",
  },
  {
    id: "photography",
    title: "Photography",
    body: "Kasbah terraces, Café Hafa and the Atlantic edge at Cape Spartel.",
    href: "/guides/best-viewpoints",
    icon: "viewpoint",
  },
  {
    id: "food",
    title: "Food",
    body: "Mint tea, pastries and market flavours without leaving the walkable core.",
    href: "/guides/food-guide",
    icon: "food",
  },
  {
    id: "families",
    title: "Families",
    body: "Manageable Medina walks and terrace pauses when travelling with children.",
    href: "/guides/one-day-in-tangier",
    icon: "family",
  },
  {
    id: "walk-it-yourself",
    title: "Walk It Yourself",
    body: "A self-guided Medina and Kasbah route for one of Morocco's easiest cruise ports to explore on foot.",
    href: "/guides/explore-independently",
    icon: "walk",
  },
  {
    id: "editors-choice",
    title: "Editor's Choice",
    body: "Tangier Highlights, Cape Spartel & Hercules Caves — our favourite first-time introduction.",
    href: "/shore-excursions/tangier-highlights-cape-spartel-hercules-caves",
    icon: "luxury",
  },
];
