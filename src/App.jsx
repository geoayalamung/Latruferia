import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BestSellers from './components/BestSellers';
import Gallery from './components/Gallery';
import Menu from './components/Menu';
import Historia from './components/Historia';
import Eventos from './components/Eventos';
import Reviews from './components/Reviews';
import Pedidos from './components/Pedidos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const sections = document.querySelectorAll('.reveal-section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-inview');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    );

    sections.forEach((section) => observer.observe(section));

    if (reducedMotion) {
      sections.forEach((section) => section.classList.add('is-inview'));
      return () => observer.disconnect();
    }

    const onPointerMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 24;
      const y = (event.clientY / window.innerHeight - 0.5) * 24;
      document.documentElement.style.setProperty('--pointer-x', `${x.toFixed(2)}px`);
      document.documentElement.style.setProperty('--pointer-y', `${y.toFixed(2)}px`);
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, []);

  return (
    <>
      <style>{appStyles}</style>
    <div className="app">
      <div className="fx-layer" aria-hidden="true">
        <span className="fx-orb orb-a" />
        <span className="fx-orb orb-b" />
        <span className="fx-orb orb-c" />
      </div>
      <Navbar />
      <main>
        <Hero />
        <div className="section-wrap reveal-section delay-1"><BestSellers /></div>
        <div className="section-wrap reveal-section delay-2"><Gallery /></div>
        <div className="section-wrap reveal-section delay-3"><Historia /></div>
        <div className="section-wrap reveal-section delay-1"><Menu /></div>
        <div className="section-wrap reveal-section delay-2"><Eventos /></div>
        <div className="section-wrap reveal-section delay-3"><Reviews /></div>
        <div className="section-wrap reveal-section delay-1"><Pedidos /></div>
        <div className="section-wrap reveal-section delay-2"><Contacto /></div>
      </main>
      <Footer />
    </div>
    </>
  );
}

export default App;


const appStyles = `

@import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Sora:wght@400;500;600;700;800&display=swap');

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
  --font-body: 'Sora', 'Avenir Next', 'Segoe UI', sans-serif;
  --pointer-x: 0px;
  --pointer-y: 0px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  min-height: 100%;
}

body {
  margin: 0;
  font-family: var(--font-body);
  min-height: 100vh;
  position: relative;
  isolation: isolate;
  background-color: var(--bg);
  background-image:
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
    linear-gradient(180deg, rgba(255, 252, 248, 0.36), rgba(247, 237, 241, 0.24)),
    linear-gradient(135deg, #fffdf8 0%, #faefe8 46%, #fffefc 100%);
  background-repeat: repeat;
  background-size: auto;
  background-attachment: fixed;
  background-blend-mode: multiply, multiply, normal, normal;
  color: var(--text);
  line-height: 1.5;
  overflow-x: hidden;
}

body::before {
  content: '';
  position: fixed;
  inset: -32px;
  z-index: -1;
  pointer-events: none;
  background:
    radial-gradient(120% 110% at 8% 12%, rgba(255, 252, 248, 0.36), transparent 58%),
    radial-gradient(110% 120% at 92% 20%, rgba(236, 214, 242, 0.18), transparent 60%),
    linear-gradient(180deg, rgba(255, 252, 248, 0.14), rgba(255, 252, 248, 0.04));
  filter: blur(12px);
  transform: translateZ(0);
}

a {
  color: inherit;
  text-decoration: none;
}

.app {
  position: relative;
  isolation: isolate;
}

.app > * {
  position: relative;
  z-index: 2;
}

.fx-layer {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.fx-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(2px);
  opacity: 0.42;
  mix-blend-mode: screen;
  animation: orbFloat 15s ease-in-out infinite;
}

.orb-a {
  width: min(34vw, 520px);
  aspect-ratio: 1;
  background: radial-gradient(circle at 28% 28%, rgba(255, 246, 218, 0.88), rgba(242, 183, 198, 0.22) 58%, transparent 75%);
  left: -11vw;
  top: 8vh;
  transform: translate(calc(var(--pointer-x) * 0.35), calc(var(--pointer-y) * 0.35));
}

.orb-b {
  width: min(40vw, 600px);
  aspect-ratio: 1;
  background: radial-gradient(circle at 42% 35%, rgba(216, 198, 233, 0.8), rgba(168, 211, 240, 0.26) 58%, transparent 75%);
  right: -15vw;
  top: 42vh;
  animation-duration: 18s;
  animation-delay: -4s;
  transform: translate(calc(var(--pointer-x) * -0.45), calc(var(--pointer-y) * -0.3));
}

.orb-c {
  width: min(28vw, 440px);
  aspect-ratio: 1;
  background: radial-gradient(circle at 32% 34%, rgba(246, 226, 156, 0.62), rgba(242, 183, 198, 0.16) 56%, transparent 76%);
  left: 40vw;
  bottom: -15vh;
  animation-duration: 20s;
  animation-delay: -7s;
  transform: translate(calc(var(--pointer-x) * 0.25), calc(var(--pointer-y) * -0.4));
}

@keyframes orbFloat {
  0%,
  100% {
    margin-top: 0;
  }
  50% {
    margin-top: -24px;
  }
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
  background: linear-gradient(135deg, var(--lavender-300), #dcc5e8, var(--lavender-200));
  background-size: 180% 180%;
  color: var(--choco-900);
  border-radius: 999px;
  font-weight: 700;
  padding: 0.74rem 1.05rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  transition: transform 0.38s cubic-bezier(.22,.61,.36,1), box-shadow 0.38s cubic-bezier(.22,.61,.36,1), border-color 0.3s ease, background-position 0.6s ease;
  box-shadow: 0 8px 20px rgba(74, 42, 31, 0.1);
  animation: btnAura 6s ease-in-out infinite;
  will-change: transform;
}

.btn::before {
  content: '';
  position: absolute;
  inset: -140% 58% -140% -120%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.52), transparent);
  transform: rotate(20deg);
  transition: transform 0.75s cubic-bezier(.22,.61,.36,1);
  pointer-events: none;
  z-index: 0;
}

.btn::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background:
    radial-gradient(circle at 18% 28%, rgba(255, 255, 255, 0.24), transparent 44%),
    radial-gradient(circle at 82% 80%, rgba(236, 214, 242, 0.2), transparent 48%);
  opacity: 0.46;
  pointer-events: none;
  transition: opacity 0.4s ease;
  z-index: 0;
}

.btn:hover {
  transform: translateY(-1px) scale(1.01);
  border-color: rgba(199, 160, 214, 0.56);
  background-position: 100% 0;
  box-shadow: 0 0 0 2px rgba(226, 196, 236, 0.2), 0 14px 28px rgba(74, 42, 31, 0.12);
}

.btn:hover::before {
  transform: translateX(165%) rotate(20deg);
}

.btn:hover::after {
  opacity: 0.62;
}

.btn:active {
  transform: translateY(0) scale(0.995);
}

@keyframes btnAura {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
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

.section-wrap {
  width: min(1240px, calc(100% - 1.2rem));
  margin-inline: auto;
  margin-top: clamp(0.65rem, 1.8vw, 1.2rem);
  transform: translateZ(0);
}

.section-wrap > .section {
  border: 1px solid rgba(199, 160, 214, 0.28);
  border-radius: 28px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.73), rgba(255, 255, 255, 0.48)),
    linear-gradient(140deg, rgba(242, 183, 198, 0.08), transparent 28%, rgba(168, 211, 240, 0.08) 82%);
  box-shadow: 0 16px 42px rgba(74, 42, 31, 0.11), inset 0 1px 0 rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(4px);
  overflow: hidden;
  transition: transform 0.55s cubic-bezier(.22,.61,.36,1), box-shadow 0.55s cubic-bezier(.22,.61,.36,1), border-color 0.42s ease;
}

.section-wrap.reveal-section > .section {
  opacity: 0;
  transform: translateY(34px) scale(0.985);
}

.section-wrap.reveal-section.is-inview > .section {
  opacity: 1;
  transform: none;
}

.section-wrap.reveal-section.delay-1 > .section {
  transition-delay: 0.03s;
}

.section-wrap.reveal-section.delay-2 > .section {
  transition-delay: 0.09s;
}

.section-wrap.reveal-section.delay-3 > .section {
  transition-delay: 0.14s;
}

.section-wrap > .section:hover {
  transform: translateY(-3px);
  border-color: rgba(199, 160, 214, 0.42);
  box-shadow: 0 22px 44px rgba(74, 42, 31, 0.13), inset 0 1px 0 rgba(255, 255, 255, 0.8);
}

.section-wrap > .section.section-tint {
  background: linear-gradient(180deg, rgba(245, 236, 247, 0.45), rgba(255, 255, 255, 0.5));
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

.section-head h2,
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
  border: 4px dotted;
  border-color: var(--lavender-300);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.72);
}

.section-head h2::after,
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
  transition: transform 0.35s cubic-bezier(.22,.61,.36,1), box-shadow 0.32s ease, border-color 0.25s ease;
}

.card:hover {
  transform: translateY(-4px);
  border-color: rgba(199, 160, 214, 0.4);
  box-shadow: var(--shadow-lift);
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
  .fx-orb {
    opacity: 0.26;
  }

  .section-wrap {
    width: min(1240px, calc(100% - 0.9rem));
    margin-top: 0.62rem;
  }

  .section-wrap > .section {
    border-radius: 18px;
  }

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
