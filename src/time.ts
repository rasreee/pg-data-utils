import invariant from 'tiny-invariant'

export type PgTimeString = `${string}:${string}:${string}` | `${string}:${string}:${string}:${string}`

export const PG_TIME_FORMAT = 'HH:mm:ss'

export const pgTimePatternNoMs = /(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)/g
export const pgTimePatternWithMs = /(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d):(?:[012345]\d)/g

export function isPgTimeString(s: string): s is PgTimeString {
  return pgTimePatternNoMs.test(s) || pgTimePatternWithMs.test(s)
}

export type TimeValues = { hours: number; minutes: number; seconds: number; ms?: number }

export function parsePgTime(s: string): TimeValues {
  invariant(isPgTimeString(s), 'Invalid time')
  const splits = s.split(':')

  const [hours, minutes, seconds, ms] = splits.map((value) => parseInt(value))

  const result = { hours, minutes, seconds, ms }

  return result
}
