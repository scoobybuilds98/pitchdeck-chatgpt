import SectionLayout from "../../../../components/layout/SectionLayout";

export default function ChartsPage() {
  return (
    <SectionLayout
      title="Charts & Graphs"
      subtitle="Visual insights across revenue, margin, and operational KPIs."
      lead="This section consolidates all visualizations for quick investor review. It will feature trend charts, stacked breakdowns, and KPI dashboards derived from the projections dataset."
      highlights={[
        "Show year-over-year revenue, margin, and cash flow trends.",
        "Break down revenue by product, service line, or customer segment.",
        "Surface operational KPIs and utilization metrics visually.",
      ]}
      focusAreas={[
        {
          label: "Performance Trends",
          detail:
            "Line charts and stacked bars for multi-year performance tracking.",
        },
        {
          label: "Mix Analysis",
          detail:
            "Breakdowns by business line, geography, or customer segment.",
        },
        {
          label: "KPI Dashboard",
          detail:
            "High-level dashboard for the most important KPIs and targets.",
        },
      ]}
      notes={[
        "Define a chart registry in the data schema to drive the visual layer.",
        "Add chart annotations that connect to narrative points.",
        "Include export or print options for investors.",
      ]}
    />
  );
}
