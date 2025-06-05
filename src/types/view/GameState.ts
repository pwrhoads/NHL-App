export const GameState = {
  Future: "Future",
  Live: "Live",
  Finished: "Finished",
} as const;

export type GameState = typeof GameState[keyof typeof GameState];