export default function Results() {
  return (
    <section className="results section-padding dark-bg" id="results">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item fade-in-up">
            <h3 className="stat-count text-gradient" data-target="10">
              0
            </h3>
            <p className="stat-text">Websites Built</p>
          </div>
          <div className="stat-item fade-in-up animate-delay-1">
            <h3 className="stat-count text-gradient-alt" data-target="100">
              0
            </h3>
            <p className="stat-text">Client Satisfaction %</p>
          </div>
          <div className="stat-item fade-in-up animate-delay-2">
            <h3 className="stat-count text-green" data-target="5">
              0
            </h3>
            <p className="stat-text">Days Delivery (Avg)</p>
          </div>
          <div className="stat-item fade-in-up animate-delay-3">
            <h3 className="stat-count text-purple" data-target="100">
              0
            </h3>
            <p className="stat-text">Modern Designs %</p>
          </div>
        </div>

        <div className="section-padding pb-0 mt-5">
          <div
            className="section-header text-left fade-in-up"
            style={{
              borderBottom: "1px solid var(--border-glass)",
              paddingBottom: "1.5rem",
              marginBottom: "2rem",
            }}
          >
            <h2
              className="section-title"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                letterSpacing: "-2px",
                marginBottom: "0",
                color: "var(--text-main)",
              }}
            >
              Results.{" "}
              <span
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.25rem)",
                  color: "var(--text-muted)",
                  fontWeight: "400",
                  fontFamily: "var(--font-body)",
                  letterSpacing: "0",
                  display: "inline-block",
                  verticalAlign: "middle",
                  paddingLeft: "1rem",
                  borderLeft: "2px solid var(--border-glass)",
                  marginLeft: "1rem",
                }}
              >
                Websites optimized for real results.
              </span>
            </h2>
          </div>

          <div className="bento-grid fade-in-up">
            {/* Feature 1: Tall Architecture Stack (Row span 2) */}
            <div
              className="bento-card bento-tall glass-panel"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                background: "var(--bg-glass)",
                border: "1px solid var(--border-glass)",
                padding: "2rem",
                gap: "1.2rem",
                paddingBottom: "0",
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: "1.6rem",
                    color: "var(--text-main)",
                    marginBottom: "0.8rem",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  Proprietary Stack
                </h3>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                  }}
                >
                  Engineered on a **Serverless Edge Runtime** with globally
                  distributed **Redis caching** and native **CDN-level images**
                  to minimize TTFB (Time to First Byte) to sub-40ms globally.
                </p>
                <div
                  style={{
                    marginTop: "0.8rem",
                    display: "grid",
                    gap: "0.6rem",
                  }}
                >
                  <div
                    style={{
                      padding: "0.6rem 1rem",
                      background: "rgba(255,255,255,0.03)",
                      borderRadius: "8px",
                      fontSize: "0.8rem",
                      color: "var(--text-muted)",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <i
                      className="fa-solid fa-code-branch text-purple"
                      style={{ marginRight: "8px" }}
                    ></i>{" "}
                    Edge Runtime v2.4
                  </div>
                  <div
                    style={{
                      padding: "0.6rem 1rem",
                      background: "rgba(255,255,255,0.03)",
                      borderRadius: "8px",
                      fontSize: "0.8rem",
                      color: "var(--text-muted)",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <i
                      className="fa-solid fa-database text-cyan"
                      style={{ marginRight: "8px" }}
                    ></i>{" "}
                    Vercel KV / Redis
                  </div>
                  <div
                    style={{
                      padding: "0.6rem 1rem",
                      background: "rgba(255,255,255,0.03)",
                      borderRadius: "8px",
                      fontSize: "0.8rem",
                      color: "var(--text-muted)",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <i
                      className="fa-solid fa-cloud-arrow-up text-green"
                      style={{ marginRight: "8px" }}
                    ></i>{" "}
                    Global Edge CDNs
                  </div>
                </div>
              </div>
              <div
                className="server-stack"
                style={{
                  position: "relative",
                  height: "140px",
                  width: "100%",
                  perspective: "1000px",
                  transformStyle: "preserve-3d",
                  marginTop: "2.5rem",
                }}
              >
                <div
                  className="server-layer"
                  style={{
                    position: "absolute",
                    bottom: "30px",
                    left: "10%",
                    width: "80%",
                    height: "60px",
                    background: "rgba(124, 58, 237, 0.15)",
                    border: "2px solid var(--primary)",
                    borderRadius: "12px",
                    transform: "rotateX(60deg) rotateZ(-45deg) translateZ(0px)",
                    boxShadow: "0 15px 35px rgba(124,58,237,0.3)",
                  }}
                ></div>
                <div
                  className="server-layer"
                  style={{
                    position: "absolute",
                    bottom: "50px",
                    left: "10%",
                    width: "80%",
                    height: "60px",
                    background: "rgba(56, 189, 248, 0.15)",
                    border: "2px solid var(--highlight)",
                    borderRadius: "12px",
                    transform:
                      "rotateX(60deg) rotateZ(-45deg) translateZ(20px)",
                    boxShadow: "0 15px 35px rgba(56,189,248,0.3)",
                    backdropFilter: "blur(4px)",
                  }}
                ></div>
                <div
                  className="server-layer"
                  style={{
                    position: "absolute",
                    bottom: "70px",
                    left: "10%",
                    width: "80%",
                    height: "60px",
                    background: "rgba(34, 197, 94, 0.15)",
                    border: "2px solid #22c55e",
                    borderRadius: "12px",
                    transform:
                      "rotateX(60deg) rotateZ(-45deg) translateZ(40px)",
                    boxShadow: "0 15px 35px rgba(34,197,94,0.3)",
                    backdropFilter: "blur(4px)",
                  }}
                ></div>
              </div>
            </div>

            {/* Feature 2: Wide Conversion Grid (Col span 2) */}
            <div
              className="bento-card bento-wide glass-panel"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "2.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.8rem",
                  marginBottom: "1.5rem",
                  color: "var(--text-main)",
                  fontFamily: "var(--font-heading)",
                }}
              >
                Engineered purely for{" "}
                <span style={{ color: "#881337" }}>Maximum Conversion</span>
              </h3>
              <div
                className="mobile-grid-col-3"
                style={{
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "1.2rem",
                }}
              >
                <div
                  className="glass-panel"
                  style={{
                    padding: "1.8rem 1.4rem",
                    borderRadius: "16px",
                    background: "#110205",
                    border: "1px solid rgba(190,18,60,0.3)",
                    minHeight: "160px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "1.2rem",
                    }}
                  >
                    <i
                      className="fa-solid fa-magnifying-glass-chart"
                      style={{
                        fontSize: "1.6rem",
                        color: "#be123c",
                        filter: "drop-shadow(0 0 10px rgba(190,18,60,0.3))",
                      }}
                    ></i>
                    <span
                      style={{
                        fontSize: "0.65rem",
                        color: "#22d3ee",
                        fontWeight: "bold",
                        padding: "2px 8px",
                        background: "rgba(34,211,238,0.1)",
                        borderRadius: "4px",
                        border: "1px solid rgba(34,211,238,0.2)",
                      }}
                    >
                      +240% REACH
                    </span>
                  </div>
                  <h4
                    style={{
                      fontSize: "1.1rem",
                      color: "#ffffff",
                      marginBottom: "0.4rem",
                      fontWeight: "700",
                    }}
                  >
                    Algorithmic SEO
                  </h4>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "rgba(255,255,255,0.7)",
                      margin: "0",
                      lineHeight: "1.5",
                    }}
                  >
                    Dominate core Google search algorithms from day one.
                  </p>
                </div>
                <div
                  className="glass-panel"
                  style={{
                    padding: "1.8rem 1.4rem",
                    borderRadius: "16px",
                    background: "#110205",
                    border: "1px solid rgba(190,18,60,0.3)",
                    minHeight: "160px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "1.2rem",
                    }}
                  >
                    <i
                      className="fa-solid fa-brain"
                      style={{
                        fontSize: "1.6rem",
                        color: "#be123c",
                        filter: "drop-shadow(0 0 10px rgba(190,18,60,0.3))",
                      }}
                    ></i>
                    <span
                      style={{
                        fontSize: "0.65rem",
                        color: "#a855f7",
                        fontWeight: "bold",
                        padding: "2px 8px",
                        background: "rgba(168,85,247,0.1)",
                        borderRadius: "4px",
                        border: "1px solid rgba(168,85,247,0.2)",
                      }}
                    >
                      3.2x CTR
                    </span>
                  </div>
                  <h4
                    style={{
                      fontSize: "1.1rem",
                      color: "#ffffff",
                      marginBottom: "0.4rem",
                      fontWeight: "700",
                    }}
                  >
                    Neuromarketing
                  </h4>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "rgba(255,255,255,0.7)",
                      margin: "0",
                      lineHeight: "1.5",
                    }}
                  >
                    Psychological UI structured strictly to close sales
                    effortlessly.
                  </p>
                </div>
                <div
                  className="glass-panel"
                  style={{
                    padding: "1.8rem 1.4rem",
                    borderRadius: "16px",
                    background: "#110205",
                    border: "1px solid rgba(190,18,60,0.3)",
                    minHeight: "160px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "1.2rem",
                    }}
                  >
                    <i
                      className="fa-solid fa-bolt"
                      style={{
                        fontSize: "1.6rem",
                        color: "#be123c",
                        filter: "drop-shadow(0 0 10px rgba(190,18,60,0.3))",
                      }}
                    ></i>
                    <span
                      style={{
                        fontSize: "0.65rem",
                        color: "#fb7185",
                        fontWeight: "bold",
                        padding: "2px 8px",
                        background: "rgba(251,113,133,0.1)",
                        borderRadius: "4px",
                        border: "1px solid rgba(251,113,133,0.2)",
                      }}
                    >
                      REAL-TIME
                    </span>
                  </div>
                  <h4
                    style={{
                      fontSize: "1.1rem",
                      color: "#ffffff",
                      marginBottom: "0.4rem",
                      fontWeight: "700",
                    }}
                  >
                    Auto-Pipelines
                  </h4>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "rgba(255,255,255,0.7)",
                      margin: "0",
                      lineHeight: "1.5",
                    }}
                  >
                    Track every click, scroll, and WhatsApp launch natively.
                  </p>
                </div>
              </div>

              <div
                style={{
                  marginTop: "2.5rem",
                  paddingTop: "1.8rem",
                  borderTop: "1px dashed var(--border-glass)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#be123c",
                      animation: "pulse-glow 1.5s infinite",
                    }}
                  ></div>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Global Conversion Sync Active
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "1.8rem",
                    fontSize: "0.85rem",
                    fontWeight: "bold",
                    fontFamily: "var(--font-code)",
                    flexWrap: "wrap"
                  }}
                >
                  <span style={{ color: "var(--text-main)" }}>
                    AVG CR: <span style={{ color: "#be123c" }}>48.2%</span>
                  </span>
                  <span style={{ color: "var(--text-main)" }}>
                    BOUNCE: <span style={{ color: "#22c55e" }}>-32.4%</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Feature 3: Speed Gauge (Square) */}
            <div
              className="bento-card glass-panel"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "space-between",
                background: "var(--bg-glass)",
                border: "1px solid var(--border-glass)",
                padding: "2rem",
              }}
            >
              <h4
                style={{
                  fontSize: "1.3rem",
                  color: "var(--text-main)",
                  fontFamily: "var(--font-heading)",
                  marginBottom: "0.8rem",
                }}
              >
                Zero-Lag UI
              </h4>
              <div
                className="gauge-container"
                style={{
                  position: "relative",
                  width: "130px",
                  height: "65px",
                  margin: "1rem 0",
                }}
              >
                <svg
                  viewBox="0 0 100 50"
                  style={{
                    width: "100%",
                    height: "100%",
                    overflow: "visible",
                    filter: "drop-shadow(0 0 15px rgba(56,189,248,0.5))",
                  }}
                >
                  <path
                    d="M 10 50 A 40 40 0 0 1 90 50"
                    fill="none"
                    stroke="rgba(0,0,0,0.1)"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  <path
                    className="gauge-fill"
                    d="M 10 50 A 40 40 0 0 1 90 50"
                    fill="none"
                    stroke="var(--highlight)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="125"
                    strokeDashoffset="0"
                  />
                </svg>
                <div
                  style={{
                    position: "absolute",
                    bottom: "-8px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontFamily: "var(--font-code)",
                    fontSize: "1.8rem",
                    fontWeight: "bold",
                    color: "var(--highlight)",
                  }}
                >
                  99.9<span style={{ fontSize: "0.8rem" }}>%</span>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "0.8rem",
                  }}
                >
                  <span style={{ color: "var(--text-muted)" }}>Avg TTFB</span>{" "}
                  <span style={{ color: "var(--text-main)" }}>24ms</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "0.8rem",
                  }}
                >
                  <span style={{ color: "var(--text-muted)" }}>
                    LCP Metrics
                  </span>
                  <span style={{ color: "var(--text-main)" }}>0.8s</span>
                </div>
              </div>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-muted)",
                  margin: "0",
                  opacity: "0.8",
                }}
              >
                Perfect lighthouse scores across every page deployment.
              </p>
            </div>

            {/* Feature 4: Security Shield (Square) */}
            <div
              className="bento-card glass-panel"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                overflow: "hidden",
                position: "relative",
                background: "var(--bg-glass)",
                border: "1px solid var(--border-glass)",
              }}
            >
              <div
                className="shield-pulse"
                style={{
                  position: "absolute",
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(34,197,94,0.1) 0%, rgba(34,197,94,0) 70%)",
                  animation: "pulse-glow 3s infinite",
                }}
              ></div>
              <i
                className="fa-solid fa-shield-halved text-green"
                style={{
                  fontSize: "3.5rem",
                  marginBottom: "1.5rem",
                  zIndex: 1,
                  filter: "drop-shadow(0 0 20px rgba(34,197,94,0.5))",
                }}
              ></i>
              <h4
                style={{
                  fontSize: "1.3rem",
                  color: "var(--text-main)",
                  zIndex: 1,
                  marginBottom: "0.5rem",
                }}
              >
                Bank-Grade Security
              </h4>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--text-muted)",
                  margin: "0",
                  zIndex: 1,
                }}
              >
                SSL Encrypted, DDoS Mitigation & Automated Backups.
              </p>
            </div>

            {/* Feature 5: Omni-CMS Editor (Wide) */}
            <div
              className="bento-card bento-wide glass-panel mobile-col-swap"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                overflow: "hidden",
                background: "var(--bg-glass)",
                border: "1px solid var(--border-glass)",
                padding: "2.5rem",
              }}
            >
              <div className="cms-text" style={{ maxWidth: "50%", zIndex: 2 }}>
                <h3
                  style={{
                    fontSize: "1.6rem",
                    color: "var(--text-main)",
                    fontFamily: "var(--font-heading)",
                    marginBottom: "0.8rem",
                  }}
                >
                  Universal CMS Dashboard
                </h3>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.95rem",
                    margin: "0",
                    lineHeight: "1.7",
                  }}
                >
                  Update live content, swap high-res assets, and manage global
                  SEO from your smartphone. A custom **Zero-Wait Deployment**
                  pipeline ensures edits are live in seconds, not minutes.
                </p>
                <div
                  style={{
                    marginTop: "1.5rem",
                    display: "flex",
                    gap: "0.8rem",
                  }}
                >
                  <div
                    style={{
                      border: "1px solid var(--primary-glow)",
                      background: "rgba(136,19,55,0.05)",
                      padding: "0.4rem 0.8rem",
                      borderRadius: "6px",
                      fontSize: "0.75rem",
                      color: "var(--primary)",
                      fontWeight: "600",
                    }}
                  >
                    <i
                      className="fa-solid fa-circle-check"
                      style={{ marginRight: "5px" }}
                    ></i>{" "}
                    Realtime Sync
                  </div>
                  <div
                    style={{
                      border: "1px solid var(--secondary-glow)",
                      background: "rgba(190,18,60,0.05)",
                      padding: "0.4rem 0.8rem",
                      borderRadius: "6px",
                      fontSize: "0.75rem",
                      color: "var(--secondary)",
                      fontWeight: "600",
                    }}
                  >
                    <i
                      className="fa-solid fa-mobile-screen"
                      style={{ marginRight: "5px" }}
                    ></i>{" "}
                    Mobile Ready
                  </div>
                </div>
              </div>
              <div
                className="cms-graphic"
                style={{
                  position: "relative",
                  width: "45%",
                  height: "160px",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    right: "-15px",
                    top: "50%",
                    transform: "translateY(-50%) rotate(-5deg)",
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border-glass)",
                    borderRadius: "16px",
                    padding: "1.5rem",
                    width: "320px",
                    boxShadow: "0 25px 60px rgba(0,0,0,0.3)",
                    backdropFilter: "blur(15px)",
                  }}
                >
                  <div
                    style={{
                      height: "8px",
                      width: "40%",
                      background: "rgba(255,255,255,0.08)",
                      borderRadius: "4px",
                      marginBottom: "18px",
                    }}
                  ></div>
                  <div
                    style={{
                      height: "10px",
                      width: "85%",
                      background: "var(--highlight)",
                      borderRadius: "4px",
                      marginBottom: "20px",
                      boxShadow: "0 0 15px rgba(251,113,133,0.3)",
                    }}
                  ></div>
                  <div
                    style={{
                      height: "40px",
                      width: "100%",
                      background: "rgba(136,19,55,0.08)",
                      borderRadius: "8px",
                      border: "1px dashed var(--highlight)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--highlight)",
                        fontWeight: "600",
                      }}
                    >
                      Publishing Changes...
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
