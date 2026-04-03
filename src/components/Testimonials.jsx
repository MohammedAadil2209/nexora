export default function Testimonials() {
  return (
    <section className="testimonials section-padding" id="testimonials">
      <div className="container">
        <div className="section-header text-center fade-in-up">
          <div className="section-tag mx-auto"><code>&lt;reviews /&gt;</code></div>
          <h2 className="section-title">Client <span className="text-gradient-alt">Success</span></h2>
        </div>
        <div className="testimonials-grid">
          {/* Testimonial 1 */}
          <div className="testimonial-card glass-panel fade-in-up">
            <div className="stars" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
              <i className="fa-solid fa-star text-yellow"></i><i className="fa-solid fa-star text-yellow"></i><i className="fa-solid fa-star text-yellow"></i><i className="fa-solid fa-star text-yellow"></i><i className="fa-solid fa-star text-yellow"></i>
            </div>
            <p className="review-text" style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>"Nexora delivered exactly what we needed and we like it very much. The end result is incredibly impressive, and they came up with very good ideas and put immense effort into building a premium digital experience for our restaurant. Highly recommended!"</p>
            <div className="client-info">
              <h4 style={{ fontSize: '1.25rem' }}>Management Team</h4>
              <span style={{ fontSize: '1rem', color: 'var(--highlight)' }}>The Long Story (Restobar)</span>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial-card glass-panel fade-in-up animate-delay-1">
            <div className="stars" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
              <i className="fa-solid fa-star text-yellow"></i><i className="fa-solid fa-star text-yellow"></i><i className="fa-solid fa-star text-yellow"></i><i className="fa-solid fa-star text-yellow"></i><i className="fa-solid fa-star text-yellow"></i>
            </div>
            <p className="review-text" style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>"An absolute game-changer. Nexora built a robust, highly professional digital platform that instantly builds trust with our clients. Their attention to detail and ability to execute our vision resulted in complete customer satisfaction!"</p>
            <div className="client-info">
              <h4 style={{ fontSize: '1.25rem' }}>Afroze</h4>
              <span style={{ fontSize: '1rem', color: 'var(--highlight)' }}>AR Associate</span>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="testimonial-card glass-panel fade-in-up animate-delay-2">
            <div className="stars" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
              <i className="fa-solid fa-star text-yellow"></i><i className="fa-solid fa-star text-yellow"></i><i className="fa-solid fa-star text-yellow"></i><i className="fa-solid fa-star text-yellow"></i><i className="fa-solid fa-star text-yellow"></i>
            </div>
            <p className="review-text" style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>"We wanted a simple, good-looking website and that’s exactly what we got. Clean design, easy navigation, and smooth process. Really happy with it!"</p>
            <div className="client-info">
              <h4 style={{ fontSize: '1.25rem' }}>Management Team</h4>
              <span style={{ fontSize: '1rem', color: 'var(--highlight)' }}>Le Bro's Cafe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
