import type { Flashcard } from "../types/flashcard"

export function calculateNextReview(
  card: Flashcard,
  quality: number // 0–5
) {
  let { interval, easeFactor } = card;

  easeFactor = Math.max(
    1.3,
    easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  );

  interval = quality < 3 ? 1 : Math.round(interval * easeFactor);

  return {
    ...card,
    interval,
    easeFactor,
    nextReview: Date.now() + interval * 24 * 60 * 60 * 1000
  };
}
