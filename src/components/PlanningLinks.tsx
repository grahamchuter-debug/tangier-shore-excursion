import Link from "next/link";

const LINKS = [
  { href: "/cruise-port-guide", label: "Tangier Cruise Port Guide" },
  { href: "/cruise-planner", label: "Tangier Cruise Planner" },
  { href: "/ship-schedules/tangier", label: "Ship Schedules" },
  { href: "/compare", label: "Compare Tangier" },
  { href: "/wow-collection", label: "The Wow Collection" },
];

export function PlanningLinks() {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {LINKS.map((link) => (
        <Link key={link.href} href={link.href} className="btn-secondary text-sm">
          {link.label}
        </Link>
      ))}
    </div>
  );
}
