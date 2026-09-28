import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryPhotos } from '../data/galleryData';

export default function LightboxModal({ photo, index, onClose, onNavigate }) {
  if (!photo) return null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate(-1);
      if (e.key === 'ArrowRight') onNavigate(1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNavigate]);

  return (
    <div className="lightbox-backdrop" role="dialog" aria-modal="true" aria-label="Photo Lightbox">
      <div className="lightbox-overlay" onClick={onClose}></div>

      <div className="lightbox-modal-content">
        {/* Close Button */}
        <button
          type="button"
          className="lightbox-close-btn"
          onClick={onClose}
          aria-label="Close Lightbox"
        >
          <X size={24} />
        </button>

        {/* Previous Button */}
        <button
          type="button"
          className="lightbox-nav-arrow arrow-prev"
          onClick={() => onNavigate(-1)}
          aria-label="Previous photo"
        >
          <ChevronLeft size={32} />
        </button>

        {/* Image Display */}
        <div className="lightbox-image-stage">
          <img
            src={photo.src}
            alt={photo.title}
            className="lightbox-enlarged-img"
          />
          <div className="lightbox-caption-bar">
            <div className="lightbox-meta">
              <span className="lightbox-counter">Photo {index + 1} of {galleryPhotos.length}</span>
              <h4 className="lightbox-title">{photo.title}</h4>
            </div>
            <span className="lightbox-monogram">Sameep Vijay &amp; Rakshita Vijay</span>
          </div>
        </div>

        {/* Next Button */}
        <button
          type="button"
          className="lightbox-nav-arrow arrow-next"
          onClick={() => onNavigate(1)}
          aria-label="Next photo"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      <style>{`
        .lightbox-backdrop {
          position: fixed;
          inset: 0;
          z-index: 100000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .lightbox-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 6, 8, 0.92);
          backdrop-filter: blur(12px);
        }

        .lightbox-modal-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 900px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-close-btn {
          position: absolute;
          top: -45px;
          right: 0;
          background: none;
          border: none;
          color: #FFF3B0;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .lightbox-close-btn:hover {
          transform: scale(1.2);
          color: #FFF;
        }

        .lightbox-nav-arrow {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(236, 200, 116, 0.35);
          color: #FFF;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
          position: absolute;
          z-index: 5;
        }

        .arrow-prev { left: -70px; }
        .arrow-next { right: -70px; }

        .lightbox-nav-arrow:hover {
          background: var(--royal-gold);
          color: #FFF;
          transform: scale(1.1);
        }

        .lightbox-image-stage {
          position: relative;
          max-height: 80vh;
          border-radius: 16px;
          overflow: hidden;
          border: 2px solid var(--royal-gold);
          box-shadow: 0 25px 65px rgba(0, 0, 0, 0.7);
          background: #000;
          display: flex;
          flex-direction: column;
        }

        .lightbox-enlarged-img {
          max-height: 72vh;
          max-width: 100%;
          object-fit: contain;
        }

        .lightbox-caption-bar {
          background: rgba(25, 10, 14, 0.95);
          padding: 1rem 1.6rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(197, 154, 69, 0.3);
        }

        .lightbox-counter {
          font-size: 0.75rem;
          color: var(--royal-gold-light);
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        .lightbox-title {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          color: #FFFFFF;
          font-weight: 600;
        }

        .lightbox-monogram {
          font-family: var(--font-script);
          font-size: 1.4rem;
          color: #ECC874;
        }

        @media (max-width: 1060px) {
          .arrow-prev { left: 10px; }
          .arrow-next { right: 10px; }
          .lightbox-close-btn { top: -40px; right: 10px; }
        }
      `}</style>
    </div>
  );
}
