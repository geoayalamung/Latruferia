const paquetes = [
  {
    title: 'Cumpleaños',
    desc: 'Postres personalizados con colores, toppers y estilo de tu festejo.'
  },
  {
    title: 'Baby shower',
    desc: 'Presentaciones delicadas para una mesa dulce elegante y tierna.'
  },
  {
    title: 'San Valentín',
    desc: 'Detalles románticos con chocolate y acabados premium para regalo.'
  }
];

function Paquetes() {
  return (
    <section className="section section-tint" id="paquetes">
      <div className="container">
        <div className="premium-block">
          <div>
            <h3>Paquetes especiales</h3>
            <p>Paquetes de fiestas, pedidos dos días antes y temática a elegir.</p>
          </div>
          <a href="#pedidos" className="btn">
            Diseñar mi paquete
          </a>
        </div>

        <div className="package-grid">
          {paquetes.map((item) => (
            <article className="card" key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Paquetes;
