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
    <>
      <style>{menuStyles}</style>
    <section className="section" id="menu">
      <div className="container">
        <div className="section-head compact-head">
          <h3>Menú</h3>
          <p>Consulta sabores, precios y elige si lo quieres individual, en paquete o para evento.</p>
        </div>

        <div className="menu-shell">
          <div className="combo-strip" role="note">
            <strong>Opciones de compra:</strong> Individuales, cajita de 20 piezas ($140) o pedidos para evento.
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
                <small>{group.items.length} prod.</small>
              </button>
            ))}
          </div>

          <article className="card menu-panel" role="tabpanel" aria-label={activeCategory}>
            <div className="menu-panel-head">
              <h4>{activeGroup.category}</h4>
              <span>{items.length} opciones</span>
            </div>
            <div className="menu-feature">
              <div className="menu-feature-media">
                <img src={activeGroup.image} alt={activeGroup.imageAlt} loading="lazy" />
              </div>
              <div className="menu-feature-copy">
                <p>{activeGroup.description}</p>
              </div>
            </div>
            <div className="menu-list">
              {items.map((item) => (
                <div className="menu-item" key={item.name}>
                  <div className="menu-item-copy">
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
    </>
  );
}

export default Menu;


const menuStyles = `

.combo-strip {
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 0.62rem 0.78rem;
  background: linear-gradient(110deg, var(--lavender-50), var(--surface));
  margin-bottom: 0.8rem;
  font-size: 0.93rem;
}

.combo-strip strong {
  color: var(--choco-900);
}

.menu-shell {
  border: 1px solid var(--border);
  border-radius: 20px;
  background: linear-gradient(180deg, rgba(235, 215, 239, 0.32), var(--surface) 42%);
  padding: 0.9rem;
}

.menu-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.52rem;
  margin-bottom: 0.82rem;
}

.tab-btn {
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 0.5rem 0.72rem;
  background: var(--surface);
  color: var(--choco-800);
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.48rem;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.tab-btn small {
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--choco-900);
  background: var(--lavender-100);
  border-radius: 999px;
  padding: 0.14rem 0.44rem;
}

.tab-btn:hover {
  transform: translateY(-1px);
  background: var(--lavender-50);
}

.tab-btn.active {
  background: linear-gradient(120deg, var(--lavender-100), var(--lavender-50));
  color: var(--choco-900);
  border-color: rgba(74, 42, 31, 0.22);
}

.menu-panel {
  border-radius: 22px;
}

.menu-panel-head {
  margin-bottom: 0.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
}

.menu-panel h4 {
  margin: 0;
  color: var(--choco-900);
}

.menu-panel-head span {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--choco-800);
  background: var(--lavender-50);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 0.22rem 0.58rem;
}

.menu-feature {
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 0.7rem;
  margin-bottom: 0.72rem;
}

.menu-feature-media {
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-soft);
  aspect-ratio: 4 / 3;
}

.menu-feature-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.menu-feature-copy {
  border: 1px dashed rgba(74, 42, 31, 0.22);
  border-radius: 14px;
  padding: 0.58rem 0.72rem;
  background: linear-gradient(135deg, rgba(245, 236, 247, 0.52), rgba(255, 255, 255, 0.95));
  display: flex;
  align-items: center;
}

.menu-feature-copy p {
  margin: 0;
  color: var(--choco-800);
  font-size: 0.95rem;
}

.menu-list {
  display: grid;
  gap: 0.56rem;
}

.menu-item {
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 0.56rem 0.62rem;
  background: linear-gradient(120deg, rgba(245, 236, 247, 0.48), var(--surface));
  display: flex;
  justify-content: space-between;
  gap: 0.8rem;
  align-items: flex-start;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.menu-item-copy {
  min-width: 0;
}

.menu-item:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-soft);
}

.menu-item p {
  margin: 0;
  font-size: 0.94rem;
  line-height: 1.35;
}

.menu-item strong {
  white-space: nowrap;
  color: #3b1f17;
  background: linear-gradient(130deg, #fff7d9, #ffefba);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 0.2rem 0.48rem;
  font-size: 0.88rem;
}

.menu-note {
  margin-top: 0.68rem;
  color: var(--muted);
  font-size: 0.85rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

@media (max-width: 760px) {
  .menu-shell {
    border-radius: 16px;
    padding: 0.72rem;
  }

  .menu-tabs {
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    gap: 0.46rem;
    margin-bottom: 0.65rem;
  }

  .menu-tabs::-webkit-scrollbar {
    display: none;
  }

  .tab-btn {
    flex: 0 0 auto;
    border-radius: 11px;
    min-height: 38px;
    padding: 0.42rem 0.62rem;
    font-size: 0.9rem;
  }

  .menu-panel-head {
    flex-direction: column;
    align-items: flex-start;
  }

  .menu-feature {
    grid-template-columns: 1fr;
    gap: 0.56rem;
    margin-bottom: 0.56rem;
  }

  .menu-feature-media {
    width: 100%;
    max-width: none;
    max-height: 122px;
  }

  .menu-item {
    padding: 0.52rem 0.56rem;
    gap: 0.55rem;
  }

  .menu-item p {
    font-size: 0.9rem;
  }

  .menu-item strong {
    font-size: 0.82rem;
  }

  .menu-note {
    margin-top: 0.52rem;
    gap: 0.42rem;
    font-size: 0.8rem;
  }
}


`;
