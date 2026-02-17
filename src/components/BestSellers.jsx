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
    <section className="section" id="best-sellers">
      <div className="container">
        <div className="section-head compact-head">
          <h3>Best sellers</h3>
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
  );
}

export default BestSellers;
