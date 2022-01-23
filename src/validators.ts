import { timePattern, timestampPattern } from './patterns'
import { TimestampString, TimeString } from './types'

export function isTimestampString(s: string): s is TimestampString {
  return timestampPattern.test(s)
}

export function isTimeString(s: string): s is TimeString {
  return timePattern.test(s)
}
