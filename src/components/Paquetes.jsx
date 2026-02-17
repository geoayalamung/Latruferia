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
    <section className="section section-tint" id="paquetes">
      <div className="container">
        <div className="section-head compact-head">
          <h3>Paquetes</h3>
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
  );
}

export default Paquetes;
