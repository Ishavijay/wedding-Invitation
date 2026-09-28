import { useState, useEffect } from 'react';

// Wedding date: December 11, 2026 17:00:00 IST
const WEDDING_DATE = new Date('2026-12-11T17:00:00+05:30').getTime();

export function useCountdown(targetDate = WEDDING_DATE) {
  const [timeLeft, setTimeLeft] = useState(() => calculateTime(targetDate));

  function calculateTime(target) {
    const now = Date.now();
    const diff = Math.max(0, target - now);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return {
      days: String(days).padStart(2, '0'),
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0'),
      isExpired: diff <= 0,
      totalRemaining: diff
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTime(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}
