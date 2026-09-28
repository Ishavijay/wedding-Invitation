import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="royal-hero-section" id="hero">
      {/* Dynamic Backgrounds (Mobile & Desktop) */}
      <div className="hero-background-wrapper">
        <picture>
          <source media="(max-width: 767px)" srcSet="/assets/bg_hero_mobile.webp" />
          <img
            src="/assets/bg_hero_desktop.webp"
            alt="Royal Udaipur Mandap Arch with Marigolds and Lotus Flowers"
            className="hero-mandap-bg"
          />
        </picture>
        <div className="hero-vignette-overlay"></div>
      </div>

      {/* Hero Content Container */}
      <div className="hero-content-container container">
        {/* Divine Ganesh Invocation */}
        <div className="hero-divine-invocation">
          <img
            src="/assets/Ganesh.webp"
            alt="Shri Ganesh"
            className="hero-ganesh-emblem"
            width="48"
            height="52"
          />
          <p className="hero-ganesh-shloka">|| श्री गणेशाय नमः ||</p>
        </div>

        {/* Eyebrow & Tagline */}
        <p className="hero-blessing-text">
          With the divine blessings of the Almighty &amp; our beloved elders
        </p>
        <p className="hero-announcement-tagline">
          We're Getting Married
        </p>

        {/* Couple Names */}
        <h1 className="hero-couple-names">
          <span>Rakshita Vijay</span>
          <span className="hero-ampersand-ornate">&amp;</span>
          <span>Sameep Vijay</span>
        </h1>

        <p className="hero-event-pill">
          December 11, 2026 • Gulabh Bagh and hotel, Mansarovar, Jaipur, Rajasthan
        </p>

        {/* Couple Portrait Cutout Anchor */}
        <div className="hero-couple-cutout-frame">
          <img
            src="/assets/Couple_Image.webp"
            alt="Sameep Vijay and Rakshita Vijay in Royal Rajasthani Attire"
            className="hero-couple-portrait"
          />
        </div>

        {/* Scroll Cue Badge */}
        <a href="#countdown" className="hero-scroll-cue-badge" aria-label="Scroll to countdown section">
          <span>Scroll down to reveal</span>
          <ChevronDown size={14} className="hero-bounce-arrow" />
        </a>
      </div>

      <style>{`
        .royal-hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 7.5rem 0 3rem;
          overflow: hidden;
          background: #231215;
          text-align: center;
        }

        .hero-background-wrapper {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .hero-mandap-bg {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        .hero-vignette-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(35, 18, 21, 0.35) 0%, rgba(20, 8, 10, 0.78) 100%);
        }

        .hero-content-container {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 1rem;
        }

        .hero-divine-invocation {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 0.9rem;
          animation: floatGentle 4s ease-in-out infinite;
        }

        .hero-ganesh-emblem {
          width: 46px;
          height: auto;
          filter: drop-shadow(0 4px 12px rgba(197, 154, 69, 0.65));
        }

        .hero-ganesh-shloka {
          font-family: var(--font-serif);
          color: #FFF3B0;
          font-size: 1.15rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          margin-top: 0.35rem;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
        }

        .hero-blessing-text {
          font-size: clamp(0.85rem, 2vw, 1.05rem);
          color: #F8ECE1;
          font-weight: 400;
          letter-spacing: 0.04em;
          max-width: 580px;
          margin-bottom: 0.4rem;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        }

        .hero-announcement-tagline {
          font-family: var(--font-script);
          font-size: clamp(1.8rem, 3.8vw, 2.6rem);
          color: #ECC874;
          letter-spacing: 0.04em;
          line-height: 1.1;
          margin-bottom: 0.6rem;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.7);
        }

        .hero-couple-names {
          font-family: var(--font-serif);
          font-size: clamp(2.8rem, 8vw, 5.8rem);
          color: #FFFFFF;
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: 0.02em;
          margin-bottom: 0.8rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(0.6rem, 2vw, 1.6rem);
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.75);
        }

        .hero-ampersand-ornate {
          font-family: var(--font-calligraphy);
          color: #ECC874;
          font-weight: 400;
          font-size: 1.1em;
          display: inline-block;
          filter: drop-shadow(0 2px 10px rgba(236, 200, 116, 0.6));
        }

        .hero-event-pill {
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(236, 200, 116, 0.4);
          color: #FFF8ED;
          padding: 0.45rem 1.4rem;
          border-radius: 50px;
          font-size: clamp(0.8rem, 1.8vw, 0.95rem);
          letter-spacing: 0.06em;
          font-weight: 500;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
          margin-bottom: 1.8rem;
        }

        .hero-couple-cutout-frame {
          width: 100%;
          max-width: 440px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: center;
        }

        .hero-couple-portrait {
          width: 100%;
          height: auto;
          max-height: 480px;
          object-fit: contain;
          filter: drop-shadow(0 15px 35px rgba(0, 0, 0, 0.75));
          animation: floatGentle 5s ease-in-out infinite;
        }

        .hero-scroll-cue-badge {
          margin-top: 1.5rem;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.35);
          color: #FFF;
          padding: 0.45rem 1.1rem;
          border-radius: 50px;
          text-decoration: none;
          font-size: 0.8rem;
          letter-spacing: 0.06em;
          font-weight: 500;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
        }

        .hero-scroll-cue-badge:hover {
          background: var(--royal-gold);
          color: #FFFFFF;
          transform: translateY(2px);
        }

        .hero-bounce-arrow {
          animation: bounceDown 1.6s infinite ease-in-out;
        }

        @keyframes bounceDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }

        @media (max-width: 768px) {
          .royal-hero-section {
            padding: 6rem 0 2rem;
          }
          .hero-couple-names {
            flex-direction: column;
            gap: 0.1rem;
          }
          .hero-couple-cutout-frame {
            max-width: 320px;
          }
          .hero-couple-portrait {
            max-height: 380px;
          }
        }
      `}</style>
    </section>
  );
}
