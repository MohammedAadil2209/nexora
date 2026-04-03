export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-grid"></div>
      <div className="hero-particles" id="particles-js"></div>
      <div className="container hero-content">
        <div className="dev-tag glass-panel">
          <code>&lt; Web Designer & Developer /&gt;</code>
        </div>

        <h1 className="hero-title fw-bold">
          Building Websites That
          <span className="text-gradient"> Convert</span>,<br />
          Not Just Look Good.
        </h1>

        <p className="hero-subtitle">
          Nexora helps businesses grow with modern, high-performing websites.
        </p>

        <div className="hero-ctas">
          <a href="#projects" className="btn btn-primary">
            View Projects <i className="fa-solid fa-arrow-right"></i>
          </a>
          <a href="#contact" className="btn btn-secondary">Get in Touch</a>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
}
