import { useMemo, useState } from "react";
import { menuData } from "../data/menu";

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
              <h2>Menú</h2>
              <p className="menu-subtitle">
                Elige tu antojo ✨ Sabores irresistibles, precios claros y opciones para compartir.
              </p>
            </div>

            <div className="menu-shell">
              <div className="menu-topbar" role="note">
                <div className="topbar-left">
                  <span className="topbar-kicker">Opciones</span>
                  <strong className="topbar-title">Individual • Cajita 20 piezas ($140) • Eventos</strong>
                </div>
                <span className="topbar-chip">Pedidos por temporada</span>
              </div>

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
                      <small className="tab-count">{group.items.length}</small>
                    </button>
                ))}
              </div>

              <article className="menu-panel" role="tabpanel" aria-label={activeCategory}>
                <div className="menu-panel-head">
                  <div className="panel-title">
                    <h4>{activeGroup.category}</h4>
                    <p className="panel-wow">
                      {activeGroup.description ? activeGroup.description : "Una selección que se antoja en serio 🤍"}
                    </p>
                  </div>
                  <span className="panel-meta">{activeGroup.items.length} opciones</span>
                </div>

                <div className="menu-feature">
                  <div className="menu-feature-media">
                    <img src={activeGroup.image} alt={activeGroup.imageAlt} loading="lazy" />
                  </div>

                  <div className="menu-feature-bullets">
                    <div className="bullet">
                      <span className="bullet-dot" />
                      <span>Hechos para antojar desde la primera mordida</span>
                    </div>
                    <div className="bullet">
                      <span className="bullet-dot" />
                      <span>Perfectos para regalar o compartir</span>
                    </div>
                    <div className="bullet">
                      <span className="bullet-dot" />
                      <span>Pregunta por disponibilidad según temporada</span>
                    </div>
                  </div>
                </div>

                <div className="menu-grid">
                  {activeGroup.items.map((item) => (
                      <article className="menu-item" key={item.name}>
                        <div className="menu-item-top">
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
                            <div className="menu-flavors-row">
                              <span className="menu-flavors-label">Sabores</span>
                              <div className="menu-flavors-list">
                                {item.flavors.map((flavor) => (
                                    <span className="flavor-pill" key={`${item.name}-${flavor}`}>
                              {flavor}
                            </span>
                                ))}
                              </div>
                            </div>
                        ) : null}
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
/* =========================================
   COMPACT + ELEGANT + CUTE (LESS SPACE)
   Keeps your color tokens: --lavender-*, --choco-*, --border, --surface
========================================= */

.menu-subtitle{
  margin-top:.25rem;
  color: var(--muted);
  max-width: 56ch;
}

/* Shell */
.menu-shell{
  border: 1px solid rgba(74,42,31,.12);
  border-radius: 18px;
  padding: .7rem;
  background:
    radial-gradient(900px 260px at 18% -10%, rgba(235,215,239,.45), transparent 55%),
    linear-gradient(180deg, rgba(245,236,247,.55), var(--surface) 55%);
  box-shadow: 0 10px 26px rgba(74,42,31,.08);
}

/* Top bar (marketing but compact) */
.menu-topbar{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:.6rem;
  padding:.55rem .65rem;
  border-radius: 14px;
  border: 1px solid rgba(74,42,31,.14);
  background: linear-gradient(120deg, var(--lavender-50), #fff7d9);
  margin-bottom: .65rem;
}

.topbar-left{
  display:flex;
  flex-direction:column;
  gap:.05rem;
}

.topbar-kicker{
  font-size:.68rem;
  letter-spacing:.08em;
  text-transform:uppercase;
  font-weight:800;
  color: var(--choco-800);
}

.topbar-title{
  font-size:.9rem;
  font-weight:800;
  color: var(--choco-900);
  line-height:1.15;
}

.topbar-chip{
  flex:0 0 auto;
  font-size:.72rem;
  font-weight:800;
  color: var(--choco-900);
  background: rgba(255,255,255,.75);
  border: 1px solid rgba(74,42,31,.12);
  border-radius: 999px;
  padding:.18rem .5rem;
}

/* Tabs */
.menu-tabs{
  display:flex;
  gap:.45rem;
  overflow-x:auto;
  padding-bottom:.25rem;
  margin-bottom:.65rem;
  scrollbar-width:none;
  -webkit-overflow-scrolling: touch;
}
.menu-tabs::-webkit-scrollbar{ display:none; }

.tab-btn{
  border: 1px solid rgba(74,42,31,.14);
  background: rgba(255,255,255,.85);
  border-radius: 999px;
  padding: .42rem .65rem;
  font: inherit;
  cursor:pointer;
  display:inline-flex;
  align-items:center;
  gap:.45rem;
  flex: 0 0 auto;
  color: var(--choco-800);
  font-weight:800;
  transition: transform .18s ease, box-shadow .18s ease, background .18s ease;
}

.tab-label{ font-size:.9rem; }

.tab-count{
  min-width: 1.35rem;
  text-align:center;
  font-size:.72rem;
  font-weight:900;
  background: var(--lavender-100);
  border-radius:999px;
  padding: .08rem .34rem;
  color: var(--choco-900);
  border: 1px solid rgba(74,42,31,.10);
}

.tab-btn:hover{
  transform: translateY(-1px);
  box-shadow: 0 8px 18px rgba(74,42,31,.10);
}

.tab-btn.active{
  background: linear-gradient(120deg, var(--lavender-100), #fff7d9);
  border-color: rgba(74,42,31,.22);
  box-shadow: 0 10px 20px rgba(74,42,31,.12);
}

/* Panel */
.menu-panel{
  border: 1px solid rgba(74,42,31,.12);
  border-radius: 16px;
  background: rgba(255,255,255,.9);
  padding: .7rem;
}

/* Panel head */
.menu-panel-head{
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  gap:.7rem;
  margin-bottom:.6rem;
}

.panel-title h4{
  margin:0;
  color: var(--choco-900);
  font-size: 1.15rem;
  letter-spacing:.01em;
}

.panel-wow{
  margin:.18rem 0 0;
  color: var(--choco-800);
  font-size:.9rem;
  line-height:1.3;
}

.panel-meta{
  flex: 0 0 auto;
  font-size:.74rem;
  font-weight:900;
  color: var(--choco-900);
  background: rgba(245,236,247,.8);
  border: 1px solid rgba(74,42,31,.12);
  border-radius: 999px;
  padding: .18rem .5rem;
}

/* Feature */
.menu-feature{
  display:grid;
  grid-template-columns: 132px 1fr;
  gap: .55rem;
  align-items:stretch;
  margin-bottom: .65rem;
}

.menu-feature-media{
  border-radius: 14px;
  overflow:hidden;
  border: 1px solid rgba(74,42,31,.14);
  box-shadow: 0 10px 20px rgba(74,42,31,.10);
  aspect-ratio: 4 / 3;
}

.menu-feature-media img{
  width:100%;
  height:100%;
  object-fit:cover;
}

.menu-feature-bullets{
  border-radius: 14px;
  border: 1px dashed rgba(74,42,31,.18);
  background: linear-gradient(135deg, rgba(245,236,247,.55), rgba(255,255,255,.92));
  padding: .55rem .6rem;
  display:flex;
  flex-direction:column;
  gap:.35rem;
  color: var(--choco-800);
  font-size: .88rem;
  line-height:1.25;
}

.bullet{
  display:flex;
  gap:.4rem;
  align-items:flex-start;
}

.bullet-dot{
  width:.55rem;
  height:.55rem;
  border-radius: 999px;
  background: linear-gradient(120deg, var(--lavender-100), #ffe9a9);
  border: 1px solid rgba(74,42,31,.12);
  flex: 0 0 auto;
  margin-top:.14rem;
}

/* Grid compact */
.menu-grid{
  display:grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: .5rem;
}

/* Item (compact + cute) */
.menu-item{
  border: 1px solid rgba(74,42,31,.12);
  border-radius: 14px;
  padding: .6rem .65rem;
  background: linear-gradient(120deg, rgba(245,236,247,.38), rgba(255,255,255,.92));
  transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
}

.menu-item:hover{
  transform: translateY(-2px);
  box-shadow: 0 12px 22px rgba(74,42,31,.12);
  border-color: rgba(74,42,31,.20);
}

.menu-item-top{
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  gap:.6rem;
}

.menu-item-left{
  min-width:0;
}

.menu-item-name{
  margin:0;
  font-weight:900;
  color: var(--choco-900);
  font-size:.98rem;
  line-height:1.12;
}

.menu-item-kind{
  margin:.2rem 0 0;
  color: var(--muted);
  font-size:.78rem;
  line-height:1.15;
}

.menu-item-right{
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  gap:.25rem;
}

/* Price simple */
.menu-price{
  font-weight:900;
  font-size:.86rem;
  color: var(--choco-900);
  padding:0;
  background:none;
  border:none;
  white-space:nowrap;
}

/* Badge cute */
.menu-badge{
  font-size:.7rem;
  font-weight:900;
  color: var(--choco-900);
  background:#ffeccb;
  border:1px solid rgba(74,42,31,.14);
  border-radius:999px;
  padding:.12rem .42rem;
}

/* Flavors = more obvious */
.menu-flavors-row{
  margin-top:.45rem;
  display:flex;
  flex-direction:column;
  gap:.28rem;
}

.menu-flavors-label{
  font-size:.7rem;
  font-weight:900;
  letter-spacing:.08em;
  text-transform:uppercase;
  color: var(--choco-800);
}

.menu-flavors-list{
  display:flex;
  flex-wrap:wrap;
  gap:.32rem;
}

.flavor-pill{
  font-size:.76rem;
  font-weight:800;
  color: var(--choco-900);
  background: rgba(241,232,255,.9);
  border: 1px solid rgba(74,42,31,.12);
  border-radius: 999px;
  padding: .14rem .52rem;
}

/* Footer note */
.menu-note{
  margin-top:.6rem;
  color: var(--muted);
  font-size:.82rem;
  display:flex;
  flex-wrap:wrap;
  gap:.65rem;
  justify-content:center;
}

/* Responsive */
@media (max-width: 900px){
  .menu-grid{ grid-template-columns: 1fr; }
}

@media (max-width: 760px){
  .menu-shell{ padding:.6rem; border-radius:16px; }
  .menu-panel{ padding:.6rem; border-radius:14px; }
  .menu-topbar{ padding:.5rem .55rem; border-radius:12px; }
  .topbar-title{ font-size:.86rem; }
  .tab-btn{ padding:.4rem .6rem; }
  .menu-feature{ grid-template-columns: 1fr; }
  .menu-feature-media{ max-height: 140px; }
  .menu-item{ padding:.55rem .6rem; }
  .menu-item-name{ font-size:.95rem; }
  .flavor-pill{ font-size:.74rem; }
}
`;
