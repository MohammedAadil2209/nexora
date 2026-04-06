import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    const duration = 2600; // total load time in ms
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      // Ease-out curve: fast at start, slows near 100
      const raw = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - raw, 3); // cubic ease-out
      const p = Math.floor(eased * 100);
      setProgress(p);

      if (raw < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setProgress(100);
        setTimeout(() => {
          setDone(true);
          setTimeout(onComplete, 800);
        }, 300);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "#050101",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* Subtle radial gradient behind logo */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(136,19,55,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          {/* Animated ring behind logo */}
          <motion.div
            animate={{ scale: [1, 1.18, 1], opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              width: "260px",
              height: "260px",
              borderRadius: "50%",
              border: "1px solid rgba(190,18,60,0.4)",
              pointerEvents: "none",
            }}
          />
          <motion.div
            animate={{ scale: [1, 1.35, 1], opacity: [0.08, 0.2, 0.08] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            style={{
              position: "absolute",
              width: "380px",
              height: "380px",
              borderRadius: "50%",
              border: "1px solid rgba(190,18,60,0.2)",
              pointerEvents: "none",
            }}
          />

          {/* Center content */}
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "3.5rem",
          }}>

            {/* Logo with glow pulse */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 180, damping: 18, delay: 0.1 }}
              style={{ position: "relative" }}
            >
              {/* Glow behind logo */}
              <motion.div
                animate={{ opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  inset: "-20px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(190,18,60,0.35) 0%, transparent 70%)",
                  filter: "blur(12px)",
                  pointerEvents: "none",
                }}
              />
              <img
                src="/logo.png"
                alt="Nexora"
                style={{
                  height: "100px",
                  objectFit: "contain",
                  position: "relative",
                  zIndex: 1,
                  filter: "drop-shadow(0 0 20px rgba(190,18,60,0.6))",
                }}
              />
            </motion.div>

            {/* Progress section */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1.2rem",
                width: "260px",
              }}
            >
              {/* Percentage counter */}
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(3.5rem, 8vw, 5rem)",
                fontWeight: "800",
                color: "#fff",
                lineHeight: 1,
                letterSpacing: "-3px",
                display: "flex",
                alignItems: "flex-end",
                gap: "4px",
              }}>
                <motion.span
                  animate={{ color: progress === 100 ? "#be123c" : "#ffffff" }}
                  transition={{ duration: 0.4 }}
                >
                  {progress}
                </motion.span>
                <span style={{ fontSize: "40%", color: "#be123c", marginBottom: "8px", letterSpacing: 0 }}>%</span>
              </div>

              {/* Progress track */}
              <div style={{
                width: "100%",
                height: "2px",
                background: "rgba(255,255,255,0.07)",
                borderRadius: "999px",
                overflow: "hidden",
                position: "relative",
              }}>
                <motion.div
                  style={{
                    height: "100%",
                    width: `${progress}%`,
                    borderRadius: "999px",
                    background: "linear-gradient(90deg, #881337, #be123c, #fb7185)",
                    boxShadow: "0 0 12px rgba(190,18,60,0.8)",
                  }}
                  transition={{ ease: "linear" }}
                />
                {/* Moving light shimmer on bar */}
                <motion.div
                  animate={{ x: ["-100%", "400%"] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "30%",
                    height: "100%",
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
                  }}
                />
              </div>

              {/* Status text */}
              <motion.p
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.72rem",
                  color: "rgba(255,255,255,0.3)",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                {progress < 40 ? "Initializing" : progress < 80 ? "Compiling" : progress < 100 ? "Finalizing" : "Ready"}
              </motion.p>
            </motion.div>
          </div>

          {/* Bottom brand text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ delay: 0.6 }}
            style={{
              position: "absolute",
              bottom: "2rem",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.68rem",
              color: "#fff",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
          >
            Nexora Dev Studio
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
