export default function Navbar() {
  return (
    <nav className="navbar" id="navbar">
      <div className="nav-container">
        <a href="#" className="logo">
          <span className="code-bracket">&lt;</span>
          Nexora
          <span className="code-bracket">/&gt;</span>
        </a>
        <ul className="nav-links">
          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#services" className="nav-link">
              Services
            </a>
          </li>
          <li>
            <a href="#pricing" className="nav-link">
              Pricing
            </a>
          </li>
          <li>
            <a href="#visiting-card" className="nav-link">
              ID Card
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link btn-contact">
              Consultation
            </a>
          </li>
        </ul>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
