import isDateStringValue from './isDateStringValue'

describe('isDateStringValue', () => {
  it('returns false if the given value is shorter than 2 characters', () => {
    const input = '0'
    expect(isDateStringValue(input)).toBeFalsy()
  })

  it('returns false if the given value contains a non-numeric character', () => {
    const input = '0A'
    expect(isDateStringValue(input)).toBeFalsy()
  })

  it('returns false if the given value is longer than 2 characters', () => {
    const input = '000'
    expect(isDateStringValue(input)).toBeFalsy()
  })

  it('returns true if the given value is valid', () => {
    const input = '00'
    expect(isDateStringValue(input)).toBeTruthy()
  })

  it('returns false if the given value is invalid', () => {
    const input = '61'
    expect(isDateStringValue(input)).toBeFalsy()
  })
})
