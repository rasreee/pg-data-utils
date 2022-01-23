import { isTimestampString } from './validators'

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
