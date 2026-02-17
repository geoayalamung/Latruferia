function Footer() {
  return (
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
  );
}

export default Footer;
