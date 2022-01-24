import invariant from 'tiny-invariant'

export type PgDateString = `${string}-${string}-${string}`

export const PG_DATE_FORMAT = 'yyyy-MM-dd'

export const pgDatePattern = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/

export function isPgDateString(s: string): s is PgDateString {
  return pgDatePattern.test(s)
}

export type DateValues = { year: number; month: number; day: number }

export function parsePgDate(s: string): DateValues {
  invariant(isPgDateString(s), 'Invalid pgDateString')
  const [year, month, day] = s.split('-').map((value) => parseInt(value))

  const result = { year, month, day }

  return result
}
