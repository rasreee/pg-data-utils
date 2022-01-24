import setDate from 'date-fns/setDate'
import setHours from 'date-fns/setHours'
import setMilliseconds from 'date-fns/setMilliseconds'
import setMinutes from 'date-fns/setMinutes'
import setMonth from 'date-fns/setMonth'
import setSeconds from 'date-fns/setSeconds'
import setYear from 'date-fns/setYear'
import invariant from 'tiny-invariant'
import { isPgTimestamp } from './isPgTimestamp'
import { getBaseDate } from '../_lib/getBaseDate'
import { TimestampValues } from './types'

export function parsePgTimestampValues(timestamp: string): TimestampValues {
  invariant(isPgTimestamp(timestamp), 'Invalid timestamp')
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

export function parsePgTimestamp(s: string, referenceDate = getBaseDate()): Date {
  const { year, month, day, hours, minutes, seconds, ms } = parsePgTimestampValues(s)

  let date = setYear(referenceDate, year)
  date = setMonth(date, month - 1)
  date = setDate(date, day)
  date = setHours(date, hours)

  date = setMinutes(date, minutes)
  date = setSeconds(date, seconds)
  date = setMilliseconds(date, ms ?? 0)

  return date
}
