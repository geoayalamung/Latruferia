
const paquetes = [
  {
    title: 'Individuales',
    price: 'Desde $5 c/u',
    desc: 'Para antojo o regalo pequeño.',
    items: ['Mini donitas $5 c/u', 'Trufitas y mini tartas $7 c/u']
  },
  {
    title: 'Paquete chico',
    price: '$140',
    desc: 'Ideal para compartir en casa u oficina.',
    items: ['Cajita de 20 piezas', 'Sabores de trufitas: oreo, limón, Nutella, coco y pay de limón']
  },
  {
    title: 'Eventos',
    price: 'Desde $450',
    desc: 'Pedidos grandes y personalizados.',
    items: ['Tarta con fruta grande $450', 'Cotización personalizada por cantidad y temática']
  }
];

function Paquetes() {

  return (
    <>
      <style>{paquetesStyles}</style>
    <section className="section section-tint" id="paquetes">
      <div className="container">
        <div className="section-head compact-head">
          <h2>Paquetes</h2>
          <p>Elige la opción ideal: individual, paquete chico o pedido para evento.</p>
        </div>

        <div className="premium-block">
          <div>
            <h3>Paquetes y eventos</h3>
            <p>Elige por tipo de pedido: individual, paquete chico o evento.</p>
          </div>
          <a href="#pedidos" className="btn">
            Hacer pedido
          </a>
        </div>

        <div className="package-grid">
          {paquetes.map((item) => (
            <article className="card" key={item.title}>
              <h4>{item.title}</h4>
              <strong>{item.price}</strong>
              <p>{item.desc}</p>
              <ul className="package-list">
                {item.items.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

export default Paquetes;


const paquetesStyles = `

.premium-block {
  margin-bottom: 1rem;
  border-radius: 22px;
  padding: 1.2rem;
  border: 1px solid var(--border);
  background: linear-gradient(130deg, var(--lavender-100), var(--surface));
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.premium-block h3 {
  margin: 0;
  color: var(--choco-900);
}

.premium-block p {
  margin: 0.45rem 0 0;
  color: var(--muted);
}

.package-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.package-grid .card p {
  margin: 0.35rem 0 0;
  color: var(--muted);
}

.package-grid .card strong {
  display: inline-block;
  margin-top: 0.45rem;
  color: var(--choco-900);
  background: linear-gradient(130deg, #fff7d9, #ffefba);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 0.18rem 0.46rem;
  font-size: 0.84rem;
}

.package-list {
  margin: 0.65rem 0 0;
  padding-left: 1rem;
  color: var(--muted);
  display: grid;
  gap: 0.32rem;
}

@media (max-width: 1024px) {
  .package-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 760px) {
  .premium-block {
    flex-direction: column;
    align-items: flex-start;
  }

  .package-grid {
    grid-template-columns: 1fr;
  }
}


`;
