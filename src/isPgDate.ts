import { pgDatePattern } from './constants'
import { PgDate } from './types'

export function isPgDate(s: string): s is PgDate {
  return pgDatePattern.test(s)
}
