
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
              <a href="#paquetes">Paquetes</a>
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
  border-top: 1px solid var(--border);
  background: linear-gradient(180deg, var(--surface), var(--lavender-50));
}

.footer-main {
  padding: 2.3rem 0 1.5rem;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr 1fr;
  gap: 1.2rem;
}

.footer-main h4 {
  margin: 0 0 0.7rem;
  color: var(--choco-900);
}

.footer-brand p {
  margin: 0.78rem 0 0;
  color: var(--muted);
  max-width: 42ch;
}

.footer-logo-wrap {
  width: fit-content;
}

.footer-logo {
  width: 52px;
  height: 52px;
}

.footer-links {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.45rem;
}

.footer-links a {
  color: var(--choco-800);
  font-weight: 600;
}

.footer-links a:hover {
  color: var(--choco-900);
}

.footer-address {
  margin: 0 0 0.7rem;
  color: var(--muted);
}

.map-wrap {
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  height: 170px;
  background: var(--surface);
}

.map-wrap iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

.footer-bottom {
  min-height: 68px;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  color: var(--muted);
  font-size: 0.9rem;
}

@media (max-width: 1024px) {
  .footer-main {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 760px) {
  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    padding: 0.9rem 0;
  }
}


`;
