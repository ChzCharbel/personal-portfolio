const facts = [
  { label: "Location", value: "Querétaro, México" },
  { label: "Availability", value: "Open to opportunities" },
  { label: "Focus", value: "ML · AI · Data Science" },
  { label: "Languages", value: "Spanish (Native) · English (C1)" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "6rem 2rem",
        borderTop: "1px solid #d4cfc6",
        backgroundColor: "#edeae0",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "5rem",
          alignItems: "start",
        }}
      >
        {/* Left */}
        <div>
          <p
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#6b7c4b",
              marginBottom: "1rem",
            }}
          >
            About Me
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 700,
              color: "#28281f",
              marginBottom: "1.5rem",
              lineHeight: 1.15,
            }}
          >
            A curious mind,
            <br />
            <em style={{ fontWeight: 400 }}>building solutions.</em>
          </h2>
          <p
            style={{
              color: "#6b6b60",
              lineHeight: 1.85,
              marginBottom: "1.25rem",
            }}
          >
            I'm a CS student with strong interests in artificial intelligence,
            data science, quantitative finance, applied mathematics, and physics.
            I enjoy understanding complex systems and using computation to model,
            analyze, and solve real-world problems.
          </p>
          <p style={{ color: "#6b6b60", lineHeight: 1.85 }}>
            I'm actively interested in academic research at the frontier of AI —
            classical machine learning, quantum machine learning, and the
            mathematical structures that underpin intelligent systems. I'm drawn
            to open questions where computation, physics, and data science
            converge, and I'm looking to contribute to research in these areas.
          </p>
        </div>

        {/* Right — quick facts */}
        <div style={{ paddingTop: "3.5rem" }}>
          {facts.map(({ label, value }) => (
            <div
              key={label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                padding: "1rem 0",
                borderBottom: "1px solid #d4cfc6",
                gap: "1rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#6b6b60",
                  flexShrink: 0,
                }}
              >
                {label}
              </span>
              <span
                style={{
                  fontSize: "0.95rem",
                  color: "#28281f",
                  textAlign: "right",
                }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
