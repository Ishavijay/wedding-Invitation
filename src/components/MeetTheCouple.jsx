import React from 'react';
import { Heart, ChevronDown } from 'lucide-react';

export default function MeetTheCouple() {
  return (
    <section className="section-padding bg-palace-pattern" id="couple">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Two Souls, One Destiny</p>
          <h2 className="section-title">Meet the Bride &amp; Groom</h2>
          <p className="section-subtitle">
            Two distinct lives brought together by serendipity, shared laughter, and an endless love.
          </p>
        </div>

        <div className="couple-cards-grid">
          {/* Bride Card */}
          <div className="couple-profile-card">
            <div className="portrait-jharokha-frame">
              <img
                src="/assets/Bride.webp"
                alt="Rakshita Vijay - The Bride"
                className="portrait-arch-photo"
              />
              <span className="role-tag-badge">The Bride</span>
            </div>
            <h3 className="couple-name">Rakshita Vijay</h3>
            <p className="couple-bio">
              An architect with an abiding passion for classical Kathak dance, weaving elegance, warm empathy, and joyous laughter into every room she enters.
            </p>
          </div>

          {/* Center Ornate Emblem */}
          <div className="couple-center-divider" aria-hidden="true">
            <span className="center-ampersand">&amp;</span>
            <div className="center-flower-orbit">
              <span className="flower-icon">🪷</span>
            </div>
          </div>

          {/* Groom Card */}
          <div className="couple-profile-card">
            <div className="portrait-jharokha-frame">
              <img
                src="/assets/Groom.webp"
                alt="Sameep Vijay - The Groom"
                className="portrait-arch-photo"
              />
              <span className="role-tag-badge">The Groom</span>
            </div>
            <h3 className="couple-name">Sameep Vijay</h3>
            <p className="couple-bio">
              A visionary tech entrepreneur and avid Himalayan mountain trekker, celebrated for his calm wisdom, heartfelt loyalty, and infectious sense of humor.
            </p>
          </div>
        </div>

        {/* Scroll Cue */}
        <div className="section-scroll-cue">
          <a href="#story" className="section-scroll-indicator">
            <span>Our Love Story</span>
            <ChevronDown size={14} />
          </a>
        </div>
      </div>

      <style>{`
        .couple-cards-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 2.5rem;
          max-width: 980px;
          margin: 0 auto;
        }

        .couple-profile-card {
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(12px);
          border: 1.5px solid rgba(197, 154, 69, 0.35);
          border-radius: 24px;
          padding: 2.5rem 2rem;
          text-align: center;
          box-shadow: 0 15px 35px rgba(71, 13, 24, 0.06);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .couple-profile-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 22px 50px rgba(115, 26, 42, 0.14);
          border-color: var(--royal-gold);
        }

        .portrait-jharokha-frame {
          width: 220px;
          height: 270px;
          margin: 0 auto 1.8rem;
          border-top-left-radius: 110px;
          border-top-right-radius: 110px;
          border-bottom-left-radius: 16px;
          border-bottom-right-radius: 16px;
          overflow: hidden;
          position: relative;
          border: 3px solid var(--royal-gold);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
        }

        .portrait-arch-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .couple-profile-card:hover .portrait-arch-photo {
          transform: scale(1.06);
        }

        .role-tag-badge {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(71, 13, 24, 0.88);
          backdrop-filter: blur(6px);
          color: #FFF3B0;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 0.3rem 0.9rem;
          border-radius: 50px;
          border: 1px solid rgba(236, 200, 116, 0.5);
          white-space: nowrap;
        }

        .couple-name {
          font-family: var(--font-serif);
          font-size: 2.2rem;
          color: var(--royal-maroon-dark);
          margin-bottom: 0.8rem;
          font-weight: 700;
        }

        .couple-bio {
          font-size: 0.92rem;
          color: var(--royal-muted);
          line-height: 1.65;
        }

        .couple-center-divider {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .center-ampersand {
          font-family: var(--font-calligraphy);
          font-size: 4.5rem;
          color: var(--royal-gold);
          line-height: 1;
          filter: drop-shadow(0 2px 8px rgba(197, 154, 69, 0.4));
        }

        .center-flower-orbit {
          font-size: 2rem;
          margin-top: -0.5rem;
        }

        @media (max-width: 840px) {
          .couple-cards-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .couple-center-divider {
            margin: -0.5rem 0;
          }
          .center-ampersand {
            font-size: 3rem;
          }
        }
      `}</style>
    </section>
  );
}
