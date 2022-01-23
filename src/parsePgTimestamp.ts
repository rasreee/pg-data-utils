import invariant from 'tiny-invariant'
import isTimestampString from './isTimestampString'

export default function parsePgTimestamp(timestamp: string): Date {
  invariant(isTimestampString(timestamp), 'Invalid timestamp')
  const result = new Date(timestamp)

  return result
}
