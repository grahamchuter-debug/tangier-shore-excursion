import type { ExcursionPage } from "./types";

const PORT_LOGISTICS =
  "Cruise ships berth at Tangier’s cruise terminal on the Strait of Gibraltar, close enough to the city centre that the Medina and Kasbah are often reachable on foot for independent explorers. Cape Spartel and the Hercules Caves sit beyond the urban core and require road transport. Chefchaouen is a full-day journey into the Rif Mountains — rewarding only when your port call supports the road time. Confirm your ship’s all-aboard time — not merely the published departure — and aim to be back at the terminal 60–90 minutes early. Longer mountain or coastal days need the larger end of that buffer.";

const SEG_SUPPLIER = {
  kind: "shore-excursions-group" as const,
  name: "Shore Excursions Group",
  notes: "Partner network — confirm availability for your sailing",
};

const RETURN_GUARANTEE =
  "Return to ship guarantee: itineraries are planned around your Tangier cruise call so you are back at the terminal with time before all-aboard. If an operational delay on our side causes you to miss the ship, we work with the local provider under the published return-to-ship assurance for that booking.";

export const excursions: ExcursionPage[] = [
  {
    slug: "tangier-highlights-cape-spartel-hercules-caves",
    title: "Tangier Highlights, Cape Spartel & Hercules Caves",
    seoTitle: "Tangier Highlights, Cape Spartel & Hercules Caves | Editor's Choice",
    metaDescription:
      "Editor's Choice Tangier shore excursion — Medina, Kasbah, Cape Spartel lighthouse and Hercules Caves in a small-group cruise day with return-to-ship planning.",
    category: "Editor's Choice",
    tagline:
      "The balanced introduction: historic Tangier within the walls, then the Atlantic edge at Cape Spartel and the Hercules Caves.",
    duration: "Approximately 4 hours",
    pace: "Moderate",
    bestFor:
      "First-time cruise visitors who want both the Medina/Kasbah atmosphere and the coastal highlights beyond comfortable walking distance",
    overview:
      "Tangier rewards two kinds of discovery — the labyrinthine Medina and Kasbah within reach of the port, and the lighthouse cliffs and cave chambers where the Atlantic meets the Mediterranean. This Editor’s Choice day combines both in a small-group format paced for cruise timing.",
    body: [
      "We chose this excursion because Tangier’s essential contrast is city and coast. Walking alone covers the Medina beautifully; Cape Spartel and the Hercules Caves sit beyond a practical independent stroll for most cruise windows.",
      "The format typically opens with Kasbah and Medina orientation — Grand Socco, Petit Socco, lanes and viewpoints — before a short coastal drive to Cape Spartel and the cave visit.",
      "Guests who prefer a slower café-led wander through the Medina alone may be happier exploring independently. That is a genuinely good choice from this port.",
      "Exact sequencing flexes with group pace, traffic and ship timing. Expect some uneven surfaces in the old quarter and steps at cave viewpoints.",
    ],
    highlights: [
      "Medina and Kasbah orientation with commentary",
      "Grand Socco and Petit Socco atmosphere",
      "Cape Spartel lighthouse and Atlantic views",
      "Hercules Caves visit",
      "Small-group pacing with cruise-aware return planning",
    ],
    itinerary: [
      {
        title: "Meet near the cruise port",
        detail:
          "Join your guide close to the terminal area and confirm timing against your all-aboard.",
      },
      {
        title: "Kasbah and Medina highlights",
        detail:
          "Walk key lanes, squares and viewpoints within the historic quarter with local context.",
      },
      {
        title: "Cape Spartel",
        detail:
          "Drive to the lighthouse promontory where the Atlantic and Mediterranean meet.",
      },
      {
        title: "Hercules Caves",
        detail:
          "Visit the famous grotto chambers with time for photographs before the return drive.",
      },
      {
        title: "Return to ship",
        detail:
          "Return toward the terminal with a deliberate buffer before all-aboard.",
      },
    ],
    included: [
      "Port meeting and return planning in Tangier",
      "English-speaking guide commentary",
      "Transport to Cape Spartel and Hercules Caves",
      "Medina and Kasbah orientation",
      "Return planned around the ship’s all-aboard",
    ],
    notIncluded: [
      "Entrance fees unless stated on your voucher",
      "Lunch and personal purchases",
      "Gratuities",
      "Hotel or airport transfers",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Wear comfortable shoes — Medina lanes are uneven",
      "Bring a light layer; Cape Spartel can be breezy",
      "If you want maximum unstructured Medina wandering, consider exploring independently instead",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Why is this Editor's Choice?",
        answer:
          "It is the best first-time balance: historic Tangier within the walls plus the coastal highlights that need transport — all within a realistic half-day format for cruise passengers.",
      },
      {
        question: "Can I see the Medina without this tour?",
        answer:
          "Yes. The Medina and Kasbah are walkable from the port for many guests. Choose this excursion when you also want Cape Spartel, the Hercules Caves and guided orientation in one timed day.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "Moderate walking on historic surfaces in the Medina, plus short walks at coastal stops. Guests with limited mobility should ask about cave steps and pacing in advance.",
      },
    ],
    relatedExcursionSlugs: [
      "private-tangier-highlights-hercules-caves",
      "tangier-medina-cultural-walk",
      "tangier-food-markets-tasting",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — Medina lanes and coastal viewpoints",
    cruiseSuitability: "Best with a solid half day or more usable time ashore",
    editorChoice: true,
    whyWeChose: {
      lead: "Tangier’s finest cruise-day contrast is the Medina’s colour and the Atlantic edge — best combined when transport and timing are handled for you.",
      whyRecommended:
        "First-time visitors often want both worlds. This experience delivers Kasbah and Medina context, then reaches Cape Spartel and the Hercules Caves without you negotiating taxis on a tight clock.",
      whoItSuits:
        "Curious first-timers, photography-minded guests and anyone who wants city and coast in one composed half day.",
      whatMakesItSpecial:
        "You leave with the Medina’s atmosphere and the lighthouse views — not a rushed choice between walking and driving.",
      cruiseFit:
        "A half-day format that protects return timing better than stacking independent Medina time with ad hoc coastal taxis.",
      theExperience:
        "You understand why Tangier is one of the easiest ports to taste Morocco — and you still reach the ship with composure.",
    },
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "private-tangier-highlights-hercules-caves",
    title: "Private Half Day Tangier Highlights and Hercules Caves",
    seoTitle: "Private Tangier Highlights & Hercules Caves Shore Excursion",
    metaDescription:
      "Private half-day Tangier shore excursion — Medina, Kasbah, Cape Spartel and Hercules Caves at your party’s pace with cruise-timed returns.",
    category: "Luxury",
    tagline: "Your own vehicle, your own rhythm — historic Tangier and the Hercules Caves without sharing the day.",
    duration: "Approximately 5 hours",
    pace: "Relaxed",
    bestFor:
      "Families, couples and small groups who want flexible pacing and private transport between the Medina and the coast",
    overview:
      "A private format lets you linger at a Kasbah viewpoint, pause for mint tea, or spend longer at the Hercules Caves without a fixed group schedule. The same essential Tangier story — old quarter and Atlantic edge — shaped around your party.",
    body: [
      "Private transport removes the friction of coordinating coastal legs while protecting your return buffer.",
      "Your guide adjusts commentary and stops to your interests — architecture, photography, shopping or simply absorbing the Medina’s rhythm.",
      "Guests on a tight budget or those happy with a self-guided Medina loop may not need this format.",
    ],
    highlights: [
      "Private vehicle and dedicated guide",
      "Medina, Kasbah and coastal highlights",
      "Flexible pacing for your party",
      "Cape Spartel and Hercules Caves",
      "Cruise-aware return planning",
    ],
    itinerary: [
      {
        title: "Private meet at port",
        detail: "Meet your guide and driver at the cruise terminal area.",
      },
      {
        title: "Historic Tangier",
        detail: "Explore Kasbah lanes, squares and viewpoints at your party’s pace.",
      },
      {
        title: "Coastal drive",
        detail: "Transfer to Cape Spartel and the Hercules Caves with time for photographs.",
      },
      {
        title: "Return",
        detail: "Drive back with a conservative buffer before all-aboard.",
      },
    ],
    included: [
      "Private transport from the cruise port area",
      "English-speaking private guide",
      "Medina, Kasbah and coastal routing",
      "Return planned around all-aboard",
    ],
    notIncluded: [
      "Entrance fees unless stated on your voucher",
      "Lunch and personal purchases",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Share mobility needs and interests when you enquire",
      "Private format suits mixed-age families well",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "How is this different from Editor's Choice?",
        answer:
          "Editor’s Choice is a small-group shared format. This is private — your vehicle, your pacing, typically slightly longer.",
      },
    ],
    relatedExcursionSlugs: [
      "tangier-highlights-cape-spartel-hercules-caves",
      "private-chefchaouen-discovery",
      "tangier-medina-cultural-walk",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate at Medina stops; light at coastal viewpoints",
    cruiseSuitability: "Best with half a day or more ashore",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "chefchaouen-blue-pearl",
    title: "Small Group Chefchaouen Blue Pearl Day Trip",
    seoTitle: "Chefchaouen Blue Pearl Day Trip from Tangier Cruise Port",
    metaDescription:
      "Small-group Chefchaouen day trip from Tangier — the Blue Pearl of the Rif Mountains for cruise passengers with honest road-time advice.",
    category: "Scenic Drives",
    tagline: "The Blue Pearl of the Rif — a full mountain day when your port call allows the journey.",
    duration: "Approximately 8 hours",
    pace: "Moderate",
    bestFor:
      "Guests with a long port call who deliberately want Chefchaouen’s blue-washed lanes over a second Medina wander",
    overview:
      "Chefchaouen is Morocco’s most photogenic mountain town — powder-blue walls, Rif light and a slower rhythm than port-side Tangier. The reward is exceptional; the cost is road time from the cruise terminal.",
    body: [
      "Be honest with the clock: Chefchaouen is not a quick add-on after a Medina morning. Choose it when the blue city is your priority.",
      "The drive into the Rif is part of the experience — switchback views and changing landscape.",
      "In town, expect steep lanes, artisan shops and viewpoints that reward unhurried walking.",
      "If your call is short, stay in Tangier independently or choose the Editor’s Choice coastal day instead.",
    ],
    highlights: [
      "Chefchaouen’s blue-washed medina",
      "Rif Mountain scenery en route",
      "Photography-friendly lanes and squares",
      "Small-group format with cruise-timed return",
      "Best on a long, unhurried port call",
    ],
    itinerary: [
      {
        title: "Depart Tangier",
        detail: "Meet at the cruise port and drive toward the Rif Mountains.",
      },
      {
        title: "Chefchaouen exploration",
        detail: "Walk the blue medina, main square and selected viewpoints with your guide.",
      },
      {
        title: "Free time",
        detail: "Time for lunch, shopping or photographs before the return drive.",
      },
      {
        title: "Return to ship",
        detail: "Drive back with a generous all-aboard buffer.",
      },
    ],
    included: [
      "Round-trip transport from Tangier cruise port",
      "English-speaking guide commentary",
      "Chefchaouen medina orientation",
      "Return planned around all-aboard",
    ],
    notIncluded: [
      "Lunch unless stated on your voucher",
      "Personal purchases",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Only choose this with a solid full day ashore",
      "Wear comfortable shoes for steep medina lanes",
      "Do not attempt Chefchaouen on a short call",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Can I do Tangier Medina and Chefchaouen in one day?",
        answer:
          "Not properly. Pick one priority and protect your return to the ship.",
      },
      {
        question: "How much road time is involved?",
        answer:
          "Expect meaningful driving each way. Exact timing varies with traffic — plan from all-aboard, not best-case estimates.",
      },
    ],
    relatedExcursionSlugs: [
      "private-chefchaouen-discovery",
      "tangier-highlights-cape-spartel-hercules-caves",
      "tangier-medina-cultural-walk",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — steep medina lanes in Chefchaouen",
    cruiseSuitability: "Requires a long, unhurried port call",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "private-chefchaouen-discovery",
    title: "Private Chefchaouen Discovery",
    seoTitle: "Private Chefchaouen Discovery from Tangier Cruise Port",
    metaDescription:
      "Private Chefchaouen day from Tangier cruise port — the Blue Pearl at your party’s pace with flexible stops and cruise-timed returns.",
    category: "Luxury",
    tagline: "Private transport into the Rif — Chefchaouen shaped around your interests and your ship’s clock.",
    duration: "Approximately 7 hours",
    pace: "Relaxed",
    bestFor:
      "Small groups who want Chefchaouen without a shared coach schedule and with room for pauses en route",
    overview:
      "The same Blue Pearl destination as the small-group day, but with private vehicle flexibility — linger for photographs, adjust lunch timing, or add a scenic stop when the road allows.",
    body: [
      "Private format suits families and photographers who want control over pacing in steep medina lanes.",
      "Road time remains significant; this does not shrink the geography.",
      "On shorter calls, Tangier’s walkable core is the smarter choice.",
    ],
    highlights: [
      "Private vehicle and dedicated guide",
      "Chefchaouen medina at your pace",
      "Flexible stops en route when timing allows",
      "Photography-friendly format",
      "Conservative return planning",
    ],
    itinerary: [
      {
        title: "Private departure",
        detail: "Meet your driver-guide at the terminal and confirm the day against all-aboard.",
      },
      {
        title: "Rif drive",
        detail: "Scenic transfer into the mountains toward Chefchaouen.",
      },
      {
        title: "Blue city exploration",
        detail: "Walk the medina with flexibility for shops, cafés and viewpoints.",
      },
      {
        title: "Return",
        detail: "Drive back with a generous buffer before all-aboard.",
      },
    ],
    included: [
      "Private round-trip transport",
      "English-speaking private guide",
      "Chefchaouen orientation",
    ],
    notIncluded: [
      "Lunch and personal purchases",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Confirm usable hours ashore before booking",
      "Share photography or shopping priorities when you enquire",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Is private worth it over the small-group trip?",
        answer:
          "When pacing, family needs or photography stops matter more than cost — yes. The road time is similar either way.",
      },
    ],
    relatedExcursionSlugs: [
      "chefchaouen-blue-pearl",
      "private-tangier-highlights-hercules-caves",
      "tangier-highlights-cape-spartel-hercules-caves",
    ],
    featured: false,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — steep lanes in Chefchaouen",
    cruiseSuitability: "Long port call only",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "tangier-medina-cultural-walk",
    title: "Tangier Medina Cultural Walk",
    seoTitle: "Tangier Medina Cultural Walk — Shore Excursion",
    metaDescription:
      "Guided Tangier Medina cultural walk for cruise passengers — Grand Socco, Kasbah lanes, markets and architecture without leaving the walkable core.",
    category: "Walking",
    tagline: "A focused walking introduction to the Medina, Kasbah and the stories woven through Tangier’s lanes.",
    duration: "Approximately 3 hours",
    pace: "Relaxed",
    bestFor:
      "Guests who want guided context within the old quarter without a coastal drive",
    overview:
      "This walking format concentrates on Tangier’s human-scale heritage — squares, souks, Kasbah viewpoints and architectural layers — while staying close enough to the ship that return timing stays straightforward.",
    body: [
      "Ideal when the Medina is your priority and you are happy to skip Cape Spartel for another visit or a future call.",
      "A guide helps decode the mix of Moroccan, European and artistic histories that make Tangier unlike any other port.",
      "Independent explorers who prefer café pauses over commentary may enjoy our Walk It Yourself guide instead.",
    ],
    highlights: [
      "Grand Socco and Petit Socco orientation",
      "Medina lanes and market atmosphere",
      "Kasbah viewpoints as timing allows",
      "Walking format near the cruise port",
      "Time left for independent exploration",
    ],
    itinerary: [
      {
        title: "Meet near the port approach",
        detail: "Join your guide and set a comfortable walking pace toward the old quarter.",
      },
      {
        title: "Medina and squares",
        detail: "Explore key lanes, souks and squares with cultural commentary.",
      },
      {
        title: "Kasbah viewpoints",
        detail: "Ascend to selected viewpoints when pace and mobility allow.",
      },
      {
        title: "Free time",
        detail: "Finish near a practical return point for independent time or the terminal.",
      },
    ],
    included: [
      "English-speaking walking guide",
      "Medina and Kasbah orientation",
      "Cruise-aware pacing",
    ],
    notIncluded: [
      "Entrance fees unless stated on your voucher",
      "Food and drinks",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Comfortable shoes for uneven lanes",
      "Excellent when you also want unstructured mint-tea time",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Is this different from Editor's Choice?",
        answer:
          "Yes. This stays within the walkable core. Editor’s Choice adds Cape Spartel and the Hercules Caves by road.",
      },
    ],
    relatedExcursionSlugs: [
      "tangier-highlights-cape-spartel-hercules-caves",
      "tangier-food-markets-tasting",
      "private-tangier-highlights-hercules-caves",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Relaxed to moderate — historic lanes",
    cruiseSuitability: "Works well on shorter or flexible port calls",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "tangier-food-markets-tasting",
    title: "Tangier Food & Markets Tasting",
    seoTitle: "Tangier Food & Markets Tasting Shore Excursion",
    metaDescription:
      "Tangier food and markets tasting for cruise passengers — mint tea, pastries, souk flavours and local restaurants within the Medina.",
    category: "Food",
    tagline: "Mint tea, pastries and market flavours — Tangier culture you can taste.",
    duration: "Approximately 3 hours",
    pace: "Relaxed",
    bestFor:
      "Food-curious guests who want Moroccan flavours without a long transfer from the cruise port",
    overview:
      "Tangier’s food story lives in its markets, bakeries and café terraces. This experience keeps you in the walkable Medina while tasting the city through guided stops and local context.",
    body: [
      "You do not need to leave the old quarter to eat well. Staying central protects your return buffer.",
      "Dietary requirements should be raised at booking. Exact venues flex with season and group size.",
      "Guests seeking a pure history walk should choose the Medina Cultural Walk or Editor’s Choice instead.",
    ],
    highlights: [
      "Guided tasting stops in the Medina",
      "Market and café culture context",
      "Walkable format close to the cruise port",
      "Mint tea and pastry traditions",
      "Cruise-aware pacing",
    ],
    itinerary: [
      {
        title: "Meet in the Medina approach",
        detail: "Join near the old quarter and outline the tasting route.",
      },
      {
        title: "Market and tasting stops",
        detail: "Sample local flavours with commentary on Moroccan food culture.",
      },
      {
        title: "Café pause",
        detail: "Finish with mint tea or a pastry stop before returning toward the ship.",
      },
    ],
    included: [
      "English-speaking food guide",
      "Included tastings as stated on your voucher",
      "Central Medina routing",
    ],
    notIncluded: [
      "Additional food and drinks beyond included tastings",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Mention allergies when you enquire or book",
      "Wear comfortable shoes — tasting walks still use uneven lanes",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Is this a full meal?",
        answer:
          "It is a tasting experience rather than a formal restaurant lunch. Expect several samples; hungry guests may still want a later meal.",
      },
    ],
    relatedExcursionSlugs: [
      "tangier-medina-cultural-walk",
      "tangier-highlights-cape-spartel-hercules-caves",
      "chefchaouen-blue-pearl",
    ],
    featured: false,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Relaxed — short distances between stops",
    cruiseSuitability: "Strong option for shorter or flexible calls",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
];

export function getFeaturedExcursions(): ExcursionPage[] {
  return excursions.filter((e) => e.featured);
}

export function getExcursionBySlug(slug: string): ExcursionPage | undefined {
  return excursions.find((e) => e.slug === slug);
}

export function getAllExcursionSlugs(): string[] {
  return excursions.map((e) => e.slug);
}

export function getEditorsChoiceExcursions(): ExcursionPage[] {
  return excursions.filter((e) => e.editorChoice === true);
}
