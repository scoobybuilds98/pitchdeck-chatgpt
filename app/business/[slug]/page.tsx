import Link from "next/link";
import { notFound } from "next/navigation";
import { businessRegistry } from "../../../data/businesses/registry";

export default function BusinessPage({ params }: { params: { slug: string } }) {
  const business = businessRegistry.find((item) => item.slug === params.slug);

  if (!business) {
    notFound();
  }

  return (
    <main className="page-shell">
      <section className="card hero">
        <span className="badge">{business.industry}</span>
        <h1>{business.name}</h1>
        <p>{business.summary}</p>
      </section>

      <section style={{ marginTop: "32px" }}>
        <h2 className="section-title">Deck Sections</h2>
        <p className="section-subtitle">
          Use the navigation to explore the full narrative, financials, and
          projections for this business.
        </p>
        <div className="grid-3" style={{ marginTop: "20px" }}>
          {business.sections.map((section) => (
            <Link
              key={section.slug}
              href={`/business/${business.slug}/${section.slug}`}
            >
              {/* Route each section card to its dedicated page. */}
              <article className="card" style={{ padding: "20px" }}>
                <h3 style={{ margin: "0 0 8px" }}>{section.label}</h3>
                <p className="section-subtitle">{section.description}</p>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
