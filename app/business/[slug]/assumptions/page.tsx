import SectionLayout from "../../../../components/layout/SectionLayout";
import AssumptionTable from "../../../../components/assumptions/AssumptionTable";
import { loadAssumptionData } from "../../../../lib/assumptionsData";
import { loadBusinessMetadata, loadNarrativeBySection } from "../../../../lib/businessData";

export default async function AssumptionsPage({
  params,
}: {
  params: { slug: string };
}) {
  const metadata = await loadBusinessMetadata(params.slug);
  const sectionLabel =
    metadata.sections.find((section) => section.slug === "assumptions")?.label ??
    "Assumptions & Notes";
  const narrative = await loadNarrativeBySection(params.slug, sectionLabel);
  const fallbackLead =
    "This section documents the foundational assumptions behind the projections, including pricing, volume, utilization, and cost drivers. It also captures risk factors and mitigation plans.";
  const assumptionData = await loadAssumptionData(params.slug);

  return (
    <SectionLayout
      title="Assumptions & Notes"
      subtitle="Key assumptions, risks, and supporting rationale."
      lead={narrative[0] ?? fallbackLead}
      narrativeParagraphs={narrative.slice(1)}
      highlights={[
        "List core assumptions with source references.",
        "Surface major risks and mitigation strategies.",
        "Maintain a changelog of assumption updates.",
      ]}
      focusAreas={[
        {
          label: "Assumption Register",
          detail:
            "Structured list of assumptions tied to projections and charts.",
        },
        {
          label: "Risk & Mitigation",
          detail:
            "Explicit documentation of risks, mitigations, and contingency plans.",
        },
        {
          label: "Audit Trail",
          detail:
            "Track assumption changes, timestamps, and reasoning.",
        },
      ]}
      notes={[
        "Link each assumption back to a projection line item.",
        "Provide citations for external sources.",
        "Record owner and review cadence for each assumption.",
      ]}
    >
      <AssumptionTable items={assumptionData.assumptions} />
    </SectionLayout>
  );
}
