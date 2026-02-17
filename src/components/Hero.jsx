const whatsappLink =
  'https://wa.me/523535367398?text=Hola%20La%20Trufer%C3%ADa%2C%20quiero%20hacer%20un%20pedido';

function Hero() {
  return (
    <section className="hero" id="inicio">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        poster="/Images/Trufas/trufas.jpg"
      >
        <source src="/bg-trufas.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <div className="container hero-grid">
        <div className="hero-content">
          <h1>Postres que se antojan desde la primera vista</h1>
          <p className="hero-copy">Trufas, pays y tartas para regalos y eventos.</p>

          <div className="hero-actions">
            <a href={whatsappLink} className="btn" target="_blank" rel="noreferrer">
              Pedir ahora
            </a>
            <a href="#menu" className="btn btn-ghost light-ghost">
              Ver menú
            </a>
          </div>

          <div className="hero-pills" aria-label="Beneficios">
            <span>Pedidos con 2 días de anticipación</span>
            <span>Temática a elegir</span>
            <span>Hecho con cariño</span>
          </div>
        </div>

        <aside className="hero-logo-wrap" aria-label="La Truferia logo">
          <img className="hero-logo" src="/Images/la-truferia-logo.png" alt="La Truferia" />
        </aside>
      </div>
    </section>
  );
}

export default Hero;
