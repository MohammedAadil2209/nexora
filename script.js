document.addEventListener("DOMContentLoaded", () => {
  // 1. Custom Cursor
  const cursor = document.querySelector(".cursor-glow");

  // Only apply custom cursor on non-touch devices
  if (window.matchMedia("(pointer: fine)").matches) {
    document.addEventListener("mousemove", (e) => {
      requestAnimationFrame(() => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      });
    });

    // Add hover effect to clickable elements
    const clickables = document.querySelectorAll(
      "a, button, input, textarea, .project-card, .service-card",
    );
    clickables.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        document.body.classList.add("cursor-hover");
      });
      el.addEventListener("mouseleave", () => {
        document.body.classList.remove("cursor-hover");
      });
    });
  }

  // 2. Scroll Progress Bar
  const progressBar = document.querySelector(".scroll-progress-bar");

  window.addEventListener("scroll", () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + "%";

    // 3. Navbar scroll effect
    const navbar = document.getElementById("navbar");
    if (winScroll > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // 4. Mobile Menu
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-link");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });
  }

  links.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

  // 5. Animation Engine (GSAP + ScrollTrigger — Native Scroll, no Lenis)
  if (
    typeof gsap !== "undefined" &&
    typeof ScrollTrigger !== "undefined"
  ) {
    gsap.registerPlugin(ScrollTrigger);

    // --- Magnetic Buttons --- //
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
          gsap.to(el, { x: x * 0.4, y: y * 0.4, duration: 0.6, ease: "power3.out" });
        } else {
          gsap.to(el, { rotationY: x * 0.03, rotationX: -y * 0.03, transformPerspective: 1000, ease: "power2.out", duration: 0.5 });
        }
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(el, { x: 0, y: 0, rotationY: 0, rotationX: 0, duration: 1.2, ease: "elastic.out(1, 0.3)" });
      });
    });

    // --- Scroll Fade Animations (exclude hero elements) --- //
    const fadeElements = gsap.utils.toArray(
      ".fade-in-up, .fade-in-left, .fade-in-right, .fade-in-scale",
    ).filter(el => !el.closest('.hero'));

    fadeElements.forEach((element) => {
      gsap.set(element, { autoAlpha: 0, y: 60, scale: 0.95 });

      ScrollTrigger.create({
        trigger: element,
        start: "top 90%",
        onEnter: () =>
          gsap.to(element, {
            autoAlpha: 1, y: 0, scale: 1,
            duration: 1, ease: "power3.out", overwrite: "auto",
          }),
      });
    });

    // Hero uses pure CSS animations — no GSAP conflicts possible

    // --- Interactive Parallax Bento Triggers --- //
    const serverLayers = gsap.utils.toArray(".server-layer");
    if (serverLayers.length > 0) {
      gsap.to(serverLayers[0], {
        z: 40,
        scrollTrigger: {
          trigger: ".bento-grid",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
      gsap.to(serverLayers[1], {
        z: 80,
        scrollTrigger: {
          trigger: ".bento-grid",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
      gsap.to(serverLayers[2], {
        z: 120,
        scrollTrigger: {
          trigger: ".bento-grid",
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });
    }

    gsap.from(".mobile-grid-col-3 > div", {
      scrollTrigger: { trigger: ".mobile-grid-col-3", start: "top 85%" },
      y: 50,
      rotationY: -10,
      autoAlpha: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "back.out(1.2)",
    });

    ScrollTrigger.create({
      trigger: ".gauge-container",
      start: "top 80%",
      onEnter: () => {
        gsap.fromTo(
          ".gauge-fill",
          { strokeDashoffset: 125 },
          { strokeDashoffset: 0, duration: 2.5, ease: "expo.out" },
        );
      },
    });
  } else {
    // Fallback native
    const observerOptions = { root: null, rootMargin: "0px", threshold: 0.15 };
    const scrollObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    const animatedElements = document.querySelectorAll(
      ".fade-in-up, .fade-in-left, .fade-in-right",
    );
    animatedElements.forEach((el) => {
      scrollObserver.observe(el);
    });
  }

  // 6. Particles.js Initialization (Optional Hero Effect)
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 40,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: ["#7C3AED", "#06B6D4"],
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.3,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#e5e5e5",
          opacity: 0.1,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
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
          onhover: {
            enable: true,
            mode: "grab",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 0.5,
            },
          },
          push: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });
  }

  // 7. Form Handling
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector("button");
      const originalText = btn.innerHTML;

      btn.innerHTML = 'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';
      btn.disabled = true;

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const type = document.getElementById("type").value;
      const msg = document.getElementById("project").value;

      const text = `Hi Nexora!\nI want to send a project inquiry and book a consultation.\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone/WhatsApp:* ${phone}\n*Project Type:* ${type}\n*Message:* ${msg}`;
      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/919976939641?text=${encodedText}`;

      // Invisible background email sending
      fetch("https://formsubmit.co/ajax/nexora.devstudio@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "🔥 New Website Lead!",
          Name: name,
          Email: email,
          Phone: phone,
          ProjectType: type,
          Message: msg,
        }),
      }).catch((error) => console.log(error));

      // Simulate form submission visual feedback
      setTimeout(() => {
        btn.innerHTML = 'Request Sent! <i class="fa-solid fa-check"></i>';
        btn.classList.replace("btn-primary", "btn-secondary");
        btn.style.borderColor = "var(--highlight)";
        btn.style.color = "var(--highlight)";

        // Redirect exactly to the user specification
        window.open(whatsappUrl, "_blank");
        contactForm.reset();

        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.disabled = false;
          btn.classList.replace("btn-secondary", "btn-primary");
          btn.removeAttribute("style");
        }, 3000);
      }, 800);
    });
  }

  // 8. Animated Counters
  const counters = document.querySelectorAll(".stat-count");
  const counterObserverOptions = {
    threshold: 0.5,
  };

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const endValue = parseInt(target.getAttribute("data-target"));
        const duration = 2000;

        let suffix = "";
        if (endValue === 10) suffix = "+";
        if (endValue === 20) suffix = "+";
        if (endValue === 100) suffix = "%";

        let startValue = 0;
        let startTime = null;

        const animate = (currentTime) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);

          const currentValue = Math.floor(progress * endValue);
          target.textContent = currentValue + suffix;

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            target.textContent = endValue + suffix;
          }
        };

        requestAnimationFrame(animate);
        observer.unobserve(target);
      }
    });
  }, counterObserverOptions);

  counters.forEach((counter) => {
    counterObserver.observe(counter);
  });

  // 9. FAQ Accordion
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all items
      faqItems.forEach((faq) => {
        faq.classList.remove("active");
        faq.querySelector(".faq-answer").style.maxHeight = null;
      });

      // Open clicked if it wasn't active
      if (!isActive) {
        item.classList.add("active");
        const answer = item.querySelector(".faq-answer");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

  // 10. Digital Visiting Card Interaction
  const card = document.getElementById('businessCard');
  if (card && typeof gsap !== 'undefined') {
    const glare = card.querySelector('.card-glare');
    let isFlipped = false;
    let isDragging = false;
    let startX, startY;
    let currentRotationX = 0;
    let currentRotationY = 0;

    const startDragging = (e) => {
        isDragging = true;
        startX = (e.pageX || e.touches[0].pageX);
        startY = (e.pageY || e.touches[0].pageY);
        card.style.cursor = 'grabbing';
    };

    const handleDragging = (e) => {
        if (!isDragging) return;
        const x = (e.pageX || (e.touches ? e.touches[0].pageX : 0));
        const y = (e.pageY || (e.touches ? e.touches[0].pageY : 0));
        const deltaX = (x - startX) * 0.5;
        const deltaY = (y - startY) * 0.5;
        currentRotationY += deltaX;
        currentRotationX -= deltaY;
        gsap.set(card, {
            rotationY: currentRotationY,
            rotationX: gsap.utils.clamp(-60, 60, currentRotationX)
        });
        startX = x;
        startY = y;
    };

    const stopDragging = () => {
        isDragging = false;
        card.style.cursor = 'grab';
    };

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--x', `${((e.clientX - rect.left) / rect.width) * 100}%`);
        card.style.setProperty('--y', `${((e.clientY - rect.top) / rect.height) * 100}%`);
        if (!isDragging && !isFlipped) {
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            gsap.to(card, {
                rotationX: (e.clientY - rect.top - centerY) / 10,
                rotationY: (centerX - (e.clientX - rect.left)) / 10,
                duration: 0.5, ease: 'power2.out'
            });
        }
    });

    card.addEventListener('mousedown', startDragging);
    window.addEventListener('mousemove', handleDragging);
    window.addEventListener('mouseup', stopDragging);
    card.addEventListener('touchstart', startDragging, { passive: true });
    window.addEventListener('touchmove', handleDragging, { passive: false });
    window.addEventListener('touchend', stopDragging);

    card.addEventListener('mouseleave', () => {
        if (!isDragging && !isFlipped) {
            gsap.to(card, { rotationX: 0, rotationY: 0, duration: 1.2, ease: 'elastic.out(1, 0.3)' });
            currentRotationX = 0;
            currentRotationY = 0;
        }
    });

    window.flipCard = () => {
        isFlipped = !isFlipped;
        currentRotationY = isFlipped ? 180 : 0;
        currentRotationX = 0;
        gsap.to(card, { rotationY: currentRotationY, rotationX: 0, duration: 1.2, ease: 'back.out(1.2)' });
    };
  }
});
