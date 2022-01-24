import { PG_TIME_FORMAT } from './constants'
import format from 'date-fns/format'
import { TimeString } from './types'
import invariant from 'tiny-invariant'
import { isTimeString } from './validators'

export function formatPgTime(date: Date): TimeString {
  const pgTime = format(date, PG_TIME_FORMAT)

  invariant(isTimeString(pgTime))

  return pgTime
}
