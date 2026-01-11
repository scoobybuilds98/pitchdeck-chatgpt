import SectionLayout from "../../../../components/layout/SectionLayout";

export default function AppendixPage() {
  return (
    <SectionLayout
      title="Appendix"
      subtitle="Sources, citations, and supporting materials."
      lead="This section consolidates all source material, citations, and supplemental data. It serves as the evidence base behind market sizing, assumptions, and financial projections."
      highlights={[
        "List all external sources and citations.",
        "Include supplementary tables and data extracts.",
        "Provide contact and versioning details for reference.",
      ]}
      focusAreas={[
        {
          label: "Source Library",
          detail:
            "Curated list of references supporting market and financial claims.",
        },
        {
          label: "Supporting Tables",
          detail:
            "Supplemental datasets, benchmarking tables, and sensitivity grids.",
        },
        {
          label: "Version Control",
          detail:
            "Document version history and responsible contributors.",
        },
      ]}
      notes={[
        "Ensure all external claims in the deck are cited here.",
        "Attach downloadable tables once data exports are available.",
        "Maintain a revision log for investor-facing updates.",
      ]}
    />
  );
}
