
function Footer() {

  return (
    <>
      <style>{footerStyles}</style>
    <footer className="footer">
      <div className="container footer-main">
        <section className="footer-brand">
          <a className="brand footer-logo-wrap" href="#inicio" aria-label="Ir al inicio">
            <img src="/logo.png" alt="Logo La Trufería" className="brand-logo footer-logo" />
            <span>
              <strong>La Trufería</strong>
              <small>Trufas & Pays</small>
            </span>
          </a>
          <p>Boutique de postres artesanales para eventos, regalos y antojos especiales.</p>
        </section>

        <section>
          <h4>Quick links</h4>
          <ul className="footer-links">
            <li>
              <a href="#menu">Menú</a>
            </li>
            <li>
              <a href="#galeria">Galería</a>
            </li>
            <li>
              <a href="#pedidos">Pedidos</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </section>

        <section>
          <h4>Dirección</h4>
          <p className="footer-address">Alfredo Gutiérrez 364, Sahuayo, Mexico, 59028</p>
          <div className="map-wrap" aria-label="Mapa de ubicación">
            <iframe
              title="Mapa La Trufería"
              src="https://maps.google.com/maps?q=Alfredo%20Guti%C3%A9rrez%20364%2C%20Sahuayo%2C%20Mexico%2C%2059028&t=&z=14&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </div>

      <div className="container footer-bottom">
        <small>© {new Date().getFullYear()} La Trufería. Todos los derechos reservados.</small>
        <small>Hecho con amor en La Trufería</small>
      </div>
    </footer>
    </>
  );
}

export default Footer;


const footerStyles = `

.footer {
  position: relative;
  border-top: 1px solid rgba(199, 160, 214, 0.32);
  background:
    repeating-linear-gradient(
      45deg,
      rgba(245, 228, 235, 0.17) 0 36px,
      rgba(251, 242, 234, 0.13) 36px 72px
    ),
    repeating-linear-gradient(
      -45deg,
      rgba(226, 209, 233, 0.2) 0 36px,
      rgba(249, 239, 251, 0.14) 36px 72px
    ),
    radial-gradient(120% 80% at 5% 0%, rgba(242, 183, 198, 0.14), transparent 55%),
    radial-gradient(90% 70% at 95% 100%, rgba(168, 211, 240, 0.14), transparent 62%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(245, 236, 247, 0.78));
  background-blend-mode: multiply, multiply, normal, normal, normal;
  backdrop-filter: blur(4px);
}

.footer-main {
  padding: 3rem 0 1.9rem;
  display: grid;
  grid-template-columns: 1.35fr 0.75fr 0.9fr;
  align-items: start;
  gap: 2rem;
}

.footer-main h4 {
  margin: 0 0 0.8rem;
  color: var(--choco-900);
  font-size: 1.02rem;
  letter-spacing: -0.01em;
}

.footer-brand p {
  margin: 1rem 0 0;
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.65;
  max-width: 42ch;
}

.footer-logo-wrap {
  width: fit-content;
  gap: 0.9rem;
}

.footer-logo {
  width: 72px;
  height: 72px;
}

.footer-logo-wrap strong {
  font-size: 1.45rem;
  line-height: 1;
}

.footer-logo-wrap small {
  margin-top: 0.2rem;
  font-size: 0.98rem;
}

.footer-links {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.45rem;
}

.footer-links a {
  position: relative;
  color: var(--choco-800);
  font-weight: 600;
  transition: color 0.24s ease;
}

.footer-links a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 100%;
  height: 1.5px;
  background: linear-gradient(90deg, var(--lavender-300), rgba(242, 183, 198, 0.8));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s ease;
}

.footer-links a:hover {
  color: var(--choco-900);
}

.footer-links a:hover::after {
  transform: scaleX(1);
}

.footer-address {
  margin: 0 0 0.7rem;
  color: var(--muted);
}

.map-wrap {
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  height: 130px;
  background: var(--surface);
  box-shadow: 0 12px 26px rgba(74, 42, 31, 0.1);
  transition: transform 0.32s cubic-bezier(.22,.61,.36,1), box-shadow 0.28s ease, border-color 0.24s ease;
}

.map-wrap:hover {
  transform: translateY(-2px);
  border-color: rgba(199, 160, 214, 0.45);
  box-shadow: 0 18px 34px rgba(74, 42, 31, 0.14);
}

.map-wrap iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

.footer-bottom {
  min-height: 68px;
  border-top: 1px solid rgba(74, 42, 31, 0.12);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  color: var(--muted);
  font-size: 0.9rem;
  padding: 0.45rem 0 0.8rem;
}

@media (max-width: 1024px) {
  .footer-main {
    grid-template-columns: 1fr;
    gap: 1.3rem;
    padding-top: 2.5rem;
  }

  .footer-logo {
    width: 62px;
    height: 62px;
  }

  .map-wrap {
    height: 118px;
  }
}

@media (max-width: 760px) {
  .footer-main {
    gap: 1.1rem;
    padding: 2.2rem 0 1.4rem;
  }

  .footer-logo {
    width: 58px;
    height: 58px;
  }

  .footer-logo-wrap strong {
    font-size: 1.22rem;
  }

  .footer-logo-wrap small {
    font-size: 0.86rem;
  }

  .map-wrap {
    height: 106px;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    padding: 0.9rem 0;
  }
}


`;
