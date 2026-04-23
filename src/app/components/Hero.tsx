export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "8rem 2rem 5rem",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* Left — text */}
        <div>
          <h1
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(3rem, 8vw, 5.5rem)",
              fontWeight: 700,
              color: "#28281f",
              lineHeight: 1.05,
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Charbel Chávez
          </h1>

          <div
            style={{
              width: "3rem",
              height: "2px",
              backgroundColor: "#6b7c4b",
              marginBottom: "1.75rem",
            }}
          />

          <p
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "#6b6b60",
              marginBottom: "1.75rem",
            }}
          >
            AI, Data Science & Machine Learning
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#6b6b60",
              maxWidth: "520px",
              lineHeight: 1.8,
              marginBottom: "3rem",
            }}
          >
            CS student at Monterrey&apos;s Institute of Technology researching hybrid
            classical-quantum architectures. I build full-stack systems, train
            ML models on real data, and explore the boundary where computation
            and physics meet.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="#experience" className="btn-primary">Experience</a>
            <a href="#projects" className="btn-primary">Projects</a>
            <a href="#contact" className="btn-secondary">Get in touch</a>
            <a href="/CharbelCV.pdf" download className="btn-secondary">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  );
}
