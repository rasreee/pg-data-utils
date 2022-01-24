import invariant from 'tiny-invariant'
import { DateValues, pgDatePattern, PgDateString, PG_DATE_FORMAT } from './date'
import { PgTimeString, PG_TIME_FORMAT, pgTimePatternNoMs, pgTimePatternWithMs, TimeValues } from './time'
import concatRegExp from './_lib/concatRegExp'

export type PgTimestampString = `${PgDateString} ${PgTimeString}`

export const PG_TIMESTAMP_FORMAT = `${PG_DATE_FORMAT} ${PG_TIME_FORMAT}`

export const pgTimestampPatternNoMs = concatRegExp(pgDatePattern, /\s/, pgTimePatternNoMs)
export const pgTimestampPatternWithMs = concatRegExp(pgDatePattern, /\s/, pgTimePatternWithMs)

export function isPgTimestampString(s: string): s is PgTimestampString {
  return pgTimestampPatternNoMs.test(s) || pgTimestampPatternWithMs.test(s)
}

export type TimestampValues = DateValues & TimeValues

export function parsePgTimestamp(timestamp: string): TimestampValues {
  invariant(isPgTimestampString(timestamp), 'Invalid timestamp')
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
