export default function Services() {
  return (
    <section className="services-hybrid section-padding" id="services">
      <div className="container">
        <div className="hybrid-grid">
          {/* Services */}
          <div className="services-column fade-in-left">
            <div className="section-tag"><code>&lt;services /&gt;</code></div>
            <h2 className="section-title">
              What I <span className="text-gradient">Do</span>
            </h2>

            <div className="services-list">
              <div className="service-card glass-panel interactive-hover">
                <div className="service-icon">
                  <i className="fa-solid fa-pen-nib"></i>
                </div>
                <div className="service-content">
                  <h3>Website Design</h3>
                  <p>
                    Captivating, modern UI/UX that aligns with your brand
                    identity.
                  </p>
                </div>
              </div>

              <div className="service-card glass-panel interactive-hover">
                <div className="service-icon"><i className="fa-solid fa-code"></i></div>
                <div className="service-content">
                  <h3>Frontend Development</h3>
                  <p>
                    Responsive, performant, and interactive code built to modern
                    standards.
                  </p>
                </div>
              </div>

              <div className="service-card glass-panel interactive-hover">
                <div className="service-icon">
                  <i className="fa-solid fa-rocket"></i>
                </div>
                <div className="service-content">
                  <h3>Business Website Setup</h3>
                  <p>
                    End-to-end delivery of websites meant to establish your
                    digital footprint.
                  </p>
                </div>
              </div>

              <div className="service-card glass-panel interactive-hover">
                <div className="service-icon">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div className="service-content">
                  <h3>WhatsApp Booking Integration</h3>
                  <p>
                    Direct conversion funnels routing customers straight to your
                    WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us / Solution */}
          <div className="why-us-column fade-in-right">
            <div className="section-tag"><code>&lt;solution /&gt;</code></div>
            <h2 className="section-title">
              Why Choose <span className="text-gradient">Nexora</span>
            </h2>

            <div className="features-grid">
              <div className="feature-box">
                <div className="feature-header">
                  <i className="fa-solid fa-layer-group text-purple"></i>
                  <h4>Modern UI/UX</h4>
                </div>
                <p>Design that feels premium and builds trust instantly.</p>
              </div>

              <div className="feature-box">
                <div className="feature-header">
                  <i className="fa-solid fa-mobile-screen-button text-cyan"></i>
                  <h4>Mobile-First Design</h4>
                </div>
                <p>
                  Flawless experience on every device, optimized for where most
                  traffic happens.
                </p>
              </div>

              <div className="feature-box">
                <div className="feature-header">
                  <i className="fa-solid fa-chart-line text-green"></i>
                  <h4>Conversion-Focused</h4>
                </div>
                <p>
                  Strategic layouts that turn visitors into paying customers.
                </p>
              </div>

              <div className="feature-box">
                <div className="feature-header">
                  <i className="fa-solid fa-bolt text-purple"></i>
                  <h4>Fast & Responsive</h4>
                </div>
                <p>
                  Lightning-fast load times for better SEO and user retention.
                </p>
              </div>
            </div>

            <div className="code-block glass-panel mt-4">
              <pre><code><span className="purple">if</span> (project.needsBoost) {'{'}{'\n'}  <span className="cyan">nexora</span>.<span className="yellow">initialize</span>({'{'}{'\n'}    <span className="blue">speed</span>: <span className="green">'fast'</span>,{'\n'}    <span className="blue">design</span>: <span className="green">'premium'</span>,{'\n'}    <span className="blue">conversions</span>: <span className="purple">true</span>{'\n'}  {'}'});{'\n'}{'}'}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
