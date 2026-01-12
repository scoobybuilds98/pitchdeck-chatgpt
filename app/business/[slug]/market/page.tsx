import SectionLayout from "../../../../components/layout/SectionLayout";
import { loadBusinessMetadata, loadNarrativeBySection } from "../../../../lib/businessData";

export default async function MarketPage({
  params,
}: {
  params: { slug: string };
}) {
  const metadata = await loadBusinessMetadata(params.slug);
  const sectionLabel =
    metadata.sections.find((section) => section.slug === "market")?.label ??
    "Market & Opportunity";
  const narrative = await loadNarrativeBySection(params.slug, sectionLabel);
  const fallbackLead =
    "This section establishes the total addressable market, growth catalysts, and customer dynamics that support the business plan. It will include macro trends and localized insights specific to each business.";

  return (
    <SectionLayout
      title="Market & Opportunity"
      subtitle="Sizing the market, customer segments, and demand drivers."
      lead={narrative[0] ?? fallbackLead}
      narrativeParagraphs={narrative.slice(1)}
      highlights={[
        "Quantify TAM, SAM, and SOM with defensible sources.",
        "Describe core customer personas and buying behavior.",
        "Map key tailwinds and structural trends supporting growth.",
      ]}
      focusAreas={[
        {
          label: "Market Size",
          detail:
            "Detailed sizing model with assumptions, timelines, and market share targets.",
        },
        {
          label: "Demand Drivers",
          detail:
            "Regulatory, economic, and industry-specific factors expanding demand.",
        },
        {
          label: "Competitive Landscape",
          detail:
            "Clear comparison of incumbents, substitutes, and whitespace opportunities.",
        },
      ]}
      notes={[
        "Add cited sources for market sizing in the appendix.",
        "Include a market growth chart once projections data is ingested.",
        "Tie customer demand assumptions directly to revenue drivers.",
      ]}
    />
  );
}
