import type { AttractionPage } from "./types";

export const highlights: AttractionPage[] = [
  {
    slug: "tangier-medina",
    title: "Tangier Medina",
    seoTitle: "Tangier Medina from the Cruise Port",
    metaDescription:
      "Visit Tangier's Medina from the cruise port — Grand Socco, souks, lanes and how long you need ashore. Practical cruise-day timing, walking advice and.",
    attractionName: "Tangier Medina",
    tagline: "Colour, spice and artisan life — walkable from the ship.",
    overview:
      "Tangier's Medina is the heart of a Moroccan cruise call: Grand Socco, Petit Socco, souk lanes and the climb toward the Kasbah.",
    body: [
      "Grand Socco anchors most visits; deeper lanes reward slow walking.",
      "Many cruise guests reach the Medina on foot from the terminal.",
      "A guided cultural walk adds context; independent wandering is equally valid.",
    ],
    distanceFromPort: "Walkable from most cruise berths",
    travelTime: "Often 15–25 minutes on foot",
    timeNeeded: "2–4 hours for highlights; a full day for a slower pace",
    gettingThere: [
      {
        method: "Walk",
        detail: "Follow terminal signage toward Grand Socco and the old quarter.",
        time: "15–25 min typical",
        cost: "Free",
      },
      {
        method: "Taxi",
        detail: "Short hop if mobility, heat or time pressure matter.",
        time: "5–10 min",
        cost: "Low–moderate",
      },
    ],
    highlights: [
      "Grand Socco gateway",
      "Souk atmosphere",
      "Petit Socco cafés",
      "Artisan quarters",
    ],
    tips: [
      "Wear sturdy shoes for uneven lanes",
      "Protect a return buffer before all-aboard",
    ],
    faqs: [
      {
        question: "Can I see the Medina without a tour?",
        answer:
          "Yes. Many passengers explore independently. Book a tour when you want historical narrative or coastal additions.",
      },
    ],
    relatedAttractionSlugs: ["grand-socco", "tangier-kasbah", "cafe-hafa"],
    relatedExcursionSlug: "tangier-medina-cultural-walk",
  },
  {
    slug: "tangier-kasbah",
    title: "Tangier Kasbah",
    seoTitle: "Tangier Kasbah Cruise Guide",
    metaDescription:
      "Tangier Kasbah for cruise visitors — fortress lanes, viewpoints and timing tips. Practical cruise-day advice and return-to-ship guidance.",
    attractionName: "Tangier Kasbah",
    tagline: "Whitewashed lanes and Strait panoramas above the Medina.",
    overview:
      "The Kasbah crowns Tangier's old quarter — calmer than the souks, with terrace views over the port and water.",
    body: [
      "Expect slopes and uneven surfaces.",
      "Pair with Medina time rather than treating either as a drive-by.",
    ],
    distanceFromPort: "Above the Medina walk from the port",
    travelTime: "Additional 20–30 minutes from Grand Socco",
    timeNeeded: "1–2 hours including viewpoints",
    gettingThere: [
      {
        method: "Walk from Medina",
        detail: "Climb via Kasbah lanes from Grand Socco or Petit Socco approaches.",
        time: "20–30 min",
        cost: "Free",
      },
    ],
    highlights: [
      "Strait viewpoints",
      "Fortress walls",
      "Kasbah Museum area",
      "Photography stops",
    ],
    tips: ["Breezy terraces — secure phones and hats"],
    faqs: [
      {
        question: "Is the Kasbah difficult?",
        answer:
          "Moderate for most walkers. Limited-mobility guests may prefer viewpoints closer to Grand Socco.",
      },
    ],
    relatedAttractionSlugs: ["tangier-medina", "best-viewpoints"],
    relatedExcursionSlug: "tangier-highlights-cape-spartel-hercules-caves",
  },
  {
    slug: "grand-socco",
    title: "Grand Socco",
    seoTitle: "Grand Socco Tangier — Cruise Visitor Guide",
    metaDescription:
      "Grand Socco for Tangier cruise passengers — the gateway square between new city and Medina. Practical timing and walking advice.",
    attractionName: "Grand Socco",
    tagline: "The gateway between modern Tangier and the Medina.",
    overview:
      "Grand Socco is where most visitors orient themselves — fountain, cafés and lane entrances into the old quarter.",
    body: [
      "Use the square as a meeting point and navigation anchor.",
      "It can be busy when several ships are in — morning is calmer.",
    ],
    distanceFromPort: "Walk from cruise terminal",
    travelTime: "Often 15–25 minutes on foot",
    timeNeeded: "30–60 minutes, or longer with a café stop",
    gettingThere: [
      {
        method: "Walk from port",
        detail: "Follow city-centre signage toward the square.",
        time: "15–25 min typical",
        cost: "Free",
      },
    ],
    highlights: [
      "Orientation anchor",
      "Café terraces",
      "Medina entrances",
      "Taxi pickup point",
    ],
    tips: ["Keep valuables secure in crowded moments"],
    faqs: [
      {
        question: "Is Grand Socco worth lingering?",
        answer:
          "Yes as an orientation point — then explore deeper lanes and the Kasbah for atmosphere.",
      },
    ],
    relatedAttractionSlugs: ["tangier-medina", "tangier-kasbah"],
    relatedExcursionSlug: "tangier-medina-cultural-walk",
  },
  {
    slug: "cafe-hafa",
    title: "Café Hafa",
    seoTitle: "Café Hafa Tangier — Terrace Views for Cruise Guests",
    metaDescription:
      "Café Hafa for Tangier cruise visitors — mint tea terraces above the Strait, walking time and when to visit on a port day.",
    attractionName: "Café Hafa",
    tagline: "Mint tea above the Strait — a Tangier institution since the 1920s.",
    overview:
      "Café Hafa's terrace tables look out over the water toward Spain. The view is the reward; service is unhurried by design.",
    body: [
      "Allow extra walking time from the Kasbah — do not visit if your ship buffer is tight.",
      "Pair with a Medina morning rather than treating it as a rushed add-on.",
    ],
    distanceFromPort: "Beyond central Medina — walk from Kasbah area",
    travelTime: "Roughly 15–20 minutes from Kasbah viewpoints",
    timeNeeded: "45–75 minutes including tea",
    gettingThere: [
      {
        method: "Walk from Kasbah",
        detail: "Descend toward the coast road and follow signs to Café Hafa.",
        time: "15–20 min",
        cost: "Tea purchase",
      },
    ],
    highlights: [
      "Strait panoramas",
      "Mint tea tradition",
      "Artistic Tangier atmosphere",
      "Classic photograph",
    ],
    tips: ["Visit only when your return buffer is comfortable"],
    faqs: [
      {
        question: "Can I fit Café Hafa on a short call?",
        answer:
          "Only if you keep the Medina loop disciplined. On tight calls, prioritise Grand Socco and the Kasbah.",
      },
    ],
    relatedAttractionSlugs: ["best-viewpoints", "tangier-kasbah"],
    relatedExcursionSlug: "tangier-highlights-cape-spartel-hercules-caves",
  },
  {
    slug: "cape-spartel",
    title: "Cape Spartel",
    seoTitle: "Cape Spartel from Tangier Cruise Port",
    metaDescription:
      "Cape Spartel lighthouse and Atlantic views for Tangier cruise passengers — transport, timing and Editor's Choice context.",
    attractionName: "Cape Spartel",
    tagline: "Where the Atlantic meets the Mediterranean — beyond walking distance for most cruise days.",
    overview:
      "Cape Spartel's lighthouse promontory offers classic Strait views. It requires road transport from the Medina — an organised half day keeps timing sane.",
    body: [
      "Independent taxis are possible but cruise windows favour planned excursions.",
      "Often paired with the Hercules Caves on the same coastal loop.",
    ],
    distanceFromPort: "Short drive west of Tangier centre",
    travelTime: "Typically 20–30 minutes by road each way",
    timeNeeded: "1–2 hours including photographs",
    gettingThere: [
      {
        method: "Organised excursion / private car",
        detail: "Coastal drive from the port or Medina meeting point.",
        time: "20–30 min each way",
        cost: "Included on tours",
      },
    ],
    highlights: [
      "Lighthouse promontory",
      "Atlantic and Mediterranean views",
      "Coastal photography",
      "Pairs with Hercules Caves",
    ],
    tips: ["Bring a light layer — exposed and breezy"],
    faqs: [
      {
        question: "Can I walk to Cape Spartel?",
        answer:
          "Not practically on a cruise day. Book Editor's Choice or a private coastal day for sensible timing.",
      },
    ],
    relatedAttractionSlugs: ["hercules-caves", "best-viewpoints"],
    relatedExcursionSlug: "tangier-highlights-cape-spartel-hercules-caves",
  },
  {
    slug: "hercules-caves",
    title: "Hercules Caves",
    seoTitle: "Hercules Caves Tangier — Cruise Shore Day Guide",
    metaDescription:
      "Hercules Caves near Tangier for cruise passengers — visit timing, steps and how to combine with Cape Spartel. Practical cruise-day timing, walking advice and.",
    attractionName: "Hercules Caves",
    tagline: "Legendary grotto chambers at the Atlantic edge of Tangier.",
    overview:
      "The Hercules Caves are Tangier's famous coastal grotto — a natural frame for photographs and mythology alike.",
    body: [
      "Expect steps and uneven surfaces at the cave entrance.",
      "Combine with Cape Spartel on the same coastal routing.",
    ],
    distanceFromPort: "West of Tangier — coastal road",
    travelTime: "With Cape Spartel coastal loop",
    timeNeeded: "30–60 minutes at the site",
    gettingThere: [
      {
        method: "Organised excursion / private car",
        detail: "Coastal drive, often paired with Cape Spartel.",
        time: "Part of half-day loop",
        cost: "Entrance may apply",
      },
    ],
    highlights: [
      "Grotto chambers",
      "Atlantic outlook",
      "Mythological association",
      "Photography stop",
    ],
    tips: ["Wear sturdy shoes for cave steps"],
    faqs: [
      {
        question: "Is the cave visit strenuous?",
        answer:
          "Moderate for most guests. Ask about mobility if steps are a concern.",
      },
    ],
    relatedAttractionSlugs: ["cape-spartel", "best-viewpoints"],
    relatedExcursionSlug: "tangier-highlights-cape-spartel-hercules-caves",
  },
  {
    slug: "chefchaouen",
    title: "Chefchaouen",
    seoTitle: "Chefchaouen Day Trip from Tangier Cruise Port",
    metaDescription:
      "Chefchaouen Blue Pearl from Tangier cruise port — honest road-time advice for the Rif Mountains day trip. Practical cruise-day timing, walking advice and.",
    attractionName: "Chefchaouen",
    tagline: "The Blue Pearl of the Rif — a full mountain day when your port call allows.",
    overview:
      "Chefchaouen's blue-washed medina is one of Morocco's most photogenic towns — reachable from Tangier only with meaningful road time.",
    body: [
      "Choose Chefchaouen when the blue city is your deliberate priority.",
      "Do not attempt on a short call alongside a full Medina day.",
    ],
    distanceFromPort: "Rif Mountains — significant road journey",
    travelTime: "Multi-hour round trip depending on traffic",
    timeNeeded: "Full day ashore",
    gettingThere: [
      {
        method: "Organised day trip / private car",
        detail: "Mountain drive from Tangier cruise port.",
        time: "Full day",
        cost: "Tour or private hire",
      },
    ],
    highlights: [
      "Blue-washed medina",
      "Rif Mountain scenery",
      "Photography lanes",
      "Artisan shopping",
    ],
    tips: ["Only with a long, unhurried port call"],
    faqs: [
      {
        question: "Chefchaouen or Tangier Medina?",
        answer:
          "Medina for first-time Tangier on a typical call. Chefchaouen when the blue city is worth the road time.",
      },
    ],
    relatedAttractionSlugs: ["tangier-medina"],
    relatedExcursionSlug: "chefchaouen-blue-pearl",
  },
  {
    slug: "best-viewpoints",
    title: "Best Viewpoints",
    seoTitle: "Best Viewpoints in Tangier",
    metaDescription:
      "Best Tangier viewpoints for cruise passengers — Kasbah terraces, Café Hafa and Cape Spartel. Practical cruise-day timing and walking advice.",
    attractionName: "Tangier Viewpoints",
    tagline: "Medina rooftops, terrace cafés and lighthouse cliffs.",
    overview:
      "Tangier's finest views come from Kasbah terraces, Café Hafa and — with transport — Cape Spartel.",
    body: [
      "Walkable viewpoints suit independent days.",
      "Coastal cliffs need organised or private transport.",
    ],
    distanceFromPort: "Kasbah walkable; Cape Spartel by road",
    travelTime: "Varies by viewpoint",
    timeNeeded: "45–90 minutes for city views; half day with coast",
    gettingThere: [
      {
        method: "Walk to Kasbah / Hafa",
        detail: "From Medina on foot.",
        time: "Included in city walk",
        cost: "Free terraces; café purchase at Hafa",
      },
      {
        method: "Tour to Cape Spartel",
        detail: "Editor's Choice or private coastal day.",
        time: "Half-day loop",
        cost: "Tour price when live",
      },
    ],
    highlights: [
      "Kasbah panoramas",
      "Café Hafa",
      "Cape Spartel lighthouse",
      "Strait views",
    ],
    tips: ["Do not sacrifice ship buffer for one more panorama"],
    faqs: [
      {
        question: "What is the classic independent viewpoint?",
        answer:
          "Kasbah terraces over the Medina and port — with Café Hafa if time allows.",
      },
    ],
    relatedAttractionSlugs: ["tangier-kasbah", "cafe-hafa", "cape-spartel"],
    relatedExcursionSlug: "tangier-highlights-cape-spartel-hercules-caves",
  },
];

export function getHighlightBySlug(slug: string): AttractionPage | undefined {
  return highlights.find((h) => h.slug === slug);
}

export function getAllHighlightSlugs(): string[] {
  return highlights.map((h) => h.slug);
}
