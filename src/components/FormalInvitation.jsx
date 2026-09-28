import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function FormalInvitation() {
  return (
    <section className="section-padding bg-palace-silk" id="invitation">
      <div className="container container-narrow">
        <div className="invitation-ornate-card">
          {/* Ornate Gold Border Corners */}
          <div className="card-corner corner-top-left"></div>
          <div className="card-corner corner-top-right"></div>
          <div className="card-corner corner-bottom-left"></div>
          <div className="card-corner corner-bottom-right"></div>

          {/* Auspicious Shloka */}
          <div className="invitation-shloka-box">
            <p className="sanskrit-shloka-line">वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।</p>
            <p className="sanskrit-shloka-line">निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥</p>
          </div>

          <p className="invitation-lead-text">
            Request the honour of your gracious presence on the auspicious occasion of the Subh Vivah of
          </p>


          {/* Bride Information */}
          <div className="invitation-name-box">
            <h2 className="person-display-name">Rakshita Vijay</h2>
            <p className="person-parentage">
              Daughter of <strong>Mr. Deendayal Vijay &amp; Mrs. Kalpana Vijay</strong>
            </p>
          </div>

          {/* Royal Ampersand Knot */}
          <div className="royal-mandala-divider">
            <span className="royal-mandala-line"></span>
            <span className="invitation-knot-ampersand">&amp;</span>
            <span className="royal-mandala-line"></span>
          </div>

          {/* Groom Information */}
          <div className="invitation-name-box">
            <h2 className="person-display-name">Sameep Vijay</h2>
            <p className="person-parentage">
              Son of <strong>Mr. Kaushal Vijay &amp; Mrs. Seema Vijay</strong>
            </p>
          </div>


          <div className="invitation-lotus-ornament">
            <span className="lotus-flower-crest">🪷</span>
          </div>

          {/* Formal Blessing Quote */}
          <p className="invitation-heartfelt-quote">
            “With joyful hearts and the sacred blessings of our elders, we invite you to celebrate the union of two souls and the coming together of two families.”
          </p>

          {/* City & Date Note */}
          <div className="invitation-footer-note">
            <span>JAIPUR, RAJASTHAN • DECEMBER 2026</span>
          </div>
        </div>

        {/* Scroll Indicator to Couple */}
        <div className="section-scroll-cue">
          <a href="#couple" className="section-scroll-indicator">
            <span>Meet The Couple</span>
            <ChevronDown size={14} />
          </a>
        </div>
      </div>

      <style>{`
        .invitation-ornate-card {
          position: relative;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(14px);
          border: 2px solid var(--royal-gold);
          border-radius: 24px;
          padding: 4rem 3rem;
          text-align: center;
          box-shadow: 0 20px 60px rgba(115, 26, 42, 0.08), 0 0 40px rgba(197, 154, 69, 0.12);
        }

        .card-corner {
          position: absolute;
          width: 24px;
          height: 24px;
          border-color: var(--royal-gold-dark);
          border-style: solid;
        }

        .corner-top-left { top: 12px; left: 12px; border-width: 2px 0 0 2px; }
        .corner-top-right { top: 12px; right: 12px; border-width: 2px 2px 0 0; }
        .corner-bottom-left { bottom: 12px; left: 12px; border-width: 0 0 2px 2px; }
        .corner-bottom-right { bottom: 12px; right: 12px; border-width: 0 2px 2px 0; }

        .invitation-shloka-box {
          margin-bottom: 2rem;
        }

        .sanskrit-shloka-line {
          font-family: var(--font-serif);
          font-size: clamp(1.1rem, 2.5vw, 1.4rem);
          color: var(--royal-maroon);
          font-weight: 600;
          letter-spacing: 0.04em;
          line-height: 1.6;
        }

        .invitation-lead-text {
          font-size: clamp(0.92rem, 2vw, 1.08rem);
          color: var(--royal-charcoal);
          max-width: 580px;
          margin: 0 auto 2.4rem;
          line-height: 1.7;
          font-weight: 400;
        }

        .invitation-name-box {
          margin: 1.2rem 0;
        }

        .person-display-name {
          font-family: var(--font-serif);
          font-size: clamp(2.2rem, 5vw, 3.2rem);
          color: var(--royal-maroon-dark);
          font-weight: 700;
          letter-spacing: 0.03em;
          margin-bottom: 0.35rem;
        }

        .person-parentage {
          font-size: 0.95rem;
          color: var(--royal-muted);
        }

        .person-parentage strong {
          color: var(--royal-charcoal);
          font-weight: 600;
        }

        .invitation-knot-ampersand {
          font-family: var(--font-calligraphy);
          font-size: 2.2rem;
          color: var(--royal-gold);
          display: inline-block;
          line-height: 1;
        }

        .invitation-lotus-ornament {
          margin: 1.8rem 0 1.2rem;
        }

        .lotus-flower-crest {
          font-size: 1.8rem;
          filter: drop-shadow(0 2px 6px rgba(197, 154, 69, 0.4));
        }

        .invitation-heartfelt-quote {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(1.05rem, 2.2vw, 1.25rem);
          color: var(--royal-maroon);
          max-width: 600px;
          margin: 0 auto 1.8rem;
          line-height: 1.6;
        }

        .invitation-footer-note {
          display: inline-block;
          border-top: 1px solid rgba(197, 154, 69, 0.35);
          padding-top: 1.2rem;
          font-size: 0.75rem;
          letter-spacing: 0.18em;
          color: var(--royal-gold-dark);
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .invitation-ornate-card {
            padding: 3rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
