const projects = [
  {
    title: "Variational Quantum Classifier",
    description:
      "A VQC built with PennyLane that classifies real-world datasets using parameterized quantum circuits. Benchmarked against a classical SVM with a detailed analysis of accuracy, training dynamics, and quantum advantage boundaries.",
    tags: ["Python", "PennyLane", "Qiskit", "Quantum ML"],
    github: "#",
    live: null,
  },
  {
    title: "Quantitative Finance Predictor",
    description:
      "Asset volatility and price direction model using LSTM and Transformer architectures, trained on real market data. Includes proper walk-forward validation, risk metrics, and a comparison against baseline statistical models.",
    tags: ["Python", "PyTorch", "Pandas", "Finance"],
    github: "#",
    live: null,
  },
  {
    title: "AI Research Assistant",
    description:
      "Autonomous agent that fetches academic papers, extracts key findings, identifies methodological patterns, and produces structured research summaries. Built without LangChain to expose the full retrieval and generation pipeline.",
    tags: ["Python", "Claude API", "RAG", "NLP"],
    github: "#",
    live: null,
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

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <h3
        style={{
          fontFamily: "var(--font-playfair), Georgia, serif",
          fontSize: "1.25rem",
          fontWeight: 600,
          color: "#28281f",
          lineHeight: 1.2,
        }}
      >
        {project.title}
      </h3>

      <p
        style={{
          color: "#6b6b60",
          fontSize: "0.95rem",
          lineHeight: 1.75,
          flex: 1,
        }}
      >
        {project.description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {project.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>

      <div style={{ display: "flex", gap: "1.5rem", marginTop: "0.25rem" }}>
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
    </article>
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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
