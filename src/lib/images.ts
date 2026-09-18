export interface SiteImage {
  src: string;
  alt: string;
  base: string;
}

const B = "/images";

function img(base: string, alt: string): SiteImage {
  return { base, src: `${B}/${base}.jpg`, alt };
}

export const siteImages = {
  hero: img(
    "hero",
    "Tangier Medina rooftops and the Strait of Gibraltar — Morocco from the cruise port",
  ),
  ogDefault: img(
    "og-default",
    "Grand Socco and Tangier Medina — Tangier Shore Excursions",
  ),
  logo: {
    base: "logo-mark",
    src: `${B}/logo-mark.svg`,
    alt: "Tangier Shore Excursions",
  },
  port: img("cruise-port", "Tangier cruise port on the Strait of Gibraltar"),
} as const;

export const subjectImages: Record<string, SiteImage> = {
  historic: img("historic", "Historic Tangier Medina lanes and Kasbah architecture"),
  coast: img("coastal", "Tangier coastline and Strait of Gibraltar views"),
  coastal: img("coastal", "Tangier coastline and Strait of Gibraltar views"),
  walking: img("walking", "Walking Tangier Medina from the cruise terminal"),
  food: img("food-and-wine", "Mint tea and Tangier café culture"),
  "food-and-wine": img("food-and-wine", "Mint tea, pastries and Tangier food culture"),
  private: img("private", "Private Tangier shore excursion with dedicated transport"),
  photography: img("photography", "Kasbah viewpoints and Tangier photography spots"),
  wine: img("food-and-wine", "Tangier dining and Moroccan flavours"),
  compare: img("compare", "Comparing Tangier shore excursion options"),
  port: img("cruise-port", "Tangier cruise passenger terminal"),
  highlights: img("medina", "Tangier Medina highlights for cruise visitors"),
  city: img("historic", "Historic Tangier old quarter from the cruise port"),
  nature: img("coastal", "Atlantic coast near Tangier at Cape Spartel"),
  family: img("family", "Family-friendly Medina walk in Tangier"),
  "hero-home": img("hero-home", "Tangier Medina colour — where Europe meets Africa"),
  medina: img("medina", "Tangier Medina souks and colourful lanes"),
  kasbah: img("kasbah", "Tangier Kasbah whitewashed lanes and fortress walls"),
  "cape-spartel": img("cape-spartel", "Cape Spartel lighthouse above the Atlantic"),
  "hercules-caves": img("hercules-caves", "Hercules Caves grotto near Tangier"),
  "cafe-hafa": img("cafe-hafa", "Café Hafa terrace views over the Strait of Gibraltar"),
  chefchaouen: img("chefchaouen", "Chefchaouen blue medina in the Rif Mountains"),
  markets: img("markets", "Tangier Medina markets and artisan stalls"),
  viewpoints: img("viewpoints", "Kasbah viewpoint over Tangier Medina and the port"),
  "grand-socco": img("medina", "Grand Socco gateway to Tangier Medina"),
};

function pick(key: string): SiteImage {
  return subjectImages[key] ?? siteImages.ogDefault;
}

const excursionImageKeys: Record<string, string> = {
  "tangier-highlights-cape-spartel-hercules-caves": "cape-spartel",
  "private-tangier-highlights-hercules-caves": "private",
  "chefchaouen-blue-pearl": "chefchaouen",
  "private-chefchaouen-discovery": "chefchaouen",
  "tangier-medina-cultural-walk": "medina",
  "tangier-food-markets-tasting": "food",
};

export function getExcursionImage(slug: string): SiteImage {
  return pick(excursionImageKeys[slug] ?? "highlights");
}

export const excursionsHubImage = pick("medina");

const highlightImageKeys: Record<string, string> = {
  "tangier-medina": "medina",
  "tangier-kasbah": "kasbah",
  "grand-socco": "medina",
  "cafe-hafa": "cafe-hafa",
  "cape-spartel": "cape-spartel",
  "hercules-caves": "hercules-caves",
  chefchaouen: "chefchaouen",
  "best-viewpoints": "viewpoints",
};

const comparisonImageKeys: Record<string, string> = {
  "tour-or-independent": "compare",
  "medina-or-cape-spartel": "cape-spartel",
  "best-shore-excursions": "highlights",
  "first-time-tangier-day": "medina",
};

export function getComparisonImage(slug: string): SiteImage {
  return pick(comparisonImageKeys[slug] ?? "compare");
}

export function getHighlightImage(slug: string): SiteImage {
  return pick(highlightImageKeys[slug] ?? "highlights");
}

export function getExperienceImage(slug: string): SiteImage {
  return pick(slug);
}

export const guidesHubImage = pick("highlights");

const guideImageKeys: Record<string, string> = {
  historic: "historic",
  walking: "walking",
  compare: "compare",
  port: "port",
  food: "food",
  private: "private",
  coast: "coast",
  coastal: "coastal",
  nature: "coastal",
  photography: "photography",
  medina: "medina",
  kasbah: "kasbah",
  markets: "markets",
  viewpoints: "viewpoints",
};

export function getGuideImage(imageKey: string): SiteImage {
  return pick(guideImageKeys[imageKey] ?? imageKey);
}

export function getHotelImage(_slug?: string): SiteImage {
  return pick("city");
}

export function getTransferImage(_slug?: string): SiteImage {
  return pick("private");
}
