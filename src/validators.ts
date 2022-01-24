import {
  calendarDatePattern,
  timePatternNoMs,
  timePatternWithMs,
  timestampPatternNoMs,
  timestampPatternWithMs
} from './patterns'
import { CalendarDateString, TimestampString, TimeString } from './types'

export function isTimestampString(s: string): s is TimestampString {
  return timestampPatternNoMs.test(s) || timestampPatternWithMs.test(s)
}

export function isTimeString(s: string): s is TimeString {
  return timePatternNoMs.test(s) || timePatternWithMs.test(s)
}

export function isCalendarDateString(s: string): s is CalendarDateString {
  return calendarDatePattern.test(s)
}
