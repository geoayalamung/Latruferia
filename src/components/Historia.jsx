import { useEffect, useRef, useState } from "react";

function Historia() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
      <>
        <style>{historiaStyles}</style>

        <section
            className={`section story-section ${isVisible ? "is-visible" : ""}`}
            id="nuestra-historia"
            ref={sectionRef}
            aria-labelledby="historia-title"
        >
          <div className="container">
            <div className="story-shell">
              <header className="story-head section-head compact-head">

                <div className="story-headline-row">
                  <h2 id="historia-title" className="story-title">
                    Nuestra historia
                  </h2>

                  <span className="story-badge" aria-label="Fundada en 2021">
                  Desde 2021
                </span>
                </div>

                <p className="story-subtitle">
                  Nacimos de un proyecto familiar y del gusto por la repostería: crear postres que se
                  comparten, celebran y se quedan en la memoria.
                </p>
              </header>

              <div className="story-grid">
                <figure className="story-media">
                  <div className="story-media-ring" aria-hidden="true" />
                  <div className="story-media-inner">
                    <img src="/logo.png" alt="Logo La Truferia" loading="lazy" />
                  </div>
                </figure>

                <div className="story-content">
                  <p>
                    La truferia nació en 2021 de un proyecto escolar, familiar y el gusto por la
                    repostería, la manera en que se comparte cuando hay una ocasión especial, un
                    cumpleaños, bodas, o simplemente una convivencia de fin de semana.
                  </p>

                  <p>
                    La presentación con cada detalle es una muestra de la dedicación y cariño con la
                    que se elabora un postre, desde la elección de los ingredientes, técnicas y
                    cuidados de horneo, frutas frescas en el punto perfecto de maduración o en
                    mermelada.
                  </p>

                  <ul className="story-chips" aria-label="Valores">
                    <li className="story-chip">Hecho a mano</li>
                    <li className="story-chip">Ingredientes seleccionados</li>
                    <li className="story-chip">Detalles que importan</li>
                  </ul>

                  <div className="story-divider" aria-hidden="true" />
                </div>
              </div>

              <div className="story-glow" aria-hidden="true" />
            </div>
          </div>
        </section>
      </>
  );
}

export default Historia;

const historiaStyles = `
/* SECTION ENTER */
.story-section {
  padding-block: clamp(4.2rem, 8vw, 6.4rem);
  opacity: 0;
  transform: translateY(22px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.story-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* SHELL (adds structure without changing palette) */
.story-shell {
  position: relative;
  border: 1px solid var(--border);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.60),
    rgba(255, 255, 255, 0.35)
  );
  backdrop-filter: blur(8px);
  border-radius: 24px;
  box-shadow: var(--shadow-soft);
  padding: clamp(1.4rem, 3.2vw, 2.2rem);
  overflow: hidden;
}

/* subtle ambient glow using your existing gradient family */
.story-glow {
  position: absolute;
  inset: -30% -30% auto -30%;
  height: 240px;
  background: radial-gradient(
    closest-side,
    rgba(242, 183, 198, 0.22),
    rgba(246, 226, 156, 0.14),
    rgba(168, 211, 240, 0.16),
    transparent 70%
  );
  pointer-events: none;
  filter: blur(10px);
}

/* HEAD */
.story-head {
  display: grid;
  gap: 0.85rem;
  margin-bottom: clamp(1rem, 2.2vw, 1.5rem);
}

.story-kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
}

.story-dot {
  width: 9px;
  height: 9px;
  border-radius: 999px;
  background: linear-gradient(
    90deg,
    rgba(242, 183, 198, 0.9),
    rgba(246, 226, 156, 0.9),
    rgba(168, 211, 240, 0.9)
  );
  box-shadow: 0 0 0 4px rgba(242, 183, 198, 0.10);
}

.story-eyebrow {
  margin: 0;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-size: 0.82rem;
  color: var(--choco-800);
}

.story-headline-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.story-title {
  max-width: 22ch;
}

.story-badge {
  display: inline-flex;
  align-items: center;
  height: 34px;
  padding: 0 0.85rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--choco-800);
  font-size: 0.9rem;
  white-space: nowrap;
  box-shadow: var(--shadow-soft);
}

.story-subtitle {
  margin: 0;
  color: var(--choco-800);
  max-width: 70ch;
}

/* GRID */
.story-grid {
  display: grid;
  gap: clamp(1.3rem, 3vw, 2.2rem);
  align-items: center;
}

/* MEDIA */
.story-media {
  margin: 0;
  justify-self: center;
  width: clamp(220px, 52vw, 360px);
  aspect-ratio: 1 / 1;
  position: relative;
  display: grid;
  place-items: center;

  opacity: 0;
  transform: translateY(10px) scale(0.985);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.story-section.is-visible .story-media {
  opacity: 1;
  transform: translateY(0) scale(1);
  transition-delay: 0.05s;
}

.story-media-ring {
  position: absolute;
  inset: -10px;
  border-radius: 50%;
  background: linear-gradient(
    90deg,
    rgba(242, 183, 198, 0.55),
    rgba(246, 226, 156, 0.55),
    rgba(168, 211, 240, 0.55)
  );
  filter: blur(0.2px);
  opacity: 0.75;
}

.story-media-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--surface);
  box-shadow: var(--shadow-soft);
  display: grid;
  place-items: center;
  position: relative;
  transform: translateZ(0);
  transition: transform 0.25s ease;
}

.story-media-inner:hover {
  transform: scale(1.012);
}

.story-media img {
  width: 78%;
  height: 78%;
  min-height: 0;
  object-fit: contain;
  object-position: center;
}

/* CONTENT */
.story-content {
  max-width: 72ch;
  display: grid;
  gap: 0.95rem;
  align-content: center;
  text-align: left;

  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.story-section.is-visible .story-content {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.12s;
}

.story-content p {
  margin: 0;
  color: var(--choco-800);
}

/* CHIPS */
.story-chips {
  list-style: none;
  padding: 0;
  margin: 0.25rem 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
}

.story-chip {
  display: inline-flex;
  align-items: center;
  height: 34px;
  padding: 0 0.85rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.55);
  color: var(--choco-800);
  font-size: 0.92rem;
  box-shadow: var(--shadow-soft);
}

/* DIVIDER (yours, slightly refined spacing) */
.story-divider {
  margin-top: 0.35rem;
  width: min(260px, 62%);
  height: 8px;
  border-radius: 999px;
  background: linear-gradient(
    90deg,
    rgba(242, 183, 198, 0.5),
    rgba(246, 226, 156, 0.6),
    rgba(168, 211, 240, 0.5)
  );
}

/* LAYOUT DESKTOP */
@media (min-width: 900px) {
  .story-grid {
    grid-template-columns: minmax(0, 0.86fr) minmax(0, 1.14fr);
    gap: clamp(2.2rem, 4vw, 3.6rem);
  }

  .story-media {
    justify-self: start;
  }
}

@media (max-width: 760px) {
  .story-title {
    padding: 0.34rem 0.78rem 0.42rem;
    border-width: 3px;
  }
}

/* REDUCE MOTION */
@media (prefers-reduced-motion: reduce) {
  .story-section,
  .story-media,
  .story-content {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .story-media-inner {
    transition: none;
  }
}
`;
