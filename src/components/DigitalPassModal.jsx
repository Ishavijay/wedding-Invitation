import React from 'react';
import { X, QrCode, Download, Share2, Sparkles } from 'lucide-react';

export default function DigitalPassModal({ guestData, onClose }) {
  if (!guestData) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="digital-pass-backdrop" role="dialog" aria-modal="true" aria-label="Digital Wedding Pass">
      <div className="digital-pass-overlay" onClick={onClose}></div>

      <div className="digital-pass-card">
        <button
          type="button"
          className="pass-close-btn"
          onClick={onClose}
          aria-label="Close digital pass"
        >
          <X size={20} />
        </button>

        {/* Top Gold Foil Bar */}
        <div className="pass-top-bar">
          <Sparkles size={16} className="pass-sparkle" />
          <span>ROYAL WEDDING VIP ENTRY PASS</span>
          <Sparkles size={16} className="pass-sparkle" />
        </div>

        {/* Pass Header */}
        <div className="pass-body">
          <div className="pass-monogram">A &amp; A</div>
          <h2 className="pass-couple-title">Sameep Vijay &amp; Rakshita Vijay</h2>
          <p className="pass-subtitle">The Oberoi Jaipur • Jaipur, Rajasthan</p>
          <p className="pass-dates">December 13 &amp; 14, 2026</p>

          <div className="pass-divider-cutout">
            <span className="cutout-circle-left"></span>
            <span className="pass-dashed-line"></span>
            <span className="cutout-circle-right"></span>
          </div>

          {/* Guest Pass Information */}
          <div className="pass-guest-details">
            <div className="guest-info-block">
              <span className="info-tag">HONORED GUEST</span>
              <p className="guest-primary-name">{guestData.name}</p>
            </div>

            <div className="guest-meta-grid">
              <div>
                <span className="info-tag">PARTY SIZE</span>
                <p className="meta-val">{guestData.guests} Guest(s)</p>
              </div>
              <div>
                <span className="info-tag">FEAST DIET</span>
                <p className="meta-val">{guestData.diet}</p>
              </div>
            </div>
          </div>

          {/* QR Code Verification Section */}
          <div className="pass-qr-container">
            <div className="qr-box">
              {/* SVG QR Code Simulation */}
              <svg width="110" height="110" viewBox="0 0 24 24" fill="none" stroke="#4F0E1A" strokeWidth="1.5">
                <rect x="2" y="2" width="8" height="8" rx="1" />
                <rect x="4" y="4" width="4" height="4" fill="#4F0E1A" />
                <rect x="14" y="2" width="8" height="8" rx="1" />
                <rect x="16" y="4" width="4" height="4" fill="#4F0E1A" />
                <rect x="2" y="14" width="8" height="8" rx="1" />
                <rect x="4" y="16" width="4" height="4" fill="#4F0E1A" />
                <path d="M14 14h2v2h-2z" fill="#4F0E1A" />
                <path d="M18 14h4v2h-4z" fill="#4F0E1A" />
                <path d="M14 18h4v4h-4z" fill="#4F0E1A" />
                <path d="M20 18h2v4h-2z" fill="#4F0E1A" />
              </svg>
            </div>
            <p className="qr-scan-note">Present this pass at the Udaivilas arrival gate</p>
          </div>
        </div>

        {/* Pass Actions */}
        <div className="pass-actions-footer">
          <button
            type="button"
            className="btn-pass-save btn-royal-gold"
            onClick={handlePrint}
          >
            <Download size={16} />
            <span>Save / Print Pass</span>
          </button>
        </div>
      </div>

      <style>{`
        .digital-pass-backdrop {
          position: fixed;
          inset: 0;
          z-index: 100000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.25rem;
          animation: fadeIn 0.25s ease-out;
        }

        .digital-pass-overlay {
          position: absolute;
          inset: 0;
          background: rgba(20, 8, 12, 0.82);
          backdrop-filter: blur(10px);
        }

        .digital-pass-card {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 400px;
          background: #FFFFFF;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 25px 65px rgba(0, 0, 0, 0.5), 0 0 35px rgba(197, 154, 69, 0.3);
          border: 2px solid var(--royal-gold);
        }

        .pass-close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.2);
          border: none;
          color: #FFF;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
        }

        .pass-top-bar {
          background: linear-gradient(135deg, #721829 0%, #470D18 100%);
          color: #FFF3B0;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          padding: 0.75rem 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          border-bottom: 2px solid #ECC874;
        }

        .pass-sparkle {
          color: #ECC874;
        }

        .pass-body {
          padding: 1.8rem 1.8rem 1.2rem;
          text-align: center;
          background: #FCF8F2;
        }

        .pass-monogram {
          font-family: var(--font-royal);
          font-size: 1.8rem;
          color: var(--royal-gold-dark);
          line-height: 1;
        }

        .pass-couple-title {
          font-family: var(--font-serif);
          font-size: 1.65rem;
          color: var(--royal-maroon);
          margin: 0.2rem 0;
          font-weight: 700;
        }

        .pass-subtitle {
          font-size: 0.82rem;
          color: var(--royal-charcoal);
          font-weight: 500;
        }

        .pass-dates {
          font-size: 0.75rem;
          color: var(--royal-gold-dark);
          font-weight: 600;
          letter-spacing: 0.08em;
          margin-top: 0.2rem;
        }

        .pass-divider-cutout {
          position: relative;
          display: flex;
          align-items: center;
          margin: 1.4rem -1.8rem;
        }

        .cutout-circle-left,
        .cutout-circle-right {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(20, 8, 12, 0.82);
          position: absolute;
          z-index: 5;
        }

        .cutout-circle-left { left: -10px; }
        .cutout-circle-right { right: -10px; }

        .pass-dashed-line {
          width: 100%;
          height: 1px;
          border-top: 1.5px dashed rgba(197, 154, 69, 0.5);
        }

        .pass-guest-details {
          text-align: left;
          background: #FFFFFF;
          padding: 1rem 1.2rem;
          border-radius: 14px;
          border: 1px solid rgba(197, 154, 69, 0.25);
          margin-bottom: 1.2rem;
        }

        .info-tag {
          font-size: 0.65rem;
          letter-spacing: 0.12em;
          color: var(--royal-gold-dark);
          font-weight: 700;
          display: block;
        }

        .guest-primary-name {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          color: var(--royal-maroon-dark);
          font-weight: 700;
          margin-bottom: 0.6rem;
        }

        .guest-meta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
          border-top: 1px solid rgba(0, 0, 0, 0.06);
          padding-top: 0.5rem;
        }

        .meta-val {
          font-size: 0.85rem;
          color: var(--royal-charcoal);
          font-weight: 600;
        }

        .pass-qr-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .qr-box {
          background: #FFFFFF;
          padding: 0.6rem;
          border-radius: 12px;
          border: 1.5px solid rgba(197, 154, 69, 0.4);
          display: inline-block;
          margin-bottom: 0.4rem;
        }

        .qr-scan-note {
          font-size: 0.72rem;
          color: var(--royal-muted);
        }

        .pass-actions-footer {
          padding: 1rem 1.8rem 1.5rem;
          background: #FAF5ED;
          border-top: 1px solid rgba(197, 154, 69, 0.2);
        }

        .btn-pass-save {
          width: 100%;
        }
      `}</style>
    </div>
  );
}
