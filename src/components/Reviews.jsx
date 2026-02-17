const reviews = [
  {
    name: 'Paola A.',
    text: 'Pedí trufitas de oreo para un cumpleaños y quedaron hermosas, además de muy muy ricas.',
    rating: 5
  },
  {
    name: 'Rosy Z.',
    text: 'Las mini donitas vuelan en cada reunión. Muy ricas y con presentación preciosa.',
    rating: 5
  },
  {
    name: 'Fernanda R.',
    text: 'La tarta con fruta le encanto a mis papas, la presentación es hermosa y el sabor increíble. La recomiendo para cualquier ocasión especial.',
    rating: 5
  },
  {
    name: 'Guadalupe M.',
    text: 'Las trufas de chocolate amargo son mi debilidad, siempre las pido para regalar y nunca decepcionan. ¡Súper recomendadas!',
    rating: 5
  }
];

function Reviews() {
  const renderStars = (rating) => '★'.repeat(rating) + '☆'.repeat(5 - rating);

  return (
    <section className="section" id="reviews">
      <div className="container">
        <div className="section-head">
          <h3>Reseñas</h3>
          <p>Lo que opinan nuestras clientas sobre nuestros postres.</p>
        </div>

        <div className="reviews-marquee">
          <div className="reviews-track">
            <div className="reviews-group">
              {reviews.map((review) => (
                <article className="card review-card" key={review.name}>
                  <span className="review-stars" aria-label={`${review.rating} de 5 estrellas`}>
                    {renderStars(review.rating)}
                  </span>
                  <p className="review-text">"{review.text}"</p>
                  <strong className="review-author">{review.name}</strong>
                </article>
              ))}
            </div>

            <div className="reviews-group" aria-hidden="true">
              {reviews.map((review) => (
                <article className="card review-card" key={`${review.name}-loop`}>
                  <span className="review-stars">{renderStars(review.rating)}</span>
                  <p className="review-text">"{review.text}"</p>
                  <strong className="review-author">{review.name}</strong>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
