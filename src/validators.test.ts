import { isTimestampString, isTimeString } from './validators'

describe('validators', () => {
  describe('isTimestampString', () => {
    it('valid timestamp #1', () => {
      const input = '2022-12-11 22:22:22'
      expect(isTimestampString(input)).toBeTruthy()
    })

    it('invalid timestamp #1', () => {
      const input = '2022-12-11'
      expect(isTimestampString(input)).toBeFalsy()
    })

    it('invalid timestamp #1', () => {
      const input = '22:22:22'
      expect(isTimestampString(input)).toBeFalsy()
    })
  })

  describe('isTimeString', () => {
    it('no milliseconds', () => {
      const input = ' 22:22:22'
      expect(isTimeString(input)).toBeTruthy()
    })

    it('with milliseconds', () => {
      const input = '22:22:22:11'
      expect(isTimeString(input)).toBeTruthy()
    })

    it('invalid time #1', () => {
      const input = '2999'
      expect(isTimeString(input)).toBeFalsy()
    })
  })
})
