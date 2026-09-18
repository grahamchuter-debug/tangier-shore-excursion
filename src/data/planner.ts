import { SIGNATURE_EXPERIENCE_PATH, signatureTangierExperience } from "./signature-experience";

export interface PlannerInput {
  arrivalTime?: string;
  departureTime?: string;
  adults: number;
  children: number;
  interests: string[];
  mobility: "full" | "some" | "limited";
  budget: "budget" | "mid" | "premium";
  travelStyle: "diy" | "guided";
}

export interface PlannerLink {
  label: string;
  href: string;
  why: string;
}

export interface PlannerResult {
  headline: string;
  summary: string;
  excursions: PlannerLink[];
  transfers: PlannerLink[];
  stay: PlannerLink[];
  logistics: PlannerLink[];
  dayPlan: { time: string; text: string }[];
}

export const PLANNER_VISITOR_TYPES = [
  {
    id: "independent",
    label: "Independent Tangier explorer",
    description: "A low-risk city day using walking, mint tea and your own return buffer.",
  },
  {
    id: "medina",
    label: "First-time Medina visitor",
    description: "A guided Medina introduction with cultural context and free time afterwards.",
  },
  {
    id: "coastal",
    label: "City & coast traveller",
    description: "Editor's Choice — Medina, Kasbah, Cape Spartel and Hercules Caves.",
  },
  {
    id: "mountain",
    label: "Chefchaouen mountain traveller",
    description: "The Blue Pearl when your port call supports the Rif road time.",
  },
] as const;

export const INTEREST_OPTIONS = [
  { id: "medina", label: "Tangier Medina" },
  { id: "kasbah", label: "Kasbah & viewpoints" },
  { id: "cape-spartel", label: "Cape Spartel & Hercules Caves" },
  { id: "chefchaouen", label: "Chefchaouen" },
  { id: "food", label: "Food experiences" },
  { id: "photography", label: "Photography & scenery" },
  { id: "family", label: "Family-friendly" },
  { id: "independent", label: "Independent travel" },
];

type PlanKey = "independent" | "medina" | "coastal" | "mountain";

export const TANGIER_DAY_PLANS: Record<
  PlanKey,
  { headline: string; summary: string; minimumHours: number; links: PlannerLink[]; dayPlan: PlannerResult["dayPlan"] }
> = {
  independent: {
    headline: "Independent Tangier Medina & Kasbah",
    summary:
      "The most flexible choice: walk from the terminal toward Grand Socco, the Medina, Kasbah viewpoints and mint-tea terraces.",
    minimumHours: 4,
    links: [
      {
        label: "Walking from Tangier Port",
        href: "/guides/walking-from-port",
        why: "Walking route, timing and return-to-ship advice.",
      },
      {
        label: "Walk It Yourself",
        href: "/guides/explore-independently",
        why: "Full self-guided Medina and Kasbah plan.",
      },
    ],
    dayPlan: [
      { time: "Morning", text: "Walk from the cruise port to Grand Socco and the Medina." },
      { time: "Late morning", text: "Climb to the Kasbah for viewpoints over the Strait." },
      { time: "Afternoon", text: "Mint tea, optional Café Hafa, shopping — then return with a buffer." },
    ],
  },
  medina: {
    headline: "Guided Medina cultural day",
    summary:
      "A guided Medina walk with cultural context and free time afterwards — ideal when you want narrative without leaving the walkable core.",
    minimumHours: 4,
    links: [
      {
        label: "Tangier Medina Cultural Walk",
        href: "/shore-excursions/tangier-medina-cultural-walk",
        why: "Focused walking introduction within the old quarter.",
      },
      {
        label: "Tangier Food & Markets Tasting",
        href: "/shore-excursions/tangier-food-markets-tasting",
        why: "Market flavours without a coastal drive.",
      },
    ],
    dayPlan: [
      { time: "Meet", text: "Join your guide near the port approach to the Medina." },
      { time: "Guided highlights", text: "Grand Socco, souks and Kasbah orientation." },
      { time: "Free time", text: "Mint tea, photographs or shopping before returning to the ship." },
    ],
  },
  coastal: {
    headline: "Editor's Choice city & coast",
    summary:
      "Medina, Kasbah, Cape Spartel and the Hercules Caves — our favourite first-time half-day balance.",
    minimumHours: 5,
    links: [
      {
        label: "Tangier Highlights, Cape Spartel & Hercules Caves",
        href: "/shore-excursions/tangier-highlights-cape-spartel-hercules-caves",
        why: "Editor's Choice — city and coast with cruise-aware timing.",
      },
      {
        label: "Private Half Day Tangier Highlights",
        href: "/shore-excursions/private-tangier-highlights-hercules-caves",
        why: "Private pacing for your party.",
      },
    ],
    dayPlan: [
      { time: "Morning", text: "Medina and Kasbah highlights with your guide." },
      { time: "Midday", text: "Coastal drive to Cape Spartel and the Hercules Caves." },
      { time: "Afternoon", text: "Return toward the terminal with a deliberate buffer." },
    ],
  },
  mountain: {
    headline: "Chefchaouen Blue Pearl",
    summary:
      "The Rif Mountains and the blue medina — only when your usable hours support the road time.",
    minimumHours: 8,
    links: [
      {
        label: "Chefchaouen Blue Pearl Day Trip",
        href: "/shore-excursions/chefchaouen-blue-pearl",
        why: "Small-group mountain day for long port calls.",
      },
      {
        label: "Private Chefchaouen Discovery",
        href: "/shore-excursions/private-chefchaouen-discovery",
        why: "Private format with flexible pacing.",
      },
    ],
    dayPlan: [
      { time: "Depart", text: "Leave the Tangier port area with cruise-aware transport." },
      { time: "Experience", text: "Chefchaouen medina, viewpoints and free time." },
      { time: "Return", text: "Drive back with a generous all-aboard buffer." },
    ],
  },
};

function parseHour(value?: string): number | null {
  if (!value) return null;
  const m = value.match(/^(\d{1,2}):(\d{2})$/);
  if (!m) return null;
  return Number(m[1]) + Number(m[2]) / 60;
}

function usableHours(input: PlannerInput): number {
  const arrival = parseHour(input.arrivalTime);
  const departure = parseHour(input.departureTime);
  if (arrival == null || departure == null) return 8;
  let hours = departure - arrival;
  if (hours <= 0) hours += 24;
  return Math.max(1, hours - 1.5);
}

function selectPlan(input: PlannerInput, hours: number): PlanKey {
  const interests = input.interests;
  if (
    input.travelStyle === "diy" ||
    input.mobility === "limited" ||
    interests.includes("independent") ||
    interests.includes("medina") ||
    hours < 6
  ) {
    if (input.travelStyle === "guided" && hours >= 5 && !interests.includes("independent")) {
      return interests.includes("cape-spartel") || interests.includes("photography")
        ? "coastal"
        : "medina";
    }
    return "independent";
  }
  if (interests.includes("chefchaouen")) return "mountain";
  if (interests.includes("cape-spartel") || interests.includes("photography")) return "coastal";
  if (interests.includes("food") && hours < 7) return "independent";
  return hours >= 6 ? "coastal" : "independent";
}

/** @deprecated Compatibility alias */
export const SAVONA_DAY_PLANS = TANGIER_DAY_PLANS;

export function generateTangierPlan(input: PlannerInput): PlannerResult {
  const hours = usableHours(input);
  const key = selectPlan(input, hours);
  const plan = TANGIER_DAY_PLANS[key];
  const partySize = input.adults + input.children;
  const excursions = [...plan.links];

  if (input.budget === "premium") {
    excursions.push({
      label: signatureTangierExperience.title,
      href: SIGNATURE_EXPERIENCE_PATH,
      why: "Future maximum-eight-guest Tangier concept — in preparation and not bookable.",
    });
  }

  if (input.interests.includes("food") && key === "independent") {
    excursions.push({
      label: "Tangier Food & Markets Tasting",
      href: "/shore-excursions/tangier-food-markets-tasting",
      why: "Central tastings without a road day.",
    });
  }

  return {
    headline: plan.headline,
    summary: `${plan.summary} Your call provides about ${hours.toFixed(1)} usable hours for ${partySize} guest${partySize === 1 ? "" : "s"}. ${hours < plan.minimumHours ? `This is shorter than the ${plan.minimumHours}-hour minimum we recommend for this style, so prefer the Medina on foot.` : ""}`.trim(),
    excursions,
    transfers: [
      {
        label: "Tangier Cruise Port Guide",
        href: "/cruise-port-guide",
        why: "Terminal walking times, taxis and city access.",
      },
    ],
    stay: [],
    logistics: [
      {
        label: "Tangier Ship Schedule",
        href: "/ship-schedules/tangier",
        why: "Recheck the published arrival and departure for your call.",
      },
      {
        label: "Compare Tangier options",
        href: "/compare",
        why: "Review honest trade-offs before booking a long road day.",
      },
    ],
    dayPlan: [
      ...plan.dayPlan,
      {
        time: "Return buffer",
        text: "Reach the Tangier terminal 60–90 minutes before all-aboard; Chefchaouen and coastal days require additional road traffic contingency.",
      },
    ],
  };
}

/** @deprecated Compatibility aliases */
export function generateSavonaPlan(input: PlannerInput): PlannerResult {
  return generateTangierPlan(input);
}

export function generateSplitPlan(input: PlannerInput): PlannerResult {
  return generateTangierPlan(input);
}
