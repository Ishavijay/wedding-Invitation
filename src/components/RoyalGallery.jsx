import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, ChevronDown } from 'lucide-react';
import { galleryPhotos } from '../data/galleryData';

export default function RoyalGallery({ onOpenLightbox }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'Pre-Wedding', 'Lake Pichola', 'Candid', 'Romance'];

  const filtered = activeCategory === 'all'
    ? galleryPhotos
    : galleryPhotos.filter(p => p.category === activeCategory);

  const activePhoto = filtered[currentIndex] || filtered[0] || galleryPhotos[0];

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? filtered.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === filtered.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="section-padding bg-palace-silk" id="gallery">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Cherished Moments</p>
          <h2 className="section-title">Our Visual Diary</h2>
          <p className="section-subtitle">
            Glimpses of love, goofy smiles, and unforgettable pre-wedding memories by the waters of Udaipur.
          </p>
        </div>

        {/* Category Filters */}
        <div className="gallery-category-bar">
          {categories.map(cat => (
            <button
              key={cat}
              type="button"
              className={`gallery-cat-pill ${activeCategory === cat ? 'is-active' : ''}`}
              onClick={() => {
                setActiveCategory(cat);
                setCurrentIndex(0);
              }}
            >
              {cat === 'all' ? 'All Glimpses' : cat}
            </button>
          ))}
        </div>

        {/* The Royal Jharokha Slider Showcase */}
        <div className="jharokha-showcase-stage">
          <div className="jharokha-arch-frame">
            {/* Crown Crest */}
            <div className="jharokha-crown-arch">
              <span className="crown-crest-symbol">{activePhoto.crest}</span>
            </div>

            {/* Photo Window */}
            <div
              className="jharokha-photo-window"
              onClick={() => onOpenLightbox(activePhoto, currentIndex)}
            >
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="jharokha-photo-img"
                key={activePhoto.src}
              />
              <div className="jharokha-photo-overlay">
                <button
                  type="button"
                  className="photo-zoom-btn"
                  aria-label="Enlarge photo in lightbox"
                >
                  <Maximize2 size={18} />
                  <span>Enlarge View</span>
                </button>
              </div>

              {/* Photo Caption Card */}
              <div className="jharokha-bottom-caption">
                <span className="caption-category-pill">{activePhoto.category}</span>
                <h3 className="caption-photo-title">{activePhoto.title}</h3>
                <p className="caption-desc">{activePhoto.caption}</p>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="jharokha-navigation-bar">
            <button
              type="button"
              className="jharokha-arrow-btn"
              onClick={handlePrev}
              aria-label="Previous photo"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Roman Numeral Pagination Pills */}
            <div className="roman-pagination-pills" role="tablist">
              {filtered.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  className={`roman-pill-btn ${idx === currentIndex ? 'is-active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                  role="tab"
                  aria-selected={idx === currentIndex}
                  aria-label={`Go to photo ${idx + 1}`}
                >
                  {item.roman}
                </button>
              ))}
            </div>

            <button
              type="button"
              className="jharokha-arrow-btn"
              onClick={handleNext}
              aria-label="Next photo"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Scroll Cue */}
        <div className="section-scroll-cue">
          <a href="#rsvp" className="section-scroll-indicator">
            <span>RSVP Attendance</span>
            <ChevronDown size={14} />
          </a>
        </div>
      </div>

      <style>{`
        .gallery-category-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.65rem;
          margin-bottom: 2.5rem;
        }

        .gallery-cat-pill {
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(197, 154, 69, 0.35);
          color: var(--royal-charcoal);
          font-size: 0.82rem;
          font-weight: 500;
          padding: 0.45rem 1.2rem;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .gallery-cat-pill:hover {
          border-color: var(--royal-gold);
          color: var(--royal-maroon);
        }

        .gallery-cat-pill.is-active {
          background: var(--royal-gold-gradient);
          color: #FFF;
          font-weight: 600;
          border-color: transparent;
          box-shadow: 0 4px 14px rgba(197, 154, 69, 0.3);
        }

        .jharokha-showcase-stage {
          max-width: 680px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .jharokha-arch-frame {
          width: 100%;
          background: #FFFFFF;
          border: 3px solid var(--royal-gold);
          border-top-left-radius: 200px;
          border-top-right-radius: 200px;
          border-bottom-left-radius: 24px;
          border-bottom-right-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(115, 26, 42, 0.12), 0 0 35px rgba(197, 154, 69, 0.2);
          position: relative;
        }

        .jharokha-crown-arch {
          background: linear-gradient(135deg, #8C6828 0%, #C59A45 50%, #ECC874 100%);
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 2px solid #FFF3B0;
        }

        .crown-crest-symbol {
          font-size: 1.6rem;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
        }

        .jharokha-photo-window {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          cursor: pointer;
          background: #15080A;
        }

        .jharokha-photo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .jharokha-photo-window:hover .jharokha-photo-img {
          transform: scale(1.05);
        }

        .jharokha-photo-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(20, 8, 10, 0.75) 100%);
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.3s ease;
        }

        .jharokha-photo-window:hover .jharokha-photo-overlay {
          opacity: 1;
        }

        .photo-zoom-btn {
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(6px);
          color: var(--royal-maroon);
          border: none;
          padding: 0.6rem 1.4rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          transform: translateY(10px);
          transition: transform 0.3s ease;
        }

        .jharokha-photo-window:hover .photo-zoom-btn {
          transform: translateY(0);
        }

        .jharokha-bottom-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 2rem 2rem 1.6rem;
          background: linear-gradient(0deg, rgba(15, 6, 8, 0.92) 0%, rgba(15, 6, 8, 0.6) 60%, transparent 100%);
          color: #FFF;
          text-align: center;
        }

        .caption-category-pill {
          display: inline-block;
          background: rgba(236, 200, 116, 0.25);
          border: 1px solid rgba(236, 200, 116, 0.6);
          color: #FFF3B0;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.2rem 0.75rem;
          border-radius: 50px;
          margin-bottom: 0.4rem;
        }

        .caption-photo-title {
          font-family: var(--font-serif);
          font-size: clamp(1.5rem, 3vw, 1.9rem);
          color: #FFFFFF;
          margin-bottom: 0.2rem;
          font-weight: 700;
        }

        .caption-desc {
          font-size: 0.85rem;
          color: #E2D9D0;
          max-width: 480px;
          margin: 0 auto;
        }

        .jharokha-navigation-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.2rem;
          margin-top: 2rem;
          width: 100%;
        }

        .jharokha-arrow-btn {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 1.5px solid var(--royal-gold);
          color: var(--royal-maroon);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
          transition: all 0.25s ease;
        }

        .jharokha-arrow-btn:hover {
          background: var(--royal-gold);
          color: #FFF;
          transform: scale(1.08);
        }

        .roman-pagination-pills {
          display: flex;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.9);
          padding: 0.35rem 0.65rem;
          border-radius: 50px;
          border: 1.5px solid rgba(197, 154, 69, 0.35);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .roman-pill-btn {
          background: none;
          border: none;
          min-width: 32px;
          height: 32px;
          border-radius: 50%;
          font-family: var(--font-serif);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--royal-charcoal);
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .roman-pill-btn.is-active {
          background: var(--royal-gold-gradient);
          color: #FFFFFF;
          box-shadow: 0 2px 8px rgba(197, 154, 69, 0.4);
        }

        @media (max-width: 600px) {
          .jharokha-arch-frame {
            border-top-left-radius: 140px;
            border-top-right-radius: 140px;
          }
          .jharokha-navigation-bar {
            gap: 0.8rem;
          }
          .roman-pagination-pills {
            gap: 0.25rem;
            padding: 0.25rem 0.4rem;
          }
          .roman-pill-btn {
            min-width: 28px;
            height: 28px;
            font-size: 0.82rem;
          }
        }
      `}</style>
    </section>
  );
}
