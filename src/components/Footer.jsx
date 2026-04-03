export default function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center">
        <a href="#" className="logo">
          <img src="/logo.png" alt="Nexora Logo" />
        </a>
        <p className="mt-3 text-muted">A developer who understands business + design.</p>
        <div className="social-links mt-4">
          <a href="https://github.com/dashboard" aria-label="Github"><i className="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/mohammed-aadil-049b29322/" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
          <a href="#" aria-label="Twitter"><i className="fa-brands fa-x-twitter"></i></a>
        </div>
        <p className="copyright mt-4 text-xs">
          <code>&copy; 2026 Nexora Studio. All rights reserved.</code>
        </p>
      </div>
    </footer>
  );
}
