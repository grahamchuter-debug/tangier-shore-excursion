import type { FAQ } from "./types";
import { getHomepageFaqs } from "./homepage";

export const extraFaqs: FAQ[] = [
  {
    question: "Can I explore Tangier without an excursion?",
    answer:
      "Yes. Tangier is one of the most rewarding cruise ports for independent exploration. Many visitors walk into the Medina and Kasbah and enjoy a flexible day on foot.",
  },
  {
    question: "How far is the Medina from the cruise port?",
    answer:
      "Often around 15–25 minutes on foot from the terminal area, depending on berth, pace and route.",
  },
  {
    question: "Should I book a tour?",
    answer:
      "Book when you want Cape Spartel, the Hercules Caves, Chefchaouen, guided narrative, or private pacing. Skip when you prefer self-paced wandering and mint-tea time.",
  },
  {
    question: "How much walking is involved in Tangier?",
    answer:
      "Uneven Medina lanes and gentle Kasbah slopes are normal. Coastal and mountain days use more transport and less continuous walking.",
  },
  {
    question: "Is Tangier suitable for limited mobility?",
    answer:
      "Parts of the Medina are challenging because of uneven surfaces and steps. Ask about private formats and consider a taxi from the terminal.",
  },
  {
    question: "How much free time should I allow before all-aboard?",
    answer:
      "Protect 60–90 minutes after sightseeing for a city day. Chefchaouen and long coastal days need the larger end of that buffer.",
  },
  {
    question: "What is your Editor's Choice?",
    answer:
      "Tangier Highlights, Cape Spartel & Hercules Caves — the best first-time balance of Medina, Kasbah and coastal highlights.",
  },
  {
    question: "What currency is used?",
    answer:
      "Morocco uses the Moroccan dirham (MAD) locally. Our site displays EUR for future bookings once live prices are verified; carry dirhams ashore for cafés and markets.",
  },
];

export function getAllFaqs(): FAQ[] {
  const seen = new Set<string>();
  const merged: FAQ[] = [];
  for (const faq of [...getHomepageFaqs(), ...extraFaqs]) {
    if (seen.has(faq.question)) continue;
    seen.add(faq.question);
    merged.push(faq);
  }
  return merged;
}
