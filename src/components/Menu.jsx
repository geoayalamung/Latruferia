import { useMemo, useState } from 'react';
import { menuData } from '../data/menu';

function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].category);
  const activeGroup = useMemo(
    () => menuData.find((group) => group.category === activeCategory) ?? menuData[0],
    [activeCategory]
  );

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
                  <small>{group.items.length}</small>
                </button>
              ))}
            </div>

            <article className="card menu-panel" role="tabpanel" aria-label={activeCategory}>
              <div className="menu-panel-head">
                <h4>{activeGroup.category}</h4>
                <span>{activeGroup.items.length} opciones</span>
              </div>

              <div className="menu-feature">
                <div className="menu-feature-media">
                  <img src={activeGroup.image} alt={activeGroup.imageAlt} loading="lazy" />
                </div>
                <div className="menu-feature-copy">
                  <p>{activeGroup.description}</p>
                </div>
              </div>

              <div className="menu-grid">
                {activeGroup.items.map((item) => (
                  <article className="menu-item" key={item.name}>
                    <div className="menu-item-top">
                      <p className="menu-item-name">{item.name}</p>
                      <strong className="menu-price">{item.price}</strong>
                    </div>
                    {item.description ? <p className="menu-item-kind">{item.description}</p> : null}
                    <div className="menu-flavors-row">
                      <span className="menu-flavors-label">Sabores</span>
                      <div className="menu-flavors-list">
                        {(item.flavors ?? []).map((flavor) => (
                          <span className="flavor-pill" key={`${item.name}-${flavor}`}>
                            {flavor}
                          </span>
                        ))}
                      </div>
                    </div>
                    {item.badge ? <span className="menu-chip badge">{item.badge}</span> : null}
                  </article>
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
  border-radius: 12px;
  padding: 0.72rem 0.8rem;
  background: linear-gradient(110deg, var(--lavender-50), var(--surface));
  margin-bottom: 0.9rem;
  font-size: 0.92rem;
  color: var(--choco-900);
}

.combo-strip strong {
  font-weight: 700;
}

.menu-shell {
  border: 1px solid var(--border);
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(235, 215, 239, 0.32), var(--surface) 42%);
  padding: 0.88rem;
}

.menu-tabs {
  display: flex;
  gap: 0.56rem;
  overflow-x: auto;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 0.2rem;
  margin-bottom: 0.9rem;
}

.menu-tabs::-webkit-scrollbar {
  display: none;
}

.tab-btn {
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 0.52rem 0.7rem;
  background: #fff;
  color: var(--choco-800);
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  flex: 0 0 auto;
}

.tab-btn small {
  min-width: 1.35rem;
  text-align: center;
  font-size: 0.72rem;
  background: var(--lavender-100);
  border-radius: 999px;
  padding: 0.1rem 0.34rem;
  color: var(--choco-900);
}

.tab-btn.active {
  background: linear-gradient(120deg, var(--lavender-100), var(--lavender-50));
  border-color: rgba(74, 42, 31, 0.22);
}

.menu-panel {
  border-radius: 16px;
  padding: 0.82rem;
}

.menu-panel-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.62rem;
}

.menu-panel-head h4 {
  margin: 0;
  color: var(--choco-900);
}

.menu-panel-head span {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--choco-800);
  background: var(--lavender-50);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 0.2rem 0.5rem;
}

.menu-feature {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 0.62rem;
  margin-bottom: 0.72rem;
}

.menu-feature-media {
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 4 / 3;
}

.menu-feature-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.menu-feature-copy {
  border: 1px dashed rgba(74, 42, 31, 0.22);
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(245, 236, 247, 0.52), rgba(255, 255, 255, 0.95));
  padding: 0.58rem 0.62rem;
  display: flex;
  align-items: center;
}

.menu-feature-copy p {
  margin: 0;
  color: var(--choco-800);
  line-height: 1.35;
  font-size: 0.9rem;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.56rem;
}

.menu-item {
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 0.58rem;
  background: linear-gradient(120deg, rgba(245, 236, 247, 0.48), var(--surface));
}

.menu-item-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.65rem;
}

.menu-item-name {
  margin: 0;
  font-weight: 700;
  color: var(--choco-900);
  line-height: 1.28;
  font-size: 0.93rem;
}

.menu-price {
  white-space: nowrap;
  font-size: 0.82rem;
  color: #3b1f17;
  background: linear-gradient(130deg, #fff7d9, #ffefba);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 0.16rem 0.4rem;
}

.menu-item-kind {
  margin: 0.32rem 0 0;
  color: var(--muted);
  font-size: 0.78rem;
  line-height: 1.2;
}

.menu-flavors-row {
  margin-top: 0.42rem;
  display: grid;
  gap: 0.26rem;
}

.menu-flavors-label {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--choco-800);
}

.menu-flavors-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.28rem;
}

.flavor-pill {
  font-size: 0.72rem;
  color: var(--choco-800);
  background: #f4ecff;
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 0.1rem 0.42rem;
}

.menu-chip {
  margin-top: 0.4rem;
  display: inline-flex;
  font-size: 0.7rem;
  border: 1px solid var(--border);
  background: #ffeccb;
  color: var(--choco-800);
  border-radius: 999px;
  padding: 0.1rem 0.4rem;
}

.menu-chip.badge {
  background: #ffeccb;
}

.menu-note {
  margin-top: 0.7rem;
  color: var(--muted);
  font-size: 0.84rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
}

@media (max-width: 900px) {
  .menu-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 760px) {
  .menu-shell {
    padding: 0.62rem;
    border-radius: 14px;
  }

  .combo-strip {
    padding: 0.62rem 0.65rem;
    margin-bottom: 0.7rem;
    font-size: 0.86rem;
  }

  .tab-btn {
    padding: 0.44rem 0.58rem;
    font-size: 0.88rem;
  }

  .menu-panel-head {
    align-items: flex-start;
    flex-direction: column;
    gap: 0.4rem;
  }

  .menu-feature {
    grid-template-columns: 1fr;
    gap: 0.45rem;
  }

  .menu-feature-media {
    max-height: 132px;
  }

  .menu-feature-copy {
    padding: 0.5rem 0.55rem;
  }

  .menu-item {
    padding: 0.52rem;
  }

  .menu-item-name {
    font-size: 0.9rem;
  }

  .menu-price {
    font-size: 0.76rem;
  }

  .menu-item-kind {
    font-size: 0.74rem;
  }

  .menu-flavors-label {
    font-size: 0.68rem;
  }

  .flavor-pill {
    font-size: 0.68rem;
    padding: 0.08rem 0.36rem;
  }

  .menu-note {
    margin-top: 0.55rem;
    font-size: 0.79rem;
    gap: 0.42rem;
  }
}
`;
