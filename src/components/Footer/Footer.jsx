import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-menu">
        <ul className="footer-menu-list">
          <li><Link className="footer-menu-item" to="/">Home</Link></li>
          <li><Link className="footer-menu-item" to="/about">About</Link></li>
          <li><Link className="footer-menu-item" to="/skills">Skills</Link></li>
          <li><Link className="footer-menu-item" to="/portfolio">Portfolio</Link></li>
          <li><Link className="footer-menu-item" to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div>
        <nav className="footer-social-links" aria-label="Social Media Links">
          <ul className="footer-link-list">
            <li>
              <a
                className="footer-link-item"
                href="https://www.linkedin.com/in/hanna-mickels-3a54b3173"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="bx bxl-linkedin-square" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                className="footer-link-item"
                href="https://github.com/Hanna282"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="bx bxl-github" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <p className="footer-text">&copy; Hanna Mickels. All rights reserved.</p>
    </footer>
  )
}

export default Footer