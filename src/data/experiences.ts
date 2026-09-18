import type { GuidePage } from "./types";

export const experiencePages: GuidePage[] = [
  {
    slug: "walking-from-port",
    title: "Walking From The Cruise Port",
    seoTitle: "Walking From Tangier Cruise Port to the Medina",
    metaDescription:
      "How to walk from Tangier cruise terminal into the Medina and Kasbah, typical timing, route tips and when a taxi is smarter.",
    tagline: "One of Morocco's easiest cruise ports to reach on foot — the old quarter begins a short walk from the ship.",
    overview:
      "Tangier's cruise terminal sits close to the city centre. Many guests reach Grand Socco, the Medina and Kasbah within a walkable window, depending on berth and pace.",
    body: [
      "Follow terminal signage toward the city centre rather than wandering the working port.",
      "Expect roughly 15–25 minutes for many berths at a steady pace; allow longer with children, mobility limits or peak crowds.",
      "If heat, luggage or limited mobility are factors, take a short taxi instead of proving a point.",
      "Always leave a buffer to re-clear terminal security before all-aboard.",
    ],
    highlights: [
      "Walkable for many berths",
      "Medina close to cruise terminal",
      "Grand Socco as a visual anchor",
      "Taxi backup always available",
    ],
    tips: [
      "Wear shoes suited to uneven lanes",
      "Mark the terminal entrance on your map before you explore",
      "Morning light on the Kasbah is calmer than mid-afternoon crowds",
    ],
    faqs: [
      {
        question: "Do I need a tour to see Tangier itself?",
        answer:
          "Not necessarily. A walking tour adds context; independent exploration works well when your call is flexible and you prefer your own pace.",
      },
      {
        question: "How long does the walk take?",
        answer:
          "Often around 15–25 minutes to the Medina edge from the main terminal area, depending on berth and route.",
      },
    ],
    recommendations: [
      {
        category: "best-independent",
        title: "Walk It Yourself",
        description: "Full self-guided Medina and Kasbah route when independence is genuinely best.",
        href: "/guides/explore-independently",
      },
    ],
    relatedSlugs: ["explore-independently", "medina-guide", "cruise-tips"],
    imageKey: "walking",
    hubPath: "/guides",
  },
  {
    slug: "explore-independently",
    title: "Walk It Yourself",
    seoTitle: "Walk It Yourself | Independent Tangier Medina & Kasbah Walking Guide",
    metaDescription:
      "A cruise-friendly independent walking guide to Tangier's Medina and Kasbah — route, cafés, viewpoints and honest return-to-ship timing from the cruise port.",
    tagline:
      "Tangier's Medina and Kasbah are close enough to explore on foot from the cruise terminal — often the finest day ashore of all.",
    overview:
      "If you have a clear head, comfortable shoes and a few hours ashore, Tangier rewards independent exploration unusually well. Grand Socco, the Medina lanes, Kasbah viewpoints and mint-tea terraces sit within walking distance of the port. This guide helps you choose that honest option — without pretending a tour is always necessary.",
    body: [
      "Exit the cruise terminal and walk toward Grand Socco — typically 15–25 minutes depending on berth and pace.",
      "Drift through the Medina, pause at Petit Socco, then climb toward the Kasbah for views over the Strait.",
      "Save Cape Spartel, the Hercules Caves and Chefchaouen for days when you book transport — the walkable core is richest at a human pace.",
      "Aim to be back at the terminal 60–90 minutes before all-aboard. Independent days fail only when the buffer is optimistic.",
    ],
    highlights: [
      "Medina walkable from terminal",
      "Flexible pacing and mint-tea stops",
      "No transfer required for core sights",
      "Generous return buffer still essential",
    ],
    tips: [
      "Confirm your all-aboard time before you leave the terminal — then plan backwards",
      "Wear shoes for uneven lanes; the Kasbah climb is gentle but real",
      "Do not cut the return to terminal fine",
    ],
    faqs: [
      {
        question: "Is Tangier safe to explore independently?",
        answer:
          "The terminal-to-Medina area is generally straightforward for cruise visitors using normal city awareness. Crowds thicken around Grand Socco and the souks when several ships are in.",
      },
      {
        question: "When should I book an excursion instead?",
        answer:
          "When you want Cape Spartel, the Hercules Caves, Chefchaouen, guided historical narrative, or limited-mobility support. Tangier Highlights, Cape Spartel & Hercules Caves is the natural next step when a walk alone is not quite enough.",
      },
    ],
    recommendations: [
      {
        category: "editors-choice",
        title: "Tangier Highlights, Cape Spartel & Hercules Caves",
        description:
          "When a self-guided loop is not quite enough — city and coast with guided timing.",
        href: "/shore-excursions/tangier-highlights-cape-spartel-hercules-caves",
      },
    ],
    relatedSlugs: ["walking-from-port", "one-day-in-tangier", "best-viewpoints"],
    imageKey: "walking",
    hubPath: "/guides",
    independentWalk: {
      eyebrow: "Free self-guided route",
      idealFor: [
        "Cruise passengers with 4+ hours ashore",
        "First-time visitors who enjoy walking at their own pace",
        "Photographers and mint-tea explorers",
        "Guests who want Morocco without a long transfer",
      ],
      duration: "3–5 hours",
      distance: "Approximately 4–6 km",
      difficulty: "Easy to moderate — uneven Medina lanes and a gentle climb to the Kasbah",
      bestFor: [
        "Independent explorers",
        "Families comfortable with uneven surfaces",
        "Anyone who prefers café pauses over a fixed itinerary",
      ],
      familyFriendly: true,
      wheelchairFriendly: false,
      recommendedReturnBuffer:
        "Aim to be back at the terminal 60–90 minutes before all-aboard. Independent days fail only when the buffer is optimistic.",
      route: [
        {
          number: 1,
          title: "Arrival from the cruise port",
          description:
            "Exit the terminal area and follow signage toward the city centre. The walk is typically 15–25 minutes depending on berth, pace and route. You will feel the Medina's colour before you reach Grand Socco.",
          durationMinutes: 20,
          tip: "Confirm your all-aboard time before you leave the terminal — then plan backwards.",
        },
        {
          number: 2,
          title: "Grand Socco",
          description:
            "Tangier's great meeting square links the new city to the old. Use it for orientation — the fountain, cafés and lane entrances radiating into the Medina. Let the first moments be about getting your bearings rather than shopping.",
          durationMinutes: 20,
          tip: "If the square feels busy, pause at a café edge and watch the flow before diving into the lanes.",
        },
        {
          number: 3,
          title: "Petit Socco",
          description:
            "The little square deep in the Medina was once the heart of expatriate café society. Today it retains an intimate atmosphere — a natural pause before the deeper souk lanes.",
          durationMinutes: 25,
          tip: "This is a good mint-tea stop if you have not paused yet.",
        },
        {
          number: 4,
          title: "Medina lanes and souks",
          description:
            "Wander the Medina without a rigid checklist. Artisan quarters, spice aromas and narrow passages reward slow walking. A few turns off the main flow, Tangier feels residential rather than performed.",
          durationMinutes: 45,
        },
        {
          number: 5,
          title: "Kasbah",
          description:
            "Climb toward the Kasbah district — whitewashed lanes, fortress walls and a calmer rhythm above the souks. The Kasbah Museum area offers context even if you skip ticketed interiors.",
          durationMinutes: 40,
          tip: "Look for viewpoint terraces as you ascend — the Strait opens below.",
        },
        {
          number: 6,
          title: "Kasbah viewpoints",
          description:
            "Stop at the clearest terrace you find for views over the port, Medina rooftops and the water. You do not need every museum interior for a memorable photograph.",
          durationMinutes: 25,
          tip: "Morning light is kinder; midday can feel brightest on pale Kasbah walls.",
        },
        {
          number: 7,
          title: "American Legation",
          description:
            "If time and opening hours allow, the American Legation Museum is a distinctive Tangier story — the first American public property outside the United States. Even from the exterior, the setting captures Tangier's diplomatic and artistic past.",
          durationMinutes: 30,
          tip: "Check opening times on the day — a short visit fits well before Café Hafa.",
        },
        {
          number: 8,
          title: "Traditional cafés",
          description:
            "Descend toward a traditional café for mint tea and pastries. Tangier's café culture is part of the experience — choose somewhere locals actually sit rather than the loudest terrace on the main drag.",
          durationMinutes: 30,
        },
        {
          number: 9,
          title: "Café Hafa",
          description:
            "If your timing allows, walk out to Café Hafa — terrace tables above the Strait, a Tangier institution since the 1920s. The view is the reward; service is unhurried by design.",
          durationMinutes: 35,
          tip: "Allow extra walking time there and back — do not visit Hafa if your buffer is already tight.",
        },
        {
          number: 10,
          title: "Shopping advice",
          description:
            "Browse if you wish, but buy only what you genuinely want. Fixed prices are rare in souks — polite negotiation is normal. Keep purchases light if you still have walking ahead.",
          durationMinutes: 20,
        },
        {
          number: 11,
          title: "Practical tips en route",
          description:
            "Stay hydrated, watch uneven kerbs, and keep small cash for tea and toilets. Respect photography customs near mosques and private doorways.",
          durationMinutes: 10,
        },
        {
          number: 12,
          title: "Returning safely to the ship",
          description:
            "Trace your steps toward Grand Socco and the port approach while you still have energy. Aim to reach the terminal well before all-aboard — terminal security queues can surprise you on busy turnaround days.",
          durationMinutes: 25,
          tip: "If legs tire, a taxi from Grand Socco to the terminal is inexpensive and sensible.",
        },
      ],
      dontMiss: [
        {
          category: "Best viewpoints",
          title: "Kasbah terrace panoramas",
          description:
            "The classic view over the Medina and port — worth the gentle climb even if you skip museums.",
        },
        {
          category: "Best viewpoints",
          title: "Café Hafa terraces",
          description:
            "Strait views with mint tea — Tangier's most famous café outlook when time allows.",
        },
        {
          category: "Hidden streets",
          title: "Lanes above Petit Socco",
          description:
            "Quieter passages where the Medina still feels lived-in.",
        },
        {
          category: "Architecture",
          title: "Kasbah whitewash and fortress walls",
          description:
            "The contrast between Kasbah calm and Medina bustle defines Tangier.",
        },
        {
          category: "Culture",
          title: "American Legation",
          description:
            "A distinctive diplomatic and artistic chapter in Tangier's story.",
        },
        {
          category: "Photo spots",
          title: "Grand Socco approach",
          description:
            "The gateway moment between new city energy and Medina colour.",
        },
        {
          category: "Markets",
          title: "Medina souk atmosphere",
          description:
            "Spices, textiles and artisan stalls — best enjoyed without a rigid shopping mission.",
        },
        {
          category: "Cafés",
          title: "Mint tea pause",
          description:
            "A proper tea stop is not a delay — it is part of a Tangier day done well.",
        },
      ],
      coffeeStops: [
        {
          name: "Café Hafa",
          description:
            "Terrace tables above the Strait — a Tangier institution. Worth the walk when your buffer allows; skip if time is tight.",
          specialty: "Mint tea with a view",
          nearStop: "Between Kasbah and the coast road",
        },
        {
          name: "Petit Socco café",
          description:
            "An intimate square stop in the heart of the Medina — choose a terrace where locals linger rather than the busiest corner.",
          specialty: "Mint tea and pastries",
          nearStop: "Petit Socco",
        },
      ],
      localTips: [
        {
          label: "Public toilets",
          detail:
            "Use terminal facilities before you leave. In the Medina, cafés and larger hotels are the practical options.",
        },
        {
          label: "Cash / card",
          detail:
            "Carry Moroccan dirhams for small purchases and cafés. Cards work in many places but cash smooths market stops.",
        },
        {
          label: "Water",
          detail:
            "Bring a bottle from the ship. You can restock at small shops near Grand Socco.",
        },
        {
          label: "Wi-Fi",
          detail:
            "Ship Wi-Fi fades once you leave the terminal. Cafés may offer connection for a quick schedule check.",
        },
        {
          label: "Safety",
          detail:
            "Use normal city awareness in crowds around Grand Socco and the souks. Tangier is accustomed to visitors.",
        },
        {
          label: "Accessibility",
          detail:
            "Uneven lanes, steps and the Kasbah climb limit wheelchair access. Stay on flatter routes near Grand Socco if mobility is limited.",
        },
        {
          label: "Best time to walk",
          detail:
            "Earlier morning feels cooler and quieter. Midday brings ship crowds. Late afternoon light on the Kasbah is excellent if all-aboard allows.",
        },
        {
          label: "Shopping advice",
          detail:
            "Browsing is part of the pleasure — haggling is expected in many stalls, but keep it good-humoured. Decide a budget before you enter the densest souk lanes, and never let shopping compress your return buffer. Quality leather, textiles and ceramics reward patience more than the first offer.",
        },
        {
          label: "Dress & courtesy",
          detail:
            "Modest, comfortable clothing suits Medina walking and local expectations. Cover shoulders when visiting religious sites; remove shoes if invited indoors.",
        },
      ],
      backToShip: {
        latestDeparture:
          "Leave Café Hafa or your furthest Kasbah viewpoint early enough for the walk back plus your personal buffer — do not cut it fine from the terraces.",
        walkingTime:
          "Budget 20–35 minutes from Grand Socco / Medina back to the cruise terminal, depending on pace, crowds and exact berth.",
        taxiAlternative:
          "Taxis are available around Grand Socco and main streets if legs tire or heat rises — agree the cruise terminal clearly.",
        safetyMargin:
          "Aim to be back at the terminal 60–90 minutes before all-aboard. Independent days fail only when the buffer is optimistic.",
        notes:
          "If multiple ships are in port, allow extra time through the terminal gate. Comfortable shoes matter more than any packing tip.",
      },
      exploreFurther: {
        excursionSlug: "tangier-highlights-cape-spartel-hercules-caves",
        title: "Want more than a self-guided loop?",
        body: "If you'd like to experience more than a self-guided loop through the Medina — Cape Spartel, the Hercules Caves, or deeper guided context — our Editor's Choice excursion, Tangier Highlights, Cape Spartel & Hercules Caves, is the natural next step. It is never required; it is simply the day we recommend when a walk alone is not quite enough.",
        href: "/shore-excursions/tangier-highlights-cape-spartel-hercules-caves",
        ctaLabel: "Read about Editor's Choice",
      },
    },
  },
  {
    slug: "medina-guide",
    title: "Tangier Medina Guide",
    seoTitle: "Tangier Medina Guide for Cruise Passengers",
    metaDescription:
      "Cruise guide to Tangier's Medina — Grand Socco, souks, lanes and how to enjoy Morocco's colourful old quarter on a port day.",
    tagline: "A labyrinth of colour, spice and artisan life at the foot of the Kasbah.",
    overview:
      "Tangier's Medina is the reason most cruise ships call. It is compact enough for a half day, rich enough to fill longer — and best enjoyed at a human pace.",
    body: [
      "Grand Socco is your anchor; Petit Socco and the souk lanes carry you deeper.",
      "Shopping is part of the atmosphere — polite negotiation is normal.",
      "You can explore independently or join a guided cultural walk for historical context.",
    ],
    highlights: [
      "Grand Socco gateway",
      "Souk atmosphere",
      "Artisan quarters",
      "Walkable from the cruise port",
    ],
    tips: [
      "Visit key lanes early if you want calmer photographs",
      "Uneven surfaces reward sturdy footwear",
    ],
    faqs: [
      {
        question: "How much time do I need in the Medina?",
        answer:
          "Two to four hours covers highlights without rushing. A full day lets you add the Kasbah, cafés and shopping.",
      },
    ],
    relatedSlugs: ["kasbah-guide", "shopping-guide", "walking-from-port"],
    imageKey: "medina",
    hubPath: "/guides",
  },
  {
    slug: "kasbah-guide",
    title: "Tangier Kasbah Guide",
    seoTitle: "Tangier Kasbah Guide — Cruise Visitor Advice",
    metaDescription:
      "Visit Tangier Kasbah from the cruise port: fortress lanes, viewpoints, museum context and timing advice for cruise passengers.",
    tagline: "Whitewashed lanes and fortress walls above the Medina — Tangier at its most serene.",
    overview:
      "The Kasbah crowns Tangier's old quarter. Climb for Strait panoramas, calmer lanes and a different rhythm from the souks below.",
    body: [
      "Expect slopes and uneven surfaces on the ascent.",
      "The Kasbah Museum area adds historical context when open.",
      "Pair the Kasbah with Medina time rather than rushing both as a checklist.",
    ],
    highlights: [
      "Strait viewpoints",
      "Fortress atmosphere",
      "Quieter than souk peaks",
      "Photogenic whitewashed lanes",
    ],
    tips: [
      "Allow time for the climb and descent",
      "Breezes are stronger on open terraces",
    ],
    faqs: [
      {
        question: "Is the Kasbah hard to walk?",
        answer:
          "Moderate for most visitors. Limited-mobility guests may prefer viewpoints closer to Grand Socco.",
      },
    ],
    relatedSlugs: ["best-viewpoints", "medina-guide", "explore-independently"],
    imageKey: "kasbah",
    hubPath: "/guides",
  },
  {
    slug: "food-guide",
    title: "Tangier Food Guide",
    seoTitle: "Tangier Food Guide for Cruise Passengers",
    metaDescription:
      "What to eat in Tangier on a cruise day — mint tea, pastries, tagines and how to taste the city without missing the ship.",
    tagline: "Mint tea, pastries and market flavours inside a walkable Medina.",
    overview:
      "You can eat well without leaving the Medina hinterland. Markets, bakeries and terrace cafés sit close enough to protect a cruise return buffer.",
    body: [
      "Build mint tea into your Medina loop rather than treating food as an afterthought.",
      "A guided tasting walk helps if you want curated stops; otherwise independent café hopping works well.",
      "Mention dietary requirements early if joining a tasting tour.",
    ],
    highlights: [
      "Walkable dining near the centre",
      "Mint tea culture",
      "Market flavours",
      "Protects return-to-ship timing",
    ],
    tips: [
      "Avoid overlong restaurant sittings close to all-aboard",
      "Carry small dirham notes for cafés and stalls",
    ],
    faqs: [
      {
        question: "Should I book a food tour?",
        answer:
          "Book when you want curated tastings and commentary. Explore independently when you prefer choosing cafés as you go.",
      },
    ],
    relatedSlugs: ["explore-independently", "medina-guide", "one-day-in-tangier"],
    imageKey: "food",
    hubPath: "/guides",
  },
  {
    slug: "shopping-guide",
    title: "Tangier Shopping Guide",
    seoTitle: "Tangier Shopping Guide for Cruise Passengers",
    metaDescription:
      "Shopping in Tangier Medina — souks, crafts, negotiation tips and how to buy well without losing your ship buffer. Practical cruise-day timing, walking advice.",
    tagline: "Souks, crafts and colour — how to shop the Medina without stress.",
    overview:
      "Tangier's souks reward curiosity more than urgency. Browse first, buy what you genuinely want, and keep purchases manageable for the walk back.",
    body: [
      "Polite negotiation is normal in traditional shops.",
      "Fixed-price cooperatives can simplify decisions for nervous first-timers.",
      "Do not let shopping compress your return buffer.",
    ],
    highlights: [
      "Textiles and leather",
      "Spices and argan products",
      "Artisan metalwork and ceramics",
      "Grand Socco starting point",
    ],
    tips: [
      "Decide a spending limit before you enter the deepest souks",
      "Keep receipts for customs if buying larger items",
    ],
    faqs: [
      {
        question: "Is bargaining expected?",
        answer:
          "In many traditional shops, yes — politely and good-humouredly. Walk away if the price does not feel right.",
      },
    ],
    relatedSlugs: ["medina-guide", "explore-independently", "cruise-tips"],
    imageKey: "markets",
    hubPath: "/guides",
  },
  {
    slug: "best-viewpoints",
    title: "Best Viewpoints",
    seoTitle: "Best Viewpoints in Tangier for Cruise Visitors",
    metaDescription:
      "Best Tangier viewpoints for cruise passengers — Kasbah terraces, Café Hafa and Cape Spartel over the Strait of Gibraltar.",
    tagline: "Medina rooftops, terrace cafés and the Atlantic edge.",
    overview:
      "Tangier is a viewpoint city. The finest photographs usually come from Kasbah terraces and Café Hafa rather than street level alone.",
    body: [
      "Arrive early for clearer light and fewer shoulders at popular terraces.",
      "Cape Spartel requires transport — plan an organised half day or private car.",
      "Do not sacrifice your ship buffer for one more panorama.",
    ],
    highlights: [
      "Kasbah terraces",
      "Café Hafa outlook",
      "Cape Spartel lighthouse",
      "Strait panoramas",
    ],
    tips: [
      "Keep phones secured on breezy terraces",
      "Editor's Choice reaches Cape Spartel with cruise-aware timing",
    ],
    faqs: [
      {
        question: "What is the single best viewpoint?",
        answer:
          "Kasbah terraces for Medina and port views; Café Hafa for Strait atmosphere; Cape Spartel for the Atlantic meeting point.",
      },
    ],
    relatedSlugs: ["kasbah-guide", "explore-independently", "one-day-in-tangier"],
    imageKey: "viewpoints",
    hubPath: "/guides",
  },
  {
    slug: "one-day-in-tangier",
    title: "One Day In Tangier",
    seoTitle: "One Day in Tangier from a Cruise Ship",
    metaDescription:
      "How to spend one day in Tangier on a cruise: Medina, Kasbah, food, timing and when to stay independent versus book a tour.",
    tagline: "A realistic cruise-day plan for Tangier — without pretending you can see all of Morocco.",
    overview:
      "One day in Tangier is enough for a memorable Medina and Kasbah core. It is not enough for Chefchaouen depth plus city wandering. Choose a priority.",
    body: [
      "Morning: walk from port to Grand Socco and the Medina.",
      "Late morning: climb to the Kasbah for viewpoints.",
      "Afternoon: mint tea, optional Café Hafa, shopping or a guided highlights tour — then return with a buffer.",
      "Leave Chefchaouen for fuller calls only.",
    ],
    highlights: [
      "Medina first",
      "Kasbah viewpoints",
      "Mint-tea buffer time",
      "Honest scope for one call",
    ],
    tips: [
      "Pick one beyond-city option at most — never two",
      "Confirm all-aboard before you leave the terminal",
    ],
    faqs: [
      {
        question: "Is one day enough?",
        answer:
          "Yes for the Medina, Kasbah and a coastal half day. No for Chefchaouen plus full city depth. Match ambition to hours ashore.",
      },
    ],
    relatedSlugs: ["explore-independently", "cruise-tips", "tour-or-independent"],
    imageKey: "historic",
    hubPath: "/guides",
  },
  {
    slug: "cruise-tips",
    title: "Tangier Cruise Tips",
    seoTitle: "Tangier Cruise Tips — Port Day Advice",
    metaDescription:
      "Practical Tangier cruise tips: walking from port, money, timing, mobility and how to protect your return to the ship. Practical cruise-day timing, walking.",
    tagline: "Practical advice for a composed Tangier port day.",
    overview:
      "Tangier is welcoming and walkable, but uneven lanes, heat and all-aboard timing still decide whether the day feels elegant or stressed.",
    body: [
      "Plan from all-aboard, not published departure.",
      "Wear shoes for uneven surfaces; carry a light layer for breezy viewpoints.",
      "Independent exploration is realistic; organised tours help with coast, mountains and narrative.",
    ],
    highlights: [
      "All-aboard first",
      "Lane-ready footwear",
      "Walkable Medina",
      "Taxi backup for mobility",
    ],
    tips: [
      "Screenshot offline maps",
      "Carry small dirham notes for tea and stalls",
    ],
    faqs: [
      {
        question: "What should I pack for a Tangier shore day?",
        answer:
          "Comfortable walking shoes, a light layer, water, sun protection, and offline confirmation of your all-aboard time.",
      },
    ],
    relatedSlugs: ["cruise-faq", "walking-from-port", "explore-independently"],
    imageKey: "port",
    hubPath: "/guides",
  },
  {
    slug: "cruise-faq",
    title: "Tangier Cruise FAQ",
    seoTitle: "Tangier Cruise FAQ — Shore Day Questions Answered",
    metaDescription:
      "Tangier cruise FAQ: Can I explore without a tour? How far is the Medina? How much walking? Is Tangier suitable for limited mobility?",
    tagline: "Straight answers for cruise passengers planning Tangier.",
    overview:
      "These are the questions we hear most often from guests deciding between independence and an organised Tangier day.",
    body: [
      "Tangier is unusually easy to explore without an excursion — that honesty is intentional.",
      "Tours still help for coast, mountains and guided context.",
      "Never trade your return buffer for one more stop.",
    ],
    highlights: [
      "Independent exploration is viable",
      "Medina is walkable for many",
      "Tours add reach and context",
      "Mobility needs planning",
    ],
    tips: [
      "Read walking-from-port before you decide",
      "Compare tour vs independent honestly",
    ],
    faqs: [
      {
        question: "Can I explore Tangier without an excursion?",
        answer:
          "Yes. Many visitors walk into the Medina independently and have an excellent day.",
      },
      {
        question: "How far is the Medina from the cruise port?",
        answer:
          "Often around 15–25 minutes on foot from the terminal area, depending on berth and pace.",
      },
      {
        question: "Should I book a tour?",
        answer:
          "Book for Cape Spartel, Hercules Caves, Chefchaouen, guided narrative, or private pacing. Skip if you prefer flexible Medina wandering.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "Uneven lanes and gentle Kasbah slopes are normal. Coastal and mountain days use more transport and less continuous walking.",
      },
      {
        question: "Is Tangier suitable for limited mobility?",
        answer:
          "Parts are challenging because of uneven surfaces and steps. Ask about private or panoramic formats and consider a taxi from the terminal.",
      },
      {
        question: "How much free time should I allow?",
        answer:
          "Protect 60–90 minutes before all-aboard after sightseeing. Chefchaouen days need additional road traffic contingency.",
      },
    ],
    relatedSlugs: ["cruise-tips", "explore-independently", "walking-from-port"],
    imageKey: "compare",
    hubPath: "/guides",
  },
];

export function getExperienceBySlug(slug: string): GuidePage | undefined {
  return experiencePages.find((p) => p.slug === slug);
}

export function getAllExperienceSlugs(): string[] {
  return experiencePages.map((p) => p.slug);
}
