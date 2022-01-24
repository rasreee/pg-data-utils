export type PgDate = `${string}-${string}-${string}`

export type DateValues = { year: number; month: number; day: number }

export type PgTime = `${string}:${string}:${string}` | `${string}:${string}:${string}:${string}`

export type TimeValues = { hours: number; minutes: number; seconds: number; ms?: number }

export type PgTimestamp = `${PgDate} ${PgTime}`

export type TimestampValues = DateValues & TimeValues
