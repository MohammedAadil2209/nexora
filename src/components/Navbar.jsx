import { useState } from "react";

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

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
           <a href="#" className="logo" onClick={closeMenu}>
             <img src="/logo.png" alt="Nexora Logo" />
           </a>
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
           <li className="nav-item"><a href="#about" className="nav-link" onClick={closeMenu}>About</a></li>
           <li className="nav-item"><a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a></li>
           <li className="nav-item"><a href="#services" className="nav-link" onClick={closeMenu}>Services</a></li>
           <li className="nav-item"><a href="#pricing" className="nav-link" onClick={closeMenu}>Pricing</a></li>
           <li className="nav-item"><a href="#visiting-card" className="nav-link" onClick={closeMenu}>ID Card</a></li>
           <li className="nav-item"><a href="#contact" className="nav-link btn-contact" onClick={closeMenu}>Consultation</a></li>
        </ul>

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
