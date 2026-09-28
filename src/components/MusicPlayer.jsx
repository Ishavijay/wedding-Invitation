import React, { useState } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function MusicPlayer({ isPlaying, onToggle }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="royal-music-controller">
      <button
        type="button"
        className={`music-floating-btn ${isPlaying ? 'is-playing' : ''}`}
        onClick={onToggle}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label={isPlaying ? "Pause Wedding Shehnai Music" : "Play Wedding Shehnai Music"}
      >
        {isPlaying ? (
          <div className="audio-equalizer">
            <span className="eq-bar bar-1"></span>
            <span className="eq-bar bar-2"></span>
            <span className="eq-bar bar-3"></span>
            <span className="eq-bar bar-4"></span>
          </div>
        ) : (
          <VolumeX size={20} className="music-muted-icon" />
        )}
      </button>

      {/* Floating Tooltip */}
      <div className={`music-status-tooltip ${showTooltip || !isPlaying ? 'visible' : ''}`}>
        <Music size={13} />
        <span>{isPlaying ? 'Shehnai Playing 🎶' : 'Play Shehnai 🎶'}</span>
      </div>

      <style>{`
        .royal-music-controller {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .music-floating-btn {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 2px solid #ECC874;
          background: linear-gradient(135deg, #721829 0%, #470D18 100%);
          color: #FFF3B0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(71, 13, 24, 0.45), 0 0 15px rgba(236, 200, 116, 0.35);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .music-floating-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 12px 30px rgba(71, 13, 24, 0.6), 0 0 25px rgba(236, 200, 116, 0.6);
        }

        .music-floating-btn.is-playing {
          animation: pulseBorder 3s infinite ease-in-out;
        }

        .audio-equalizer {
          display: flex;
          align-items: flex-end;
          gap: 3px;
          height: 18px;
        }

        .eq-bar {
          width: 3px;
          background: #ECC874;
          border-radius: 2px;
          animation: eqDance 1.2s infinite ease-in-out alternate;
        }

        .bar-1 { height: 60%; animation-delay: 0.1s; }
        .bar-2 { height: 100%; animation-delay: 0.3s; }
        .bar-3 { height: 40%; animation-delay: 0.2s; }
        .bar-4 { height: 80%; animation-delay: 0.4s; }

        .music-status-tooltip {
          position: absolute;
          right: 64px;
          white-space: nowrap;
          background: rgba(35, 14, 18, 0.92);
          backdrop-filter: blur(8px);
          color: #FFF3B0;
          font-size: 0.8rem;
          font-weight: 500;
          padding: 6px 14px;
          border-radius: 20px;
          border: 1px solid rgba(236, 200, 116, 0.35);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
          display: flex;
          align-items: center;
          gap: 6px;
          pointer-events: none;
          opacity: 0;
          transform: translateX(8px);
          transition: all 0.25s ease;
        }

        .music-status-tooltip.visible {
          opacity: 1;
          transform: translateX(0);
        }

        @keyframes eqDance {
          0% { height: 20%; }
          100% { height: 100%; }
        }

        @keyframes pulseBorder {
          0%, 100% { box-shadow: 0 8px 24px rgba(71, 13, 24, 0.45), 0 0 15px rgba(236, 200, 116, 0.35); }
          50% { box-shadow: 0 10px 28px rgba(71, 13, 24, 0.6), 0 0 25px rgba(236, 200, 116, 0.6); }
        }

        @media (max-width: 768px) {
          .royal-music-controller {
            bottom: 18px;
            right: 18px;
          }
          .music-floating-btn {
            width: 46px;
            height: 46px;
          }
        }
      `}</style>
    </div>
  );
}
