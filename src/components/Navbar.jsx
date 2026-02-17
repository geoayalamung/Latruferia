const whatsappLink =
  'https://wa.me/523535367398?text=Hola%20La%20Trufer%C3%ADa%2C%20quiero%20hacer%20un%20pedido';

function Navbar() {
  return (
    <header className="navbar-wrap">
      <nav className="navbar container" aria-label="Principal">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          <img src="/logo.png" alt="Logo La Trufería" className="brand-logo" />
          <span>
            <strong>La Trufería</strong>
            <small>Trufas & Pays</small>
          </span>
        </a>

        <ul className="nav-links">
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

        <a className="btn btn-small" href={whatsappLink} target="_blank" rel="noreferrer">
          Pedir por WhatsApp
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
