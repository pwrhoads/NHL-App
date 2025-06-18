export const StatTypeKeys = {
    BlockedShot: "blocked-shot",
    Faceoff: "faceoff",
} as const;

export type StatTypeKey = typeof StatTypeKeys[keyof typeof StatTypeKeys]