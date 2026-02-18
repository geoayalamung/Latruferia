
const bestSellers = [
  {
    title: 'Trufitas surtidas',
    description: 'Chocolate suave con sabores clásicos para regalar.',
    price: '$7 c/u',
    image: '/public/Images/Trufas/trufas.jpg',
    badge: 'Recomendado'
  },
  {
    title: 'Mini donitas rellenas',
    description: 'Cubiertas de chocolate, tiernas y súper antojables.',
    price: '$5 c/u',
    image: '/public/Images/MiniDonas/mindonas1.png'
  },
  {
    title: 'Tarta con fruta grande',
    description: 'Presentación premium para celebraciones especiales.',
    price: '$450',
    image: '/public/Images/Tartas/tarta.png',
    badge: 'Recomendado'
  }
];

function BestSellers() {

  return (
    <>
      <style>{bestSellersStyles}</style>
    <section className="section" id="best-sellers">
      <div className="container">
        <div className="section-head compact-head">
          <h3>Los favoritos</h3>
          <p>Lo más pedido de La Trufería.</p>
        </div>

        <div className="best-grid">
          {bestSellers.map((item) => (
            <article className="best-card" key={item.title}>
              <div className="best-image-wrap">
                <img src={item.image} alt={item.title} className="best-image" loading="lazy" />
                {item.badge ? <span className="badge best-badge">{item.badge}</span> : null}
              </div>
              <div className="best-body">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <strong>{item.price}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

export default BestSellers;


const bestSellersStyles = `

.best-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.best-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: var(--shadow-soft);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.best-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lift);
}

.best-image-wrap {
  position: relative;
  aspect-ratio: 1.05 / 1;
  overflow: hidden;
}

.best-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;
}

.best-card:hover .best-image {
  transform: scale(1.03);
}

.best-image-wrap::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, transparent 25%, rgba(255, 255, 255, 0.22) 48%, transparent 70%);
  transform: translateX(-120%);
  transition: transform 0.7s ease;
  pointer-events: none;
}

.best-card:hover .best-image-wrap::after {
  transform: translateX(120%);
}

.best-body {
  padding: 1rem;
}

.best-body h4 {
  margin: 0;
  color: var(--choco-900);
}

.best-body p {
  margin: 0.5rem 0 0.66rem;
  color: var(--muted);
}

.best-body strong {
  color: var(--choco-900);
}

.best-badge {
  position: absolute;
  left: 0.75rem;
  top: 0.75rem;
  z-index: 4;
}

@media (max-width: 1024px) {
  .best-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 760px) {
  .best-grid {
    grid-template-columns: 1fr;
  }
}


`;
