import SectionLayout from "../../../../components/layout/SectionLayout";

export default function AssumptionsPage() {
  return (
    <SectionLayout
      title="Assumptions & Notes"
      subtitle="Key assumptions, risks, and supporting rationale."
      lead="This section documents the foundational assumptions behind the projections, including pricing, volume, utilization, and cost drivers. It also captures risk factors and mitigation plans."
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
    />
  );
}
