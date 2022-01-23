import normalizeNumberString from './normalizeNumberString'

export default function isDateStringValue(s: string): boolean {
  if (!(s.length === 2 || s.length === 4)) return false

  const value = parseInt(normalizeNumberString(s))

  return !isNaN(value)
}
