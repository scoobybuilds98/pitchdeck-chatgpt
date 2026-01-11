import Link from "next/link";

interface SectionLink {
  slug: string;
  label: string;
  description: string;
}

export default function SubNav({ sections }: { sections: SectionLink[] }) {
  return (
    <div className="nav-shell" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="nav-inner">
        <nav className="subnav">
          {sections.map((section) => (
            <Link key={section.slug} href={`#${section.slug}`}>
              {section.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
