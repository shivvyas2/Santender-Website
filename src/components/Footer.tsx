import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">LUMIQ AI × Santander</h3>
            <p className="footer-text">
              Advanced business credit intelligence powered by artificial intelligence
            </p>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Product</h4>
            <ul className="footer-links">
              <li><a href="/features">Features</a></li>
              <li><a href="/solutions">Solutions</a></li>
              <li><a href="/contact">Request Demo</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><a href="#">About LUMIQ AI</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-links">
              <li><a href="mailto:info@lumiq.ai">info@lumiq.ai</a></li>
              <li><a href="tel:+1234567890">+1 (234) 567-890</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 LUMIQ AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
