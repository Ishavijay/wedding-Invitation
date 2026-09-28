import React, { useState } from 'react';
import { Heart, Send, CheckCircle2, QrCode, RotateCcw, ChevronDown } from 'lucide-react';
import { fireRoyalConfetti } from '../hooks/useConfetti';

export default function RsvpSection({ onOpenPass }) {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    attending: 'Yes',
    guests: '2',
    diet: 'Vegetarian',
    events: ['Haldi', 'Sangeet', 'Wedding', 'Reception'],
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEventToggle = (eventVal) => {
    setFormData(prev => {
      const exists = prev.events.includes(eventVal);
      const updated = exists
        ? prev.events.filter(e => e !== eventVal)
        : [...prev.events, eventVal];
      return { ...prev, events: updated };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.contact.trim()) return;

    setIsSubmitted(true);
    fireRoyalConfetti();
  };

  const handleReset = () => {
    setIsSubmitted(false);
  };

  return (
    <section className="section-padding bg-palace-pattern" id="rsvp">
      <div className="container container-narrow">
        <div className="section-header">
          <p className="section-eyebrow">Your Presence is Our Honor</p>
          <h2 className="section-title">Kindly Confirm Your Attendance</h2>
          <p className="section-subtitle">
            Please RSVP by November 15, 2026 so we may prepare the warmest welcome for you in Jaipur.
          </p>
        </div>

        <div className="rsvp-card-container">
          {!isSubmitted ? (
            <form className="royal-rsvp-form" onSubmit={handleSubmit}>
              {/* Name & Contact Row */}
              <div className="form-grid-row">
                <div className="form-field-group">
                  <label htmlFor="guest-name" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    id="guest-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Vikram &amp; Priya Singhania"
                    className="form-text-input"
                    required
                  />
                </div>

                <div className="form-field-group">
                  <label htmlFor="guest-contact" className="form-label">Email or Phone Number *</label>
                  <input
                    type="text"
                    id="guest-contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    placeholder="e.g. priya@example.com / +91 98765 43210"
                    className="form-text-input"
                    required
                  />
                </div>
              </div>

              {/* Attendance Choice */}
              <div className="form-field-group">
                <label className="form-label">Will you be joining us in Jaipur? *</label>
                <div className="attendance-pill-toggle">
                  <label className={`attendance-option ${formData.attending === 'Yes' ? 'is-selected' : ''}`}>
                    <input
                      type="radio"
                      name="attending"
                      value="Yes"
                      checked={formData.attending === 'Yes'}
                      onChange={handleInputChange}
                    />
                    <span>🌸 Joyfully Accepts</span>
                  </label>

                  <label className={`attendance-option ${formData.attending === 'No' ? 'is-selected' : ''}`}>
                    <input
                      type="radio"
                      name="attending"
                      value="No"
                      checked={formData.attending === 'No'}
                      onChange={handleInputChange}
                    />
                    <span>🕊️ Regretfully Declines</span>
                  </label>
                </div>
              </div>

              {formData.attending === 'Yes' && (
                <>
                  {/* Party Size & Dietary Preferences */}
                  <div className="form-grid-row">
                    <div className="form-field-group">
                      <label htmlFor="guest-count" className="form-label">Number of Guests Attending</label>
                      <select
                        id="guest-count"
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="form-select-input"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5+">5+ Guests (Family)</option>
                      </select>
                    </div>

                    <div className="form-field-group">
                      <label htmlFor="guest-diet" className="form-label">Dietary Preference</label>
                      <select
                        id="guest-diet"
                        name="diet"
                        value={formData.diet}
                        onChange={handleInputChange}
                        className="form-select-input"
                      >
                        <option value="Vegetarian">Royal Vegetarian Feast</option>
                        <option value="Jain">Jain Vegetarian</option>
                        <option value="Vegan">Vegan Special</option>
                        <option value="No Restrictions">No Special Restrictions</option>
                      </select>
                    </div>
                  </div>

                  {/* Events Attending Checklist */}
                  <div className="form-field-group">
                    <label className="form-label">Events You Plan to Attend</label>
                    <div className="event-selection-grid">
                      {[
                        { id: 'Haldi', label: 'Mehndi Utsav (Dec 13)' },
                        { id: 'Sangeet', label: 'Ring Ceremony & Sangeet (Dec 13)' },
                        { id: 'Wedding', label: 'The Sacred Saath Phere (Dec 14)' },
                        { id: 'Reception', label: 'The Grand Reception (Dec 14)' }
                      ].map(item => (
                        <label key={item.id} className="event-check-box">
                          <input
                            type="checkbox"
                            checked={formData.events.includes(item.id)}
                            onChange={() => handleEventToggle(item.id)}
                          />
                          <span className="check-custom-mark"></span>
                          <span className="check-text">{item.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Heartfelt Wishes */}
              <div className="form-field-group">
                <label htmlFor="guest-message" className="form-label">
                  Warm Wishes &amp; Blessings for Sameep Vijay &amp; Rakshita Vijay
                </label>
                <textarea
                  id="guest-message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Write a heartfelt note for the couple..."
                  className="form-textarea-input"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn-submit-rsvp btn-royal-gold">
                <Heart size={16} fill="currentColor" />
                <span>Send RSVP With Love 💛</span>
              </button>
            </form>
          ) : (
            /* Animated Confirmation Card */
            <div className="rsvp-confirmation-view">
              <div className="confirmation-lotus-crest">🪷</div>
              <h3 className="confirmation-title">Thank You!</h3>
              <p className="confirmation-greeting">
                Dear <strong>{formData.name}</strong>, your RSVP has been recorded with warm love.<br />
                We cannot wait to celebrate every unforgettable moment with you in Jaipur!
              </p>

              <div className="confirmation-summary-box">
                <div className="summary-line">
                  <span className="summary-label">Status:</span>
                  <span className="summary-val">{formData.attending === 'Yes' ? 'Joyfully Attending 🌸' : 'Regretfully Declines 🕊️'}</span>
                </div>
                {formData.attending === 'Yes' && (
                  <>
                    <div className="summary-line">
                      <span className="summary-label">Party Size:</span>
                      <span className="summary-val">{formData.guests} Guest(s)</span>
                    </div>
                    <div className="summary-line">
                      <span className="summary-label">Dietary:</span>
                      <span className="summary-val">{formData.diet}</span>
                    </div>
                    <div className="summary-line">
                      <span className="summary-label">Venue:</span>
                      <span className="summary-val">The Oberoi Jaipur, Rajasthan</span>
                    </div>
                  </>
                )}
                <div className="summary-line">
                  <span className="summary-label">Dates:</span>
                  <span className="summary-val">December 13–14, 2026</span>
                </div>
              </div>

              <div className="confirmation-actions">
                {formData.attending === 'Yes' && (
                  <button
                    type="button"
                    className="btn-pass-action btn-royal-gold"
                    onClick={() => onOpenPass(formData)}
                  >
                    <QrCode size={18} />
                    <span>View Digital Wedding Pass</span>
                  </button>
                )}

                <button
                  type="button"
                  className="btn-reset-form"
                  onClick={handleReset}
                >
                  <RotateCcw size={14} />
                  <span>Update Response</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Scroll Cue to Footer */}
        <div className="section-scroll-cue">
          <a href="#footer" className="section-scroll-indicator">
            <span>Wedding Monogram</span>
            <ChevronDown size={14} />
          </a>
        </div>
      </div>

      <style>{`
        .rsvp-card-container {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(14px);
          border: 1.5px solid rgba(197, 154, 69, 0.4);
          border-radius: 24px;
          padding: 3rem 2.5rem;
          box-shadow: 0 20px 50px rgba(115, 26, 42, 0.08);
          max-width: 720px;
          margin: 0 auto;
        }

        .royal-rsvp-form {
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
        }

        .form-grid-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .form-field-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          text-align: left;
        }

        .form-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--royal-maroon-dark);
          letter-spacing: 0.02em;
        }

        .form-text-input,
        .form-select-input,
        .form-textarea-input {
          width: 100%;
          padding: 0.85rem 1.1rem;
          border: 1.5px solid rgba(197, 154, 69, 0.35);
          border-radius: 12px;
          background: #FAF6EF;
          color: var(--royal-charcoal);
          font-family: var(--font-sans);
          font-size: 0.92rem;
          transition: all 0.25s ease;
        }

        .form-text-input:focus,
        .form-select-input:focus,
        .form-textarea-input:focus {
          outline: none;
          border-color: var(--royal-gold);
          background: #FFFFFF;
          box-shadow: 0 0 0 3px rgba(197, 154, 69, 0.2);
        }

        .attendance-pill-toggle {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .attendance-option {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.85rem 1rem;
          border: 1.5px solid rgba(197, 154, 69, 0.35);
          border-radius: 12px;
          background: #FAF6EF;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--royal-charcoal);
          transition: all 0.25s ease;
        }

        .attendance-option input {
          display: none;
        }

        .attendance-option.is-selected {
          background: var(--royal-maroon);
          color: #FFF3B0;
          border-color: #ECC874;
          box-shadow: 0 6px 18px rgba(115, 26, 42, 0.25);
        }

        .event-selection-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.8rem;
        }

        .event-check-box {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.65rem 0.9rem;
          background: #FAF6EF;
          border: 1px solid rgba(197, 154, 69, 0.25);
          border-radius: 10px;
          cursor: pointer;
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--royal-charcoal);
          transition: all 0.2s ease;
        }

        .event-check-box input {
          accent-color: var(--royal-gold);
          width: 16px;
          height: 16px;
        }

        .event-check-box:hover {
          border-color: var(--royal-gold);
        }

        .btn-submit-rsvp {
          width: 100%;
          padding: 1.05rem;
          font-size: 1rem;
          margin-top: 0.5rem;
        }

        .rsvp-confirmation-view {
          text-align: center;
          padding: 1.5rem 0;
          animation: fadeIn 0.4s ease-out;
        }

        .confirmation-lotus-crest {
          font-size: 3rem;
          filter: drop-shadow(0 4px 10px rgba(197, 154, 69, 0.4));
          margin-bottom: 0.5rem;
        }

        .confirmation-title {
          font-family: var(--font-serif);
          font-size: 2.4rem;
          color: var(--royal-maroon);
          margin-bottom: 0.6rem;
          font-weight: 700;
        }

        .confirmation-greeting {
          font-size: 1.02rem;
          color: var(--royal-muted);
          line-height: 1.6;
          max-width: 520px;
          margin: 0 auto 1.8rem;
        }

        .confirmation-greeting strong {
          color: var(--royal-maroon-dark);
        }

        .confirmation-summary-box {
          background: #FAF6EF;
          border: 1.5px solid rgba(197, 154, 69, 0.35);
          border-radius: 16px;
          padding: 1.5rem 1.8rem;
          max-width: 480px;
          margin: 0 auto 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          text-align: left;
        }

        .summary-line {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          border-bottom: 1px dashed rgba(197, 154, 69, 0.25);
          padding-bottom: 0.4rem;
        }

        .summary-line:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .summary-label {
          color: var(--royal-muted);
          font-weight: 500;
        }

        .summary-val {
          color: var(--royal-maroon-dark);
          font-weight: 600;
        }

        .confirmation-actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .btn-pass-action {
          width: 100%;
          max-width: 320px;
        }

        .btn-reset-form {
          background: none;
          border: none;
          color: var(--royal-muted);
          font-size: 0.82rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          transition: color 0.2s ease;
        }

        .btn-reset-form:hover {
          color: var(--royal-maroon);
        }

        @media (max-width: 650px) {
          .rsvp-card-container {
            padding: 2rem 1.4rem;
          }
          .form-grid-row {
            grid-template-columns: 1fr;
          }
          .attendance-pill-toggle {
            grid-template-columns: 1fr;
          }
          .event-selection-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
