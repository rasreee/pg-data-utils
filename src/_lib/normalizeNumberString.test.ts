import normalizeNumberString from './normalizeNumberString'

describe('normalizeNumberString', () => {
  it('works given 0000', () => {
    const input = '0000'
    expect(normalizeNumberString(input)).toEqual('0')
  })

  it('works given 00001', () => {
    const input = '0001'
    expect(normalizeNumberString(input)).toEqual('1')
  })

  it('works given 2022', () => {
    const input = '2022'
    expect(normalizeNumberString(input)).toEqual('2022')
  })

  it('works given 22', () => {
    const input = '22'
    expect(normalizeNumberString(input)).toEqual('22')
  })
})
