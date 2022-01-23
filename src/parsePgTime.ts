import invariant from 'tiny-invariant'
import { Time } from './types'
import { isTimeString } from './validators'

export default function parsePgTime(s: string): Time {
  invariant(isTimeString(s), 'Invalid time')
  const splits = s.split(':')

  const [hours, minutes, seconds, ms] = splits.map((value) => parseInt(value))

  const result = { hours, minutes, seconds, ms }

  return result
}
