import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BestSellers from './components/BestSellers';
import Gallery from './components/Gallery';
import Menu from './components/Menu';
import Historia from './components/Historia';
import Paquetes from './components/Paquetes';
import Reviews from './components/Reviews';
import Pedidos from './components/Pedidos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <style>{appStyles}</style>
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <BestSellers />
        <Gallery />
        <Historia />
        <Menu />
        <Paquetes />
        <Reviews />
        <Pedidos />
        <Contacto />
      </main>
      <Footer />
    </div>
    </>
  );
}

export default App;


const appStyles = `

@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

:root {
  --bg: #FFF8FB;
  --surface: #FFFFFF;
  --lavender-50: #F5ECF7;
  --lavender-100: #EBD7EF;
  --lavender-200: #D7B8E2;
  --lavender-300: #C7A0D6;
  --choco-900: #4A2A1F;
  --choco-800: #5B3426;
  --choco-700: #6A3F2E;
  --text: #4A2A1F;
  --muted: #6B5A55;
  --border: rgba(74, 42, 31, 0.14);
  --sprinkle-pink: #F2B7C6;
  --sprinkle-blue: #A8D3F0;
  --sprinkle-yellow: #F6E29C;
  --shadow-soft: 0 10px 28px rgba(74, 42, 31, 0.1);
  --shadow-lift: 0 16px 34px rgba(74, 42, 31, 0.14);
  --font-title: 'Pacifico', 'Milkshake', cursive;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji';
  background: var(--bg);
  color: var(--text);
  line-height: 1.5;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}


.container {
  width: min(1160px, calc(100% - 2.2rem));
  margin-inline: auto;
}

.btn {
  border: 1px solid transparent;
  background: linear-gradient(140deg, var(--lavender-300), var(--lavender-200));
  color: var(--choco-900);
  border-radius: 999px;
  font-weight: 700;
  padding: 0.74rem 1.05rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;
  box-shadow: var(--shadow-soft);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lift);
}

.btn-ghost {
  background: var(--surface);
  border-color: var(--border);
  color: var(--choco-800);
}

.light-ghost {
  background: rgba(255, 255, 255, 0.16);
  color: #fff;
  border-color: rgba(255, 255, 255, 0.35);
}

.btn-small {
  font-size: 0.92rem;
  padding: 0.62rem 0.92rem;
}

.btn-large {
  padding: 0.88rem 1.4rem;
  font-size: 1rem;
}

.btn-block {
  width: 100%;
}

.section {
  padding: 4.2rem 0;
}

.section-tint {
  background: linear-gradient(180deg, transparent, var(--lavender-50) 18%, transparent);
}

.section-head {
  margin-bottom: 1.35rem;
  max-width: 70ch;
}

.compact-head {
  margin-bottom: 1rem;
}

.section-head h3 {
  display: inline-block;
  position: relative;
  margin: 0;
  color: var(--choco-900);
  font-size: clamp(1.85rem, 3.8vw, 2.75rem);
  letter-spacing: -0.015em;
  font-family: var(--font-title);
  font-weight: 400;
  line-height: 1.04;
  padding: 0.4rem 1rem 0.5rem;
  border: 4px dotted rgba(74, 42, 31, 0.68);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.72);
}

.section-head h3::after {
  content: none;
}

.section-head p {
  margin: 0.66rem 0 0;
  max-width: 62ch;
  color: var(--muted);
  font-size: clamp(0.96rem, 1.7vw, 1.06rem);
  line-height: 1.6;
}

.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 0.88rem;
  box-shadow: var(--shadow-soft);
}

.badge {
  display: inline-flex;
  border-radius: 999px;
  padding: 0.22rem 0.58rem;
  font-size: 0.74rem;
  font-weight: 700;
  color: var(--choco-900);
  background: linear-gradient(90deg, var(--sprinkle-pink), var(--sprinkle-yellow), var(--sprinkle-blue));
}

a:focus-visible,
button:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 3px solid var(--lavender-300);
  outline-offset: 2px;
}

@media (max-width: 760px) {
  .container {
    width: min(1160px, calc(100% - 1.3rem));
  }

  .section {
    padding: 2.6rem 0;
  }

  .card {
    border-radius: 15px;
    padding: 0.72rem;
  }
}


`;
