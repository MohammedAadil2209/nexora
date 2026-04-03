export default function Pricing() {
  return (
    <section className="pricing section-padding dark-bg" id="pricing">
      <div className="container">
        <div className="section-header text-center fade-in-up">
          <div className="section-tag mx-auto"><code>&lt;pricing /&gt;</code></div>
          <h2 className="section-title">Simple, <span className="text-gradient">Transparent</span> Pricing</h2>
          <p className="section-subtitle">Choose the perfect plan to grow your business.</p>
        </div>

        <div className="pricing-grid">
          {/* Starter Plan */}
          <div className="pricing-card glass-panel fade-in-up">
            <div className="pricing-header">
              <h3>Starter</h3>
              <div className="price"><span className="currency">₹</span>2,999</div>
              <p className="plan-desc">Fueling Boutique Brands & Startups</p>
            </div>
            <ul className="pricing-features">
              <li><i className="fa-solid fa-check text-green"></i> 1–2 pages</li>
              <li><i className="fa-solid fa-check text-green"></i> Mobile responsive</li>
              <li><i className="fa-solid fa-check text-green"></i> WhatsApp button</li>
              <li><i className="fa-solid fa-check text-green"></i> Contact form</li>
            </ul>
            <a href="#contact" className="btn btn-secondary w-100 mt-4 plan-btn">Select Starter</a>
          </div>

          {/* Business Plan */}
          <div className="pricing-card glass-panel popular-plan fade-in-up animate-delay-1">
            <div className="popular-badge">Most Popular</div>
            <div className="pricing-header">
              <h3>Business</h3>
              <div className="price text-gradient"><span className="currency">₹</span>6,999</div>
              <p className="plan-desc">Optimized for Scaling High-Growth Enterprises</p>
            </div>
            <ul className="pricing-features">
              <li><i className="fa-solid fa-check text-primary"></i> 3–5 pages</li>
              <li><i className="fa-solid fa-check text-primary"></i> Premium design</li>
              <li><i className="fa-solid fa-check text-primary"></i> WhatsApp + Call</li>
              <li><i className="fa-solid fa-check text-primary"></i> Basic animations</li>
              <li><i className="fa-solid fa-check text-primary"></i> Google Maps</li>
            </ul>
            <a href="#contact" className="btn btn-primary w-100 mt-4 plan-btn">Get Started</a>
          </div>

          {/* Premium Plan */}
          <div className="pricing-card glass-panel fade-in-up animate-delay-2">
            <div className="pricing-header">
              <h3>Premium</h3>
              <div className="price"><span className="currency">₹</span>12,999</div>
              <p className="plan-desc">Elite Design for Industry-Leading Brands</p>
            </div>
            <ul className="pricing-features">
              <li><i className="fa-solid fa-check text-purple"></i> Full custom website</li>
              <li><i className="fa-solid fa-check text-purple"></i> Advanced UI</li>
              <li><i className="fa-solid fa-check text-purple"></i> Booking/contact system</li>
              <li><i className="fa-solid fa-check text-purple"></i> Animations</li>
              <li><i className="fa-solid fa-check text-purple"></i> Priority support</li>
            </ul>
            <a href="#contact" className="btn btn-secondary w-100 mt-4 plan-btn">Select Premium</a>
          </div>
        </div>
      </div>
    </section>
  );
}
