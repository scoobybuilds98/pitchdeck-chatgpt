import { readFile } from "node:fs/promises";
import path from "node:path";
import type { ProjectionData } from "./types";

const BUSINESS_ROOT = path.join(process.cwd(), "data", "businesses");

export async function loadProjectionData(slug: string): Promise<ProjectionData> {
  const projectionsPath = path.join(BUSINESS_ROOT, slug, "projections.json");
  const raw = await readFile(projectionsPath, "utf-8");
  return JSON.parse(raw) as ProjectionData;
}

export function buildProjectionYears(data: ProjectionData): number[] {
  const { startYear, endYear } = data.timeframe;
  const years: number[] = [];

  for (let year = startYear; year <= endYear; year += 1) {
    years.push(year);
  }

  return years;
}
