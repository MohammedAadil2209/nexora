export default function VisitingCard() {
  return (
    <section
      className="visiting-card-section section-padding dark-bg"
      id="visiting-card"
    >
      <div className="container">
        <div className="section-header text-center fade-in-up">
          <div className="section-tag mx-auto">
            <code>&lt;identity /&gt;</code>
          </div>
          <h2 className="section-title">
            Scan & <span className="text-gradient">Connect</span>
          </h2>
          <p className="section-subtitle">
            Our professional digital imprint. Interactive & Premium.
          </p>
        </div>

        <div className="cards-interactive-grid fade-in-up">
          <div className="card-3d-container">
            <div className="business-card-3d" id="businessCard1">
              <div className="card-glare"></div>
              <div className="card-face card-front">
                <div
                  className="card-header-row"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div className="card-logo">
                    <span style={{ color: "var(--primary)" }}>&lt;</span>Nexora
                    <span style={{ color: "var(--primary)" }}>/&gt;</span>
                  </div>
                  <div className="card-chip"></div>
                </div>
                <div
                  className="card-footer-row"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                  }}
                >
                  <div className="card-holder">
                    <div className="card-name">MOHAMMED AADIL</div>
                    <div className="card-title">Founder & Lead Developer</div>
                  </div>
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "#fff",
                      padding: "4px",
                      borderRadius: "6px",
                      boxShadow: "0 0 15px rgba(255,255,255,0.1)",
                    }}
                  >
                    <a href="https://mohammedaadil-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <img
                        src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://mohammedaadil-portfolio.vercel.app/"
                        alt="QR Code"
                        style={{ width: "100%", height: "100%", cursor: "pointer" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-face card-back">
                <div className="card-qr-container">
                  <div
                    className="card-qr"
                    style={{ width: "150px", height: "150px" }}
                  >
                    <a href="https://mohammedaadil-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <img
                        src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://mohammedaadil-portfolio.vercel.app/"
                        alt="QR Code"
                        style={{ cursor: "pointer" }}
                      />
                    </a>
                  </div>
                  <div className="qr-label">SCAN TO OPEN PORTFOLIO</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-3d-container">
            <div className="business-card-3d" id="businessCard2">
              <div className="card-glare"></div>
              <div className="card-face card-front">
                <div
                  className="card-header-row"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div className="card-logo">
                    <span style={{ color: "var(--primary)" }}>&lt;</span>
                    Nexora
                    <span style={{ color: "var(--primary)" }}>/&gt;</span>
                  </div>
                  <div className="card-chip"></div>
                </div>
                <div
                  className="card-footer-row"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                  }}
                >
                  <div className="card-holder">
                    <div className="card-name">HARSITH CHANDRASEKARAN</div>
                    <div className="card-title">
                      Cofounder & Lead Consultant
                    </div>
                  </div>
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "#fff",
                      padding: "4px",
                      borderRadius: "6px",
                      boxShadow: "0 0 15px rgba(255,255,255,0.1)",
                    }}
                  >
                    <a href="https://harsithchandrasekaran.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <img
                        src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://harsithchandrasekaran.vercel.app/"
                        alt="QR Code"
                        style={{ width: "100%", height: "100%", cursor: "pointer" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-face card-back">
                <div className="card-qr-container">
                  <div
                    className="card-qr"
                    style={{ width: "150px", height: "150px" }}
                  >
                    <a href="https://harsithchandrasekaran.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <img
                        src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://harsithchandrasekaran.vercel.app/"
                        alt="QR Code"
                        style={{ cursor: "pointer" }}
                      />
                    </a>
                  </div>
                  <div className="qr-label">SCAN TO OPEN PORTFOLIO</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5 fade-in-up">
          <p
            className="text-muted mb-4"
            style={{ fontSize: "0.9rem", fontFamily: "var(--font-code)" }}
          >
            [ ! ] Hold and drag to rotate the cards
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => window.flipCard()}
            >
              Flip All Cards <i className="fa-solid fa-rotate"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
