import { isPgTimestamp, parsePgTimestamp } from 'src'

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

  describe('parsePgTimestamp', () => {
    it('valid timestamp', () => {
      const timestamp = { year: 2022, month: 2, day: 23, hours: 22, minutes: 1, seconds: 1, ms: 0 }
      const result = parsePgTimestamp('2022-02-23 22:01:01')
      expect(result).toEqual(timestamp)
    })

    it('valid timestamp with milliseconds', () => {
      const timestamp = { year: 2022, month: 2, day: 23, hours: 22, minutes: 1, seconds: 1, ms: 55 }
      const result = parsePgTimestamp('2022-02-23 22:01:01:55')
      expect(result).toEqual(timestamp)
    })

    it('invalid timestamp', () => {
      expect(parsePgTimestamp.bind(null, '2022-02-23')).toThrow()
    })
  })
})
