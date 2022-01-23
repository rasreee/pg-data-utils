import isTimestamp from './isTimestamp'

describe('isTimestamp', () => {
  it('valid timestamp #1', () => {
    const input = '2022-12-11 22:22:22'
    expect(isTimestamp(input)).toBeTruthy()
  })

  it('invalid timestamp #1', () => {
    const input = '2022-12-11'
    expect(isTimestamp(input)).toBeFalsy()
  })

  it('invalid timestamp #1', () => {
    const input = '22:22:22'
    expect(isTimestamp(input)).toBeFalsy()
  })
})
