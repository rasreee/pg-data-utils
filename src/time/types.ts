export type PgTime = `${string}:${string}:${string}` | `${string}:${string}:${string}:${string}`

export type TimeValues = { hours: number; minutes: number; seconds: number; ms?: number }
