import { useEffect, useRef, useState } from 'react';

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
        className={`section story-section ${isVisible ? 'is-visible' : ''}`}
        id="nuestra-historia"
        ref={sectionRef}
        aria-labelledby="historia-title"
      >
        <div className="container">
          <div className="section-head compact-head">
            <h3>Nuestra historia</h3>
          </div>

          <div className="story-grid">
            <figure className="story-media">
              <img src="/logo.png" alt="Logo La Truferia" loading="lazy" />
            </figure>

            <div className="story-content">
              <h3 id="historia-title">Hecho para momentos que se recuerdan</h3>
              <p>
                La truferia nació en 2021 de un proyecto escolar, familiar y el gusto por la
                repostería, la manera en que se comparte cuando hay una ocasión especial, un
                cumpleaños, bodas, o simplemente una convivencia de fin de semana.
              </p>
              <p>
                La presentación con cada detalle es una muestra de la dedicación y cariño con la que
                se elabora un postre, desde la elección de los ingredientes, técnicas y cuidados de
                horneo, frutas frescas en el punto perfecto de maduración o en mermelada.
              </p>
              <div className="story-divider" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Historia;


const historiaStyles = `

.story-section {
  padding-block: clamp(4.2rem, 8vw, 6.4rem);
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.story-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.story-grid {
  display: grid;
  gap: 1.7rem;
  align-items: center;
}

.story-media {
  margin: 0;
  justify-self: center;
  width: clamp(220px, 62vw, 360px);
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-soft);
  display: grid;
  place-items: center;
  background: var(--surface);
}

.story-media img {
  width: 76%;
  height: 76%;
  min-height: 0;
  object-fit: contain;
  object-position: center;
}

.story-content {
  max-width: 68ch;
  display: grid;
  gap: 1rem;
  align-content: center;
  text-align: left;
}

.story-content h3 {
  margin: 0;
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  line-height: 1.12;
  color: var(--choco-900);
  letter-spacing: -0.01em;
}

.story-content p {
  margin: 0;
  color: var(--choco-800);
}

.story-divider {
  margin-top: 0.45rem;
  width: min(220px, 58%);
  height: 8px;
  border-radius: 999px;
  background: linear-gradient(
    90deg,
    rgba(242, 183, 198, 0.5),
    rgba(246, 226, 156, 0.6),
    rgba(168, 211, 240, 0.5)
  );
}

@media (min-width: 900px) {
  .story-grid {
    grid-template-columns: minmax(0, 0.86fr) minmax(0, 1.14fr);
    gap: clamp(2rem, 4vw, 3.5rem);
  }
}

@media (prefers-reduced-motion: reduce) {
  .story-section {
    opacity: 1;
    transform: none;
    transition: none;
  }
}

`;
