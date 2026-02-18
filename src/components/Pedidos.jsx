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
      <div className="container">
        <div className="section-head compact-head">
          <h2>Pedidos</h2>
          <p>Te respondemos por WhatsApp para confirmar detalles y entrega.</p>
        </div>

        <div className="steps-row" aria-label="Cómo pedir">
          <article className="step-card">
            <span className="step-icon icon-one" aria-hidden="true" />
            <strong>Elige</strong>
            <p>Selecciona postres o paquete.</p>
          </article>
          <article className="step-card">
            <span className="step-icon icon-two" aria-hidden="true" />
            <strong>Confirma</strong>
            <p>Define cantidades y fecha.</p>
          </article>
          <article className="step-card">
            <span className="step-icon icon-three" aria-hidden="true" />
            <strong>Recoge o entrega</strong>
            <p>Coordinamos para que llegue perfecto.</p>
          </article>
        </div>

        <div className="pedidos-grid">
          <form className="card order-form" onSubmit={handleSubmit} noValidate>
            <h4>Pedido rápido</h4>
            <p className="helper-text">Completa los datos y te abrimos WhatsApp con tu mensaje listo.</p>

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

            <label htmlFor="notas">Notas (opcional)</label>
            <textarea
              id="notas"
              name="notas"
              rows="4"
              value={formData.notas}
              onChange={handleChange}
            />

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
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.step-card {
  border: 1px solid var(--border);
  border-radius: 20px;
  background: var(--surface);
  padding: 0.95rem;
  box-shadow: var(--shadow-soft);
}

.step-card strong {
  color: var(--choco-900);
}

.step-card p {
  margin: 0.4rem 0 0;
  color: var(--muted);
}

.step-icon {
  display: inline-flex;
  width: 30px;
  height: 30px;
  border-radius: 999px;
  margin-bottom: 0.65rem;
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
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.order-form {
  display: grid;
  gap: 0.55rem;
}

.order-form h4,
.order-aside h4 {
  margin: 0;
  color: var(--choco-900);
}

.helper-text {
  margin: 0;
  color: var(--muted);
  font-size: 0.9rem;
}

.order-aside ul {
  margin: 0.6rem 0 0;
  padding-left: 1.1rem;
  color: var(--muted);
}

.order-aside li + li {
  margin-top: 0.4rem;
}

.order-form label {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--choco-800);
}

input,
select,
textarea {
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 0.64rem 0.72rem;
  font: inherit;
  background: var(--surface);
  color: var(--text);
}

textarea {
  min-height: 95px;
  resize: vertical;
}

.field-error {
  color: #a32626;
  font-size: 0.82rem;
  margin-top: -0.18rem;
}

@media (max-width: 1024px) {
  .pedidos-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 760px) {
  .steps-row {
    grid-template-columns: 1fr;
  }

  input,
  textarea,
  button {
    font-size: 16px;
  }

  input,
  textarea {
    min-height: 46px;
  }
}


`;
