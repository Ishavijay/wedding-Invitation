import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Calendar } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Countdown", href: "#countdown" },
    { label: "Invitation", href: "#invitation" },
    { label: "Couple", href: "#couple" },
    { label: "Our Story", href: "#story" },
    { label: "Events", href: "#events" },
    { label: "Gallery", href: "#gallery" },
    // { label: "RSVP", href: "#rsvp" }
  ];

  return (
    <header className={`royal-navbar ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-inner-container">
        {/* Monogram Brand */}
        <a href="#hero" className="nav-monogram-brand">
          <span className="brand-monogram">A & A</span>
          <span className="brand-sub">December 11, 2026</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav-menu">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="desktop-nav-link">
              {link.label}
            </a>
          ))}
          {/* <a href="#rsvp" className="nav-rsvp-pill">
            <Heart size={13} fill="currentColor" />
            <span>RSVP</span>
          </a> */}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className="mobile-nav-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'is-open' : ''}`}>
        <div className="mobile-drawer-header">
          <span className="drawer-title">Sameep Vijay & Rakshita Vijay</span>
          <p className="drawer-subtitle">The Royal Wedding • Jaipur</p>
        </div>
        <div className="mobile-drawer-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-drawer-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#rsvp"
            className="mobile-drawer-rsvp-btn btn-royal-gold"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Heart size={16} fill="currentColor" />
            <span>Confirm Attendance</span>
          </a>
        </div>
      </div>

      <style>{`
        .royal-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.35s ease;
          padding: 18px 0;
          background: linear-gradient(180deg, rgba(252, 248, 242, 0.92) 0%, rgba(252, 248, 242, 0) 100%);
        }

        .royal-navbar.is-scrolled {
          background: rgba(252, 248, 242, 0.95);
          backdrop-filter: blur(14px);
          padding: 12px 0;
          border-bottom: 1px solid rgba(197, 154, 69, 0.22);
          box-shadow: 0 10px 30px rgba(71, 13, 24, 0.06);
        }

        .nav-inner-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-monogram-brand {
          text-decoration: none;
          display: flex;
          flex-direction: column;
        }

        .brand-monogram {
          font-family: var(--font-royal);
          font-size: 1.35rem;
          color: var(--royal-maroon-dark);
          font-weight: 700;
          letter-spacing: 0.08em;
          line-height: 1.1;
        }

        .brand-sub {
          font-size: 0.65rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--royal-gold-dark);
          font-weight: 600;
        }

        .desktop-nav-menu {
          display: flex;
          align-items: center;
          gap: 1.6rem;
        }

        .desktop-nav-link {
          text-decoration: none;
          color: var(--royal-charcoal);
          font-size: 0.88rem;
          font-weight: 500;
          letter-spacing: 0.03em;
          position: relative;
          transition: color 0.25s ease;
        }

        .desktop-nav-link::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: var(--royal-gold);
          transition: width 0.25s ease;
        }

        .desktop-nav-link:hover {
          color: var(--royal-maroon);
        }

        .desktop-nav-link:hover::after {
          width: 100%;
        }

        .nav-rsvp-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.5rem 1.25rem;
          background: var(--royal-gold-gradient);
          color: #FFF;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          border-radius: 50px;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(197, 154, 69, 0.3);
          transition: all 0.25s ease;
        }

        .nav-rsvp-pill:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(197, 154, 69, 0.45);
        }

        .mobile-nav-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--royal-maroon-dark);
          cursor: pointer;
          padding: 4px;
        }

        .mobile-nav-drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 290px;
          background: #FCF8F2;
          box-shadow: -10px 0 35px rgba(0, 0, 0, 0.15);
          padding: 2.5rem 1.8rem;
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1001;
        }

        .mobile-nav-drawer.is-open {
          transform: translateX(0);
        }

        .mobile-drawer-header {
          border-bottom: 1px solid rgba(197, 154, 69, 0.25);
          padding-bottom: 1.2rem;
          margin-bottom: 1.5rem;
        }

        .drawer-title {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          color: var(--royal-maroon);
          font-weight: 700;
          display: block;
        }

        .drawer-subtitle {
          font-size: 0.78rem;
          color: var(--royal-gold-dark);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .mobile-drawer-links {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .mobile-drawer-link {
          text-decoration: none;
          color: var(--royal-charcoal);
          font-size: 1.05rem;
          font-family: var(--font-serif);
          font-weight: 600;
          transition: color 0.2s ease;
        }

        .mobile-drawer-link:hover {
          color: var(--royal-maroon);
        }

        .mobile-drawer-rsvp-btn {
          margin-top: 1.5rem;
          width: 100%;
          text-align: center;
        }

        @media (max-width: 900px) {
          .desktop-nav-menu {
            display: none;
          }
          .mobile-nav-toggle {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}
