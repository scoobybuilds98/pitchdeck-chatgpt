import SectionLayout from "../../../../components/layout/SectionLayout";

export default function ProjectionsPage() {
  return (
    <SectionLayout
      title="Financial Projections"
      subtitle="Editable assumptions and forward-looking financial performance."
      lead="This section will host the interactive projections engine. Users will adjust assumptions, view scenario changes, and analyze the resulting impact on revenue, margins, and cash flow."
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
    />
  );
}
