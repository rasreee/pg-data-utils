import { isPgTimestamp } from '../isPgTimestamp'
import { parsePgTimestamp, parsePgTimestampValues } from '../parsePgTimestamp'

describe('timestamp', () => {
  describe('isPgTimestamp', () => {
    it('valid timestamp with no milliseconds', () => {
      const input = '2022-12-11 22:22:22'
      expect(isPgTimestamp(input)).toBeTruthy()
    })

    it('valid timestamp with milliseconds', () => {
      const input = '2022-12-11 22:22:22:22'
      expect(isPgTimestamp(input)).toBeTruthy()
    })

    it('invalid timestamp #1', () => {
      const input = '2022-12-11'
      expect(isPgTimestamp(input)).toBeFalsy()
    })

    it('invalid timestamp #1', () => {
      const input = '22:22:22'
      expect(isPgTimestamp(input)).toBeFalsy()
    })
  })

  describe('parsePgTimestampValues', () => {
    it('valid timestamp', () => {
      const timestamp = { year: 2022, month: 2, day: 23, hours: 22, minutes: 1, seconds: 1, ms: 0 }
      const result = parsePgTimestampValues('2022-02-23 22:01:01')
      expect(result).toEqual(timestamp)
    })

    it('valid timestamp with milliseconds', () => {
      const timestamp = { year: 2022, month: 2, day: 23, hours: 22, minutes: 1, seconds: 1, ms: 55 }
      const result = parsePgTimestampValues('2022-02-23 22:01:01:55')
      expect(result).toEqual(timestamp)
    })

    it('invalid timestamp', () => {
      expect(parsePgTimestampValues.bind(null, '2022-02-23')).toThrow()
    })
  })

  describe('parsePgTimestamp', () => {
    it('valid timestamp no milliseconds', () => {
      const expected = new Date(2000, 0, 1, 1, 1, 1)
      const result = parsePgTimestamp('2000-01-01 01:01:01')
      expect(result).toEqual(expected)
    })

    it('valid timestamp with milliseconds', () => {
      const expected = new Date(2000, 0, 1, 1, 1, 1, 1)
      const result = parsePgTimestamp('2000-01-01 01:01:01:01')
      expect(result).toEqual(expected)
    })

    it('invalid timestamp', () => {
      expect(parsePgTimestamp.bind(null, '01:01')).toThrow()
    })
  })
})
