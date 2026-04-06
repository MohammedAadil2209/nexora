import { useEffect, useState } from "react";
import "./index.css";

// Internal Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Results from "./components/Results";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import StrongCTA from "./components/StrongCTA";
import Contact from "./components/Contact";
import VisitingCard from "./components/VisitingCard";
import Footer from "./components/Footer";
import QuorviaLabsFloat from "./components/QuorviaLabsFloat";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(() => {
    // Only show loading once per browser session
    return !sessionStorage.getItem('nexora-loaded');
  });
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('nexora-theme') || 'dark';
  });

  const handleLoadComplete = () => {
    sessionStorage.setItem('nexora-loaded', '1');
    setIsLoading(false);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('nexora-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };
  useEffect(() => {
    // 1. Custom Cursor
    const cursor = document.querySelector(".cursor-glow");
    if (window.matchMedia("(pointer: fine)").matches) {
      const moveCursor = (e) => {
        requestAnimationFrame(() => {
          if (cursor) {
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";
          }
        });
      };
      document.addEventListener("mousemove", moveCursor);

      const clickables = document.querySelectorAll(
        "a, button, input, textarea, .project-card, .service-card",
      );
      clickables.forEach((el) => {
        el.addEventListener("mouseenter", () =>
          document.body.classList.add("cursor-hover"),
        );
        el.addEventListener("mouseleave", () =>
          document.body.classList.remove("cursor-hover"),
        );
      });
      return () => document.removeEventListener("mousemove", moveCursor);
    }
  }, []);

  useEffect(() => {
    if (typeof particlesJS !== "undefined") {
      const pConfig = {
        particles: {
          number: { value: 30, density: { enable: true, value_area: 800 } },
          color: { value: theme === 'dark' ? ["#881337", "#be123c"] : ["#881337", "#be123c"] },
          shape: { type: "circle" },
          opacity: {
            value: theme === 'dark' ? 0.3 : 0.4,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: theme === 'dark' ? "#e5e5e5" : "#881337",
            opacity: theme === 'dark' ? 0.1 : 0.18,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 140, line_linked: { opacity: 0.5 } },
            push: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      };
      particlesJS("particles-js", pConfig);
    }
  }, [theme]);

  useEffect(() => {
    // 2. Scroll Progress & Navbar
    const progressBar = document.querySelector(".scroll-progress-bar");
    const navbar = document.getElementById("navbar");

    const handleScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      if (progressBar) progressBar.style.width = scrolled + "%";

      if (winScroll > 50) {
        navbar?.classList.add("scrolled");
      } else {
        navbar?.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    // 5. GSAP Animations
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      const buttons = document.querySelectorAll(
        ".btn, .bento-card, .project-card",
      );
      buttons.forEach((el) => {
        el.addEventListener("mousemove", (e) => {
          const isBtn = el.classList.contains("btn");
          const rect = el.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          if (isBtn) {
            gsap.to(el, {
              x: x * 0.4,
              y: y * 0.4,
              duration: 0.6,
              ease: "power3.out",
            });
          } else {
            gsap.to(el, {
              rotationY: x * 0.03,
              rotationX: -y * 0.03,
              transformPerspective: 1000,
              ease: "power2.out",
              duration: 0.5,
            });
          }
        });
        el.addEventListener("mouseleave", () => {
          gsap.to(el, {
            x: 0,
            y: 0,
            rotationY: 0,
            rotationX: 0,
            duration: 1.2,
            ease: "elastic.out(1, 0.3)",
          });
        });
      });

      const fadeElements = gsap.utils
        .toArray(".fade-in-up, .fade-in-left, .fade-in-right, .fade-in-scale")
        .filter((el) => !el.closest(".hero"));
      fadeElements.forEach((element) => {
        gsap.set(element, { autoAlpha: 0, y: 60, scale: 0.95 });
        ScrollTrigger.create({
          trigger: element,
          start: "top 90%",
          onEnter: () =>
            gsap.to(element, {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 1,
              ease: "power3.out",
              overwrite: "auto",
            }),
        });
      });

      const serverLayers = gsap.utils.toArray(".server-layer");
      serverLayers.forEach((layer, i) => {
        gsap.to(layer, {
          z: 40 * (i + 1),
          scrollTrigger: {
            trigger: ".bento-grid",
            start: "top bottom",
            end: "bottom top",
            scrub: 1 + i * 0.5,
          },
        });
      });

      ScrollTrigger.create({
        trigger: ".gauge-container",
        start: "top 80%",
        onEnter: () =>
          gsap.fromTo(
            ".gauge-fill",
            { strokeDashoffset: 125 },
            { strokeDashoffset: 0, duration: 2.5, ease: "expo.out" },
          ),
      });
    }


    const counters = document.querySelectorAll(".stat-count");
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            const endValue = parseInt(target.getAttribute("data-target"));
            const suffix =
              endValue === 10 || endValue === 20
                ? "+"
                : endValue === 100
                  ? "%"
                  : "";
            let startTime = null;
            const animate = (currentTime) => {
              if (!startTime) startTime = currentTime;
              const progress = Math.min((currentTime - startTime) / 2000, 1);
              target.textContent = Math.floor(progress * endValue) + suffix;
              if (progress < 1) requestAnimationFrame(animate);
              else target.textContent = endValue + suffix;
            };
            requestAnimationFrame(animate);
            counterObserver.unobserve(target);
          }
        });
      },
      { threshold: 0.5 },
    );
    counters.forEach((c) => counterObserver.observe(c));

    // Cards Logic
    const cards = document.querySelectorAll(".business-card-3d");
    cards.forEach((card) => {
      let cardFlipped = false;
      let cardDragging = false;
      let sX, sY;
      let rX = 0,
        rY = 0;

      const onStart = (e) => {
        cardDragging = true;
        sX = e.pageX || (e.touches ? e.touches[0].pageX : 0);
        sY = e.pageY || (e.touches ? e.touches[0].pageY : 0);
        card.style.cursor = "grabbing";
      };
      const onMove = (e) => {
        if (!cardDragging) return;
        const x = e.pageX || (e.touches ? e.touches[0].pageX : 0);
        const y = e.pageY || (e.touches ? e.touches[0].pageY : 0);
        rY += (x - sX) * 0.5;
        rX -= (y - sY) * 0.5;
        gsap.set(card, {
          rotationY: rY,
          rotationX: gsap.utils.clamp(-60, 60, rX),
        });
        sX = x;
        sY = y;
      };
      const onStop = () => {
        cardDragging = false;
        card.style.cursor = "grab";
      };

      card.addEventListener("mousedown", onStart);
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseup", onStop);
      card.addEventListener("touchstart", onStart);
      window.addEventListener(
        "touchmove",
        (e) => {
          if (cardDragging) e.preventDefault();
          onMove(e);
        },
        { passive: false },
      );
      window.addEventListener("touchend", onStop);

      // Hover Effect
      card.addEventListener("mouseenter", () => {
        if (!cardDragging) {
          gsap.to(card, {
            scale: 1.05,
            y: -10,
            duration: 0.4,
            ease: "power2.out",
          });
        }
      });
      card.addEventListener("mouseleave", () => {
        if (!cardDragging) {
          gsap.to(card, { scale: 1, y: 0, duration: 0.4, ease: "power2.out" });
        }
      });

      card.flip = () => {
        cardFlipped = !cardFlipped;
        rY = cardFlipped ? 180 : 0;
        rX = 0;
        gsap.to(card, {
          rotationY: rY,
          rotationX: 0,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "back.out(1.2)",
        });
      };
    });

    window.flipCard = () =>
      document.querySelectorAll(".business-card-3d").forEach((c) => c.flip?.());

    // FAQ
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question");
      question.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        faqItems.forEach((faq) => {
          faq.classList.remove("active");
          faq.querySelector(".faq-answer").style.maxHeight = null;
        });
        if (!isActive) {
          item.classList.add("active");
          const answer = item.querySelector(".faq-answer");
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    });
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const btn = e.target.querySelector("button");
    const originalText = btn.innerHTML;
    btn.innerHTML = 'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';
    btn.disabled = true;

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const text = `Hi Nexora!\nI want to send a project inquiry and book a consultation.\n\n*Name:* ${data.name}\n*Email:* ${data.email}\n*Phone/WhatsApp:* ${data.phone}\n*Project Type:* ${data.type}\n*Message:* ${data.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/919976939641?text=${encodedText}`;

    fetch("https://formsubmit.co/ajax/nexora.devstudio@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ _subject: "🔥 New Website Lead!", ...data }),
    }).catch((error) => console.log(error));

    setTimeout(() => {
      btn.innerHTML = 'Request Sent! <i class="fa-solid fa-check"></i>';
      window.open(whatsappUrl, "_blank");
      e.target.reset();

      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
      }, 3000);
    }, 800);
  };

  return (
    <div className="app-root">
      {isLoading && <LoadingScreen onComplete={handleLoadComplete} />}

      <div className="cursor-glow"></div>
      <div className="scroll-progress-bar"></div>

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <QuorviaLabsFloat />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Results />
      <Pricing />
      <Testimonials />
      <FAQ />
      <StrongCTA />
      <Contact handleFormSubmit={handleFormSubmit} />
      <VisitingCard />
      <Footer />
    </div>
  );
}

export default App;
