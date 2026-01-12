import SectionLayout from "../../../../components/layout/SectionLayout";
import ProjectionTable from "../../../../components/projections/ProjectionTable";
import { loadBusinessMetadata, loadNarrativeBySection } from "../../../../lib/businessData";
import { buildProjectionYears, loadProjectionData } from "../../../../lib/projectionsData";

export default async function ProjectionsPage({
  params,
}: {
  params: { slug: string };
}) {
  const metadata = await loadBusinessMetadata(params.slug);
  const sectionLabel =
    metadata.sections.find((section) => section.slug === "projections")?.label ??
    "Financial Projections";
  const narrative = await loadNarrativeBySection(params.slug, sectionLabel);
  const fallbackLead =
    "This section will host the interactive projections engine. Users will adjust assumptions, view scenario changes, and analyze the resulting impact on revenue, margins, and cash flow.";
  const projectionData = await loadProjectionData(params.slug);
  const years = buildProjectionYears(projectionData);

  return (
    <SectionLayout
      title="Financial Projections"
      subtitle="Editable assumptions and forward-looking financial performance."
      lead={narrative[0] ?? fallbackLead}
      narrativeParagraphs={narrative.slice(1)}
      highlights={[
        "Expose editable assumptions with validation and audit trails.",
        "Display scenario-based outputs with live chart updates.",
        "Summarize key financial KPIs and runway metrics.",
      ]}
      focusAreas={[
        {
          label: "Assumption Inputs",
          detail:
            "Editable inputs for volume, pricing, utilization, and cost drivers.",
        },
        {
          label: "Scenario Outputs",
          detail:
            "Revenue, EBITDA, cash flow, and margin trends by year.",
        },
        {
          label: "Sensitivity Analysis",
          detail:
            "Impact of key variable changes across multiple scenarios.",
        },
      ]}
      notes={[
        "Integrate projection tables once data schema is finalized.",
        "Include exportable tables for investor review.",
        "Document assumptions in the notes section for transparency.",
      ]}
    >
      <ProjectionTable metrics={projectionData.metrics} years={years} />
    </SectionLayout>
  );
}
