export default function Projects() {
  return (
    <section className="projects section-padding dark-bg" id="projects">
      <div className="container">
        <div className="section-header text-center fade-in-up">
          <div className="section-tag mx-auto"><code>&lt;projects /&gt;</code></div>
          <h2 className="section-title">
            Selected <span className="text-gradient">Work</span>
          </h2>
          <p className="section-subtitle">Real businesses, real results.</p>
        </div>

        <div className="projects-grid">
          {/* Project 4: Le Bro's Cafe (Featured) - MOVED TO 1st */}
          <div className="project-card glass-panel fade-in-up featured-project" style={{ gridColumn: 'span 1', position: 'relative' }}>
            <div className="project-badge" style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 10, background: 'rgba(255,215,0,0.2)', padding: '5px 10px', borderRadius: '20px', border: '1px solid gold', backdropFilter: 'blur(5px)', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <i className="fa-solid fa-star" style={{ color: 'gold', fontSize: '0.85rem' }}></i>
              <span style={{ color: 'gold', fontSize: '0.75rem', fontWeight: 'bold' }}>STARRED</span>
            </div>
            <div className="project-image-wrapper">
              <div className="project-img" style={{ background: 'linear-gradient(135deg, #1e1e1e 0%, #000 100%)' }}>
                <div className="overlay-brand" style={{ color: '#fff', letterSpacing: '4px' }}>Le Bro's Cafe</div>
              </div>
              <div className="project-overlay">
                <a href="https://www.lebroscafe.com/" target="_blank" rel="noopener" className="btn btn-primary btn-sm"
                  >View Live <i className="fa-solid fa-external-link-alt"></i
                ></a>
              </div>
            </div>
            <div className="project-info">
              <div className="project-tags">
                <span className="tag">#Restaurant</span>
                <span className="tag">#FullStack</span>
              </div>
              <h3 className="project-title">Le Bro's Cafe</h3>
              <p className="project-desc">
                A highly interactive, cinematic growth ecosystem for a modern cafe, optimizing bookings and digital presence.
              </p>
              <div className="code-snippet-small">
                <code
                  ><span className="purple">const</span>
                  <span className="cyan"> studio</span> =
                  <span className="green"> 'growth'</span>;</code
                >
              </div>
            </div>
          </div>

          {/* Project 1 */}
          <div className="project-card glass-panel fade-in-up animate-delay-1">
            <div className="project-image-wrapper">
              <div className="project-img placeholder-1">
                <div className="overlay-brand">The Long Story</div>
              </div>
              <div className="project-overlay">
                <a href="https://longstoryrestaurant.vercel.app/" className="btn btn-primary btn-sm"
                  >View Live <i className="fa-solid fa-external-link-alt"></i
                ></a>
              </div>
            </div>
            <div className="project-info">
              <div className="project-tags">
                <span className="tag">#DarkLuxury</span>
                <span className="tag">#RestoBar</span>
              </div>
              <h3 className="project-title">The Long Story</h3>
              <p className="project-desc">
                A premium, high-converting digital experience designed for a
                luxury restobar, increasing table reservations and customer
                interactions.
              </p>
              <div className="code-snippet-small">
                <code
                  ><span className="purple">import</span> {'{'} Luxury {'}'}
                  <span className="purple">from</span> 'experience';</code
                >
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card glass-panel fade-in-up animate-delay-2">
            <div className="project-image-wrapper">
              <div className="project-img placeholder-2">
                <div className="overlay-brand">The Space Hangout</div>
              </div>
              <div className="project-overlay">
                <a href="https://space-restaurant.vercel.app/" target="_blank" rel="noopener" className="btn btn-primary btn-sm"
                  >View Live <i className="fa-solid fa-external-link-alt"></i
                ></a>
              </div>
            </div>
            <div className="project-info">
              <div className="project-tags">
                <span className="tag">#Minimal</span>
                <span className="tag">#Cafe</span>
              </div>
              <h3 className="project-title">The Space</h3>
              <p className="project-desc">
                A calm, aesthetic presence for a family-friendly cafe. Features
                modern minimal design focused on driving dine-in visits.
              </p>
              <div className="code-snippet-small">
                <code
                  ><span className="purple">const</span>
                  <span className="cyan"> vibe</span> =
                  <span className="green"> 'aesthetic'</span>;</code
                >
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card glass-panel fade-in-up animate-delay-3">
            <div className="project-image-wrapper">
              <div className="project-img placeholder-3">
                <div className="overlay-brand">AR Associate</div>
              </div>
              <div className="project-overlay">
                <a href="https://arassociate.vercel.app/" target="_blank" rel="noopener" className="btn btn-primary btn-sm"
                  >View Live <i className="fa-solid fa-external-link-alt"></i
                ></a>
              </div>
            </div>
            <div className="project-info">
              <div className="project-tags">
                <span className="tag">#Corporate</span>
                <span className="tag">#Enterprise</span>
              </div>
              <h3 className="project-title">AR Associate</h3>
              <p className="project-desc">
                A highly professional, robust digital platform engineered to build immediate business trust and clearly outline scaling services.
              </p>
              <div className="code-snippet-small">
                <code
                  ><span className="purple">export</span>
                  <span className="cyan"> class</span>
                  <span className="green"> Enterprise</span>;</code
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
