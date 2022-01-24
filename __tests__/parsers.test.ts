import { parsePgCalendarDate, parsePgTime, parsePgTimestamp } from '../src/parsers'

describe('parsers', () => {
  describe('parsePgCalendarDate', () => {
    it('valid date', () => {
      const expected = { year: 2000, month: 2, day: 11 }
      const result = parsePgCalendarDate('2000-02-11')
      expect(result).toEqual(expected)
    })

    it('invalid date', () => {
      expect(parsePgCalendarDate.bind(null, '2023')).toThrow()
    })
  })

  describe('parsePgTime', () => {
    it('valid time', () => {
      const time = { hours: 0, minutes: 0, seconds: 1 }
      const result = parsePgTime('00:00:01')
      expect(result).toEqual(time)
    })

    it('valid time with milliseconds', () => {
      const time = { hours: 0, minutes: 0, seconds: 1, ms: 11 }
      const result = parsePgTime('00:00:01:11')
      expect(result).toEqual(time)
    })

    it('invalid time', () => {
      expect(parsePgTime.bind(null, '2022-02-23')).toThrow()
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
