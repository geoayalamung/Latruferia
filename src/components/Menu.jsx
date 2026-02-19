import { useMemo, useState } from "react";
import { menuData } from "../data/menu";

const packageInfo = [
  {
    title: "Individuales",
    price: "Desde $5 c/u",
    desc: "Para antojo o regalo pequeño.",
    items: ["Mini donitas $5 c/u", "Trufitas y mini tartas $7 c/u"],
  },
  {
    title: "Paquete chico",
    price: "$140",
    desc: "Ideal para compartir en casa u oficina.",
    items: ["Cajita de 20 piezas", "Sabores: oreo, limón, Nutella, coco y pay de limón"],
  },
  {
    title: "Eventos",
    price: "Desde $450",
    desc: "Pedidos grandes y personalizados.",
    items: ["Tarta con fruta grande $450", "Cotización por cantidad y temática"],
  },
];

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
        <div className="best-hero" role="img" aria-label="Menú de La Trufería">
          <div className="best-hero-overlay">
            <div className="best-hero-content">
              <h2 className="best-hero-title">Menu</h2>
              <p className="best-hero-subtitle">
                Carta organizada por categorías para elegir rápido, comparar mejor y pedir con claridad.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="menu-shell">
            <aside className="menu-rail">
              <p className="rail-kicker">Carta</p>
              <div className="menu-tabs" role="tablist" aria-label="Categorías del menú">
                {menuData.map((group) => (
                  <button
                    key={group.category}
                    type="button"
                    role="tab"
                    aria-selected={activeCategory === group.category}
                    className={activeCategory === group.category ? "tab-btn active" : "tab-btn"}
                    onClick={() => setActiveCategory(group.category)}
                  >
                    <span className="tab-label">{group.category}</span>
                  </button>
                ))}
              </div>
              <p className="rail-note">Selecciona una categoría para ver precios y sabores disponibles.</p>
            </aside>

            <article className="menu-board" role="tabpanel" aria-label={activeCategory}>
              <div className="menu-hero">
                <div className="menu-hero-info">
                  <p className="menu-hero-kicker">Categoría activa</p>
                  <h4>{activeGroup.category}</h4>
                  <p>{activeGroup.description ? activeGroup.description : "Opciones para compartir o regalar."}</p>
                </div>
                <div className="menu-hero-media">
                  <img src={activeGroup.image} alt={activeGroup.imageAlt} loading="lazy" />
                </div>
              </div>

              <div className="menu-grid">
                {activeGroup.items.map((item) => (
                  <article className="menu-item" key={item.name}>
                    <div className="menu-item-head">
                      <div className="menu-item-left">
                        <p className="menu-item-name">{item.name}</p>
                        {item.description ? <p className="menu-item-kind">{item.description}</p> : null}
                      </div>

                      <div className="menu-item-right">
                        <span className="menu-price">{item.price}</span>
                        {item.badge ? <span className="menu-badge">{item.badge}</span> : null}
                      </div>
                    </div>

                    {(item.flavors ?? []).length > 0 ? (
                      <div className="menu-flavors-list">
                        {item.flavors.map((flavor) => (
                          <span className="flavor-pill" key={`${item.name}-${flavor}`}>
                            {flavor}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            </article>
          </div>

          <section className="menu-extra" aria-label="Información de paquetes">
            <div className="menu-extra-head">
              <h3>Paquetes y eventos</h3>
              <p>Información rápida para elegir por tipo de pedido.</p>
            </div>

            <div className="menu-extra-grid">
              {packageInfo.map((pack) => (
                <article className="menu-extra-card" key={pack.title}>
                  <div className="menu-extra-top">
                    <h4>{pack.title}</h4>
                    <span>{pack.price}</span>
                  </div>
                  <p>{pack.desc}</p>
                  <ul>
                    {pack.items.map((entry) => (
                      <li key={entry}>{entry}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

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
.menu-subtitle {
  margin-top: .25rem;
  color: var(--muted);
  max-width: 58ch;
}

.menu-shell {
  border: 1px solid rgba(74, 42, 31, .14);
  border-radius: 20px;
  padding: .9rem;
  display: grid;
  grid-template-columns: 250px minmax(0, 1fr);
  gap: .9rem;
  align-items: stretch;
  background:
    radial-gradient(680px 220px at -8% -18%, rgba(235, 215, 239, .55), transparent 62%),
    linear-gradient(180deg, rgba(255, 255, 255, .95), rgba(248, 240, 250, .6));
  box-shadow: 0 14px 30px rgba(74, 42, 31, .10);
}

.menu-rail {
  border: 1px solid rgba(74, 42, 31, .14);
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(245, 236, 247, .65), rgba(255, 255, 255, .92));
  padding: .72rem;
  display: flex;
  flex-direction: column;
  gap: .65rem;
}

.rail-kicker {
  margin: 0;
  font-size: .72rem;
  letter-spacing: .1em;
  text-transform: uppercase;
  font-weight: 900;
  color: var(--choco-800);
}

.rail-note {
  margin: 0;
  color: var(--muted);
  font-size: .78rem;
  line-height: 1.35;
}

.menu-tabs {
  display: flex;
  flex-direction: column;
  gap: .4rem;
}

.tab-btn {
  border: 1px solid rgba(74, 42, 31, .14);
  background: rgba(255, 255, 255, .9);
  border-radius: 12px;
  padding: .55rem .62rem;
  font: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .5rem;
  color: var(--choco-800);
  font-weight: 800;
  text-align: left;
  transition: border-color .2s ease, box-shadow .2s ease, transform .2s ease;
}

.tab-btn:hover {
  transform: translateY(-1px);
  border-color: rgba(74, 42, 31, .2);
  box-shadow: 0 8px 18px rgba(74, 42, 31, .1);
}

.tab-btn.active {
  background: linear-gradient(120deg, rgba(245, 236, 247, .95), #fff4d8);
  border-color: rgba(74, 42, 31, .24);
  box-shadow: 0 9px 18px rgba(74, 42, 31, .12);
}

.tab-label {
  font-size: .92rem;
}

.menu-board {
  border: 1px solid rgba(74, 42, 31, .14);
  border-radius: 18px;
  padding: .8rem;
  background: rgba(255, 255, 255, .92);
  display: flex;
  flex-direction: column;
  gap: .62rem;
}

.menu-hero {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: .55rem;
  align-items: stretch;
}

.menu-hero-info {
  border: 1px solid rgba(74, 42, 31, .14);
  border-radius: 12px;
  padding: .72rem .78rem;
  background: linear-gradient(160deg, rgba(245, 236, 247, .72), rgba(255, 255, 255, .95));
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.menu-hero-media {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(74, 42, 31, .16);
  height: 190px;
}

.menu-hero-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.menu-hero-kicker {
  margin: 0;
  font-size: .66rem;
  letter-spacing: .1em;
  text-transform: uppercase;
  font-weight: 900;
  color: var(--choco-800);
}

.menu-hero-info h4 {
  margin: .12rem 0 0;
  color: var(--choco-900);
  font-size: 1.05rem;
  line-height: 1.1;
}

.menu-hero-info > p:not(.menu-hero-kicker) {
  margin: .16rem 0 0;
  color: var(--choco-800);
  font-size: .84rem;
  line-height: 1.32;
}

.menu-meta-row {
  margin-top: .62rem;
  display: flex;
  flex-wrap: wrap;
  gap: .36rem;
}

.menu-meta-row span {
  border: 1px solid rgba(74, 42, 31, .14);
  border-radius: 999px;
  padding: .18rem .52rem;
  font-size: .72rem;
  font-weight: 800;
  color: var(--choco-800);
  background: rgba(245, 236, 247, .62);
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: .52rem;
}

.menu-item {
  border: 1px solid rgba(74, 42, 31, .14);
  border-radius: 14px;
  padding: .62rem .66rem;
  background: linear-gradient(120deg, rgba(255, 255, 255, .94), rgba(245, 236, 247, .5));
  min-height: 118px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: border-color .2s ease, transform .2s ease, box-shadow .2s ease;
}

.menu-item:hover {
  transform: translateY(-2px);
  border-color: rgba(74, 42, 31, .24);
  box-shadow: 0 10px 18px rgba(74, 42, 31, .11);
}

.menu-item-head {
  display: flex;
  justify-content: space-between;
  gap: .6rem;
  align-items: flex-start;
}

.menu-item-left {
  min-width: 0;
}

.menu-item-name {
  margin: 0;
  font-weight: 900;
  color: var(--choco-900);
  font-size: .98rem;
  line-height: 1.2;
}

.menu-item-kind {
  margin: .2rem 0 0;
  color: var(--muted);
  font-size: .78rem;
}

.menu-item-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: .3rem;
}

.menu-price {
  font-weight: 900;
  color: var(--choco-900);
  font-size: .94rem;
  line-height: 1;
  white-space: nowrap;
}

.menu-badge {
  font-size: .68rem;
  font-weight: 900;
  color: var(--choco-900);
  background: #ffe9bb;
  border: 1px solid rgba(74, 42, 31, .14);
  border-radius: 999px;
  padding: .14rem .4rem;
}

.menu-flavors-list {
  margin-top: .44rem;
  display: flex;
  flex-wrap: wrap;
  gap: .3rem;
}

.flavor-pill {
  font-size: .74rem;
  font-weight: 800;
  color: var(--choco-900);
  border-radius: 999px;
  padding: .13rem .48rem;
  background: rgba(241, 232, 255, .86);
  border: 1px solid rgba(74, 42, 31, .12);
}

.menu-note {
  margin-top: .72rem;
  color: var(--muted);
  font-size: .82rem;
  display: flex;
  flex-wrap: wrap;
  gap: .65rem;
  justify-content: center;
}

.menu-extra {
  margin-top: .72rem;
  border: 1px solid rgba(74, 42, 31, .14);
  border-radius: 18px;
  padding: .8rem;
  background: linear-gradient(180deg, rgba(245, 236, 247, .55), rgba(255, 255, 255, .9));
}

.menu-extra-head h3 {
  margin: 0;
  color: var(--choco-900);
  font-size: 1.05rem;
}

.menu-extra-head p {
  margin: .2rem 0 0;
  color: var(--muted);
  font-size: .86rem;
}

.menu-extra-grid {
  margin-top: .6rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: .52rem;
}

.menu-extra-card {
  border: 1px solid rgba(74, 42, 31, .14);
  border-radius: 14px;
  padding: .62rem .66rem;
  background: rgba(255, 255, 255, .9);
}

.menu-extra-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .4rem;
}

.menu-extra-top h4 {
  margin: 0;
  color: var(--choco-900);
  font-size: .95rem;
}

.menu-extra-top span {
  border: 1px solid rgba(74, 42, 31, .12);
  border-radius: 999px;
  padding: .12rem .42rem;
  background: #fff0c8;
  color: var(--choco-900);
  font-size: .72rem;
  font-weight: 900;
  white-space: nowrap;
}

.menu-extra-card p {
  margin: .25rem 0 0;
  color: var(--muted);
  font-size: .8rem;
}

.menu-extra-card ul {
  margin: .5rem 0 0;
  padding-left: 1rem;
  color: var(--muted);
  font-size: .8rem;
  display: grid;
  gap: .2rem;
}

@media (max-width: 980px) {
  .menu-shell {
    grid-template-columns: 1fr;
  }

  .menu-tabs {
    flex-direction: row;
    overflow-x: auto;
    padding-bottom: .2rem;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
  }

  .menu-tabs::-webkit-scrollbar {
    display: none;
  }

  .tab-btn {
    flex: 0 0 auto;
    min-width: 145px;
    scroll-snap-align: start;
  }

  .menu-extra-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 760px) {
  .menu-shell {
    border-radius: 18px;
    padding: .62rem;
    gap: .62rem;
  }

  .menu-rail {
    border-radius: 14px;
    padding: .56rem;
    gap: .5rem;
  }

  .menu-board {
    border-radius: 14px;
    padding: .56rem;
    gap: .52rem;
  }

  .menu-hero {
    grid-template-columns: 1fr;
  }

  .menu-hero-info {
    order: 2;
    padding: .62rem .66rem;
  }

  .menu-hero-info h4 {
    font-size: 1rem;
  }

  .menu-hero-info > p:not(.menu-hero-kicker) {
    font-size: .82rem;
  }

  .menu-hero-media {
    order: 1;
    height: 178px;
  }

  .menu-meta-row {
    margin-top: 0;
    flex-wrap: wrap;
    overflow: visible;
    padding-bottom: 0;
  }

  .menu-meta-row span {
    flex: 1 1 auto;
    text-align: center;
  }

  .menu-tabs {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    overflow: visible;
    scroll-snap-type: none;
    padding-bottom: 0;
    gap: .36rem;
  }

  .tab-btn {
    min-width: 0;
    width: 100%;
    padding: .52rem .58rem;
    border-radius: 11px;
    scroll-snap-align: none;
  }

  .tab-btn:hover {
    transform: none;
  }

  .tab-label {
    font-size: .88rem;
  }

  .rail-note {
    display: none;
  }

  .menu-grid {
    grid-template-columns: 1fr;
    gap: .46rem;
  }

  .menu-item {
    min-height: 0;
    padding: .58rem .6rem;
  }

  .menu-item-head {
    flex-direction: column;
    gap: .38rem;
  }

  .menu-item-right {
    align-items: flex-start;
    flex-direction: row;
    gap: .34rem;
    flex-wrap: wrap;
  }

  .menu-price {
    font-size: .9rem;
  }

  .menu-flavors-list {
    margin-top: .38rem;
    gap: .26rem;
  }

  .flavor-pill {
    font-size: .72rem;
  }

  .menu-extra {
    border-radius: 14px;
    padding: .56rem;
  }

  .menu-extra-grid {
    grid-template-columns: 1fr;
    margin-top: .48rem;
    gap: .42rem;
  }

  .menu-extra-card {
    padding: .56rem .6rem;
  }

  .menu-extra-head h3 {
    font-size: 1rem;
  }

  .menu-extra-head p {
    font-size: .82rem;
  }
}
`;
