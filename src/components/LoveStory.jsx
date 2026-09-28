import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, Sparkles, Heart } from 'lucide-react';
import { storyMilestones } from '../data/storyData';

export default function LoveStory() {
  const [activeStep, setActiveStep] = useState(0);

  const current = storyMilestones[activeStep];
  const progressPercent = (activeStep / (storyMilestones.length - 1)) * 100;

  const handlePrev = () => {
    if (activeStep > 0) setActiveStep(activeStep - 1);
  };

  const handleNext = () => {
    if (activeStep < storyMilestones.length - 1) setActiveStep(activeStep + 1);
  };

  return (
    <section className="section-padding bg-palace-silk" id="story">
      <div className="container container-narrow">
        <div className="section-header">
          <p className="section-eyebrow">Our Beautiful Journey</p>
          <h2 className="section-title">How It All Began</h2>
          <p className="section-subtitle">
            Every sweet chapter that brought us here today, woven with laughter and destiny.
          </p>
        </div>

        {/* Stepper Progress Bar & Milestone Nodes */}
        <div className="milestone-stepper-container">
          <div className="stepper-progress-track">
            <div
              className="stepper-progress-fill"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>

          <div className="stepper-nodes-row" role="tablist">
            {storyMilestones.map((milestone, idx) => {
              const isActive = idx === activeStep;
              const isPassed = idx < activeStep;
              return (
                <button
                  key={milestone.step}
                  type="button"
                  className={`stepper-node-btn ${isActive ? 'is-active' : ''} ${isPassed ? 'is-passed' : ''}`}
                  onClick={() => setActiveStep(idx)}
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Milestone ${idx + 1}: ${milestone.title}`}
                >
                  <span className="node-icon-circle">
                    <span className="node-emoji">{milestone.emoji}</span>
                  </span>
                  <span className="node-info-text">
                    <span className="node-date">{milestone.date.split(' ')[0]}</span>
                    <span className="node-title">{milestone.date.split(' ')[1]}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Chapter Card */}
        <div className="story-card-wrapper">
          <button
            type="button"
            className="story-nav-chevron chevron-prev"
            onClick={handlePrev}
            disabled={activeStep === 0}
            aria-label="Previous story chapter"
          >
            <ChevronLeft size={22} />
          </button>

          <article className="active-chapter-card">
            <div className="chapter-visual-col">
              <div className="chapter-photo-arch">
                <img
                  src={current.image}
                  alt={current.title}
                  className="chapter-portrait-img"
                  key={current.image}
                />
              </div>
            </div>

            <div className="chapter-content-col">
              <span className="chapter-badge">{current.badge}</span>
              <p className="chapter-meta-date">{current.date}</p>
              <h3 className="chapter-headline">{current.title}</h3>
              <p className="chapter-narrative">{current.desc}</p>
              
              <div className="chapter-romantic-quote">
                <span className="quote-mark">“</span>
                <p>{current.quote}</p>
              </div>
            </div>
          </article>

          <button
            type="button"
            className="story-nav-chevron chevron-next"
            onClick={handleNext}
            disabled={activeStep === storyMilestones.length - 1}
            aria-label="Next story chapter"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Centered Dots Pagination */}
        <div className="story-dots-pagination">
          {storyMilestones.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`story-dot ${idx === activeStep ? 'is-active' : ''}`}
              onClick={() => setActiveStep(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Scroll Cue */}
        <div className="section-scroll-cue">
          <a href="#events" className="section-scroll-indicator">
            <span>Celebration Itinerary</span>
            <ChevronDown size={14} />
          </a>
        </div>
      </div>

      <style>{`
        .milestone-stepper-container {
          position: relative;
          margin-bottom: 3.5rem;
          padding: 1rem 0;
        }

        .stepper-progress-track {
          position: absolute;
          top: 36px;
          left: 10%;
          right: 10%;
          height: 3px;
          background: rgba(197, 154, 69, 0.25);
          z-index: 1;
        }

        .stepper-progress-fill {
          height: 100%;
          background: var(--royal-gold-gradient);
          transition: width 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .stepper-nodes-row {
          display: flex;
          justify-content: space-between;
          position: relative;
          z-index: 2;
        }

        .stepper-node-btn {
          background: none;
          border: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          transition: transform 0.25s ease;
          padding: 0 0.5rem;
        }

        .stepper-node-btn:hover {
          transform: translateY(-2px);
        }

        .node-icon-circle {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #FFF9F0;
          border: 2px solid var(--royal-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          margin-bottom: 0.5rem;
        }

        .stepper-node-btn.is-active .node-icon-circle {
          background: var(--royal-maroon);
          border-color: #ECC874;
          transform: scale(1.15);
          box-shadow: 0 6px 20px rgba(115, 26, 42, 0.35);
        }

        .node-emoji {
          font-size: 1.3rem;
        }

        .node-info-text {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .node-date {
          font-size: 0.72rem;
          color: var(--royal-gold-dark);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .node-title {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--royal-charcoal);
        }

        .story-card-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }

        .active-chapter-card {
          flex: 1;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(14px);
          border: 1.5px solid rgba(197, 154, 69, 0.4);
          border-radius: 28px;
          padding: 2.8rem;
          box-shadow: 0 20px 50px rgba(71, 13, 24, 0.08);
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 2.5rem;
          align-items: center;
          animation: fadeIn 0.4s ease-out;
        }

        .chapter-photo-arch {
          width: 100%;
          height: 320px;
          border-top-left-radius: 140px;
          border-top-right-radius: 140px;
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
          overflow: hidden;
          border: 3px solid var(--royal-gold);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
        }

        .chapter-portrait-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .chapter-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--royal-maroon);
          background: rgba(115, 26, 42, 0.08);
          padding: 0.35rem 0.9rem;
          border-radius: 50px;
          margin-bottom: 0.6rem;
        }

        .chapter-meta-date {
          font-size: 0.85rem;
          color: var(--royal-gold-dark);
          font-weight: 600;
          margin-bottom: 0.6rem;
        }

        .chapter-headline {
          font-family: var(--font-serif);
          font-size: clamp(1.8rem, 3.5vw, 2.4rem);
          color: var(--royal-maroon-dark);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1rem;
        }

        .chapter-narrative {
          font-size: 1rem;
          color: var(--royal-muted);
          line-height: 1.7;
          margin-bottom: 1.4rem;
        }

        .chapter-romantic-quote {
          display: flex;
          gap: 0.6rem;
          background: rgba(247, 229, 169, 0.15);
          border-left: 3px solid var(--royal-gold);
          padding: 0.8rem 1.2rem;
          border-radius: 0 12px 12px 0;
          font-family: var(--font-serif);
          font-style: italic;
          color: var(--royal-maroon);
          font-size: 1.05rem;
        }

        .quote-mark {
          font-size: 1.6rem;
          line-height: 1;
          color: var(--royal-gold);
        }

        .story-nav-chevron {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #FFF9F0;
          border: 1.5px solid var(--royal-gold);
          color: var(--royal-maroon);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 6px 16px rgba(0,0,0,0.08);
          transition: all 0.25s ease;
          flex-shrink: 0;
        }

        .story-nav-chevron:hover:not(:disabled) {
          background: var(--royal-gold);
          color: #FFF;
          transform: scale(1.08);
        }

        .story-nav-chevron:disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }

        .story-dots-pagination {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 2rem;
        }

        .story-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 1.5px solid var(--royal-gold);
          background: transparent;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .story-dot.is-active {
          background: var(--royal-gold);
          width: 26px;
          border-radius: 8px;
        }

        @media (max-width: 860px) {
          .active-chapter-card {
            grid-template-columns: 1fr;
            padding: 2rem 1.5rem;
            gap: 1.8rem;
          }
          .chapter-photo-arch {
            max-width: 240px;
            height: 260px;
            margin: 0 auto;
          }
          .story-nav-chevron {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
