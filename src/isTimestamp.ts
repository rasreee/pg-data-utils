import { timestampPattern } from './patterns'
import { Timestamp } from './types'

export default function isTimestamp(s: string): s is Timestamp {
  return timestampPattern.test(s)
}
