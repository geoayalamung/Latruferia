
const whatsappLink =
  'https://wa.me/523535367398?text=Hola%20La%20Trufer%C3%ADa%2C%20quiero%20hacer%20un%20pedido';

function Contacto() {
  return (
    <>
      <style>{contactoStyles}</style>
    <section className="section section-tint" id="contacto">
      <div className="container">
        <div className="final-cta">
          <h3>¿List@ para endulzar tu evento?</h3>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn btn-large">
            Pedir por WhatsApp
          </a>
        </div>

        <div className="contact-grid">
          <article className="card contact-card">
            <h4>Contacto directo</h4>
            <p>Atención personalizada para pedidos, eventos y paquetes temáticos.</p>
            <div className="contact-actions">
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn">
                WhatsApp
              </a>
              <a
                href="https://instagram.com/latruferia"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                Instagram
              </a>
            </div>
          </article>

          <article className="card contact-card">
            <h4>Información</h4>
            <ul className="info-list">
              <li>
                <strong>Ubicación:</strong> Alfredo Gutiérrez 364, Sahuayo, Mexico, 59028.
              </li>
              <li>
                <strong>Horario:</strong> Lunes a sábado, 10:00 a 19:00.
              </li>
              <li>
                <strong>Respuesta:</strong> Te contestamos por WhatsApp lo antes posible.
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
    </>
  );
}

export default Contacto;

const contactoStyles = `
.final-cta {
  margin-bottom: 2rem;
  border-radius: 24px;
  border: 1px solid var(--border);
  padding: 3rem;
  background: linear-gradient(130deg, var(--lavender-200), var(--lavender-100));
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.final-cta h3 {
  margin: 0;
  color: var(--choco-900);
  letter-spacing: -0.01em;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.contact-card p {
  margin: 0.45rem 0 0;
  color: var(--muted);
}

.contact-actions {
  margin-top: 0.9rem;
  display: flex;
  gap: 0.7rem;
  flex-wrap: wrap;
}

.info-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.55rem;
  color: var(--muted);
}

@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 760px) {
  .final-cta {
    flex-direction: column;
    align-items: flex-start;
  }
}

`;
