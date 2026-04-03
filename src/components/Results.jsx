export default function Results() {
  return (
    <section className="results section-padding dark-bg" id="results">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item fade-in-up">
            <h3 className="stat-count text-gradient" data-target="10">0</h3>
            <p className="stat-text">Websites Built</p>
          </div>
          <div className="stat-item fade-in-up animate-delay-1">
            <h3 className="stat-count text-gradient-alt" data-target="100">0</h3>
            <p className="stat-text">Client Satisfaction %</p>
          </div>
          <div className="stat-item fade-in-up animate-delay-2">
            <h3 className="stat-count text-green" data-target="5">0</h3>
            <p className="stat-text">Days Delivery (Avg)</p>
          </div>
          <div className="stat-item fade-in-up animate-delay-3">
            <h3 className="stat-count text-purple" data-target="100">0</h3>
            <p className="stat-text">Modern Designs %</p>
          </div>
        </div>
        
        <div className="container section-padding pb-0 mt-5">
          <div className="section-header text-left fade-in-up" style={{ borderBottom: '1px solid var(--border-glass)', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
             <h2 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-2px', marginBottom: '0' }}>Results. <span style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--text-muted)', fontWeight: '400', fontFamily: 'var(--font-body)', letterSpacing: '0', display: 'inline-block', verticalAlign: 'middle', paddingLeft: '1rem', borderLeft: '2px solid var(--border-glass)', marginLeft: '1rem' }}>Websites optimized for real results.</span></h2>
          </div>

          <div className="bento-grid fade-in-up">
             
             {/* Feature 1: Tall Architecture Stack (Row span 2) */}
             <div className="bento-card bento-tall" style={{ justifyContent: 'space-between', background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.5) 0%, rgba(124, 58, 237, 0.05) 100%)', paddingBottom: '0' }}>
                <div>
                   <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>Proprietary Stack</h3>
                   <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>Deployed natively on global CDNs utilizing aggressive edge caching logic for near-instantaneous global deployment loading.</p>
                </div>
                <div className="server-stack" style={{ position: 'relative', height: '180px', width: '100%', perspective: '1000px', transformStyle: 'preserve-3d', marginTop: '1rem' }}>
                   <div className="server-layer" style={{ position: 'absolute', bottom: '30px', left: '10%', width: '80%', height: '60px', background: 'rgba(124, 58, 237, 0.15)', border: '2px solid var(--primary)', borderRadius: '12px', transform: 'rotateX(60deg) rotateZ(-45deg) translateZ(0px)', boxShadow: '0 15px 35px rgba(124,58,237,0.3)' }}></div>
                   <div className="server-layer" style={{ position: 'absolute', bottom: '50px', left: '10%', width: '80%', height: '60px', background: 'rgba(56, 189, 248, 0.15)', border: '2px solid var(--highlight)', borderRadius: '12px', transform: 'rotateX(60deg) rotateZ(-45deg) translateZ(20px)', boxShadow: '0 15px 35px rgba(56,189,248,0.3)', backdropFilter: 'blur(4px)' }}></div>
                   <div className="server-layer" style={{ position: 'absolute', bottom: '70px', left: '10%', width: '80%', height: '60px', background: 'rgba(34, 197, 94, 0.15)', border: '2px solid #22c55e', borderRadius: '12px', transform: 'rotateX(60deg) rotateZ(-45deg) translateZ(40px)', boxShadow: '0 15px 35px rgba(34,197,94,0.3)', backdropFilter: 'blur(4px)' }}></div>
                </div>
             </div>

             {/* Feature 2: Wide Conversion Grid (Col span 2) */}
             <div className="bento-card bento-wide" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#fff', fontFamily: 'var(--font-heading)' }}>Engineered purely for <span className="text-gradient">Maximum Conversion</span></h3>
                <div className="mobile-grid-col-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                   <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem 1.2rem', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
                      <i className="fa-solid fa-magnifying-glass-chart text-cyan mb-3" style={{ fontSize: '1.5rem', filter: 'drop-shadow(0 0 10px rgba(56,189,248,0.4))' }}></i>
                      <h4 style={{ fontSize: '1.05rem', color: '#e2e8f0', marginBottom: '0.4rem' }}>Algorithmic SEO</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0' }}>Dominate core Google search algorithms from day one.</p>
                   </div>
                   <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem 1.2rem', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
                      <i className="fa-solid fa-brain text-purple mb-3" style={{ fontSize: '1.5rem', filter: 'drop-shadow(0 0 10px rgba(124,58,237,0.4))' }}></i>
                      <h4 style={{ fontSize: '1.05rem', color: '#e2e8f0', marginBottom: '0.4rem' }}>Neuromarketing</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0' }}>Psychological UI structured strictly to close sales effortlessly.</p>
                   </div>
                   <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem 1.2rem', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
                      <i className="fa-solid fa-bolt text-green mb-3" style={{ fontSize: '1.5rem', filter: 'drop-shadow(0 0 10px rgba(34,197,94,0.4))' }}></i>
                      <h4 style={{ fontSize: '1.05rem', color: '#e2e8f0', marginBottom: '0.4rem' }}>Auto-Pipelines</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0' }}>Track every click, scroll, and WhatsApp launch natively.</p>
                   </div>
                </div>
             </div>

             {/* Feature 3: Speed Gauge (Square) */}
             <div className="bento-card" style={{ alignItems: 'center', textAlign: 'center', justifyContent: 'space-between' }}>
                <h4 style={{ fontSize: '1.3rem', color: '#fff', fontFamily: 'var(--font-heading)', marginBottom: '0' }}>Zero-Lag Architecture</h4>
                <div className="gauge-container" style={{ position: 'relative', width: '140px', height: '75px', margin: '1.5rem 0' }}>
                  <svg viewBox="0 0 100 50" style={{ width: '100%', height: '100%', overflow: 'visible', filter: 'drop-shadow(0 0 15px rgba(56,189,248,0.5))' }}>
                     <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" strokeLinecap="round"/>
                     <path className="gauge-fill" d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="var(--highlight)" strokeWidth="8" strokeLinecap="round" strokeDasharray="125" strokeDashoffset="0"/>
                  </svg>
                  <div style={{ position: 'absolute', bottom: '-10px', left: '50%', transform: 'translateX(-50%)', fontFamily: 'var(--font-code)', fontSize: '2rem', fontWeight: 'bold', color: 'var(--highlight)' }}>99.9<span style={{ fontSize: '1rem' }}>%</span></div>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0' }}>Instant server response times bridging zero drop-offs.</p>
             </div>

             {/* Feature 4: Security Shield (Square) */}
             <div className="bento-card" style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden', position: 'relative' }}>
                <div className="shield-pulse" style={{ position: 'absolute', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(34,197,94,0.2) 0%, rgba(34,197,94,0) 70%)', animation: 'pulse-glow 3s infinite' }}></div>
                <i className="fa-solid fa-shield-halved text-green" style={{ fontSize: '3.5rem', marginBottom: '1.5rem', zIndex: 1, filter: 'drop-shadow(0 0 20px rgba(34,197,94,0.5))' }}></i>
                <h4 style={{ fontSize: '1.3rem', color: '#fff', zIndex: 1, marginBottom: '0.5rem' }}>Bank-Grade Security</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0', zIndex: 1 }}>SSL Encrypted, DDoS Mitigation & Automated Backups.</p>
             </div>
             
             {/* Feature 5: Omni-CMS Editor (Wide) */}
             <div className="bento-card bento-wide mobile-col-swap" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', overflow: 'hidden', background: 'linear-gradient(90deg, rgba(15, 23, 42, 0.5) 0%, rgba(56, 189, 248, 0.05) 100%)' }}>
                <div className="cms-text" style={{ maxWidth: '55%', zIndex: 2 }}>
                   <h3 style={{ fontSize: '1.5rem', color: '#fff', fontFamily: 'var(--font-heading)', marginBottom: '0.8rem' }}>Universal CMS Dashboard</h3>
                   <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: '0' }}>Edit your entire website effortlessly from any smartphone or laptop globally. No coding or IDEs required—just point, edit, and publish live safely.</p>
                </div>
                <div className="cms-graphic" style={{ position: 'relative', width: '40%', height: '160px', zIndex: 1 }}>
                   <div style={{ position: 'absolute', right: '-30px', top: '50%', transform: 'translateY(-50%) rotate(-8deg)', background: 'rgba(9, 9, 11, 0.85)', border: '1px solid var(--border-glass)', borderRadius: '12px', padding: '1.5rem', width: '280px', boxShadow: '0 20px 40px rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)' }}>
                      <div style={{ height: '6px', width: '30%', background: 'rgba(255,255,255,0.2)', borderRadius: '4px', marginBottom: '15px' }}></div>
                      <div style={{ height: '8px', width: '70%', background: 'var(--highlight)', borderRadius: '4px', marginBottom: '15px', boxShadow: '0 0 10px rgba(56,189,248,0.4)' }}></div>
                      <div style={{ height: '35px', width: '100%', background: 'rgba(56,189,248,0.1)', borderRadius: '6px', border: '1px dashed var(--highlight)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="fa-solid fa-pen-to-square text-cyan" style={{ fontSize: '0.8rem' }}></i></div>
                   </div>
                </div>
             </div>

          </div>
        </div>
      </div>
    </section>
  );
}
