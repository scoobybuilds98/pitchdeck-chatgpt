import SectionLayout from "../../../../components/layout/SectionLayout";

export default function ModelPage() {
  return (
    <SectionLayout
      title="Business Model"
      subtitle="Explaining revenue streams, unit economics, and pricing strategy."
      lead="This section details how the business generates revenue, the primary cost drivers, and the mechanics behind profitability. It will include pricing levers, unit economics, and margin profile assumptions."
      highlights={[
        "Break down revenue streams and recurring vs. non-recurring mix.",
        "Describe pricing strategy and key value propositions.",
        "Outline unit economics and contribution margin drivers.",
      ]}
      focusAreas={[
        {
          label: "Revenue Architecture",
          detail:
            "Detailed decomposition of revenue streams, rate cards, and service tiers.",
        },
        {
          label: "Unit Economics",
          detail:
            "Per-unit profitability, customer lifetime value, and payback periods.",
        },
        {
          label: "Cost Structure",
          detail:
            "Fixed vs. variable cost base, with operational leverage assumptions.",
        },
      ]}
      notes={[
        "Add supporting charts for margin expansion over time.",
        "Clarify pricing sensitivity assumptions in the projections data.",
        "Link to operational efficiency initiatives in the operations section.",
      ]}
    />
  );
}
