import { PG_TIME_FORMAT } from './constants'
import format from 'date-fns/format'
import { Time } from './types'
import invariant from 'tiny-invariant'

export function isTime(s: string): s is Time {
  return s.includes(':') && s.split(':').length >= 2 && s.split(':').every((value) => isDateStringValue(value))
}

export default function formatPgTime(date: Date): Time {
  const pgTime = format(date, PG_TIME_FORMAT)

  invariant(isTime(pgTime))

  return pgTime
}
