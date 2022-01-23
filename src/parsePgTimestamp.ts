import invariant from 'tiny-invariant'
import isTimestamp from './isTimestamp'

export default function parsePgTimestamp(timestamp: string): Date {
  invariant(isTimestamp(timestamp), 'Invalid timestamp')
  const result = new Date(timestamp)

  return result
}
