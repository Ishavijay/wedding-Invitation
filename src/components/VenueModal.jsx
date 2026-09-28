import React from 'react';
import { X, MapPin, ExternalLink } from 'lucide-react';

export default function VenueModal({ event, onClose }) {
  if (!event) return null;

  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(event.venue + ' ' + event.city)}`;

  return (
    <div className="venue-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="venue-modal-title">
      <div className="venue-modal-overlay" onClick={onClose}></div>

      <div className="venue-modal-card">
        {/* Close Button */}
        <button
          type="button"
          className="venue-modal-close-btn"
          onClick={onClose}
          aria-label="Close venue details"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="venue-modal-header">
          <span className="venue-badge-pill">{event.title} Venue</span>
          <h3 className="venue-modal-title" id="venue-modal-title">{event.venue}</h3>
          <p className="venue-modal-address">
            <MapPin size={15} className="pin-icon" />
            <span>{event.city}</span>
          </p>
        </div>

        {/* Google Maps Embed Iframe */}
        <div className="venue-map-viewport">
          <iframe
            src={event.embedMapUrl}
            className="venue-map-iframe"
            title={`${event.venue} Google Map`}
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Modal Footer Link */}
        <div className="venue-modal-footer">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-directions-link btn-royal-gold"
          >
            <MapPin size={16} />
            <span>Open in Google Maps Navigation</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      <style>{`
        .venue-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.25rem;
          animation: fadeIn 0.25s ease-out;
        }

        .venue-modal-overlay {
          position: absolute;
          inset: 0;
          background: rgba(25, 12, 16, 0.75);
          backdrop-filter: blur(8px);
        }

        .venue-modal-card {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 620px;
          background: #FCF8F2;
          border: 2px solid var(--royal-gold);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 25px 65px rgba(0, 0, 0, 0.45);
          display: flex;
          flex-direction: column;
        }

        .venue-modal-close-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(115, 26, 42, 0.08);
          border: 1px solid rgba(197, 154, 69, 0.3);
          color: var(--royal-maroon);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          z-index: 10;
        }

        .venue-modal-close-btn:hover {
          background: var(--royal-maroon);
          color: #FFF;
        }

        .venue-modal-header {
          padding: 2rem 2.2rem 1.2rem;
          text-align: left;
        }

        .venue-badge-pill {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--royal-gold-dark);
          margin-bottom: 0.4rem;
        }

        .venue-modal-title {
          font-family: var(--font-serif);
          font-size: 1.65rem;
          color: var(--royal-maroon-dark);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 0.4rem;
        }

        .venue-modal-address {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.88rem;
          color: var(--royal-muted);
        }

        .pin-icon {
          color: var(--royal-gold);
        }

        .venue-map-viewport {
          width: 100%;
          height: 300px;
          background: #E5E3DF;
          position: relative;
        }

        .venue-map-iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        .venue-modal-footer {
          padding: 1.4rem 2.2rem;
          display: flex;
          justify-content: center;
          background: #FAF5ED;
          border-top: 1px solid rgba(197, 154, 69, 0.25);
        }

        .btn-directions-link {
          width: 100%;
        }

        @media (max-width: 600px) {
          .venue-modal-header {
            padding: 1.5rem 1.4rem 1rem;
          }
          .venue-modal-title {
            font-size: 1.35rem;
          }
          .venue-map-viewport {
            height: 240px;
          }
          .venue-modal-footer {
            padding: 1rem 1.4rem;
          }
        }
      `}</style>
    </div>
  );
}
