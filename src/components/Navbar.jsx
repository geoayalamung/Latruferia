import { useState } from 'react';

const whatsappLink =
  'https://wa.me/523535367398?text=Hola%20La%20Trufer%C3%ADa%2C%20quiero%20hacer%20un%20pedido';

function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [

    { href: '#galeria', label: 'Galería' },
    { href: '#menu', label: 'Menú' },
    { href: '#paquetes', label: 'Paquetes' },
    { href: '#eventos', label: 'Eventos' },
    { href: '#pedidos', label: 'Pedidos' },
    { href: '#contacto', label: 'Contacto' },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <style>{navbarStyles}</style>
    <header className="navbar-wrap">
      <nav className="navbar container" aria-label="Principal">
        <a className="brand" href="#inicio" aria-label="Ir al inicio" onClick={closeMenu}>
          <img src="/logo.png" alt="Logo La Trufería" className="brand-logo" />
          <span>
            <strong>La Trufería</strong>
            <small>Trufas & Pays</small>
          </span>
        </a>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        <a className="btn btn-small nav-cta" href={whatsappLink} target="_blank" rel="noreferrer">
          Pedir por WhatsApp
        </a>

        <button
          type="button"
          className={`nav-toggle ${isMenuOpen ? 'is-open' : ''}`}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div id="mobile-menu" className={`mobile-menu container ${isMenuOpen ? 'is-open' : ''}`} aria-label="Menú móvil">
        <a href="#inicio" onClick={closeMenu}>Inicio</a>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a className="btn btn-small mobile-menu-cta" href={whatsappLink} target="_blank" rel="noreferrer" onClick={closeMenu}>
          Pedir por WhatsApp
        </a>
      </div>
    </header>
    </>
  );
}

export default Navbar;


const navbarStyles = `

.navbar-wrap {
  position: sticky;
  top: 0;
  z-index: 70;
  border-bottom: 1px solid var(--border);
  background: rgba(255, 248, 251, 0.72);
  backdrop-filter: blur(14px);
}

.navbar {
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.brand-logo {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  object-fit: cover;
  background: var(--surface);
  border: 1px solid var(--border);
}

.brand span {
  display: grid;
  line-height: 1.02;
}

.brand strong {
  color: var(--choco-900);
  font-size: 1rem;
  font-family: var(--font-title);
  font-weight: 400;
}

.brand small {
  color: var(--muted);
  font-size: 0.78rem;
}

.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 0.45rem;
}

.nav-links a {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 0.45rem 0.75rem;
  color: var(--choco-800);
  font-weight: 600;
  transition: background-color 0.25s ease, transform 0.25s ease;
}

.nav-links a:hover {
  background: var(--lavender-50);
  transform: translateY(-1px);
}

.nav-toggle {
  display: none;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.9);
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
}

.nav-toggle span {
  position: absolute;
  width: 18px;
  height: 2px;
  border-radius: 999px;
  background: var(--choco-900);
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.nav-toggle span:nth-child(1) {
  transform: translateY(-6px);
}

.nav-toggle span:nth-child(3) {
  transform: translateY(6px);
}

.nav-toggle.is-open span:nth-child(1) {
  transform: rotate(45deg);
}

.nav-toggle.is-open span:nth-child(2) {
  opacity: 0;
}

.nav-toggle.is-open span:nth-child(3) {
  transform: rotate(-45deg);
}

.mobile-menu {
  display: none;
}

@media (max-width: 760px) {
  .navbar {
    min-height: 68px;
  }

  .brand {
    gap: 0.55rem;
  }

  .brand-logo {
    width: 40px;
    height: 40px;
  }

  .brand strong {
    font-size: 0.94rem;
  }

  .brand small {
    font-size: 0.72rem;
  }

  .nav-links,
  .nav-cta {
    display: none;
  }

  .nav-toggle {
    display: inline-flex;
    position: relative;
    flex: 0 0 auto;
  }

  .mobile-menu {
    display: grid;
    gap: 0.35rem;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    pointer-events: none;
    transform: translateY(-6px);
    transition: max-height 0.28s ease, opacity 0.18s ease, transform 0.22s ease;
  }

  .mobile-menu.is-open {
    max-height: 420px;
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
    padding-bottom: 0.7rem;
  }

  .mobile-menu a {
    min-height: 44px;
    border: 1px solid var(--border);
    background: rgba(255, 255, 255, 0.9);
    border-radius: 12px;
    padding: 0.56rem 0.78rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--choco-800);
    display: inline-flex;
    align-items: center;
  }

  .mobile-menu-cta {
    margin-top: 0.25rem;
    justify-content: center;
  }
}


`;
