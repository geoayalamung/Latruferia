const reviews = [
  {
    name: 'Mariana G.',
    text: 'Pedí trufitas para un cumpleaños y quedaron hermosas, además de muy ricas.'
  },
  {
    name: 'Ana P.',
    text: 'Las mini donitas vuelan en cada reunión. Muy ricas y con presentación preciosa.'
  },
  {
    name: 'Fernanda L.',
    text: 'La tarta con fruta fue la estrella del evento: fresca, elegante y muy rica.'
  }
];

function Reviews() {
  return (
    <section className="section" id="reviews">
      <div className="container">
        <div className="section-head">
          <h3>Reviews</h3>
          <p>Nuestras clientas dicen que están muy ricas.</p>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <article className="card review-card" key={review.name}>
              <p>"{review.text}"</p>
              <strong>{review.name}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
