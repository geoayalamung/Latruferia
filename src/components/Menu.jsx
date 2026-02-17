import { useMemo, useState } from 'react';
import { menuData } from '../data/menu';

function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].category);

  const activeGroup = useMemo(
    () => menuData.find((group) => group.category === activeCategory) ?? menuData[0],
    [activeCategory]
  );
  const items = activeGroup.items;

  return (
    <section className="section" id="menu">
      <div className="container">
        <div className="section-head compact-head">
          <h3>Menú</h3>
          <p>Elige tu categoría y arma tu pedido en minutos.</p>
        </div>

        <div className="menu-shell">
          <div className="combo-strip" role="note">
            <strong>Combo destacado:</strong> Cajitas con 20 piezas — $140
          </div>

          <div className="menu-tabs" role="tablist" aria-label="Categorías del menú">
            {menuData.map((group) => (
              <button
                key={group.category}
                type="button"
                role="tab"
                aria-selected={activeCategory === group.category}
                className={activeCategory === group.category ? 'tab-btn active' : 'tab-btn'}
                onClick={() => setActiveCategory(group.category)}
              >
                <span>{group.category}</span>
                <small>{group.items.length}</small>
              </button>
            ))}
          </div>

          <article className="card menu-panel" role="tabpanel" aria-label={activeCategory}>
            <div className="menu-panel-head">
              <h4>{activeGroup.category}</h4>
              <span>{items.length} opciones</span>
            </div>
            <div className="menu-list">
              {items.map((item) => (
                <div className="menu-item" key={item.name}>
                  <div>
                    <p>{item.name}</p>
                    {item.badge ? <span className="badge">{item.badge}</span> : null}
                  </div>
                  <strong>{item.price}</strong>
                </div>
              ))}
            </div>
          </article>
        </div>

        <p className="menu-note">
          <span>Precios sujetos a cambios.</span>
          <span>Disponibilidad según temporada.</span>
        </p>
      </div>
    </section>
  );
}

export default Menu;
