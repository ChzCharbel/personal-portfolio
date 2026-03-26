const projects = [
  {
    title: "VQC Implementation",
    subtitle: "Quantum Machine Learning",
    description:
      "Designed a 2-qubit parameterized quantum circuit with RY-RZ-CNOT ansatz trained via the parameter-shift rule. Benchmarked against SVM-RBF baseline, achieving 91.2% test accuracy with near-identical AUC (0.9868 vs 0.9871). Analyzed loss landscape, quantum kernel geometry, and barren plateau theory to explain the performance gap.",
    tags: ["Python", "PennyLane", "Quantum Computing", "Quantum ML", "Machine Learning"],
    github: "https://github.com/ChzCharbel/VQC",
    live: null,
    date: "Spring 2026",
  },
  {
    title: "VitalSoft - Healthcare Management System",
    subtitle: "Full-Stack & Android Developer",
    description:
      "Full-stack healthcare platform to manage patient appointments and electronic medical records for a nephrology organization. Built RESTful backend services with Node.js and Express, a React web app for doctors, and an Android application in Kotlin enabling patients to book appointments and access lab results.",
    tags: ["React", "Node.js", "Express", "Kotlin", "Android"],
    github: "https://github.com/ChzCharbel/Backend-and-web-Nefrovida",
    live: null,
    date: "Fall 2025",
  },
  {
    title: "Diana - Exoplanet Detection Web App",
    subtitle: "Machine Learning Engineer",
    description:
      "Trained and evaluated LightGBM models on 15,000+ Kepler and TESS samples for exoplanet detection. Built a FastAPI backend and React frontend for real-time inference and visualization. Achieved 2nd place at NASA Space Apps Challenge 2025 (local event).",
    tags: ["Machine Learning", "Python", "LightGBM", "FastAPI", "React"],
    github: "https://github.com/ChzCharbel/nasa_space_apps2025",
    live: null,
    date: "Oct 2025",
  },
  {
    title: "Multi-Agent Fire Rescue Simulation",
    subtitle: "Agent-Based Modeling",
    description:
      "Developed a multi-agent system using Python and Mesa, achieving a 27% win rate across 100+ simulations. Implemented autonomous agents with dynamic role assignment and Dijkstra-based pathfinding. Built real-time visualization using Flask and WebSockets.",
    tags: ["Multi-Agent", "Python", "Mesa", "Flask", "WebSockets"],
    github: "https://github.com/ChzCharbel/BoardGameSimulation",
    live: "https://fire-rescue-simulation.onrender.com/",
    date: "Summer 2025",
  },
];

function Tag({ label }) {
  return (
    <span
      style={{
        fontSize: "0.7rem",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "#6b7c4b",
        border: "1px solid #d4cfc6",
        padding: "0.25rem 0.625rem",
      }}
    >
      {label}
    </span>
  );
}

function ProjectCard({ project, index }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        paddingBottom: "2.5rem",
        position: "relative",
      }}
    >
      {/* Timeline dot and line */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Dot */}
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
        {/* Connecting line */}
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
        <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "0.25rem" }}>
          <h3
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "#28281f",
              lineHeight: 1.2,
            }}
          >
            {project.title}
          </h3>
          <span
            style={{
              fontSize: "0.85rem",
              color: "#9b9b8f",
              fontStyle: "italic",
              whiteSpace: "nowrap",
            }}
          >
            {project.date}
          </span>
        </div>
        {project.subtitle && (
          <p style={{ fontSize: "0.8rem", color: "#6b7c4b", marginBottom: "0.5rem", fontStyle: "italic" }}>
            {project.subtitle}
          </p>
        )}

        <p
          style={{
            color: "#6b6b60",
            fontSize: "0.9rem",
            lineHeight: 1.7,
            marginBottom: "1rem",
          }}
        >
          {project.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.75rem" }}>
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            GitHub →
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Demo →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "6rem 2rem",
        borderTop: "1px solid #d4cfc6",
      }}
    >
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
          Selected Work
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
          Projects
        </h2>

        <div style={{ position: "relative" }}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
