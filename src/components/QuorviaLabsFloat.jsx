import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function QuorviaLabsFloat() {
  const [isHovered, setIsHovered] = useState(false); // desktop hover animation
  const [isOpen, setIsOpen] = useState(false);       // popup details visible
  const [isMobile, setIsMobile] = useState(false);
  const touchTimer = useRef(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 992);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ---------- Desktop handlers ---------- */
  const onMouseEnter = () => { if (!isMobile) setIsHovered(true); };
  const onMouseLeave = () => { if (!isMobile) { setIsHovered(false); setIsOpen(false); } };
  const onClick = () => { if (!isMobile) setIsOpen((v) => !v); };

  /* ---------- Mobile handlers ---------- */
  // Touch = immediately show hover effect AND open popup
  const onTouchStart = (e) => {
    if (!isMobile) return;
    e.preventDefault();
    setIsHovered(true);
    setIsOpen(true);
  };
  // Lifting finger closes after a short delay (so the popup stays readable)
  const onTouchEnd = () => {
    if (!isMobile) return;
    touchTimer.current = setTimeout(() => {
      setIsHovered(false);
      setIsOpen(false);
    }, 2500); // auto-close after 2.5s
  };
  // If user taps again before auto-close, reset the timer
  const cancelAutoClose = () => {
    if (touchTimer.current) clearTimeout(touchTimer.current);
  };

  return (
    <motion.div
      data-no-invert="true"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, type: "spring", bounce: 0.4 }}
      style={{
        position: "fixed",
        top: isMobile ? "auto" : "5.5rem",
        bottom: isMobile ? "1.8rem" : "auto",
        right: isMobile ? "1.2rem" : "1.8rem",
        zIndex: 3000,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "0.6rem",
      }}
    >
      {/* ── Icon Button ── */}
      <motion.button
        /* Desktop */
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        /* Mobile */
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onTouchMove={cancelAutoClose}

        /* Animation */
        animate={{
          scale: isHovered ? 1.12 : 1,
          rotate: isHovered ? 6 : 0,
        }}
        transition={{ type: "spring", stiffness: 320, damping: 18 }}

        aria-label="Quorvia Labs partnership"
        style={{
          position: "relative",
          height: isMobile ? "3rem" : "3.6rem",
          width: isMobile ? "3rem" : "3.6rem",
          backgroundColor: "white",
          border: isOpen
            ? "2px solid rgba(136, 19, 55, 0.5)"
            : "1.5px solid rgba(200,200,200,0.5)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          cursor: "pointer",
          padding: 0,
          outline: "none",
          boxShadow: isHovered
            ? "0 0 0 4px rgba(136,19,55,0.12), 0 20px 30px -5px rgba(0,0,0,0.25)"
            : "0 8px 20px -3px rgba(0,0,0,0.15)",
          transition: "box-shadow 0.3s ease, border 0.3s ease",
          userSelect: "none",
          WebkitTapHighlightColor: "transparent",
        }}
      >
        {/* Full logo visible inside the circle */}
        <img
          src="/quorvia-labs-logo.png"
          alt="Quorvia Labs"
          style={{
            width: "80%",
            height: "80%",
            objectFit: "contain",
            objectPosition: "center center",
            pointerEvents: "none",
            display: "block",
          }}
        />

        {/* Inner glow ring when hovered/open */}
        <AnimatePresence>
          {isHovered && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                boxShadow: "inset 0 0 20px rgba(136, 19, 55, 0.22)",
                pointerEvents: "none",
              }}
            />
          )}
        </AnimatePresence>
      </motion.button>

      {/* ── Popup Card (click on desktop / touch on mobile) ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 14 : -10, scale: 0.88 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: isMobile ? 14 : -10, scale: 0.88 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            style={{
              position: "absolute",
              top: isMobile ? "auto" : "4.4rem",
              bottom: isMobile ? "3.6rem" : "auto",
              right: 0,
              width: "220px",
              backgroundColor: "#18181b",
              color: "#fff",
              borderRadius: "1.2rem",
              borderTopRightRadius: isMobile ? "1.2rem" : "0.3rem",
              borderBottomRightRadius: isMobile ? "0.3rem" : "1.2rem",
              padding: "1rem 1.15rem",
              border: "1px solid #27272a",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.65)",
              pointerEvents: isMobile ? "none" : "all",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", marginBottom: "0.55rem" }}>
              <span style={{ fontSize: "1rem" }}>🤝</span>
              <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#a78bfa" }}>
                Strategic Partner
              </span>
            </div>
            <p style={{ fontSize: "0.78rem", lineHeight: "1.55", color: "#d4d4d8", margin: "0 0 0.85rem" }}>
              Nexora &amp; Quorvia Labs are a collaborative duo — united to deliver world-class digital experiences.
            </p>
            {!isMobile && (
              <a
                href="https://quorvia-labs.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "#a78bfa",
                  textDecoration: "none",
                  padding: "0.4rem 0.75rem",
                  border: "1px solid rgba(167,139,250,0.3)",
                  borderRadius: "6px",
                  background: "rgba(167,139,250,0.08)",
                }}
              >
                Visit Quorvia Labs →
              </a>
            )}
            {isMobile && (
              <div style={{ textAlign: "center", fontSize: "0.7rem", color: "#71717a" }}>
                tap the Q icon to visit →
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
