import SectionLayout from "../../../../components/layout/SectionLayout";

export default function OverviewPage() {
  return (
    <SectionLayout
      title="Executive Summary"
      subtitle="Positioning the business, investment thesis, and growth story."
      lead="This section frames the business narrative, the problem it solves, and how the team will deliver durable returns. It aligns the value proposition, competitive advantage, and capital needs in a cohesive narrative."
      highlights={[
        "Define the mission, vision, and customer pain points with clarity.",
        "Summarize near-term objectives and the strategic roadmap.",
        "Highlight differentiators that make the business defensible.",
      ]}
      focusAreas={[
        {
          label: "Thesis Summary",
          detail:
            "Concise articulation of why the business wins in its market, supported by core metrics and proof points.",
        },
        {
          label: "Capital Strategy",
          detail:
            "Planned use of proceeds, investment timeline, and expected impact on growth milestones.",
        },
        {
          label: "Leadership & Execution",
          detail:
            "Key operators, execution cadence, and governance practices that de-risk the plan.",
        },
      ]}
      notes={[
        "Finalize the core narrative after projections are locked.",
        "Include supporting metrics sourced from the projections dataset.",
        "Add a concise bullet list of key achievements or traction points.",
      ]}
    />
  );
}
