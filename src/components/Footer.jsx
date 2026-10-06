import { navLinks, profile } from '../data'
import './Footer.css'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <p className="footer__brand">
            Christine, <em>compiled.</em>
          </p>
          <nav aria-label="Footer">
            <ul className="footer__links">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
              <li>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer__bottom">
          <span>© {YEAR} Christine. Designed &amp; built with curiosity.</span>
          <a href="#top" className="footer__top-link">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
