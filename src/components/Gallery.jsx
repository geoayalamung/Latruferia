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

];

function Gallery() {
  return (
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
  );
}

export default Gallery;
