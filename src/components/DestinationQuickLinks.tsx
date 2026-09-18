import Link from "next/link";

const TANGIER_LINKS = [
  {
    title: "Tour or independent?",
    description:
      "Honest comparison for Tangier cruise passengers — when to walk the Medina alone and when a guide helps.",
    href: "/compare/tour-or-independent",
  },
  {
    title: "Medina or Cape Spartel?",
    description:
      "Compare Tangier's essential old quarter with the Atlantic coast and Hercules Caves.",
    href: "/compare/medina-or-cape-spartel",
  },
  {
    title: "Best Tangier shore excursions",
    description:
      "Our curated launch collection — Editor's Choice first, with honest trade-offs for every option.",
    href: "/compare/best-shore-excursions",
  },
  {
    title: "Walking from Tangier port",
    description:
      "How far the Medina really is, and how to reach Grand Socco on foot.",
    href: "/guides/walking-from-port",
  },
  {
    title: "Can you explore independently?",
    description:
      "When a flexible foot day is the better choice — and when organised transport earns its place.",
    href: "/guides/explore-independently",
  },
  {
    title: "First time in Tangier",
    description:
      "A practical first-call plan: Medina, Kasbah, coast or Chefchaouen.",
    href: "/compare/first-time-tangier-day",
  },
  {
    title: "Tangier cruise schedules",
    description:
      "Confirmed ship-call data will appear here once schedules are ready for publication.",
    href: "/ship-schedules/tangier",
  },
];

export function DestinationQuickLinks() {
  return (
    <section className="section-padding bg-coastal-50 border-t border-coastal-100">
      <div className="container-wide">
        <p className="section-eyebrow">Keep planning</p>
        <h2 className="section-title mt-2">Your Tangier planning hub</h2>
        <p className="section-subtitle">
          Use these guides and comparisons to shape a port day that matches your ship hours, energy
          and curiosity — whether you walk the Medina independently or reach Cape Spartel and beyond.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TANGIER_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="card-feature group">
              <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">
                {link.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{link.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/guides" className="btn-secondary text-sm">
            All Tangier planning guides
          </Link>
        </div>
      </div>
    </section>
  );
}
