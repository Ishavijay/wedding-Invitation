import React, { useState, useRef, useEffect } from 'react';
import { Volume2, Sparkles, ChevronRight } from 'lucide-react';

export default function EntranceBox({ onEnter, isMusicPlaying, toggleMusic }) {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const videoRef = useRef(null);
  const timerRef = useRef(null);
  const closeTimerRef = useRef(null);
  const closingRef = useRef(false);

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  const closeInvitation = () => {
    if (closingRef.current) return;
    closingRef.current = true;
    setIsClosing(true);
    closeTimerRef.current = setTimeout(onEnter, 950);
  };

  const handleTapToOpen = () => {
    if (hasStarted) return;
    setHasStarted(true);
    setIsPlayingVideo(true);

    // Start background wedding music
    if (!isMusicPlaying && toggleMusic) {
      toggleMusic(true);
    }

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('Direct unmuted play blocked, trying muted video:', err);
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(e => console.warn('Muted play also failed:', e));
          }
        });
      }
    }

    // Safety fallback: video is 3.8s, enter after 4.1s if onEnded hasn't fired
    timerRef.current = setTimeout(() => {
      closeInvitation();
    }, 4100);
  };

  const handleVideoEnded = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    closeInvitation();
  };

  return (
    <div className={`entrance-overlay-container ${isClosing ? 'is-closing' : ''}`}>
      <div className="entrance-backdrop"></div>

      <div className="entrance-stage-card">
        {/* Top Auspicious Inscription */}
        <div className="entrance-header">
          <img src="/assets/Ganesh.webp" alt="Shri Ganesh" className="entrance-ganesh-icon" />
          <p className="entrance-shloka">|| ॐ श्री गणेशाय नमः ||</p>
        </div>

        {/* The Invitation Box / Video Display */}
        <div className="entrance-media-frame" onClick={handleTapToOpen}>
          {/* Static Front Cover - shown before tap */}
          <div className={`entrance-front-wrapper ${isPlayingVideo ? 'is-faded' : ''}`}>
            <img
              src="/assets/Entrance_Box_Front.webp"
              alt="Royal Wedding Box Cover"
              className="entrance-front-cover"
            />
            <div className="entrance-seal-badge">
              <span className="seal-monogram">R & S</span>
              <span className="seal-text">Tap to Open</span>
            </div>
          </div>

          {/* Opening Animation Video */}
          <video
            ref={videoRef}
            className={`entrance-video-player ${isPlayingVideo ? 'is-visible' : 'is-hidden'}`}
            playsInline
            preload="auto"
            poster="/assets/Entrance_Box_Front.webp"
            onEnded={handleVideoEnded}
          >
            <source src="/assets/Entrance%20Box%20Video.mp4" type="video/mp4" />
          </video>
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
              onClick={closeInvitation}
            >
              <span>Direct Entrance</span>
              <ChevronRight size={14} />
            </button>
          </div>
        ) : (
          <div className="entrance-opening-loader">
            <div className="entrance-progress-bar-track">
              <div className="entrance-progress-bar-fill"></div>
            </div>
            <p className="opening-text">Unfolding Royal Invitation...</p>
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
          padding: 1rem;
          background: radial-gradient(circle at center, #2D1418 0%, #15080A 100%);
          animation: fadeIn 0.6s ease-out;
          overflow-y: auto;
          transform: translateY(0);
          transition: transform 0.95s cubic-bezier(0.76, 0, 0.24, 1);
        }

        .entrance-overlay-container.is-closing {
          transform: translateY(100%);
          pointer-events: none;
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
          max-width: 400px;
          background: rgba(45, 20, 24, 0.92);
          backdrop-filter: blur(16px);
          border: 1.5px solid rgba(197, 154, 69, 0.45);
          border-radius: 26px;
          padding: 1.6rem 1.4rem;
          box-shadow: 0 25px 65px rgba(0, 0, 0, 0.65), 0 0 40px rgba(197, 154, 69, 0.2);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: auto;
        }

        .entrance-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 1rem;
        }

        .entrance-ganesh-icon {
          width: 40px;
          height: auto;
          filter: drop-shadow(0 2px 8px rgba(197, 154, 69, 0.6));
          margin-bottom: 0.35rem;
        }

        .entrance-shloka {
          font-family: var(--font-serif);
          color: var(--royal-gold-light);
          font-size: 0.95rem;
          letter-spacing: 0.08em;
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
        }

        .entrance-media-frame {
          width: min(292.5px, 30.9375vh);
          height: min(55vh, 520px);
          aspect-ratio: 9 / 16;
          border-radius: 18px;
          overflow: hidden;
          position: relative;
          border: 2px solid var(--royal-gold);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.55), 0 0 25px rgba(197, 154, 69, 0.25);
          background: #000;
          cursor: pointer;
          margin: 0 auto;
        }

        .entrance-front-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          transition: opacity 0.4s ease;
          z-index: 2;
        }

        .entrance-front-wrapper.is-faded {
          opacity: 0;
          pointer-events: none;
        }

        .entrance-front-cover {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .entrance-seal-badge {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, #ECC874 0%, #C59A45 70%, #8C6828 100%);
          width: 82px;
          height: 82px;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 2.5px solid #FFF3B0;
          box-shadow: 0 10px 25px rgba(0,0,0,0.5), 0 0 20px rgba(236, 200, 116, 0.5);
          animation: pulseSeal 2.4s infinite ease-in-out;
        }

        .seal-monogram {
          font-family: var(--font-royal);
          font-size: 0.95rem;
          color: #4F0E1A;
          font-weight: 700;
          line-height: 1.1;
        }

        .seal-text {
          font-size: 0.62rem;
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
          display: block;
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .entrance-video-player.is-hidden {
          opacity: 0;
        }

        .entrance-video-player.is-visible {
          opacity: 1;
        }

        .entrance-action-center {
          margin-top: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.65rem;
        }

        .entrance-interactive-tap {
          position: relative;
          width: 62px;
          height: 62px;
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
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--royal-gold-gradient);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 18px rgba(197, 154, 69, 0.5);
          transition: transform 0.2s ease;
        }

        .tap-hand-emoji {
          font-size: 1.35rem;
        }

        .entrance-interactive-tap:hover .tap-core-circle {
          transform: scale(1.1);
        }

        .entrance-pill-prompt {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          background: rgba(197, 154, 69, 0.15);
          border: 1px solid rgba(197, 154, 69, 0.4);
          padding: 0.45rem 1.1rem;
          border-radius: 50px;
          color: #FFF3B0;
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.03em;
        }

        .entrance-skip-btn {
          background: none;
          border: none;
          color: rgba(246, 226, 163, 0.65);
          font-size: 0.8rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          transition: color 0.2s ease;
          padding: 0.2rem 0.5rem;
        }

        .entrance-skip-btn:hover {
          color: #F6E2A3;
        }

        .entrance-opening-loader {
          margin-top: 1.2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.6rem;
          width: 100%;
          max-width: 260px;
        }

        .entrance-progress-bar-track {
          width: 100%;
          height: 4px;
          border-radius: 4px;
          background: rgba(197, 154, 69, 0.25);
          overflow: hidden;
        }

        .entrance-progress-bar-fill {
          height: 100%;
          width: 0%;
          background: var(--royal-gold-gradient);
          animation: progressFill 3.8s ease-in-out forwards;
        }

        .opening-text {
          color: var(--royal-gold-light);
          font-size: 0.88rem;
          font-family: var(--font-serif);
          letter-spacing: 0.06em;
        }

        @keyframes progressFill {
          0% { width: 0%; }
          100% { width: 100%; }
        }

        @keyframes pulseSeal {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.85; }
          50% { transform: translate(-50%, -50%) scale(1.06); opacity: 1; }
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
