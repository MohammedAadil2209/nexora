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
          {/* Project 1 */}
          <div className="project-card glass-panel fade-in-up">
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
          <div className="project-card glass-panel fade-in-up animate-delay-1">
            <div className="project-image-wrapper">
              <div className="project-img placeholder-2">
                <div className="overlay-brand text-dark">The Space Hangout</div>
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
          <div className="project-card glass-panel fade-in-up animate-delay-2">
            <div className="project-image-wrapper">
              <div className="project-img" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}>
                <div className="overlay-brand" style={{ color: '#60a5fa', fontFamily: 'var(--font-heading)', fontSize: '1.8rem', letterSpacing: '2px' }}>AR Associate</div>
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
