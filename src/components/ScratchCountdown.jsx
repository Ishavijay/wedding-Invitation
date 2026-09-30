import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Calendar, Sparkles, ChevronDown, CheckCircle2 } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';
import { fireRoyalConfetti } from '../hooks/useConfetti';

export default function ScratchCountdown() {
  const canvasRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [scratchPercent, setScratchPercent] = useState(0);
  const countdown = useCountdown();

  // Initialize Canvas Foil
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width;
    canvas.height = rect.height;

    // Draw luxury royal gold shimmer gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#B38728');
    gradient.addColorStop(0.3, '#FBF5B7');
    gradient.addColorStop(0.5, '#DAA520');
    gradient.addColorStop(0.7, '#AA771C');
    gradient.addColorStop(1, '#8C6828');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add subtle gold foil speckles
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    for (let i = 0; i < 300; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      ctx.fillRect(x, y, 2, 2);
    }

    // Centered foil prompt
    ctx.fillStyle = '#4F0E1A';
    ctx.font = '600 16px Poppins, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✨ Scratch Here to Reveal ✨', canvas.width / 2, canvas.height / 2);
  }, []);

  useEffect(() => {
    initCanvas();
    window.addEventListener('resize', initCanvas);
    return () => window.removeEventListener('resize', initCanvas);
  }, [initCanvas]);

  const scratch = (clientX, clientY) => {
    if (isRevealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 28, 0, Math.PI * 2);
    ctx.fill();

    // Calculate percentage scratched every 12 frames
    checkScratchProgress();
  };

  const checkScratchProgress = () => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    let transparentPixels = 0;

    // Sample every 16th pixel for high performance
    for (let i = 3; i < data.length; i += 16) {
      if (data[i] < 128) {
        transparentPixels++;
      }
    }

    const totalSampled = data.length / 16;
    const percent = Math.round((transparentPixels / totalSampled) * 100);
    setScratchPercent(percent);

    if (percent > 42) {
      handleCompleteReveal();
    }
  };

  const handleCompleteReveal = () => {
    setIsRevealed(true);
    setScratchPercent(100);
    fireRoyalConfetti();

    // Fade canvas completely
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  // Touch & Mouse Handlers
  const handleMouseDown = (e) => {
    setIsDrawing(true);
    scratch(e.clientX, e.clientY);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;
    scratch(e.clientX, e.clientY);
  };

  const handleMouseUp = () => setIsDrawing(false);

  const handleTouchStart = (e) => {
    setIsDrawing(true);
    const touch = e.touches[0];
    scratch(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e) => {
    if (!isDrawing) return;
    const touch = e.touches[0];
    scratch(touch.clientX, touch.clientY);
  };

  const handleTouchEnd = () => setIsDrawing(false);

  // Google Calendar Link generator
  const googleCalUrl =
    "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Royal+Wedding+-+Sameep+Vijay+%26+Rakshita+Vijay&dates=20261211T113000Z/20261211T183000Z&details=Royal+Wedding+Celebration+of+Sameep+Vijay+and+Rakshita+Vijay+at+Gulab+Bagh+and+Hotel+Mansarovar,+Jaipur,+Rajasthan.&location=Gulab+Bagh+and+Hotel+Mansarovar,+Jaipur,+Rajasthan";

  return (
    <section className="section-padding bg-palace-pattern" id="countdown">
      {/* SVG Heart Clip-Path Definition */}
      <svg width="0" height="0" className="svg-clip-defs" aria-hidden="true">
        <defs>
          <clipPath id="royal-heart-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0.5, 0.94 C 0.48, 0.92, 0.05, 0.65, 0.02, 0.35 C -0.01, 0.16, 0.12, 0.02, 0.28, 0.02 C 0.38, 0.02, 0.46, 0.08, 0.5, 0.18 C 0.54, 0.08, 0.62, 0.02, 0.72, 0.02 C 0.88, 0.02, 1.01, 0.16, 0.98, 0.35 C 0.95, 0.65, 0.52, 0.92, 0.5, 0.94 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="container container-narrow">
        {/* Section Header */}
        <div className="section-header">
          <p className="section-eyebrow">The Countdown Begins</p>
          <h2 className="section-title">Scratch to Reveal Our Big Day</h2>
          <p className="section-subtitle">
            Rub the royal gold foil to unveil our sacred wedding date and Jaipur palace venue!
          </p>
        </div>

        {/* Heart Scratch Card Frame */}
        <div className="scratch-heart-stage">
          <div className="scratch-heart-container">
            {/* Background Revealed Content */}
            <div className="scratch-revealed-layer">
              <span className="lotus-sacred-icon" aria-hidden="true">🪷</span>
              <p className="revealed-save-date">Save The Date</p>
              <h3 className="revealed-main-date">December 11, 2026</h3>
              <p className="revealed-venue-title">Gulab Bagh and Hotel Mansarovar • Jaipur</p>
              <div className="revealed-badge-pill">
                <CheckCircle2 size={14} className="revealed-check" />
                <span>Date Revealed</span>
              </div>
            </div>

            {/* Foreground Scratchable Canvas Foil */}
            <canvas
              ref={canvasRef}
              className={`scratch-foil-canvas ${isRevealed ? 'is-cleared' : ''}`}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              aria-label="Scratch card canvas to reveal date"
            />
          </div>

          {/* Quick Reveal Helper Button */}
          {!isRevealed ? (
            <button
              type="button"
              className="scratch-quick-reveal-btn"
              onClick={handleCompleteReveal}
            >
              <Sparkles size={15} />
              <span>Tap to Instant Reveal ({scratchPercent}%)</span>
            </button>
          ) : (
            <div className="revealed-toast">
              <span>🎉 Joyous Blessings! Mark your calendar for Jaipur.</span>
            </div>
          )}
        </div>

        {/* External Live Countdown Timer */}
        <div className="royal-countdown-wrapper">
          <p className="countdown-heading-title">Ticking Towards Our Big Day</p>

          <div className="countdown-clock-grid">
            <div className="countdown-time-card">
              <span className="countdown-number">{countdown.days}</span>
              <span className="countdown-unit">Days</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-time-card">
              <span className="countdown-number">{countdown.hours}</span>
              <span className="countdown-unit">Hours</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-time-card">
              <span className="countdown-number">{countdown.minutes}</span>
              <span className="countdown-unit">Mins</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-time-card">
              <span className="countdown-number">{countdown.seconds}</span>
              <span className="countdown-unit">Secs</span>
            </div>
          </div>

          <div className="countdown-actions-row">
            <a
              href={googleCalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-royal-gold"
            >
              <Calendar size={18} />
              <span>Add to Google Calendar</span>
            </a>
          </div>
        </div>

        {/* Scroll Cue to Next Section */}
        <div className="section-scroll-cue">
          <a href="#invitation" className="section-scroll-indicator">
            <span>Formal Invitation</span>
            <ChevronDown size={14} />
          </a>
        </div>
      </div>

      <style>{`
        .svg-clip-defs {
          position: absolute;
          width: 0;
          height: 0;
          pointer-events: none;
        }

        .scratch-heart-stage {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 4rem;
        }

        .scratch-heart-container {
          width: 320px;
          height: 300px;
          position: relative;
          clip-path: url(#royal-heart-clip);
          box-shadow: 0 20px 45px rgba(115, 26, 42, 0.25);
          filter: drop-shadow(0 15px 30px rgba(197, 154, 69, 0.35));
          background: linear-gradient(135deg, #721829 0%, #460C17 100%);
          cursor: crosshair;
        }

        .scratch-revealed-layer {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 1.5rem 1.8rem;
          background: linear-gradient(135deg, #FFF9F0 0%, #F5ECE0 100%);
          color: #4F0E1A;
          user-select: none;
        }

        .lotus-sacred-icon {
          font-size: 2.2rem;
          margin-bottom: 0.2rem;
          filter: drop-shadow(0 2px 6px rgba(197, 154, 69, 0.4));
        }

        .revealed-save-date {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--royal-gold-dark);
          font-weight: 600;
        }

        .revealed-main-date {
          font-family: var(--font-serif);
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--royal-maroon);
          margin: 0.2rem 0;
          line-height: 1.15;
        }

        .revealed-venue-title {
          font-size: 0.82rem;
          color: var(--royal-muted);
          font-weight: 500;
        }

        .revealed-badge-pill {
          margin-top: 0.6rem;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          background: rgba(30, 67, 52, 0.1);
          color: #1E4334;
          font-size: 0.72rem;
          font-weight: 600;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
        }

        .scratch-foil-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 5;
          touch-action: none;
          transition: opacity 0.5s ease;
        }

        .scratch-foil-canvas.is-cleared {
          opacity: 0;
          pointer-events: none;
        }

        .scratch-quick-reveal-btn {
          margin-top: 1.5rem;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid var(--royal-gold);
          color: var(--royal-gold-dark);
          padding: 0.5rem 1.3rem;
          border-radius: 50px;
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 4px 14px rgba(197, 154, 69, 0.2);
        }

        .scratch-quick-reveal-btn:hover {
          background: var(--royal-gold);
          color: #FFF;
          transform: translateY(-2px);
        }

        .revealed-toast {
          margin-top: 1.2rem;
          color: var(--royal-emerald);
          font-weight: 600;
          font-size: 0.9rem;
          animation: fadeIn 0.4s ease-out;
        }

        .royal-countdown-wrapper {
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(12px);
          border: 1.5px solid rgba(197, 154, 69, 0.35);
          border-radius: 24px;
          padding: 2.5rem 1.8rem;
          text-align: center;
          box-shadow: 0 15px 40px rgba(71, 13, 24, 0.08);
          max-width: 680px;
          margin: 0 auto;
        }

        .countdown-heading-title {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          color: var(--royal-maroon);
          font-weight: 600;
          letter-spacing: 0.04em;
          margin-bottom: 1.6rem;
        }

        .countdown-clock-grid {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(0.5rem, 2vw, 1.2rem);
          margin-bottom: 2rem;
        }

        .countdown-time-card {
          background: linear-gradient(180deg, #FFFFFF 0%, #FAF5ED 100%);
          border: 1.5px solid rgba(197, 154, 69, 0.4);
          border-radius: 16px;
          padding: 1rem 0.8rem;
          min-width: clamp(64px, 15vw, 92px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .countdown-number {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          font-weight: 700;
          color: var(--royal-maroon);
          line-height: 1;
          margin-bottom: 0.3rem;
        }

        .countdown-unit {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--royal-gold-dark);
          font-weight: 600;
        }

        .countdown-separator {
          font-family: var(--font-display);
          font-size: 1.8rem;
          color: var(--royal-gold);
          font-weight: 600;
        }

        .section-scroll-cue {
          text-align: center;
          margin-top: 3rem;
        }

        .section-scroll-indicator {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          color: var(--royal-muted);
          font-size: 0.82rem;
          letter-spacing: 0.05em;
          text-decoration: none;
          transition: color 0.25s ease;
        }

        .section-scroll-indicator:hover {
          color: var(--royal-maroon);
        }

        @media (max-width: 480px) {
          .scratch-heart-container {
            width: 270px;
            height: 255px;
          }
          .revealed-main-date {
            font-size: 1.45rem;
          }
          .countdown-clock-grid {
            gap: 0.3rem;
          }
          .countdown-time-card {
            padding: 0.75rem 0.4rem;
            min-width: 58px;
          }
          .countdown-number {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
