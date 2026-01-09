import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-lumiq">LUMIQ AI</span>
          <span className="logo-separator">×</span>
          <span className="logo-bank">Santander</span>
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/features" className="nav-link">Features</Link>
          <Link to="/solutions" className="nav-link">Solutions</Link>
          <Link to="/contact" className="nav-link nav-link-primary">Request Demo</Link>
        </nav>
      </div>
    </header>
  )
}
