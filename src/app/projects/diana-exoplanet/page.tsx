import type { Metadata } from "next";
import Link from "next/link";
import Carousel from "../../components/Carousel";

interface ProjectLinks {
  github: string | null;
  linkedin: string | null;
  devpost: string | null;
}

interface ProjectData {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  awards: string[];
  skills: string[];
  links: ProjectLinks;
  images: string[];
}

const project: ProjectData = {
  title: "Diana - Exoplanet Detection Web App",
  subtitle: "Machine Learning Engineer",
  date: "NASA Space Apps Challenge 2025",
  description:
    "Trained and evaluated LightGBM models on 15,000+ Kepler and TESS samples for exoplanet detection. Built a FastAPI backend and React frontend for real-time inference and visualization. Achieved 2nd place at NASA Space Apps Challenge 2025 (local event).",
  awards: ["2nd Place — NASA Space Apps Challenge 2025 (Local Event)"],
  skills: ["Machine Learning", "Python", "LightGBM", "FastAPI", "React"],
  links: { github: "https://github.com/ChzCharbel/nasa_space_apps2025", linkedin: null, devpost: null },
  images: [],
};

export const metadata: Metadata = {
  title: "Diana - Exoplanet Detection Web App — Charbel Chávez",
  description: "Diana: AI-powered exoplanet detection web app.",
};

function Tag({ label }: { label: string }) {
  return (
    <span style={{ fontSize: "0.7rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6b7c4b", border: "1px solid #d4cfc6", padding: "0.25rem 0.625rem" }}>
      {label}
    </span>
  );
}

export default function DianaPage() {
  return (
    <main style={{ backgroundColor: "#f5f2eb", minHeight: "100vh", fontFamily: "var(--font-lora), Georgia, serif" }}>
      <div style={{ borderBottom: "1px solid #d4cfc6", padding: "1.25rem 2rem" }}>
        <Link href="/#projects" className="text-link">← All Projects</Link>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "3rem 2rem 6rem" }}>
        <div style={{ marginBottom: "3rem" }}>
          <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b7c4b", marginBottom: "0.5rem" }}>{project.date}</p>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#28281f", lineHeight: 1.1, marginBottom: "0.5rem" }}>
            {project.title}
          </h1>
          <p style={{ fontSize: "0.9rem", color: "#6b7c4b", fontStyle: "italic" }}>{project.subtitle}</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 2fr) minmax(0, 3fr)", gap: "4rem", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <Carousel images={project.images} />
            <div style={{ borderTop: "1px solid #d4cfc6", paddingTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9b9b8f", marginBottom: "0.25rem" }}>Links</p>
              {project.links.github && <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-link">GitHub →</a>}
              {project.links.linkedin && <a href={project.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-link">LinkedIn Post →</a>}
              {project.links.devpost && <a href={project.links.devpost} target="_blank" rel="noopener noreferrer" className="text-link">Devpost →</a>}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            <div>
              <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9b9b8f", marginBottom: "0.75rem" }}>Overview</p>
              <p style={{ color: "#6b6b60", fontSize: "0.95rem", lineHeight: 1.85 }}>{project.description}</p>
            </div>
            {project.awards.length > 0 && (
              <div>
                <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9b9b8f", marginBottom: "0.75rem" }}>Awards</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {project.awards.map((award) => (
                    <li key={award} style={{ fontSize: "0.9rem", color: "#28281f", display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                      <span style={{ color: "#6b7c4b", marginTop: "0.1rem" }}>✦</span>{award}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9b9b8f", marginBottom: "0.75rem" }}>Technologies & Skills</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {project.skills.map((s) => <Tag key={s} label={s} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
