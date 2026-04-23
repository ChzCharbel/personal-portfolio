"use client";

import { useState, useEffect } from "react";

interface CarouselProps {
  images: string[];
}

function ImagePlaceholder({ index }: { index: number }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#edeae0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          fontSize: "0.75rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#9b9b8f",
        }}
      >
        Image {index + 1}
      </span>
    </div>
  );
}

export default function Carousel({ images }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const items = images && images.length > 0 ? images : [null, null];
  const total = items.length;

  const prev = (e?: React.MouseEvent) => { e?.stopPropagation(); setCurrent((c) => (c - 1 + total) % total); };
  const next = (e?: React.MouseEvent) => { e?.stopPropagation(); setCurrent((c) => (c + 1) % total); };

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") setLightbox(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, current]);

  return (
    <>
      {/* ── Carousel strip ── */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <div
          style={{
            position: "relative",
            border: "1px solid #d4cfc6",
            overflow: "hidden",
            cursor: items[current] ? "zoom-in" : "default",
          }}
          onClick={() => items[current] && setLightbox(true)}
        >
          <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
            {items[current] ? (
              <img
                src={items[current] as string}
                alt={`Screenshot ${current + 1}`}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            ) : (
              <div style={{ position: "absolute", inset: 0 }}>
                <ImagePlaceholder index={current} />
              </div>
            )}
          </div>

          {total > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Previous image"
                style={{
                  position: "absolute",
                  left: "0.75rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(245,242,235,0.85)",
                  border: "1px solid #d4cfc6",
                  color: "#28281f",
                  width: "2rem",
                  height: "2rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#edeae0")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(245,242,235,0.85)")}
              >
                ←
              </button>
              <button
                onClick={next}
                aria-label="Next image"
                style={{
                  position: "absolute",
                  right: "0.75rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(245,242,235,0.85)",
                  border: "1px solid #d4cfc6",
                  color: "#28281f",
                  width: "2rem",
                  height: "2rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#edeae0")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(245,242,235,0.85)")}
              >
                →
              </button>
            </>
          )}
        </div>

        {total > 1 && (
          <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem" }}>
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to image ${i + 1}`}
                style={{
                  width: i === current ? "1.5rem" : "0.5rem",
                  height: "0.5rem",
                  borderRadius: "9999px",
                  backgroundColor: i === current ? "#6b7c4b" : "#d4cfc6",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "width 0.25s ease, background-color 0.25s ease",
                }}
              />
            ))}
          </div>
        )}

        <p
          style={{
            textAlign: "center",
            fontSize: "0.7rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#9b9b8f",
          }}
        >
          {current + 1} / {total}
        </p>
      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          onClick={() => setLightbox(false)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(20,20,16,0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "1.5rem",
          }}
        >
          <button
            onClick={() => setLightbox(false)}
            aria-label="Close"
            style={{
              position: "absolute",
              top: "1.25rem",
              right: "1.25rem",
              background: "none",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#f5f2eb",
              width: "2.25rem",
              height: "2.25rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            ✕
          </button>

          {total > 1 && (
            <button
              onClick={prev}
              aria-label="Previous image"
              style={{
                position: "absolute",
                left: "1.25rem",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(245,242,235,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#f5f2eb",
                width: "2.5rem",
                height: "2.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              ←
            </button>
          )}

          <img
            src={items[current] as string}
            alt={`Screenshot ${current + 1}`}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90vw",
              maxHeight: "85vh",
              objectFit: "contain",
              display: "block",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          />

          {total > 1 && (
            <button
              onClick={next}
              aria-label="Next image"
              style={{
                position: "absolute",
                right: "1.25rem",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(245,242,235,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#f5f2eb",
                width: "2.5rem",
                height: "2.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              →
            </button>
          )}

          <p
            style={{
              position: "absolute",
              bottom: "1.25rem",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(245,242,235,0.5)",
            }}
          >
            {current + 1} / {total}
          </p>
        </div>
      )}
    </>
  );
}
