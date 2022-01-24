import setHours from 'date-fns/setHours'
import setMilliseconds from 'date-fns/setMilliseconds'
import setMinutes from 'date-fns/setMinutes'
import setSeconds from 'date-fns/setSeconds'
import invariant from 'tiny-invariant'
import { isPgTime } from './isPgTime'
import { getBaseDate } from '../_lib/getBaseDate'
import { TimeValues } from './types'

export function parsePgTimeValues(s: string): TimeValues {
  invariant(isPgTime(s), 'Invalid time')
  const splits = s.split(':')

  const [hours, minutes, seconds, ms] = splits.map((value) => parseInt(value))

  const result = { hours, minutes, seconds, ms }

  return result
}

export function parsePgTime(s: string, referenceDate = getBaseDate()): Date {
  const { hours, minutes, seconds, ms } = parsePgTimeValues(s)

  let date = setHours(referenceDate, hours)
  date = setMinutes(date, minutes)
  date = setSeconds(date, seconds)
  date = setMilliseconds(date, ms ?? 0)

  return date
}
