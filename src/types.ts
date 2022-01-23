export type TimeString = `${string}:${string}:${string}` | `${string}:${string}:${string}:${string}`

export type CalendarDate = `${string}-${string}-${string}`

export type TimestampString = `${CalendarDate} ${TimeString}`

export type Time = { hours: number; minutes: number; seconds: number; ms?: number }
