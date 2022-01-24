import invariant from 'tiny-invariant'
import { CalendarDate, Time, Timestamp } from './types'
import { isCalendarDateString, isTimestampString, isTimeString } from './validators'

export function parsePgCalendarDate(s: string): CalendarDate {
  invariant(isCalendarDateString(s), 'Invalid calendarDateString')
  const [year, month, day] = s.split('-').map((value) => parseInt(value))

  const result = { year, month, day }

  return result
}

export function parsePgTimestamp(timestamp: string): Timestamp {
  invariant(isTimestampString(timestamp), 'Invalid timestamp')
  const result = new Date(timestamp)

  return {
    year: result.getFullYear(),
    month: result.getMonth() + 1,
    day: result.getDate(),
    hours: result.getHours(),
    minutes: result.getMinutes(),
    seconds: result.getSeconds(),
    ms: result.getMilliseconds()
  }
}

export function parsePgTime(s: string): Time {
  invariant(isTimeString(s), 'Invalid time')
  const splits = s.split(':')

  const [hours, minutes, seconds, ms] = splits.map((value) => parseInt(value))

  const result = { hours, minutes, seconds, ms }

  return result
}
