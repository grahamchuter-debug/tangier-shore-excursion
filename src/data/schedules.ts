import tangierSchedule from "./imported-schedules/tangier.json";
import type { ScheduleEntry, ShipSchedulePort } from "./types";
import {
  filterEntriesByMonth,
  filterEntriesByYear,
  getMonthsWithEntries,
  type ScheduleYear,
} from "@/lib/schedule-utils";

/**
 * Schedule framework is ready for Tangier.
 * Do not publish sample or fictitious ship calls as live data.
 * Keep entries empty until confirmed schedules are available.
 */
const SCHEDULE_FAQS = [
  {
    question: "How accurate are Tangier cruise ship schedules?",
    answer: "Schedules are compiled from published cruise timetables and updated periodically. Always confirm arrival, departure and all-aboard times with your cruise line.",
  },
  {
    question: "Where do cruise ships berth in Tangier?",
    answer:
      "Cruise ships use Tangier's passenger terminal area. Walking time into the Medina is typically realistic for many guests; follow terminal signage on the day.",
  },
  {
    question: "Is a Tangier call long enough for Chefchaouen?",
    answer:
      "A full day in port can support a cruise-timed Chefchaouen excursion, but road time is longer than a Medina or coastal half day. Shorter calls are better suited to independent Medina walking or a nearer city-and-coast combination.",
  },
];

const SCHEDULE_TIPS = [
  "Confirm all-aboard time rather than relying only on the published departure",
  "Allow a generous buffer when returning from Chefchaouen or Cape Spartel coastal days",
  "Keep a lighter Plan B (Medina on foot) if your call is shortened",
  "The Medina is close — independent exploration works well on shorter windows",
];

export const schedulePorts: ShipSchedulePort[] = [
  {
    slug: "tangier",
    name: "Tangier",
    country: "Morocco",
    seoTitle: "Tangier Cruise Ship Schedule — Morocco Port Calls",
    metaDescription:
      "Tangier cruise ship schedule framework for planning Medina, Kasbah, Cape Spartel and Chefchaouen shore days. Confirmed calls publish when verified.",
    intro:
      "Tangier is one of Morocco's most rewarding cruise ports beside a walkable terminal — and a gateway to the coast and Rif Mountains when your hours ashore allow.",
    description:
      "Colourful Medina beside the Strait of Gibraltar, with access to Kasbah viewpoints, coastal highlights and mountain days beyond the city.",
    scheduleOverview:
      "Verified published calls for this planning window. Always confirm arrival, departure and all-aboard times with your cruise line.",
    planningTips: SCHEDULE_TIPS,
    faqs: SCHEDULE_FAQS,
  },
];

const scheduleData: Record<string, ScheduleEntry[]> = {
  tangier: tangierSchedule as ScheduleEntry[],
};

export function getSchedulePortBySlug(slug: string): ShipSchedulePort | undefined {
  return schedulePorts.find((port) => port.slug === slug);
}

export function getAllSchedulePortSlugs(): string[] {
  return schedulePorts.map((port) => port.slug);
}

export function getScheduleEntries(slug: string): ScheduleEntry[] {
  return scheduleData[slug] ?? [];
}

export function getScheduleEntryCount(slug: string): number {
  return getScheduleEntries(slug).length;
}

export function getScheduleEntriesForYear(slug: string, year: ScheduleYear): ScheduleEntry[] {
  return filterEntriesByYear(getScheduleEntries(slug), year);
}

export function getScheduleEntriesForMonth(slug: string, monthKey: string): ScheduleEntry[] {
  return filterEntriesByMonth(getScheduleEntries(slug), monthKey);
}

export function getScheduleMonths(slug: string): string[] {
  return getMonthsWithEntries(getScheduleEntries(slug));
}

export function getScheduleYears(slug: string): ScheduleYear[] {
  const years = new Set<ScheduleYear>();
  for (const entry of getScheduleEntries(slug)) {
    const y = Number(entry.date.slice(0, 4)) as ScheduleYear;
    if (y) years.add(y);
  }
  return [...years].sort();
}

export function getVerifiedMonthKeys(slug: string): string[] {
  return getMonthsWithEntries(getScheduleEntries(slug));
}

export function searchSchedulesByShip(query: string): { portSlug: string; entries: ScheduleEntry[] }[] {
  const normalised = query.toLowerCase().trim();
  if (!normalised) return [];

  return schedulePorts
    .map((port) => ({
      portSlug: port.slug,
      entries: getScheduleEntries(port.slug).filter(
        (entry) =>
          entry.ship.toLowerCase().includes(normalised) ||
          entry.cruiseLine.toLowerCase().includes(normalised),
      ),
    }))
    .filter((result) => result.entries.length > 0);
}

export function getTodayTomorrowEntries(slug: string): {
  today: ScheduleEntry[];
  tomorrow: ScheduleEntry[];
} {
  const entries = getScheduleEntries(slug);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateKey = (date: Date) => date.toISOString().slice(0, 10);

  return {
    today: entries.filter((entry) => entry.date === dateKey(today)),
    tomorrow: entries.filter((entry) => entry.date === dateKey(tomorrow)),
  };
}
