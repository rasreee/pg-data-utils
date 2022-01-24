import { isPgTime, parsePgTime } from '../src'

describe('time', () => {
  describe('isPgTime', () => {
    it('valid time with no milliseconds', () => {
      const input = ' 22:22:22'
      expect(isPgTime(input)).toBeTruthy()
    })

    it('valid time with milliseconds', () => {
      const input = '22:22:22:11'
      expect(isPgTime(input)).toBeTruthy()
    })

    it('invalid time #1', () => {
      const input = '2999'
      expect(isPgTime(input)).toBeFalsy()
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
})
