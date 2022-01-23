import invariant from 'tiny-invariant'
import { timestampPattern } from './patterns'

export default function parsePgTimestamp(timestamp: string): Date {
  invariant(timestampPattern.test(timestamp), 'Invalid timestamp')
  const result = new Date(timestamp)

  return result
}
