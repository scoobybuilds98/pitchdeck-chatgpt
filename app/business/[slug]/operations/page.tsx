import SectionLayout from "../../../../components/layout/SectionLayout";
import { loadBusinessMetadata, loadNarrativeBySection } from "../../../../lib/businessData";

export default async function OperationsPage({
  params,
}: {
  params: { slug: string };
}) {
  const metadata = await loadBusinessMetadata(params.slug);
  const sectionLabel =
    metadata.sections.find((section) => section.slug === "operations")?.label ??
    "Operations";
  const narrative = await loadNarrativeBySection(params.slug, sectionLabel);
  const fallbackLead =
    "This section describes how the business executes day-to-day operations, scales capacity, and delivers consistent service quality. It emphasizes process discipline, supply chain, and operational KPIs.";

  return (
    <SectionLayout
      title="Operations"
      subtitle="Execution plan, footprint, and delivery capabilities."
      lead={narrative[0] ?? fallbackLead}
      narrativeParagraphs={narrative.slice(1)}
      highlights={[
        "Document operational footprint and capacity planning.",
        "Outline operational KPIs and service-level targets.",
        "Describe risk controls, compliance, and quality management.",
      ]}
      focusAreas={[
        {
          label: "Operating Footprint",
          detail:
            "Locations, infrastructure, equipment, and staffing model required to scale.",
        },
        {
          label: "Execution Cadence",
          detail:
            "Operating rhythm, reporting cadence, and continuous improvement loops.",
        },
        {
          label: "Risk & Compliance",
          detail:
            "Safety standards, regulatory posture, and business continuity planning.",
        },
      ]}
      notes={[
        "Align capacity assumptions with projection volumes.",
        "Add operational milestones tied to capital allocation.",
        "Include logistics diagrams once assets are cataloged.",
      ]}
    />
  );
}
