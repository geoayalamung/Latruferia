const galleryItems = [
  '/public/Images/mindonas1.png',
  '/public/Images/corazontrufas.png',
  '/public/Images/tartas.png',
  'public/Images/trufasnavidad.png',
  '/public/Images/trufas.jpg',
  '/public/Images/mindonas2.png',
  'public/Images/tartaskiwi.png',
  'public/Images/trufasmix.png',
  'public/Images/trufaspink.png',

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
