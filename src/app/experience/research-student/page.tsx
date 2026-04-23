import type { Metadata } from "next";
import Link from "next/link";
import Carousel from "../../components/Carousel";

interface ExperienceLinks {
  github: string | null;
  linkedin: string | null;
  paper: string | null;
}

interface ExperienceData {
  role: string;
  subtitle: string;
  org: string;
  date: string;
  description: string;
  responsibilities: string[];
  skills: string[];
  links: ExperienceLinks;
  images: string[];
}

const experience: ExperienceData = {
  role: "Research Student — Quantum Neural Networks",
  subtitle: "Hybrid Classical-Quantum Architecture Research",
  org: "Monterrey's Institute of Technology",
  date: "Mar 2026 – Present",
  description:
    "Conducting research on hybrid classical-quantum architectures at Tec de Monterrey, designing variational quantum circuits integrated with classical embeddings for NLP and computer vision benchmarks. The work involves building reproducible experimentation pipelines and collaborating on a multifactorial protocol evaluating qubit count, encoding strategy, and circuit depth.",
  responsibilities: [
    "Designing and implementing a hybrid classical-quantum architecture for a benchmark, integrating classical embeddings with variational quantum layers.",
    "Building reproducible experimentation pipelines for NLP tasks (IMDB, AG News) and computer vision tasks (MNIST, Fashion-MNIST).",
    "Automating experiment execution and managing version control for the team's shared repository.",
    "Collaborating on a multifactorial experimental protocol evaluating qubit count, encoding strategy, and circuit depth.",
  ],
  skills: ["Quantum Computing", "Quantum ML", "Python", "PennyLane", "PyTorch", "NLP", "Computer Vision", "Research"],
  links: { github: null, linkedin: null, paper: null },
  images: [],
};

export const metadata: Metadata = {
  title: "Research Student — Charbel Chávez",
  description: "Hybrid classical-quantum architecture research at Tec de Monterrey.",
};

function Tag({ label }: { label: string }) {
  return (
    <span style={{ fontSize: "0.7rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6b7c4b", border: "1px solid #d4cfc6", padding: "0.25rem 0.625rem" }}>
      {label}
    </span>
  );
}

export default function ResearchStudentPage() {
  return (
    <main style={{ backgroundColor: "#f5f2eb", minHeight: "100vh", fontFamily: "var(--font-lora), Georgia, serif" }}>
      <div style={{ borderBottom: "1px solid #d4cfc6", padding: "1.25rem 2rem" }}>
        <Link href="/#experience" className="text-link">← All Experience</Link>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "3rem 2rem 6rem" }}>
        <div style={{ marginBottom: "3rem" }}>
          <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b7c4b", marginBottom: "0.5rem" }}>{experience.date}</p>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#28281f", lineHeight: 1.1, marginBottom: "0.5rem" }}>
            {experience.role}
          </h1>
          <p style={{ fontSize: "0.9rem", color: "#6b7c4b", fontStyle: "italic", marginBottom: "0.25rem" }}>{experience.subtitle}</p>
          <p style={{ fontSize: "0.85rem", color: "#9b9b8f" }}>{experience.org}</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 2fr) minmax(0, 3fr)", gap: "4rem", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <Carousel images={experience.images} />
            <div style={{ borderTop: "1px solid #d4cfc6", paddingTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9b9b8f", marginBottom: "0.25rem" }}>Links</p>
              {experience.links.github && <a href={experience.links.github} target="_blank" rel="noopener noreferrer" className="text-link">GitHub →</a>}
              {experience.links.linkedin && <a href={experience.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-link">LinkedIn Post →</a>}
              {experience.links.paper && <a href={experience.links.paper} target="_blank" rel="noopener noreferrer" className="text-link">Paper →</a>}
              {!experience.links.github && !experience.links.linkedin && !experience.links.paper && (
                <p style={{ fontSize: "0.8rem", color: "#9b9b8f", fontStyle: "italic" }}>Links coming soon</p>
              )}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            <div>
              <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9b9b8f", marginBottom: "0.75rem" }}>Overview</p>
              <p style={{ color: "#6b6b60", fontSize: "0.95rem", lineHeight: 1.85 }}>{experience.description}</p>
            </div>
            <div>
              <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9b9b8f", marginBottom: "0.75rem" }}>Responsibilities</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {experience.responsibilities.map((r) => (
                  <li key={r} style={{ fontSize: "0.9rem", color: "#6b6b60", display: "flex", alignItems: "flex-start", gap: "0.5rem", lineHeight: 1.7 }}>
                    <span style={{ color: "#6b7c4b", marginTop: "0.25rem", flexShrink: 0 }}>✦</span>{r}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9b9b8f", marginBottom: "0.75rem" }}>Technologies & Skills</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {experience.skills.map((s) => <Tag key={s} label={s} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
