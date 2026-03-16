const categories = [
  {
    name: "Languages",
    items: ["Python", "C++", "JavaScript", "TypeScript", "HTML & CSS"],
  },
  {
    name: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    name: "Backend",
    items: ["Node.js", "Express", "FastAPI", "PostgreSQL"],
  },
  {
    name: "Computing",
    items: ["CUDA", "Multithreading", "Parallel Computing", "Algorithms"],
  },
  {
    name: "Tools",
    items: ["Git", "Docker", "Linux", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "6rem 2rem",
        borderTop: "1px solid #d4cfc6",
        backgroundColor: "#edeae0",
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
          Expertise
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
          Skills
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "2.5rem",
          }}
        >
          {categories.map(({ name, items }) => (
            <div key={name}>
              <h3
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#6b7c4b",
                  marginBottom: "1rem",
                  fontFamily: "var(--font-lora), Georgia, serif",
                }}
              >
                {name}
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: "0.95rem",
                      color: "#28281f",
                      paddingLeft: "1rem",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: "#6b7c4b",
                        fontSize: "0.6rem",
                        top: "0.35rem",
                      }}
                    >
                      ◆
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
