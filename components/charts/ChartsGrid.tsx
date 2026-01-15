"use client";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import type { ChartConfig } from "../../lib/chartsData";
import type { ProjectionData } from "../../lib/types";

const chartTypeLabels: Record<string, string> = {
  line: "Line Chart",
  bar: "Bar Chart",
  stacked: "Stacked Bar",
  pie: "Pie Chart",
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

interface ChartsGridProps {
  charts: ChartConfig[];
  projectionsData: ProjectionData;
}

export default function ChartsGrid({ charts, projectionsData }: ChartsGridProps) {
  const years = Array.from(
    { length: projectionsData.timeframe.endYear - projectionsData.timeframe.startYear + 1 },
    (_, i) => projectionsData.timeframe.startYear + i
  );

  const allMetrics = [...projectionsData.metrics, ...projectionsData.drivers];

  const formatValue = (value: number | undefined, metricId: string): string => {
    if (value === undefined) return "N/A";
    const metric = allMetrics.find((m) => m.id === metricId);
    if (!metric) return value.toString();

    if (metric.format === "currency") {
      return `$${(value / 1000000).toFixed(2)}M`;
    }
    if (metric.format === "percentage") {
      return `${(value * 100).toFixed(0)}%`;
    }
    return value.toString();
  };

  const renderChart = (chart: ChartConfig) => {
    const chartData = years.map((year, index) => {
      const dataPoint: Record<string, string | number> = { year };
      chart.metrics.forEach((metricId) => {
        const metric = allMetrics.find((m) => m.id === metricId);
        if (metric && metric.values[index] !== undefined) {
          dataPoint[metricId] = metric.values[index];
        }
      });
      return dataPoint;
    });

    if (chart.type === "line") {
      return (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip formatter={(value, name) => formatValue(value as number | undefined, name as string)} />
            <Legend />
            {chart.metrics.map((metricId, index) => {
              const metric = allMetrics.find((m) => m.id === metricId);
              return (
                <Line
                  key={metricId}
                  type="monotone"
                  dataKey={metricId}
                  name={metric?.label ?? metricId}
                  stroke={COLORS[index % COLORS.length]}
                  strokeWidth={2}
                />
              );
            })}
          </LineChart>
        </ResponsiveContainer>
      );
    }

    if (chart.type === "bar") {
      return (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip formatter={(value, name) => formatValue(value as number | undefined, name as string)} />
            <Legend />
            {chart.metrics.map((metricId, index) => {
              const metric = allMetrics.find((m) => m.id === metricId);
              return (
                <Bar
                  key={metricId}
                  dataKey={metricId}
                  name={metric?.label ?? metricId}
                  fill={COLORS[index % COLORS.length]}
                />
              );
            })}
          </BarChart>
        </ResponsiveContainer>
      );
    }

    return null;
  };

  return (
    <section className="section-grid" style={{ marginTop: "24px" }}>
      {charts.map((chart) => (
        <article key={chart.id} className="card" style={{ padding: "20px" }}>
          <span className="badge">{chartTypeLabels[chart.type] ?? "Chart"}</span>
          <h3 style={{ margin: "16px 0 8px" }}>{chart.title}</h3>
          {chart.notes ? (
            <p className="section-subtitle" style={{ marginBottom: "20px" }}>
              {chart.notes}
            </p>
          ) : null}
          {renderChart(chart)}
        </article>
      ))}
    </section>
  );
}
