import { isPgDateString, parsePgDate } from 'src'

describe('date', () => {
  describe('isPgDateString', () => {
    it('valid date', () => {
      const input = ' 2022-01-22'
      expect(isPgDateString(input)).toBeTruthy()
    })

    it('invalid date #1', () => {
      const input = '22-22-22'
      expect(isPgDateString(input)).toBeFalsy()
    })
  })

  describe('parsePgDate', () => {
    it('valid date', () => {
      const expected = { year: 2000, month: 2, day: 11 }
      const result = parsePgDate('2000-02-11')
      expect(result).toEqual(expected)
    })

    it('invalid date', () => {
      expect(parsePgDate.bind(null, '2023')).toThrow()
    })
  })
})
