
const galleryItems = [
  '/public/Images/MiniDonas/mindonas1.png',
  '/public/Images/Trufas/corazontrufas.png',
  '/public/Images/Tartas/tartas.png',
  'public/Images/Trufas/trufasnavidad.png',
  '/public/Images/Trufas/trufas.jpg',
  '/public/Images/MiniDonas/mindonas2.png',
  'public/Images/Tartas/tartaskiwi.png',
  'public/Images/Trufas/trufasmix.png',
  'public/Images/Trufas/trufaspink.png',
    'public/Images/MiniDonas/minidonas.png',
    'public/Images/Trufas/trufasDiferentes.png',
    'public/Images/Trufas/trufasPaquetes.png',



];

function Gallery() {

  return (
    <>
      <style>{galleryStyles}</style>
    <section className="section section-tint" id="galeria">
      <div className="container">
        <div className="section-head compact-head">
          <h3>Galería</h3>
          <p>Ideal para regalos, mesas de postres y eventos.</p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <figure className="gallery-item" key={`${item}-${index}`}>
              <img src={item} alt={`Postre La Trufería ${index + 1}`} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

export default Gallery;


const galleryStyles = `

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.8rem;
}

.gallery-item {
  position: relative;
  margin: 0;
  overflow: hidden;
  border-radius: 22px;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-soft);
  aspect-ratio: 4 / 3;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;
}

.gallery-item:hover img {
  transform: scale(1.04);
}

@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 760px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}


`;
