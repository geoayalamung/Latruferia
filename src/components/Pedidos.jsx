import { useState } from 'react';

const whatsappNumber = '523535367398';

const initialState = {
  nombre: '',
  tipoPedido: '',
  pedido: '',
  fecha: '',
  notas: ''
};

function Pedidos() {

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.nombre.trim()) nextErrors.nombre = 'Escribe tu nombre.';
    if (!formData.tipoPedido.trim()) nextErrors.tipoPedido = 'Selecciona el tipo de pedido.';
    if (!formData.pedido.trim()) nextErrors.pedido = 'Indica qué deseas pedir.';
    if (!formData.fecha.trim()) nextErrors.fecha = 'Selecciona una fecha de entrega/evento.';

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    const message = `Hola La Trufería, soy ${formData.nombre}. Tipo de pedido: ${formData.tipoPedido}. Quiero pedir: ${formData.pedido}. Fecha: ${formData.fecha}. Notas: ${formData.notas || 'Sin notas'}.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <style>{pedidosStyles}</style>
    <section className="section" id="pedidos">
      <div className="best-hero" role="img" aria-label="Pedidos en La Trufería">
        <div className="best-hero-overlay">
          <div className="best-hero-content">
            <h2 className="best-hero-title">Pedidos</h2>
            <p className="best-hero-subtitle">Te respondemos por WhatsApp para confirmar detalles y entrega.</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="steps-row" aria-label="Cómo pedir">
          <article className="step-card">
            <span className="step-number">01</span>
            <span className="step-icon icon-one" aria-hidden="true" />
            <strong>Elige</strong>
            <p>Cuéntanos qué se te antoja y te guiamos a la mejor opción.</p>
          </article>
          <article className="step-card">
            <span className="step-number">02</span>
            <span className="step-icon icon-two" aria-hidden="true" />
            <strong>Confirma</strong>
            <p>Definimos cantidad, diseño y fecha para que todo salga perfecto.</p>
          </article>
          <article className="step-card">
            <span className="step-number">03</span>
            <span className="step-icon icon-three" aria-hidden="true" />
            <strong>Recoge o entrega</strong>
            <p>Recibe tu pedido listo para lucirse en tu evento o regalo.</p>
          </article>
        </div>
        <div className="steps-simple" aria-label="Cómo pedir versión móvil">
          <span>1. Elige</span>
          <span>2. Confirma</span>
          <span>3. Disfruta</span>
        </div>

        <div className="pedidos-grid">
          <form className="card order-form" onSubmit={handleSubmit} noValidate>
            <h4>Pedido rápido</h4>
            <p className="helper-text">Completa los datos y te abrimos WhatsApp con tu mensaje listo.</p>
            <div className="order-form-grid">
              <div className="field">
                <label htmlFor="nombre">Nombre</label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  value={formData.nombre}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.nombre)}
                />
                {errors.nombre ? <small className="field-error">{errors.nombre}</small> : null}
              </div>

              <div className="field">
                <label htmlFor="tipoPedido">Tipo de pedido</label>
                <select
                  id="tipoPedido"
                  name="tipoPedido"
                  value={formData.tipoPedido}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.tipoPedido)}
                >
                  <option value="">Selecciona una opción</option>
                  <option value="Individual">Individual</option>
                  <option value="Paquete chico">Paquete chico</option>
                  <option value="Evento">Evento</option>
                </select>
                {errors.tipoPedido ? <small className="field-error">{errors.tipoPedido}</small> : null}
              </div>

              <div className="field">
                <label htmlFor="pedido">¿Qué quieres pedir?</label>
                <select
                  id="pedido"
                  name="pedido"
                  value={formData.pedido}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.pedido)}
                >
                  <option value="">Selecciona una opción</option>
                  <option value="Trufas">Trufas</option>
                  <option value="Tartas">Tartas</option>
                  <option value="Minidonas">Minidonas</option>
                  <option value="Gelatinas">Gelatinas</option>
                  <option value="Panesitos">Panesitos</option>
                  <option value="Besos de Nuez">Besos de Nuez</option>
                </select>
                {errors.pedido ? <small className="field-error">{errors.pedido}</small> : null}
              </div>

              <div className="field">
                <label htmlFor="fecha">Fecha del evento/entrega</label>
                <input
                  id="fecha"
                  name="fecha"
                  type="date"
                  value={formData.fecha}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.fecha)}
                />
                {errors.fecha ? <small className="field-error">{errors.fecha}</small> : null}
              </div>

              <div className="field field-span-2">
                <label htmlFor="notas">Notas (opcional)</label>
                <textarea
                  id="notas"
                  name="notas"
                  rows="3"
                  value={formData.notas}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-block">
              Enviar por WhatsApp
            </button>
          </form>

          <aside className="card order-aside">
            <h4>Tips para un pedido perfecto</h4>
            <ul>
              <li>Pide con mínimo 2 días de anticipación.</li>
              <li>Cuéntanos tu temática para personalizar.</li>
              <li>Si es evento, indica horario exacto de entrega.</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
    </>
  );
}

export default Pedidos;


const pedidosStyles = `

.steps-row {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.62rem;
  margin-bottom: 0.82rem;
}

.steps-simple {
  display: none;
}

.step-card {
  border: 1px solid var(--border);
  border-radius: 16px;
  background: var(--surface);
  padding: 0.72rem 0.76rem;
  box-shadow: var(--shadow-soft);
  display: grid;
  gap: 0.22rem;
  align-content: start;
  position: relative;
}

.step-card strong {
  color: var(--choco-900);
  font-size: 0.95rem;
}

.step-card p {
  margin: 0.08rem 0 0;
  color: var(--muted);
  font-size: 0.88rem;
  line-height: 1.35;
}

.step-number {
  position: absolute;
  top: 0.52rem;
  right: 0.58rem;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.03em;
  color: var(--lavender-300);
}

.step-icon {
  display: inline-flex;
  width: 24px;
  height: 24px;
  border-radius: 999px;
  margin-bottom: 0.28rem;
  border: 1px solid var(--border);
}

.icon-one {
  background: radial-gradient(circle at 30% 30%, var(--sprinkle-pink), var(--lavender-100));
}

.icon-two {
  background: radial-gradient(circle at 30% 30%, var(--sprinkle-blue), var(--lavender-100));
}

.icon-three {
  background: radial-gradient(circle at 30% 30%, var(--sprinkle-yellow), var(--lavender-100));
}

.pedidos-grid {
  display: grid;
  grid-template-columns: 1.35fr 0.95fr;
  gap: 0.82rem;
  align-items: start;
}

.order-form {
  display: grid;
  gap: 0.62rem;
}

.order-form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.52rem 0.62rem;
}

.field {
  display: grid;
  gap: 0.28rem;
}

.field-span-2 {
  grid-column: 1 / -1;
}

.order-form h4,
.order-aside h4 {
  margin: 0;
  color: var(--choco-900);
}

.helper-text {
  margin: 0;
  color: var(--muted);
  font-size: 0.86rem;
}

.order-aside {
  display: grid;
  gap: 0.62rem;
  align-content: start;
}

.order-aside ul {
  margin: 0.1rem 0 0;
  padding-left: 1rem;
  color: var(--muted);
}

.order-aside li + li {
  margin-top: 0.3rem;
}

.order-form label {
  font-weight: 600;
  font-size: 0.85rem;
  color: var(--choco-800);
}

.order-form input,
.order-form select,
.order-form textarea {
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 0.58rem 0.66rem;
  font: inherit;
  background: var(--surface);
  color: var(--text);
}

.order-form textarea {
  min-height: 82px;
  resize: vertical;
}

.field-error {
  color: #a32626;
  font-size: 0.78rem;
  margin-top: -0.1rem;
}

@media (max-width: 1024px) {
  .pedidos-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 760px) {
  .steps-row {
    display: none;
  }

  .steps-simple {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.42rem;
    margin-bottom: 0.82rem;
  }

  .steps-simple span {
    border: 1px solid var(--border);
    border-radius: 12px;
    background: var(--surface);
    box-shadow: var(--shadow-soft);
    color: var(--choco-900);
    font-weight: 800;
    font-size: 0.86rem;
    text-align: center;
    padding: 0.56rem 0.38rem;
  }

  .order-form-grid {
    grid-template-columns: 1fr;
  }

  .field-span-2 {
    grid-column: auto;
  }

  .order-form input,
  .order-form textarea,
  .order-form button {
    font-size: 16px;
  }

  .order-form input,
  .order-form textarea {
    min-height: 46px;
  }
}


`;
