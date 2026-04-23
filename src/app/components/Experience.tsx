import Link from "next/link";

interface ExperienceItem {
  role: string;
  slug?: string;
  subtitle: string;
  org: string;
  date: string;
  bullets: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Research Student - Quantum Neural Networks",
    slug: "research-student",
    subtitle: "Hybrid Classical-Quantum Architecture Research",
    org: "Monterrey's Institute of Technology",
    date: "Mar 2026 - Present",
    bullets: [
      "Designing and implementing a hybrid classical-quantum architecture for a benchmark, integrating classical embeddings with variational quantum layers.",
      "Building reproducible experimentation pipelines for NLP tasks (IMDB, AG News) and computer vision tasks (MNIST, Fashion-MNIST).",
      "Automating experiment execution and managing version control for the team's shared repository.",
      "Collaborating on a multifactorial experimental protocol evaluating qubit count, encoding strategy, and circuit depth.",
    ],
  },
];

function ExperienceCard({ exp }: { exp: ExperienceItem }) {
  return (
    <div style={{ display: "flex", gap: "2rem", paddingBottom: "2.5rem", position: "relative" }}>
      {/* Timeline dot and line */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: "#6b7c4b",
            border: "3px solid #f5f3ed",
            marginTop: "0.5rem",
            zIndex: 2,
          }}
        />
        <div
          style={{
            width: "2px",
            flex: 1,
            backgroundColor: "#d4cfc6",
            marginTop: "0.5rem",
            minHeight: "100px",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ flex: 1, paddingTop: "0.25rem" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "0.25rem", flexWrap: "wrap" }}>
          <h3
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "#28281f",
              lineHeight: 1.2,
            }}
          >
            {exp.slug ? (
              <Link
                href={`/experience/${exp.slug}`}
                style={{ color: "inherit", textDecoration: "none", fontSize: "inherit", fontFamily: "inherit" }}
              >
                {exp.role} →
              </Link>
            ) : (
              exp.role
            )}
          </h3>
          <span style={{ fontSize: "0.85rem", color: "#9b9b8f", fontStyle: "italic", whiteSpace: "nowrap" }}>
            {exp.date}
          </span>
        </div>
        <div style={{ display: "flex", gap: "0.75rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
          <p style={{ fontSize: "0.8rem", color: "#6b7c4b", fontStyle: "italic" }}>{exp.subtitle}</p>
          <span style={{ fontSize: "0.8rem", color: "#9b9b8f" }}>·</span>
          <p style={{ fontSize: "0.8rem", color: "#9b9b8f" }}>{exp.org}</p>
        </div>

        <ul style={{ paddingLeft: "1.1rem", margin: 0 }}>
          {exp.bullets.map((b, i) => (
            <li key={i} style={{ color: "#6b6b60", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "0.4rem" }}>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "6rem 2rem", borderTop: "1px solid #d4cfc6" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#6b7c4b",
            marginBottom: "1rem",
          }}
        >
          Research
        </p>
        <h2
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 700,
            color: "#28281f",
            marginBottom: "3rem",
            lineHeight: 1.15,
          }}
        >
          Experience
        </h2>

        <div style={{ position: "relative" }}>
          {experiences.map((exp) => (
            <ExperienceCard key={exp.role} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
