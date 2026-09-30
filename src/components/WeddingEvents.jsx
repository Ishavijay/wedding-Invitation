import React, { useState } from 'react';
import { Clock, Sparkles, ChevronDown, MapPin } from 'lucide-react';
import { weddingEvents } from '../data/eventsData';

export default function WeddingEvents() {
  const [activeDayFilter, setActiveDayFilter] = useState('all');

  const filteredEvents = activeDayFilter === 'all'
    ? weddingEvents
    : weddingEvents.filter(e => e.day === activeDayFilter);

  return (
    <section className="section-padding bg-palace-pattern" id="events">
      <div className="container container-narrow">
        <div className="section-header">
          <p className="section-eyebrow">Celebration Itinerary</p>
          <h2 className="section-title">The Wedding Celebrations</h2>
          <p className="section-subtitle">
            Five magnificent gatherings of music, sacred Vedic rites, dance, and joyous festivities in Jaipur across three auspicious days.
          </p>
        </div>

        {/* Day Filter Tabs */}
        <div className="itinerary-filter-tabs">
          <button
            type="button"
            className={`filter-tab-pill ${activeDayFilter === 'all' ? 'is-active' : ''}`}
            onClick={() => setActiveDayFilter('all')}
          >
            All Celebrations ({weddingEvents.length})
          </button>
          <button
            type="button"
            className={`filter-tab-pill ${activeDayFilter === 'Day 1' ? 'is-active' : ''}`}
            onClick={() => setActiveDayFilter('Day 1')}
          >
            Day 1: Mehandi
          </button>
          <button
            type="button"
            className={`filter-tab-pill ${activeDayFilter === 'Day 2' ? 'is-active' : ''}`}
            onClick={() => setActiveDayFilter('Day 2')}
          >
            Day 2: Haldi &amp; Sangeet
          </button>
          <button
            type="button"
            className={`filter-tab-pill ${activeDayFilter === 'Day 3' ? 'is-active' : ''}`}
            onClick={() => setActiveDayFilter('Day 3')}
          >
            Day 3: Chaak Bhaat &amp; Wedding
          </button>
        </div>

        {/* Storybook Itinerary Chapters */}
        <div className="storybook-chapters-list">
          {filteredEvents.map((evt, idx) => (
            <React.Fragment key={evt.id}>
              <article className="storybook-chapter-card">
                <span className="chapter-watermark-number" aria-hidden="true">
                  {evt.number}
                </span>

                <div className="chapter-card-inner">
                  {/* Left Column: Traditional Arch Thumbnail */}
                  <div className="chapter-thumb-wrapper">
                    <div className="chapter-arch-frame">
                      <img
                        src={evt.image}
                        alt={evt.title}
                        className="chapter-thumb-img"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Right Column: Event Info */}
                  <div className="chapter-details-wrapper">
                    <div className="chapter-meta-tag-row">
                      <span className="chapter-day-badge">{evt.day}</span>
                      <span className="chapter-time-pill">
                        <Clock size={12} />
                        <span>{evt.shortTime}</span>
                      </span>
                    </div>

                    <h3 className="chapter-event-title">{evt.title}</h3>

                    <p className="chapter-venue-info">
                      <MapPin size={15} className="pin-gold" />
                      <span>{evt.venue}</span>
                    </p>

                    <p className="chapter-event-desc">{evt.description}</p>

                    {/* Sub-events split columns (e.g. Ring Ceremony & Sangeet) */}
                    {evt.subEvents && (
                      <div className="sub-events-grid">
                        {evt.subEvents.map((sub, si) => (
                          <div key={si} className="sub-event-col">
                            <span className="sub-event-icon">{sub.icon}</span>
                            <div className="sub-event-info">
                              <div className="sub-event-header">
                                <h4 className="sub-event-title">{sub.title}</h4>
                                <span className="sub-event-time">
                                  <Clock size={11} />
                                  {sub.time}
                                </span>
                              </div>
                              <p className="sub-event-desc">{sub.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Attire Indicator — only shown when attire data is provided */}
                    {evt.attire && (
                      <div className="chapter-attire-box">
                        <Sparkles size={14} className="sparkle-gold" />
                        <span className="attire-label">Attire:</span>
                        <span className="attire-desc">{evt.attire}</span>
                        {evt.attireHex && (
                          <div className="attire-swatches">
                            {evt.attireHex.map((hex, i) => (
                              <span
                                key={i}
                                className="color-swatch-dot"
                                style={{ backgroundColor: hex }}
                                title={`Attire palette color ${i + 1}`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    )}


                  </div>
                </div>
              </article>

              {/* Storybook Floral Divider */}
              {idx < filteredEvents.length - 1 && (
                <div className="storybook-ornate-divider" aria-hidden="true">
                  <span className="divider-gold-line"></span>
                  <span className="divider-flourish">❀</span>
                  <span className="divider-gold-line"></span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Scroll Cue (commented out — Our Visual Diary section is hidden) */}
        {/* <div className="section-scroll-cue">
          <a href="#gallery" className="section-scroll-indicator">
            <span>Our Visual Diary</span>
            <ChevronDown size={14} />
          </a>
        </div> */}
      </div>

      <style>{`
        .itinerary-filter-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.8rem;
          margin-bottom: 3rem;
        }

        .filter-tab-pill {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(197, 154, 69, 0.35);
          color: var(--royal-charcoal);
          font-size: 0.85rem;
          font-weight: 500;
          padding: 0.55rem 1.3rem;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .filter-tab-pill:hover {
          border-color: var(--royal-gold);
          color: var(--royal-maroon);
        }

        .filter-tab-pill.is-active {
          background: var(--royal-gold-gradient);
          color: #FFFFFF;
          border-color: transparent;
          font-weight: 600;
          box-shadow: 0 6px 18px rgba(197, 154, 69, 0.35);
        }

        .storybook-chapters-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .storybook-chapter-card {
          position: relative;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(14px);
          border: 1.5px solid rgba(197, 154, 69, 0.38);
          border-radius: 24px;
          padding: 2.2rem 2.4rem;
          box-shadow: 0 16px 40px rgba(71, 13, 24, 0.06);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .storybook-chapter-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 22px 50px rgba(115, 26, 42, 0.12);
        }

        .chapter-watermark-number {
          position: absolute;
          top: -15px;
          right: 20px;
          font-family: var(--font-royal);
          font-size: 6.5rem;
          color: rgba(197, 154, 69, 0.08);
          font-weight: 700;
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }

        .chapter-card-inner {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 2.2rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .chapter-arch-frame {
          width: 100%;
          height: 220px;
          border-top-left-radius: 90px;
          border-top-right-radius: 90px;
          border-bottom-left-radius: 14px;
          border-bottom-right-radius: 14px;
          overflow: hidden;
          border: 2.5px solid var(--royal-gold);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          background: radial-gradient(circle, #FFFDF8 45%, #F4EADA 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .chapter-thumb-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 10px;
          transition: transform 0.5s ease;
        }

        .storybook-chapter-card:hover .chapter-thumb-img {
          transform: scale(1.05);
        }

        .chapter-meta-tag-row {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 0.6rem;
        }

        .chapter-day-badge {
          background: rgba(115, 26, 42, 0.09);
          color: var(--royal-maroon);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.25rem 0.7rem;
          border-radius: 50px;
        }

        .chapter-time-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--royal-gold-dark);
        }

        .chapter-event-title {
          font-family: var(--font-serif);
          font-size: clamp(1.6rem, 3vw, 2.1rem);
          color: var(--royal-maroon-dark);
          font-weight: 700;
          margin-bottom: 0.4rem;
        }

        .chapter-venue-info {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.88rem;
          color: var(--royal-charcoal);
          font-weight: 600;
          margin-bottom: 0.8rem;
        }

        .pin-gold {
          color: var(--royal-gold);
        }

        .chapter-event-desc {
          font-size: 0.92rem;
          color: var(--royal-muted);
          line-height: 1.65;
          margin-bottom: 1.1rem;
        }

        .chapter-attire-box {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(247, 229, 169, 0.16);
          border: 1px solid rgba(197, 154, 69, 0.3);
          padding: 0.45rem 1rem;
          border-radius: 12px;
          margin-bottom: 1.3rem;
          width: fit-content;
        }

        .attire-label {
          font-weight: 600;
          color: var(--royal-maroon);
          font-size: 0.82rem;
        }

        .attire-desc {
          font-size: 0.82rem;
          color: var(--royal-charcoal);
        }

        .attire-swatches {
          display: flex;
          gap: 4px;
          margin-left: 4px;
        }

        .color-swatch-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 1px solid rgba(0,0,0,0.15);
        }

        .chapter-actions-cluster {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          flex-wrap: wrap;
        }

        .chapter-btn-venue {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.55rem 1.25rem;
          background: var(--royal-gold);
          color: #FFF;
          font-size: 0.82rem;
          font-weight: 600;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 4px 12px rgba(197, 154, 69, 0.3);
        }

        .chapter-btn-venue:hover {
          background: var(--royal-gold-dark);
          transform: translateY(-2px);
        }

        .chapter-btn-cal {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.55rem 1.25rem;
          background: transparent;
          color: var(--royal-charcoal);
          font-size: 0.82rem;
          font-weight: 600;
          border: 1px solid rgba(197, 154, 69, 0.4);
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .chapter-btn-cal:hover {
          border-color: var(--royal-gold);
          color: var(--royal-maroon);
          background: rgba(255, 255, 255, 0.8);
        }

        .storybook-ornate-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          padding: 0.5rem 0;
        }

        .divider-gold-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(197, 154, 69, 0.4), transparent);
        }

        .divider-flourish {
          color: var(--royal-gold);
          font-size: 1.2rem;
        }

        .sub-events-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          border: 1px solid rgba(197, 154, 69, 0.3);
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 1.2rem;
          background: rgba(247, 229, 169, 0.08);
        }

        .sub-event-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 1rem 1.1rem;
          gap: 0.5rem;
          position: relative;
        }

        .sub-event-col:first-child {
          border-right: 1px dashed rgba(197, 154, 69, 0.4);
        }

        .sub-event-icon {
          font-size: 1.6rem;
          line-height: 1;
          margin-bottom: 0.15rem;
        }

        .sub-event-info {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          width: 100%;
        }

        .sub-event-header {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .sub-event-title {
          font-family: var(--font-serif);
          font-size: 1rem;
          font-weight: 700;
          color: var(--royal-maroon-dark);
          line-height: 1.2;
        }

        .sub-event-time {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--royal-gold-dark);
        }

        .sub-event-desc {
          font-size: 0.8rem;
          color: var(--royal-muted);
          line-height: 1.5;
        }

        @media (max-width: 480px) {
          .sub-events-grid {
            grid-template-columns: 1fr;
          }
          .sub-event-col:first-child {
            border-right: none;
            border-bottom: 1px dashed rgba(197, 154, 69, 0.4);
          }
        }
        @media (max-width: 768px) {
          .storybook-chapter-card {
            padding: 1.8rem 1.4rem;
          }
          .chapter-card-inner {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .chapter-arch-frame {
            max-width: 170px;
            height: 200px;
            margin: 0 auto;
          }
          .chapter-details-wrapper {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .chapter-meta-tag-row {
            justify-content: center;
          }
          .chapter-venue-info {
            justify-content: center;
          }
          .chapter-attire-box {
            margin-left: auto;
            margin-right: auto;
          }
          .sub-events-grid {
            text-align: left;
            width: 100%;
          }
          .chapter-actions-cluster {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
