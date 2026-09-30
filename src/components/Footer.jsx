import React from 'react';
import { Heart, ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="royal-wedding-footer" id="footer">
      <div className="container container-narrow">
        {/* Monogram Crest */}
        <div className="footer-monogram-circle">
          <span className="footer-monogram">R &amp; S</span>
        </div>

        {/* Romantic Marriage Quote */}
        <p className="footer-marriage-quote">
          “Two souls with but a single thought, two hearts that beat as one.”
        </p>

        {/* Auspicious Date & Place */}
        <div className="footer-date-tag">
          <span>DECEMBER 11, 2026 • GULAB BAGH AND HOTEL MANSAROVAR, JAIPUR, RAJASTHAN</span>
        </div>

        {/* Warm Note */}
        <p className="footer-blessing-note">
          We eagerly await your gracious presence and heartfelt blessings to complete our celebrations in the Pink City.
        </p>

        {/* Back to Top */}
        <button
          type="button"
          className="btn-back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top of wedding invitation"
        >
          <ChevronUp size={18} />
          <span>Back to Top</span>
        </button>

        {/* Copyright & Credits */}
        <div className="footer-credits-line">
          <span>With boundless love, <strong>Sameep Vijay &amp; Rakshita Vijay</strong></span>
        </div>
      </div>

      <style>{`
        .royal-wedding-footer {
          background: linear-gradient(180deg, #2D1418 0%, #15080A 100%);
          color: #FFF8ED;
          padding: 5.5rem 0 3.5rem;
          text-align: center;
          position: relative;
          border-top: 2px solid var(--royal-gold);
        }

        .footer-monogram-circle {
          width: 84px;
          height: 84px;
          border-radius: 50%;
          border: 2px solid #ECC874;
          background: radial-gradient(circle, #721829 0%, #460C17 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.8rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4), 0 0 20px rgba(236, 200, 116, 0.3);
        }

        .footer-monogram {
          font-family: var(--font-royal);
          font-size: 1.6rem;
          color: #FFF3B0;
          font-weight: 700;
        }

        .footer-marriage-quote {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.2rem, 3vw, 1.6rem);
          color: #ECC874;
          max-width: 620px;
          margin: 0 auto 1.4rem;
          line-height: 1.5;
        }

        .footer-date-tag {
          font-size: 0.85rem;
          letter-spacing: 0.18em;
          color: #FFF3B0;
          font-weight: 600;
          margin-bottom: 1.2rem;
        }

        .footer-blessing-note {
          font-size: 0.95rem;
          color: #D3C4B8;
          max-width: 540px;
          margin: 0 auto 2.4rem;
          line-height: 1.7;
        }

        .btn-back-to-top {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(236, 200, 116, 0.35);
          color: #FFF3B0;
          padding: 0.5rem 1.4rem;
          border-radius: 50px;
          font-size: 0.82rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          transition: all 0.25s ease;
          margin-bottom: 2.2rem;
        }

        .btn-back-to-top:hover {
          background: var(--royal-gold);
          color: #FFF;
          transform: translateY(-2px);
        }

        .footer-credits-line {
          border-top: 1px solid rgba(236, 200, 116, 0.15);
          padding-top: 1.8rem;
          font-size: 0.85rem;
          color: rgba(246, 226, 163, 0.7);
        }

        .footer-credits-line strong {
          color: #FFF3B0;
        }
      `}</style>
    </footer>
  );
}
