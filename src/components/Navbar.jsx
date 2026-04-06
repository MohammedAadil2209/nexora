import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "ID Card", href: "#visiting-card" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.querySelector(item.href)).filter(Boolean);
      let current = "";
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        // Check if user scrolled to the section
        if (window.scrollY >= sectionTop - 250) {
          current = section.getAttribute("id");
        }
      });
      
      if (current) {
        const match = navItems.find(item => item.href === `#${current}`);
        if (match) setActiveTab(match.name);
      } else if (window.scrollY < 200) {
        setActiveTab(""); // reset at top
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // init on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // If we open, we prevent scrolling
    if(!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <nav className="navbar" id="navbar">
      <div className="nav-container">
        <div className="nav-logo-area">
           <a href="#" className="logo" onClick={() => { setActiveTab(""); closeMenu(); }}>
             <img src="/NEXORA.svg" alt="Nexora Logo" />
           </a>
        </div>

        <div className={`nav-center-pill ${isOpen ? 'active' : ''}`}>
          <div className="mobile-menu-header" onClick={closeMenu}>
            <i className="fa-solid fa-arrow-right"></i> Close Menu
          </div>
          <ul className="nav-links-pill">
             {navItems.map((item) => (
               <li key={item.name} className="nav-pill-item">
                 <a 
                   href={item.href} 
                   className={`nav-pill-link ${activeTab === item.name ? "active" : ""}`}
                   onClick={() => {
                     setActiveTab(item.name);
                     closeMenu();
                   }}
                 >
                   {activeTab === item.name && (
                     <motion.div
                       layoutId="active-pill"
                       className="active-pill-bg"
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       exit={{ opacity: 0 }}
                       transition={{ type: "spring", stiffness: 350, damping: 30 }}
                     />
                   )}
                   <span className="pill-text">{item.name}</span>
                 </a>
               </li>
             ))}
             <li className="mobile-only-item">
                <a href="#contact" className="nav-pill-link btn-contact-pill" onClick={closeMenu}>
                  Consultation
                </a>
             </li>
             <li className="mobile-theme-item">
               <div className="theme-switch-wrapper mobile-theme-switch">
                  <input 
                    type="checkbox" 
                    id="theme-checkbox-mobile" 
                    className="theme-checkbox" 
                    onChange={toggleTheme} 
                    checked={theme === 'light'}
                  />
                  <label htmlFor="theme-checkbox-mobile" className="theme-switch-label">
                    <div className="switch-gloss"></div>
                    <i className="fa-solid fa-moon moon-icon"></i>
                    <i className="fa-solid fa-sun sun-icon"></i>
                    <div className="switch-handle">
                      <div className="handle-gloss"></div>
                    </div>
                  </label>
               </div>
             </li>
          </ul>
        </div>

        <div className="nav-actions-area">
           <div className="theme-switch-wrapper desktop-theme-switch">
              <input 
                type="checkbox" 
                id="theme-checkbox" 
                className="theme-checkbox" 
                onChange={toggleTheme} 
                checked={theme === 'light'}
              />
              <label htmlFor="theme-checkbox" className="theme-switch-label">
                <div className="switch-gloss"></div>
                <i className="fa-solid fa-moon moon-icon"></i>
                <i className="fa-solid fa-sun sun-icon"></i>
                <div className="switch-handle">
                  <div className="handle-gloss"></div>
                </div>
              </label>
           </div>
           
           <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
             <span></span>
             <span></span>
             <span></span>
           </div>
        </div>
      </div>
    </nav>
  );
}
