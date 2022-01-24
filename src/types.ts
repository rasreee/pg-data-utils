export type TimeString = `${string}:${string}:${string}` | `${string}:${string}:${string}:${string}`

export type CalendarDateString = `${string}-${string}-${string}`

export type TimestampString = `${CalendarDateString} ${TimeString}`

export type Time = { hours: number; minutes: number; seconds: number; ms?: number }

export type CalendarDate = { year: number; month: number; day: number }

export type Timestamp = CalendarDate & Time
