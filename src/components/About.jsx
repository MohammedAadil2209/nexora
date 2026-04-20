export default function About() {
  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text fade-in-left">
            <div className="section-tag"><code>&lt;about /&gt;</code></div>
            <h2 className="section-title">
              Design Meets <span className="text-gradient-alt">Logic</span>
            </h2>
            <p className="lead">
              I build clean, high-converting websites that help businesses stand
              out and grow online. Combining design and development, I focus on
              both user experience and real results.
            </p>

            <div className="terminal-box">
              <div className="terminal-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="terminal-title">nexora:~ git status</span>
              </div>
              <div className="terminal-body">
                <p>
                  <code
                    ><span className="cyan">➜</span>
                    <span className="green">nexora</span>
                    <span className="cyan">git:(</span><span className="red">main</span
                    ><span className="cyan">)</span> ✗ npm run build</code
                  >
                </p>
                <p><code>&gt; nexora-studio@1.0.0 build</code></p>
                <p><code>&gt; Compiling premium assets...</code></p>
                <p>
                  <code
                    ><span className="green">✔</span> UI/UX Optimization
                    complete.</code
                  >
                </p>
                <p>
                  <code
                    ><span className="green">✔</span> Conversion metrics
                    maximized.</code
                  >
                </p>
                <p className="blinking-cursor"><code>_</code></p>
              </div>
            </div>
          </div>

          <div className="about-stats fade-in-right">
            <div className="stat-card glass-panel">
              <h3 className="stat-number text-gradient stat-count" data-target="100">0</h3>
              <p className="stat-label">Value Delivery</p>
            </div>
            <div className="stat-card glass-panel">
              <h3 className="stat-number text-gradient-alt stat-count" data-target="0">0</h3>
              <p className="stat-label">Bullshit Metrics</p>
            </div>
            <div className="stat-card glass-panel" style={{ gridColumn: 'span 2' }}>
              <h3 className="stat-number" style={{ color: 'var(--highlight)' }}>∞</h3>
              <p className="stat-label">Lines of Code Written</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
