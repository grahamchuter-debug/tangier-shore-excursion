import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { CruisePlanner } from "@/components/CruisePlanner";

const path = "/cruise-planner";
const description =
  "Build a personalised Tangier cruise plan. Enter your port times, party size, interests, mobility, budget and travel style for tailored Morocco recommendations.";

export const metadata = buildMetadata({
  title: "Tangier Cruise Planner — Morocco Port Day Itinerary",
  description,
  path,
  keywords: ["Tangier cruise planner", "Morocco cruise day plan", "Tangier port day itinerary", "Medina from Tangier planner"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Tangier Cruise Planner", path },
];

export default function CruisePlannerPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Tangier Cruise Planner", description, path })]} />
      <PageHero
        title="Tangier Cruise Planner"
        subtitle="Tell us your ship's hours ashore, who is travelling and what you enjoy — get editorial recommendations for the Medina, Kasbah, Cape Spartel, Chefchaouen and independent days."
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <CruisePlanner />
        </div>
      </section>
    </>
  );
}
