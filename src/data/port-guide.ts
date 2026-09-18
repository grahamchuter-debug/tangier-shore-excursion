import type { FAQ } from "./types";

export interface Terminal {
  name: string;
  quay: string;
  usedBy: string;
  cityAccess: string;
}

export interface PortGuideSection {
  heading: string;
  paragraphs: string[];
}

export const portGuideContent = {
  title: "Tangier Cruise Port Guide",
  subtitle:
    "Terminal access, walking times to the Medina, Kasbah viewpoints, food, transport toward Cape Spartel and Chefchaouen, and sensible return-to-ship planning.",
  terminals: [
    {
      name: "Tangier cruise terminal",
      quay: "Cruise berths at the Port of Tangier Med area serving Strait of Gibraltar itineraries",
      usedBy: "Most cruise ships calling at Tangier on Mediterranean and Atlantic routes",
      cityAccess:
        "Often around 15–25 minutes on foot to Grand Socco and the Medina depending on berth and pace; taxis available at peak turnaround",
    },
    {
      name: "Alternative berths",
      quay: "Occasional assignments within the wider port complex",
      usedBy: "Selected calls when specific berths are assigned",
      cityAccess:
        "Walking times vary — follow terminal signage and allow a conservative buffer",
    },
  ] as Terminal[],
  sections: [
    {
      heading: "Where cruise ships dock in Tangier",
      paragraphs: [
        "Cruise ships call at Tangier on the Strait of Gibraltar — one of the most evocative landfalls in Mediterranean cruising. Unlike sprawling mega-ports that strand guests far from sightseeing, Tangier places a colourful Medina within realistic walking distance for many passengers.",
        "Check the ship's daily programme and terminal signage on arrival. Shuttle arrangements vary by line and berth; many guests walk directly toward Grand Socco and the old quarter.",
        "Tangier is an excellent base for a city day on foot. Cape Spartel, the Hercules Caves and Chefchaouen are separate journeys requiring road time and different timing.",
      ],
    },
    {
      heading: "Walking from the port",
      paragraphs: [
        "From the main terminal area, follow signs toward the city centre and Grand Socco rather than wandering the working port.",
        "Allow roughly 15–25 minutes to reach the Medina edge in normal conditions. Routes include urban pavements before uneven lanes begin; the Kasbah adds slopes.",
        "If mobility, heat or luggage are factors, take a short taxi instead of proving a point.",
      ],
    },
    {
      heading: "Medina and Kasbah highlights",
      paragraphs: [
        "Grand Socco anchors most visits — allow time to absorb the atmosphere rather than a single exterior photograph.",
        "Petit Socco and the souk lanes carry you deeper into artisan quarters and spice stalls.",
        "The Kasbah delivers Strait panoramas and a calmer whitewashed atmosphere above the Medina.",
      ],
    },
    {
      heading: "Food and Moroccan flavour",
      paragraphs: [
        "Mint tea, pastries and market flavours sit inside a walkable historic centre — you do not need a long transfer to taste Tangier.",
        "Build tea or lunch into your Medina loop so you stay oriented toward the ship.",
        "A guided food tasting helps if you want curated stops; otherwise independent café hopping works well.",
      ],
    },
    {
      heading: "Transport beyond the Medina",
      paragraphs: [
        "Taxis wait at or near the terminal when ships are in port. Show the driver the cruise terminal or your ship name for the return.",
        "Cape Spartel and the Hercules Caves require a coastal drive — organised excursions keep cruise timing simpler than stacking independent taxis.",
        "Chefchaouen days need operators who plan backwards from all-aboard — a best-case journey time is not an adequate return plan.",
      ],
    },
    {
      heading: "A realistic independent city day",
      paragraphs: [
        "Start toward Grand Socco before coach groups concentrate in the deepest souks.",
        "Climb to the Kasbah for viewpoints, then spend the afternoon in lanes, cafés or optional Café Hafa without another long transfer.",
        "Keep the final hour ashore oriented toward the terminal so an unexpected queue does not threaten all-aboard.",
      ],
    },
    {
      heading: "Return-to-ship planning",
      paragraphs: [
        "Confirm all-aboard time — earlier than published departure. For a Tangier city day, reach the terminal 60–90 minutes before all-aboard.",
        "For Chefchaouen or long coastal drives, the operator should plan with road traffic contingency.",
        "Independent travellers are responsible for reaching the ship. If a long road trip does not leave a conservative margin, choose the Medina instead.",
      ],
    },
  ] as PortGuideSection[],
  faqs: [
    {
      question: "Can I walk into Tangier from the cruise terminal?",
      answer:
        "Yes. Many passengers reach the Medina within roughly 15–25 minutes on foot from the main terminal area.",
    },
    {
      question: "What can I see close to Tangier port?",
      answer:
        "Grand Socco, the Medina, Kasbah viewpoints, traditional cafés and mint-tea terraces are all within a compact walking area for most guests.",
    },
    {
      question: "Do I need transport for the Medina?",
      answer:
        "Usually not. It is walkable from many berths, though uneven lanes may suit comfortable footwear.",
    },
    {
      question: "Is Chefchaouen an easy independent trip from the port?",
      answer:
        "Rarely on a cruise day. Road time and return risk make an organised excursion the more realistic approach.",
    },
    {
      question: "How early should I be back?",
      answer:
        "Reach the terminal 60–90 minutes before all-aboard for a city day, with a larger road contingency for Chefchaouen or coastal loops.",
    },
  ] as FAQ[],
};

export const terminals = portGuideContent.terminals;
export const portGuideSections = portGuideContent.sections;
export const portGuideFaqs = portGuideContent.faqs;
