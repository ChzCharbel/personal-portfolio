import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  { label: "GitHub", icon: FaGithub, href: "https://github.com/chzcharbel" },
  { label: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com/in/charbelchz" },
  { label: "Twitter / X", icon: FaXTwitter, href: "https://twitter.com/charbel_chz" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "7rem 2rem 5rem",
        borderTop: "1px solid #d4cfc6",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "560px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#6b7c4b",
            marginBottom: "1rem",
          }}
        >
          Let's Talk
        </p>
        <h2
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            fontWeight: 700,
            color: "#28281f",
            marginBottom: "1.25rem",
            lineHeight: 1.15,
          }}
        >
          Contact
        </h2>
        <p
          style={{
            color: "#6b6b60",
            lineHeight: 1.8,
            marginBottom: "2.5rem",
          }}
        >
          If you have a project in mind, a job offer, or simply want to say
          hello, feel free to reach out.
        </p>

        <a href="mailto:charbel_chz@outlook.com" className="email-link">
          charbel_chz@outlook.com
        </a>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            marginBottom: "4rem",
          }}
        >
          {socials.map(({ label, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="subtle-link"
            >
              <Icon size={22} />
            </a>
          ))}
        </div>

        <p
          style={{
            fontSize: "0.75rem",
            color: "#6b6b60",
            letterSpacing: "0.05em",
            borderTop: "1px solid #d4cfc6",
            paddingTop: "2rem",
            marginTop: "4rem",
          }}
        >
          © {new Date().getFullYear()} Charbel Chávez
        </p>
      </div>
    </section>
  );
}
