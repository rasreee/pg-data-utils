import invariant from 'tiny-invariant'
import { isPgTimestamp } from './isPgTimestamp'
import { TimestampValues } from './types'

export function parsePgTimestamp(timestamp: string): TimestampValues {
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
