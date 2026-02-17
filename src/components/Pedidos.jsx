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
    <section className="section" id="pedidos">
      <div className="container">
        <div className="section-head compact-head">
          <h3>Pedidos</h3>
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
            <input
              id="pedido"
              name="pedido"
              type="text"
              value={formData.pedido}
              onChange={handleChange}
              aria-invalid={Boolean(errors.pedido)}
            />
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
  );
}

export default Pedidos;
