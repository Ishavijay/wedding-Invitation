import confetti from 'canvas-confetti';

export function fireRoyalConfetti() {
  // Royal colors: Gold, Marigold Orange, Ruby Red, Rose Pink, Emerald Green
  const colors = ['#C59A45', '#E9C77C', '#FF9F1C', '#E4007C', '#304C3A', '#FFF8ED'];

  // Left burst
  confetti({
    particleCount: 60,
    angle: 60,
    spread: 55,
    origin: { x: 0, y: 0.7 },
    colors
  });

  // Right burst
  confetti({
    particleCount: 60,
    angle: 120,
    spread: 55,
    origin: { x: 1, y: 0.7 },
    colors
  });

  // Center star burst
  setTimeout(() => {
    confetti({
      particleCount: 90,
      spread: 100,
      origin: { y: 0.6 },
      colors,
      shapes: ['circle', 'square'],
      scalar: 1.2
    });
  }, 200);
}
