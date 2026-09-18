/**
 * World 2.0 Destination Configuration — Tangier Shore Excursions
 *
 * Domain is the single source of truth for canonicals, sitemap, OG, JSON-LD and Worker CORS.
 * Do not hard-code the hostname elsewhere.
 */

import type { DestinationCurrencyCode } from "@/lib/commerce/currency";

export type DestinationRegion =
  | "europe"
  | "caribbean"
  | "alaska"
  | "british-isles"
  | "other";

/**
 * CENTRAL — public contact is info@wowatour.com only (default until forwarding works).
 * LOCAL — display hello@ / bookings@ / privacy@ on the destination domain.
 */
export type ContactMode = "central" | "local";

export type DestinationConfig = {
  slug: string;
  name: string;
  destination: string;
  descriptor: string;
  strapline: string;
  domain: string;
  url: string;
  description: string;
  locale: string;
  region: DestinationRegion;
  currency: DestinationCurrencyCode;
  bookingRefPrefix: string;
  pagesProject: string;
  paymentsWorkerName: string;
  d1DatabaseName: string;
  /**
   * Public contact presentation. Keep `central` until destination email
   * forwarding (hello/bookings/privacy) is configured, then switch to `local`.
   */
  contactMode: ContactMode;
  /** Destination-local addresses — used only when contactMode is `local`. */
  contact: {
    hello: string;
    bookings: string;
    privacy: string;
  };
  legal: {
    tradingName: string;
    legalCompanyName: string;
    companyNumber: string;
    registeredJurisdiction: string;
    registeredOfficeLines: string[];
    registeredOfficeFormatted: string;
  };
  port: {
    scheduleSlug: string;
    meetingPointLabel: string;
    country: string;
  };
  seo: {
    defaultKeywords: string[];
  };
  nav: readonly { href: string; label: string }[];
  experienceCategories: readonly string[];
};

export const destinationConfig = {
  slug: "tangier",
  name: "Tangier Shore Excursions",
  destination: "Tangier",
  descriptor: "Shore Excursions",
  strapline: "Where Europe Meets Africa",
  domain: "tangiershoreexcursion.com",
  url: "https://tangiershoreexcursion.com",
  description:
    "Independent cruise shore excursions and honest port guidance for Tangier — where Europe meets Africa on a Mediterranean cruise day.",
  locale: "en_GB",
  region: "europe",
  currency: "EUR",
  bookingRefPrefix: "TG",
  pagesProject: "tangier-shore-excursions",
  paymentsWorkerName: "tangier-payments",
  d1DatabaseName: "tangier-bookings",
  contactMode: "central",
  contact: {
    hello: "hello@tangiershoreexcursion.com",
    bookings: "bookings@tangiershoreexcursion.com",
    privacy: "privacy@tangiershoreexcursion.com",
  },
  legal: {
    tradingName: "Tangier Shore Excursions",
    legalCompanyName: "Wow A Tour Ltd",
    companyNumber: "11426960",
    registeredJurisdiction: "England and Wales",
    registeredOfficeLines: [
      "Kintyre House",
      "70 High Street",
      "Fareham",
      "Hampshire",
      "United Kingdom",
      "PO16 7BB",
    ],
    registeredOfficeFormatted:
      "Kintyre House, 70 High Street, Fareham, Hampshire, United Kingdom, PO16 7BB",
  },
  port: {
    scheduleSlug: "tangier",
    meetingPointLabel: "Tangier Cruise Port",
    country: "Morocco",
  },
  seo: {
    defaultKeywords: [
      "Tangier shore excursions",
      "Tangier cruise excursions",
      "Tangier cruise port guide",
      "Tangier Medina cruise",
      "Cape Spartel shore excursion",
      "Chefchaouen day trip Tangier",
      "Morocco cruise port",
    ],
  },
  nav: [
    { href: "/compare", label: "Compare" },
    { href: "/shore-excursions", label: "Excursions" },
    { href: "/guides", label: "Guides" },
    { href: "/wow-collection", label: "Wow Collection" },
    { href: "/cruise-planner", label: "Planner" },
    { href: "/cruise-port-guide", label: "Port Guide" },
  ],
  experienceCategories: [
    "History",
    "Culture",
    "Markets",
    "Walking",
    "Photography",
    "Food",
    "Families",
    "Walk It Yourself",
    "Editor's Choice",
  ],
} as const satisfies DestinationConfig;

export type AppDestinationConfig = typeof destinationConfig;
