
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
    <>
      <style>{reviewsStyles}</style>
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
    </>
  );
}

export default Reviews;


const reviewsStyles = `

.reviews-marquee {
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%);
}

.reviews-track {
  display: flex;
  gap: 1.05rem;
  will-change: transform;
  animation: reviews-scroll 36s linear infinite;
}

.reviews-group {
  display: flex;
  gap: 1.05rem;
  flex-shrink: 0;
}

.review-card {
  flex: 0 0 min(360px, 82vw);
  display: grid;
  gap: 0.6rem;
  border-radius: 20px;
  border: 1px solid rgba(74, 42, 31, 0.12);
  background: linear-gradient(180deg, #fff7fb, #fff 55%);
  box-shadow: 0 10px 22px rgba(72, 38, 24, 0.07);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.review-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 28px rgba(72, 38, 24, 0.1);
}

.reviews-marquee:hover .reviews-track {
  animation-play-state: paused;
}

.review-stars {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  font-size: 0.9rem;
  letter-spacing: 0.06em;
  color: #f2b300;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.55), 0 2px 8px rgba(242, 179, 0, 0.22);
}

.review-text {
  margin: 0;
  color: var(--muted);
  line-height: 1.55;
  font-size: 0.95rem;
}

.review-author {
  margin-top: 0.2rem;
  color: var(--choco-900);
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.02em;
}

@keyframes reviews-scroll {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(calc(-50% - 0.525rem));
  }
}

@media (max-width: 1024px) {
  .review-card {
    gap: 0.62rem;
  }
}

@media (max-width: 760px) {
  .reviews-marquee {
    mask-image: linear-gradient(to right, transparent 0, black 4%, black 96%, transparent 100%);
  }

  .reviews-track {
    gap: 0.75rem;
    animation-duration: 30s;
  }

  .reviews-group {
    gap: 0.75rem;
  }

  .review-card {
    flex-basis: min(280px, 88vw);
    border-radius: 18px;
    padding: 0.76rem;
    gap: 0.52rem;
  }

  .review-stars {
    font-size: 0.84rem;
  }

  .review-text {
    font-size: 0.9rem;
    line-height: 1.48;
  }

  .review-author {
    font-size: 0.86rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .reviews-marquee {
    overflow-x: auto;
    mask-image: none;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }

  .reviews-marquee::-webkit-scrollbar {
    display: none;
  }

  .reviews-track {
    padding-bottom: 0.2rem;
  }
}


`;
