import type { Comparison } from "./types";

export const comparisons: Comparison[] = [
  {
    slug: "tour-or-independent",
    title: "Tour or Independent?",
    seoTitle: "Tangier Tour or Independent? Honest Cruise Advice",
    metaDescription:
      "Should you book a Tangier shore excursion or explore the Medina independently? Honest comparison for cruise passengers. Practical cruise-day timing, walking.",
    kind: "versus",
    optionA: "Independent",
    optionB: "Guided tour",
    summary:
      "Tangier is one of Morocco's easiest cruise ports to explore on foot. Independence wins for flexible mint-tea days; a guided tour wins for Cape Spartel, Hercules Caves, Chefchaouen and historical narrative.",
    verdict:
      "Choose independence when the Medina and Kasbah are your priority and you enjoy self-paced walking. Choose a tour when you want coastal highlights, mountain days or structured commentary.",
    overview: [
      "Many guests walk from the cruise terminal into the Medina without an organised excursion.",
      "Editor's Choice adds Cape Spartel and the Hercules Caves with cruise-aware timing.",
      "Chefchaouen and long coastal loops almost always need organised transport.",
    ],
    comparisonTable: [
      { category: "Best for", optionA: "Flexible Medina wandering", optionB: "Coast, mountains or guided context" },
      { category: "Cost", optionA: "Lower", optionB: "Higher" },
      { category: "Walking", optionA: "Self-paced lanes", optionB: "Guided pace on uneven surfaces" },
      { category: "Return timing", optionA: "Your responsibility", optionB: "Cruise-aware operator planning" },
      { category: "Beyond the Medina", optionA: "Harder without transport", optionB: "Practical with organised routing" },
    ],
    faqs: [
      {
        question: "Can I explore Tangier without an excursion?",
        answer:
          "Yes. Independent Medina days are common and often excellent.",
      },
      {
        question: "When is a tour clearly better?",
        answer:
          "When you want Cape Spartel, the Hercules Caves, Chefchaouen, guided narrative or private pacing within limited hours.",
      },
    ],
    relatedSlugs: ["first-time-tangier-day", "best-shore-excursions", "medina-or-cape-spartel"],
    imageKey: "compare",
  },
  {
    slug: "medina-or-cape-spartel",
    title: "Medina or Cape Spartel?",
    seoTitle: "Tangier Medina or Cape Spartel & Hercules Caves?",
    metaDescription:
      "Compare Tangier Medina and Cape Spartel for a cruise day — walking, atmosphere, timing and which to prioritise. Practical cruise-day timing, walking advice.",
    kind: "versus",
    optionA: "Medina & Kasbah",
    optionB: "Cape Spartel & caves",
    summary:
      "The Medina is Tangier's essential Moroccan experience on foot. Cape Spartel and the Hercules Caves add the Atlantic edge — but need transport.",
    verdict:
      "First-time visitors should prioritise the Medina independently or on a cultural walk. Add the coast via Editor's Choice when you want both in one half day.",
    overview: [
      "Medina and Kasbah are walkable from many berths; Cape Spartel requires a coastal drive.",
      "Trying both deeply without transport or tight timing creates unnecessary stress.",
    ],
    comparisonTable: [
      { category: "Headline", optionA: "Colourful old quarter", optionB: "Lighthouse and grotto coast" },
      { category: "From port", optionA: "Often walkable", optionB: "Road transfer required" },
      { category: "Atmosphere", optionA: "Souks, lanes, mint tea", optionB: "Atlantic cliffs and views" },
      { category: "Best for", optionA: "First-time Tangier", optionB: "Coast and photography" },
    ],
    faqs: [
      {
        question: "Can I do both?",
        answer:
          "Yes via Editor's Choice or a private half day. On a short call, choose the Medina independently.",
      },
    ],
    relatedSlugs: ["tour-or-independent", "first-time-tangier-day"],
    imageKey: "cape-spartel",
  },
  {
    slug: "best-shore-excursions",
    title: "Best Shore Excursions",
    seoTitle: "Best Tangier Shore Excursions for Cruise Passengers",
    metaDescription:
      "Best Tangier shore excursions compared: Editor's Choice highlights, private days, Medina walks, Chefchaouen and food tastings.",
    kind: "guide",
    summary:
      "Start with Tangier Highlights, Cape Spartel & Hercules Caves for first-timers. Choose Medina walks for city depth, Chefchaouen only on long calls.",
    verdict:
      "Editor's Choice remains the clearest first-time pick. Match everything else to hours ashore and appetite for walking versus road time.",
    overview: [
      "City experiences stay close to the ship and protect timing.",
      "Mountain and full coastal days need honest clock management.",
    ],
    guideItems: [
      {
        name: "Tangier Highlights, Cape Spartel & Hercules Caves",
        slug: "tangier-highlights-cape-spartel-hercules-caves",
        href: "/shore-excursions/tangier-highlights-cape-spartel-hercules-caves",
        reason: "Best introduction — Medina plus coastal highlights.",
        topExcursion: "Tangier Highlights, Cape Spartel & Hercules Caves",
        returnConfidence: "High",
        walkingDifficulty: "Moderate",
      },
      {
        name: "Tangier Medina Cultural Walk",
        slug: "tangier-medina-cultural-walk",
        href: "/shore-excursions/tangier-medina-cultural-walk",
        reason: "Shorter guided circuit within the walkable core.",
        topExcursion: "Tangier Medina Cultural Walk",
        returnConfidence: "Very high",
        walkingDifficulty: "Relaxed–moderate",
      },
      {
        name: "Chefchaouen Blue Pearl Day Trip",
        slug: "chefchaouen-blue-pearl",
        href: "/shore-excursions/chefchaouen-blue-pearl",
        reason: "Blue city day when your call is long enough.",
        topExcursion: "Chefchaouen Blue Pearl Day Trip",
        returnConfidence: "Good with generous buffer",
        walkingDifficulty: "Moderate",
      },
    ],
    faqs: [
      {
        question: "What is Editor's Choice?",
        answer:
          "Tangier Highlights, Cape Spartel & Hercules Caves — selected for first-time cruise visitors who want city and coast in one half day.",
      },
    ],
    relatedSlugs: ["first-time-tangier-day", "tour-or-independent"],
    imageKey: "historic",
  },
  {
    slug: "first-time-tangier-day",
    title: "First-Time Tangier Day",
    seoTitle: "First Time in Tangier on a Cruise — How to Spend the Day",
    metaDescription:
      "First-time Tangier cruise day plan: Medina priorities, Kasbah viewpoints, independent vs tour, and what to skip. Practical cruise-day timing, walking advice.",
    kind: "guide",
    summary:
      "First-timers should anchor the day in the Medina and Kasbah. Add Cape Spartel via Editor's Choice or Chefchaouen only when hours remain.",
    verdict:
      "Do not try to see all of Morocco. See Tangier well — then decide if a future call deserves Chefchaouen.",
    overview: [
      "Walk or take a short taxi from the terminal toward Grand Socco.",
      "Use the Medina for orientation, then climb to the Kasbah for the classic view.",
      "Consider Editor's Choice if you want city and coast with guided timing.",
    ],
    guideItems: [
      {
        name: "Medina",
        slug: "tangier-medina",
        href: "/guides/medina-guide",
        reason: "The essential first Tangier experience.",
        topExcursion: "Tangier Medina Cultural Walk",
        returnConfidence: "Very high on foot with buffer",
        walkingDifficulty: "Moderate",
      },
      {
        name: "Kasbah",
        slug: "tangier-kasbah",
        href: "/guides/kasbah-guide",
        reason: "Viewpoints and fortress calm above the souks.",
        topExcursion: "Tangier Highlights, Cape Spartel & Hercules Caves",
        returnConfidence: "High",
        walkingDifficulty: "Moderate slopes",
      },
      {
        name: "Independent plan",
        slug: "explore-independently",
        href: "/guides/explore-independently",
        reason: "DIY routes when you prefer flexibility.",
        topExcursion: "Walk It Yourself",
        returnConfidence: "Your discipline",
        walkingDifficulty: "Self-paced",
      },
    ],
    faqs: [
      {
        question: "Should first-timers book a tour?",
        answer:
          "Optional. Book for city-and-coast balance or narrative; explore independently if you prefer mint tea and flexible photography time.",
      },
    ],
    relatedSlugs: ["best-shore-excursions", "tour-or-independent", "medina-or-cape-spartel"],
    imageKey: "medina",
  },
];

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}

export function getComparisonDisplayTitle(c: Comparison): string {
  if (c.kind === "versus" && c.optionA && c.optionB) {
    return `${c.optionA} or ${c.optionB}?`;
  }
  return c.title;
}

export function getAllComparisonSlugs(): string[] {
  return comparisons.map((c) => c.slug);
}
