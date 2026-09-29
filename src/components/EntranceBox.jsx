import React, { useState, useRef } from 'react';
import { Volume2, Sparkles, ChevronRight } from 'lucide-react';

export default function EntranceBox({ onEnter, isMusicPlaying, toggleMusic }) {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef(null);

  const handleTapToOpen = () => {
    setHasStarted(true);
    setIsPlayingVideo(true);

    // Try starting audio
    if (!isMusicPlaying && toggleMusic) {
      toggleMusic(true);
    }

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      const promise = videoRef.current.play();
      if (promise !== undefined) {
        promise.catch((err) => {
          console.warn('Autoplay restricted:', err);
          // Fallback after brief animation
          setTimeout(onEnter, 1500);
        });
      }
    } else {
      setTimeout(onEnter, 1800);
    }

    // Safety timeout in case video doesn't emit ended
    setTimeout(() => {
      onEnter();
    }, 4500);
  };

  const handleVideoEnded = () => {
    onEnter();
  };

  return (
    <div className="entrance-overlay-container">
      <div className="entrance-backdrop"></div>

      <div className="entrance-stage-card">
        {/* Top Auspicious Inscription */}
        <div className="entrance-header">
          <img src="/assets/Ganesh.webp" alt="Shri Ganesh" className="entrance-ganesh-icon" />
          <p className="entrance-shloka">|| ॐ श्री गणेशाय नमः ||</p>
        </div>

        {/* The Invitation Box / Video Display */}
        <div className="entrance-media-frame">
          {!isPlayingVideo ? (
            <div className="entrance-front-wrapper" onClick={handleTapToOpen}>
              <img
                src="/assets/Entrance_Box_Front.webp"
                alt="Royal Wedding Box Cover"
                className="entrance-front-cover"
              />
              <div className="entrance-seal-badge">
                <span className="seal-monogram">A & A</span>
                <span className="seal-text">Tap to Open</span>
              </div>
            </div>
          ) : (
            <video
              ref={videoRef}
              className="entrance-video-player"
              playsInline
              preload="auto"
              poster="/assets/Entrance_Box_Front.webp"
              onEnded={handleVideoEnded}
            >
              <source src="/assets/Entrance%20Box%20Video.mp4" type="video/mp4" />
            </video>
          )}
        </div>

        {/* Tap Button & Action Area */}
        {!hasStarted ? (
          <div className="entrance-action-center">
            <button
              type="button"
              className="entrance-interactive-tap"
              onClick={handleTapToOpen}
              aria-label="Open Wedding Invitation"
            >
              <span className="tap-pulse-ring"></span>
              <span className="tap-pulse-ring-2"></span>
              <span className="tap-core-circle">
                <span className="tap-hand-emoji">💌</span>
              </span>
            </button>

            <div className="entrance-pill-prompt">
              <Sparkles size={16} className="sparkle-gold" />
              <span>Tap the seal to unveil our invitation</span>
              <Sparkles size={16} className="sparkle-gold" />
            </div>

            <button
              type="button"
              className="entrance-skip-btn"
              onClick={onEnter}
            >
              <span>Direct Entrance</span>
              <ChevronRight size={14} />
            </button>
          </div>
        ) : (
          <div className="entrance-opening-loader">
            <div className="entrance-spinner"></div>
            <p className="opening-text">Opening Royal Invitation...</p>
          </div>
        )}
      </div>

      <style>{`
        .entrance-overlay-container {
          position: fixed;
          inset: 0;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.25rem;
          background: radial-gradient(circle at center, #2D1418 0%, #15080A 100%);
          animation: fadeIn 0.6s ease-out;
        }

        .entrance-backdrop {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(rgba(197, 154, 69, 0.12) 1px, transparent 1px);
          background-size: 24px 24px;
          opacity: 0.8;
        }

        .entrance-stage-card {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 440px;
          background: rgba(45, 20, 24, 0.85);
          backdrop-filter: blur(16px);
          border: 1.5px solid rgba(197, 154, 69, 0.45);
          border-radius: 28px;
          padding: 2.2rem 1.8rem;
          box-shadow: 0 25px 65px rgba(0, 0, 0, 0.65), 0 0 40px rgba(197, 154, 69, 0.2);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .entrance-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .entrance-ganesh-icon {
          width: 44px;
          height: auto;
          filter: drop-shadow(0 2px 8px rgba(197, 154, 69, 0.6));
          margin-bottom: 0.5rem;
        }

        .entrance-shloka {
          font-family: var(--font-serif);
          color: var(--royal-gold-light);
          font-size: 1.05rem;
          letter-spacing: 0.08em;
        }

        .entrance-media-frame {
          width: 100%;
          max-width: 320px;
          aspect-ratio: 9 / 14;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          border: 2px solid var(--royal-gold);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
          background: #000;
          cursor: pointer;
        }

        .entrance-front-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
          transition: transform 0.4s ease;
        }

        .entrance-front-wrapper:hover {
          transform: scale(1.02);
        }

        .entrance-front-cover {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .entrance-seal-badge {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, #ECC874 0%, #C59A45 70%, #8C6828 100%);
          width: 90px;
          height: 90px;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 3px solid #FFF3B0;
          box-shadow: 0 10px 25px rgba(0,0,0,0.5), 0 0 20px rgba(236, 200, 116, 0.5);
          animation: pulseGlow 2.4s infinite ease-in-out;
        }

        .seal-monogram {
          font-family: var(--font-royal);
          font-size: 1rem;
          color: #4F0E1A;
          font-weight: 700;
          line-height: 1.1;
        }

        .seal-text {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #4F0E1A;
          font-weight: 600;
          margin-top: 2px;
        }

        .entrance-video-player {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .entrance-action-center {
          margin-top: 1.8rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .entrance-interactive-tap {
          position: relative;
          width: 68px;
          height: 68px;
          border: none;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tap-pulse-ring, .tap-pulse-ring-2 {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid var(--royal-gold);
          animation: rippleEffect 2s infinite cubic-bezier(0.1, 0.2, 0.3, 1);
        }

        .tap-pulse-ring-2 {
          animation-delay: 0.6s;
        }

        .tap-core-circle {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: var(--royal-gold-gradient);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 18px rgba(197, 154, 69, 0.5);
          transition: transform 0.2s ease;
        }

        .tap-hand-emoji {
          font-size: 1.5rem;
        }

        .entrance-interactive-tap:hover .tap-core-circle {
          transform: scale(1.1);
        }

        .entrance-pill-prompt {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(197, 154, 69, 0.15);
          border: 1px solid rgba(197, 154, 69, 0.4);
          padding: 0.5rem 1.2rem;
          border-radius: 50px;
          color: #FFF3B0;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.03em;
        }

        .entrance-skip-btn {
          background: none;
          border: none;
          color: rgba(246, 226, 163, 0.65);
          font-size: 0.82rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          transition: color 0.2s ease;
          padding: 0.25rem 0.5rem;
        }

        .entrance-skip-btn:hover {
          color: #F6E2A3;
        }

        .entrance-opening-loader {
          margin-top: 1.8rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.8rem;
        }

        .entrance-spinner {
          width: 38px;
          height: 38px;
          border: 3px solid rgba(197, 154, 69, 0.2);
          border-top-color: var(--royal-gold);
          border-radius: 50%;
          animation: spinSlow 0.9s linear infinite;
        }

        .opening-text {
          color: var(--royal-gold-light);
          font-size: 0.9rem;
          font-family: var(--font-serif);
          letter-spacing: 0.05em;
        }

        @keyframes rippleEffect {
          0% { transform: scale(0.9); opacity: 1; }
          100% { transform: scale(1.8); opacity: 0; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
