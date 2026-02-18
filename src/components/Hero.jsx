
const whatsappLink =
  'https://wa.me/523535367398?text=Hola%20La%20Trufer%C3%ADa%2C%20quiero%20hacer%20un%20pedido';

function Hero() {

  return (
    <>
      <style>{heroStyles}</style>
    <section className="hero" id="inicio">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        poster="/Images/Trufas/trufas.jpg"
      >
        <source src="/bg-trufas.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <div className="container hero-grid">
        <div className="hero-content">
          <h1>Postres que se antojan desde la primera vista</h1>
          <p className="hero-copy">Trufas, pays y tartas para regalos y eventos.</p>

          <div className="hero-actions">
            <a href={whatsappLink} className="btn" target="_blank" rel="noreferrer">
              Pedir ahora
            </a>
            <a href="#menu" className="btn btn-ghost light-ghost">
              Ver menú
            </a>
          </div>

          <div className="hero-pills" aria-label="Beneficios">
            <span>Pedidos con 2 días de anticipación</span>
            <span>Temática a elegir</span>
            <span>Hecho con cariño</span>
          </div>
        </div>

        <aside className="hero-logo-wrap" aria-label="La Truferia logo">
          <img className="hero-logo" src="/Images/la-truferia-logo.png" alt="La Truferia" />
        </aside>
      </div>
    </section>
    </>
  );
}

export default Hero;


const heroStyles = `

.hero {
  min-height: min(88vh, 860px);
  position: relative;
  display: grid;
  align-items: end;
  background-image: url('/Images/Trufas/trufas.jpg');
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.hero-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(74, 42, 31, 0.78) 18%, rgba(74, 42, 31, 0.46) 58%, rgba(74, 42, 31, 0.24));
  z-index: 1;
}

.hero-grid {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 1.2rem;
  align-items: end;
  padding: 8rem 0 4.3rem;
}

.hero-content h1 {
  margin: 0;
  max-width: 14ch;
  color: #fff;
  font-size: clamp(2.1rem, 5.2vw, 4rem);
  line-height: 1.05;
  letter-spacing: -0.02em;
}

.hero-copy {
  margin: 0.95rem 0 1.45rem;
  max-width: 42ch;
  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(1rem, 2.1vw, 1.25rem);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
}

.hero-pills {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.hero-pills span {
  font-size: 0.82rem;
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 999px;
  color: #fff;
  padding: 0.34rem 0.65rem;
  background: rgba(255, 255, 255, 0.12);
}

.hero-logo-wrap {
  justify-self: end;
  width: min(320px, 78vw);
  aspect-ratio: 1 / 1;
  padding: 0.7rem;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.24);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  overflow: hidden;
}

.hero-logo {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  filter: drop-shadow(0 8px 26px rgba(0, 0, 0, 0.35));
}

@media (max-width: 1024px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding-top: 7.4rem;
  }

  .hero-logo-wrap {
    justify-self: start;
  }
}

@media (max-width: 760px) {
  .hero {
    min-height: 76vh;
  }

  .hero-video {
    inset: -8%;
    width: 116%;
    height: 116%;
    transform: scale(0.86);
    transform-origin: center;
  }

  .hero-content h1 {
    max-width: 18ch;
    font-size: clamp(1.95rem, 9vw, 2.55rem);
  }

  .hero-copy {
    margin-bottom: 1.05rem;
    font-size: 1rem;
  }

  .hero-actions {
    width: min(360px, 100%);
    display: grid;
    gap: 0.58rem;
  }

  .hero-actions .btn {
    width: 100%;
    min-height: 46px;
  }

  .hero-pills {
    gap: 0.44rem;
  }

  .hero-pills span {
    font-size: 0.78rem;
    padding: 0.3rem 0.58rem;
  }

  .hero-logo-wrap {
    justify-self: center;
    width: min(190px, 52vw);
  }
}


`;
