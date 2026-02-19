import { useState } from 'react';

const whatsappLink =
  'https://wa.me/523535367398?text=Hola%20La%20Trufer%C3%ADa%2C%20quiero%20hacer%20un%20pedido';

function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [

    { href: '#galeria', label: 'Galería' },
    { href: '#menu', label: 'Menú' },
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
          <svg className="nav-whatsapp-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2.2a9.7 9.7 0 0 0-8.4 14.5L2 22l5.5-1.44A9.8 9.8 0 1 0 12 2.2Zm0 17.72c-1.43 0-2.83-.4-4.03-1.14l-.29-.17-3.26.85.87-3.18-.19-.32a8.02 8.02 0 1 1 6.9 3.96Zm4.48-5.95c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06a6.58 6.58 0 0 1-1.94-1.2 7.25 7.25 0 0 1-1.34-1.66c-.14-.24-.02-.37.1-.5.1-.1.24-.26.36-.4.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.79-.2-.47-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.1 3.62.57.24 1.02.38 1.37.48.58.18 1.1.15 1.51.09.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
          </svg>
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
          <svg className="nav-whatsapp-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2.2a9.7 9.7 0 0 0-8.4 14.5L2 22l5.5-1.44A9.8 9.8 0 1 0 12 2.2Zm0 17.72c-1.43 0-2.83-.4-4.03-1.14l-.29-.17-3.26.85.87-3.18-.19-.32a8.02 8.02 0 1 1 6.9 3.96Zm4.48-5.95c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06a6.58 6.58 0 0 1-1.94-1.2 7.25 7.25 0 0 1-1.34-1.66c-.14-.24-.02-.37.1-.5.1-.1.24-.26.36-.4.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.79-.2-.47-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.1 3.62.57.24 1.02.38 1.37.48.58.18 1.1.15 1.51.09.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
          </svg>
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

.nav-whatsapp-icon {
  width: 0.95rem;
  height: 0.95rem;
  flex: 0 0 0.95rem;
  fill: currentColor;
}

@media (max-width: 760px) {
  .navbar-wrap {
    background: rgba(255, 250, 252, 0.84);
    border-bottom-color: rgba(74, 42, 31, 0.12);
    backdrop-filter: blur(16px);
  }

  .navbar {
    min-height: 72px;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
  }

  .brand {
    gap: 0.58rem;
  }

  .brand-logo {
    width: 42px;
    height: 42px;
    box-shadow: 0 8px 16px rgba(74, 42, 31, 0.12);
  }

  .brand strong {
    font-size: 1rem;
  }

  .brand small {
    font-size: 0.73rem;
  }

  .nav-links,
  .nav-cta {
    display: none;
  }

  .nav-toggle {
    display: inline-flex;
    position: relative;
    flex: 0 0 auto;
    width: 46px;
    height: 46px;
    border-radius: 14px;
    border-color: rgba(74, 42, 31, 0.14);
    box-shadow: 0 10px 18px rgba(74, 42, 31, 0.12);
  }

  .mobile-menu {
    display: grid;
    gap: 0.42rem;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    pointer-events: none;
    transform: translateY(-6px);
    transition: max-height 0.28s ease, opacity 0.18s ease, transform 0.22s ease;
    margin-top: 0.15rem;
  }

  .mobile-menu.is-open {
    max-height: 520px;
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
    padding: 0.75rem;
    margin-bottom: 0.72rem;
    border: 1px solid rgba(74, 42, 31, 0.1);
    border-radius: 18px;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(250, 243, 248, 0.88));
    box-shadow: 0 18px 34px rgba(74, 42, 31, 0.14);
  }

  .mobile-menu a {
    min-height: 46px;
    border: 1px solid rgba(74, 42, 31, 0.12);
    background: rgba(255, 255, 255, 0.9);
    border-radius: 13px;
    padding: 0.58rem 0.82rem;
    font-size: 0.93rem;
    font-weight: 700;
    color: var(--choco-800);
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
  }

  .mobile-menu a::after {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 999px;
    background: rgba(199, 160, 214, 0.78);
    box-shadow: 0 0 0 3px rgba(199, 160, 214, 0.16);
  }

  .mobile-menu a:hover {
    transform: translateY(-1px);
    border-color: rgba(199, 160, 214, 0.48);
    background: rgba(255, 255, 255, 0.98);
  }

  .mobile-menu-cta {
    margin-top: 0.3rem;
    justify-content: center;
    min-height: 48px;
    background: linear-gradient(120deg, var(--lavender-100), rgba(255, 248, 251, 0.98)) !important;
    color: var(--choco-900) !important;
  }

  .mobile-menu-cta::after {
    display: none;
  }
}

@media (max-width: 420px) {
  .navbar {
    min-height: 68px;
  }

  .brand small {
    display: none;
  }

  .brand strong {
    font-size: 0.95rem;
  }

  .mobile-menu.is-open {
    padding: 0.62rem;
  }

  .mobile-menu a {
    min-height: 44px;
    font-size: 0.9rem;
  }
}


`;
