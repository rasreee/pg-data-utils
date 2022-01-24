import invariant from 'tiny-invariant'
import { isPgTime } from './isPgTime'
import { TimeValues } from './types'

export function parsePgTime(s: string): TimeValues {
  invariant(isPgTime(s), 'Invalid time')
  const splits = s.split(':')

  const [hours, minutes, seconds, ms] = splits.map((value) => parseInt(value))

  const result = { hours, minutes, seconds, ms }

  return result
}
