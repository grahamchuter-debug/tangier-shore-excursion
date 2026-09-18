import type { ExperienceCard, FAQ, VisitorType } from "./types";

export const homepageTagline =
  "Where Europe meets Africa — Morocco within reach of your ship.";

export const homepageSubheading =
  "Tangier is one of the easiest ports to experience Morocco on a cruise day. Wander the Medina and Kasbah on foot, or join an organised excursion to Cape Spartel, the Hercules Caves and beyond.";

export const homepageDestinationLine =
  "Medina · Kasbah · Grand Socco · Cape Spartel · Hercules Caves · Chefchaouen";

export const visitorTypes: VisitorType[] = [
  {
    id: "port-day",
    label: "I'm visiting Tangier for the day on a cruise",
    shortLabel: "Port day",
    description:
      "Match your hours ashore to the Medina, Kasbah, coastal highlights or a Chefchaouen mountain day — with a proper return buffer.",
    href: "/shore-excursions",
    cta: "Plan my port day",
  },
  {
    id: "first-time",
    label: "It's my first time in Tangier",
    shortLabel: "First visit",
    description:
      "Compare walking the Medina independently, our Editor's Choice city-and-coast day, or venturing to the Blue Pearl before you choose.",
    href: "/compare/first-time-tangier-day",
    cta: "See first-time picks",
  },
  {
    id: "independent",
    label: "I prefer to explore independently",
    shortLabel: "Independent",
    description:
      "Tangier's Medina and Kasbah are walkable from the cruise port — many guests enjoy Morocco without an organised tour.",
    href: "/guides/explore-independently",
    cta: "Walk It Yourself",
  },
  {
    id: "planner",
    label: "I want help choosing my day",
    shortLabel: "Cruise planner",
    description:
      "Tell us your port times, interests, mobility and pace for a tailored Tangier plan.",
    href: "/cruise-planner",
    cta: "Use the planner",
  },
];

export interface HomeSection {
  slug: string;
  number: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}

export const coreSections: HomeSection[] = [
  {
    slug: "excursions",
    number: "01",
    title: "Shore excursions",
    description:
      "Carefully selected experiences across historic Tangier, Cape Spartel, the Hercules Caves and Chefchaouen — designed around cruise timing.",
    href: "/shore-excursions",
    cta: "Browse excursions",
  },
  {
    slug: "guides",
    number: "02",
    title: "Port & city guides",
    description:
      "Honest advice on walking from the cruise port, the Medina, Kasbah, viewpoints and when an organised tour actually helps.",
    href: "/guides",
    cta: "Read the guides",
  },
  {
    slug: "schedules",
    number: "03",
    title: "Cruise ship schedule",
    description:
      "Ship call data for Tangier will appear here once confirmed schedules are available for publication.",
    href: "/ship-schedules",
    cta: "View schedules",
  },
];

export const spiritOfPlace = {
  title: "Where continents lean toward each other.",
  body: [
    "Tangier has inspired travellers, artists and writers for generations because it refuses a single identity. Here Europe meets Africa across the Strait, the Mediterranean meets the Atlantic at Cape Spartel, and Berber, Arab and European layers still colour the same Medina lanes. The atmosphere is not a staged set — it is lived-in: mint tea poured from height, laundry above the souks, whitewashed Kasbah walls catching the light.",
    "We write like an independent cruise concierge rather than a tour brochure: fewer recommendations, clearer trade-offs, and always a plan that protects your return to the ship. Guided days add reach beyond the walls; walking the Medina independently is often the finest choice of all.",
  ],
};

export const honestAdvicePoints = [
  {
    title: "The Medina is genuinely close",
    body: "Many cruise passengers walk into Tangier's historic quarter from the terminal. Independent exploration is a first-class option — not a consolation prize.",
  },
  {
    title: "Coast and mountains need transport",
    body: "Cape Spartel, the Hercules Caves and Chefchaouen sit beyond comfortable walking distance. Organised excursions or private transport matter when those are your priorities.",
  },
  {
    title: "All-aboard beats published departure",
    body: "Plan from the moment you must be aboard, then add a buffer. The ship will not wait for one more mint tea.",
  },
];

export function getHomepageFaqs(): FAQ[] {
  return [
    {
      question: "Can I explore Tangier without an excursion?",
      answer:
        "Yes. Tangier is one of the most rewarding cruise ports for independent exploration. Many visitors walk into the Medina and Kasbah, pause for mint tea and return on foot with a sensible buffer. An organised excursion becomes especially useful for Cape Spartel, the Hercules Caves, Chefchaouen or guided historical narrative.",
    },
    {
      question: "How far is the Medina from the cruise port?",
      answer:
        "Typically a walkable distance for many berths — often around 15–25 minutes depending on terminal exit, pace and route. Exact timing varies; follow port signage and allow extra time if mobility is limited.",
    },
    {
      question: "Should I book a tour?",
      answer:
        "Book a tour when you want Cape Spartel and the Hercules Caves, Chefchaouen, guided Medina context with less navigation effort, or private pacing for your party. Skip a tour when you prefer flexible wandering, café time and self-paced photography in the old quarter.",
    },
    {
      question: "What is your Editor's Choice excursion?",
      answer:
        "Tangier Highlights, Cape Spartel & Hercules Caves — the best first-time balance of Medina, Kasbah and coastal highlights in a half-day format.",
    },
  ];
}

export const featuredExperienceCards: ExperienceCard[] = [
  {
    slug: "editors-choice",
    type: "guided",
    title: "Editor's Choice",
    eyebrow: "Our top pick",
    description:
      "Tangier Highlights, Cape Spartel & Hercules Caves — city and coast in one balanced cruise day.",
    href: "/shore-excursions/tangier-highlights-cape-spartel-hercules-caves",
    cta: "View Editor's Choice",
    imageKey: "cape-spartel",
  },
  {
    slug: "explore-independently",
    type: "walk-it-yourself",
    title: "Walk It Yourself",
    eyebrow: "Free self-guided route",
    description:
      "Historic Medina & Kasbah at your own pace — often the finest day ashore from the cruise port.",
    href: "/guides/explore-independently",
    cta: "Open the walking guide",
    imageKey: "medina",
    duration: "3–5 hours",
    distance: "Approximately 4–6 km",
    difficulty: "Easy to moderate",
    idealFor: "Independent cruise passengers",
  },
  {
    slug: "moroccan-culture",
    type: "history",
    title: "Moroccan Culture",
    description:
      "Markets, history and architecture — the layered stories behind Tangier's colourful lanes.",
    href: "/guides/medina-guide",
    cta: "Explore the Medina",
    imageKey: "markets",
  },
  {
    slug: "food-cafes",
    type: "food-wine",
    title: "Food & Cafés",
    description:
      "Mint tea, pastries and local restaurants woven through the Medina.",
    href: "/guides/food-guide",
    cta: "Taste Tangier",
    imageKey: "food",
  },
  {
    slug: "best-views",
    type: "photography",
    title: "Best Views",
    description:
      "Kasbah viewpoints, Café Hafa and the Atlantic edge at Cape Spartel.",
    href: "/guides/best-viewpoints",
    cta: "Find viewpoints",
    imageKey: "viewpoints",
  },
];

export const experienceCards: ExperienceCard[] = [
  {
    slug: "editors-choice",
    type: "guided",
    title: "Editor's Choice",
    description:
      "Tangier Highlights, Cape Spartel & Hercules Caves — our favourite first-time introduction.",
    href: "/shore-excursions/tangier-highlights-cape-spartel-hercules-caves",
    cta: "View Editor's Choice",
    imageKey: "cape-spartel",
  },
  {
    slug: "explore-independently",
    type: "walk-it-yourself",
    title: "Walk It Yourself",
    eyebrow: "Free self-guided route",
    description: "Historic Medina & Kasbah — self-guided route for one of Morocco's easiest cruise ports to explore on foot.",
    href: "/guides/explore-independently",
    cta: "Walk It Yourself",
    imageKey: "medina",
    duration: "3–5 hours",
    distance: "4–6 km",
    difficulty: "Easy to moderate",
    idealFor: "Independent explorers",
  },
  {
    slug: "moroccan-culture",
    type: "custom",
    title: "Moroccan Culture",
    description: "Markets, history and architecture in the Medina and Kasbah.",
    href: "/guides/medina-guide",
    cta: "Discover culture",
    imageKey: "markets",
  },
  {
    slug: "food-cafes",
    type: "food-wine",
    title: "Food & Cafés",
    description: "Mint tea, pastries and local restaurants without leaving the walkable core.",
    href: "/guides/food-guide",
    cta: "Taste Tangier",
    imageKey: "food",
  },
  {
    slug: "best-views",
    type: "photography",
    title: "Best Views",
    description: "Kasbah terraces, Café Hafa and Cape Spartel over the Strait.",
    href: "/guides/best-viewpoints",
    cta: "Find viewpoints",
    imageKey: "viewpoints",
  },
  {
    slug: "walking",
    type: "history",
    title: "Walking",
    description: "Medina lanes and Kasbah slopes at a human pace near the ship.",
    href: "/shore-excursions/tangier-medina-cultural-walk",
    cta: "Guided Medina walk",
    imageKey: "walking",
  },
  {
    slug: "families",
    type: "families",
    title: "Families",
    description: "Manageable Medina walks and open viewpoints when travelling with children.",
    href: "/guides/one-day-in-tangier",
    cta: "Family-friendly planning",
    imageKey: "family",
  },
  {
    slug: "private",
    type: "private",
    title: "Private Experiences",
    description: "Flexible private pacing when your party wants the day shaped around you.",
    href: "/shore-excursions/private-tangier-highlights-hercules-caves",
    cta: "Browse private options",
    imageKey: "private",
  },
];

/** Homepage hero — destination copy (components stay generic). */
export const homepageHero = {
  eyebrow: "Tangier Shore Excursions",
  headline: homepageTagline,
  subheading: homepageSubheading,
  destinationLine: homepageDestinationLine,
  primaryCta: { href: "/shore-excursions", label: "Explore Shore Excursions" },
  secondaryCta: { href: "/guides/explore-independently", label: "Walk It Yourself" },
} as const;

export interface ChooseYourDayCard {
  slug: string;
  emoji: string;
  title: string;
  tagline: string;
  highlights: readonly string[];
  cta: string;
  href: string;
  imageKey: string;
  wide?: boolean;
}

export const chooseYourDay = {
  eyebrow: "Choose Your Day",
  title: "How would you like to experience Tangier?",
  subtitle:
    "Walk the Medina independently, immerse yourself in Moroccan culture, or join our Editor's Choice adventure beyond the city walls — three clear paths shaped around your hours ashore.",
  cards: [
    {
      slug: "explore-independently",
      emoji: "🚶",
      title: "Explore Independently",
      tagline:
        "A carefully paced Medina and Kasbah walking guide for one of the easiest ports to taste Morocco on foot.",
      highlights: [
        "Walkable distance from many berths",
        "Grand Socco, Petit Socco and Medina lanes",
        "Kasbah viewpoints at your pace",
        "Mint tea and café recommendations",
        "Honest return-to-ship buffers",
      ],
      cta: "Open Walk It Yourself",
      href: "/guides/explore-independently",
      imageKey: "walking",
      wide: true,
    },
    {
      slug: "moroccan-culture",
      emoji: "🕌",
      title: "Discover Moroccan Culture",
      tagline:
        "Markets, architecture and centuries of crossroads history — guided context when you want the stories behind the colour.",
      highlights: [
        "Medina souks and artisan quarters",
        "Kasbah history and viewpoints",
        "American Legation and artistic Tangier",
        "Food and market tasting options",
        "Stays close to the ship",
      ],
      cta: "Explore culture",
      href: "/guides/medina-guide",
      imageKey: "markets",
      wide: true,
    },
    {
      slug: "editors-choice-adventure",
      emoji: "🌊",
      title: "Editor's Choice Adventure",
      tagline:
        "Medina, Kasbah, Cape Spartel and the Hercules Caves — city and coast when you want both in one composed half day.",
      highlights: [
        "Our strongest first-time recommendation",
        "Historic Tangier within the walls",
        "Cape Spartel lighthouse views",
        "Hercules Caves visit",
        "Small-group cruise-aware timing",
      ],
      cta: "View Editor's Choice",
      href: "/shore-excursions/tangier-highlights-cape-spartel-hercules-caves",
      imageKey: "cape-spartel",
      wide: false,
    },
  ] as const satisfies readonly ChooseYourDayCard[],
};

export const honestAdviceContent = {
  eyebrow: "Honest advice",
  title: "Do You Need a Shore Excursion in Tangier?",
  subtitle:
    "The honest answer: Tangier is one of the easiest cruise ports to experience Morocco independently. Many visitors happily walk the Medina and Kasbah. Guided excursions are ideal when you want Cape Spartel, the Hercules Caves, Chefchaouen, or simply clearer structure for your hours ashore.",
  independent: {
    title: "You can explore Tangier independently — and many passengers do",
    body: "The Medina and Kasbah sit within walking distance of the cruise port, making a flexible, lower-cost day realistic for most guests:",
    items: [
      "Grand Socco and Petit Socco",
      "Medina lanes and souk atmosphere",
      "Kasbah viewpoints over the port",
      "Mint tea at a traditional café before walking back",
    ],
    note: "Set a 60–90 minute return buffer and confirm your all-aboard time. The ship will not wait.",
  },
  organised: {
    title: "When a guided day is the better choice",
    body: "Organised commentary and transport matter when you want more than wandering — or when you leave the walkable core:",
    items: [
      {
        label: "Editor's Choice",
        detail: "Medina, Kasbah, Cape Spartel and Hercules Caves in one timed half day",
      },
      {
        label: "Coastal highlights",
        detail: "Cape Spartel and the caves beyond comfortable walking distance",
      },
      {
        label: "Chefchaouen",
        detail: "the Blue Pearl in the Rif Mountains — full-day road time",
      },
      {
        label: "Private format",
        detail: "flexible pacing for families and photography-minded parties",
      },
    ],
  },
  links: [
    { href: "/compare/tour-or-independent", label: "Tour or independent?" },
    { href: "/guides/explore-independently", label: "Walk It Yourself" },
    { href: "/guides/walking-from-port", label: "Walking from the cruise port" },
  ],
} as const;

export const featuredSectionCopy = {
  eyebrow: "When you're ready",
  title: "Featured shore excursions",
  subtitle:
    "Curated Tangier experiences planned around your cruise day. Live booking opens once EUR selling prices and fulfilment routes are verified.",
} as const;
