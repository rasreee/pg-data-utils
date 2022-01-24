import setDate from 'date-fns/setDate'
import setMonth from 'date-fns/setMonth'
import setYear from 'date-fns/setYear'
import { getBaseDate } from '../_lib/getBaseDate'
import invariant from 'tiny-invariant'
import { isPgDate } from './isPgDate'
import { DateValues } from './types'

export function parsePgDateValues(s: string): DateValues {
  invariant(isPgDate(s), 'Invalid pgDate')
  const [year, month, day] = s.split('-').map((value) => parseInt(value))

  const result = { year, month, day }

  return result
}

export function parsePgDate(s: string, referenceDate = getBaseDate()): Date {
  const { year, month, day } = parsePgDateValues(s)

  let date = setYear(referenceDate, year)
  date = setMonth(date, month - 1)
  date = setDate(date, day)

  return date
}
