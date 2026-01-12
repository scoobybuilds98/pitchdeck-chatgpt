import type { ChartConfig } from "../../lib/chartsData";

const chartTypeLabels: Record<string, string> = {
  line: "Line Chart",
  bar: "Bar Chart",
  stacked: "Stacked Bar",
  pie: "Pie Chart",
};

export default function ChartsGrid({ charts }: { charts: ChartConfig[] }) {
  return (
    <section className="section-grid" style={{ marginTop: "24px" }}>
      {charts.map((chart) => (
        <article key={chart.id} className="card" style={{ padding: "20px" }}>
          <span className="badge">{chartTypeLabels[chart.type] ?? "Chart"}</span>
          <h3 style={{ margin: "16px 0 8px" }}>{chart.title}</h3>
          <p className="section-subtitle">Metrics: {chart.metrics.join(", ")}</p>
          {chart.notes ? (
            <p className="section-subtitle" style={{ marginTop: "12px" }}>
              {chart.notes}
            </p>
          ) : null}
        </article>
      ))}
    </section>
  );
}
