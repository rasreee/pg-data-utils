import invariant from 'tiny-invariant'
import { isPgDate } from './isPgDate'
import { DateValues } from './types'

export function parsePgDate(s: string): DateValues {
  invariant(isPgDate(s), 'Invalid pgDate')
  const [year, month, day] = s.split('-').map((value) => parseInt(value))

  const result = { year, month, day }

  return result
}
