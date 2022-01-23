import parsePgTimestamp from './parsePgTimestamp'

describe('parsePgTimestamp', () => {
  it('valid timestamp', () => {
    const date = new Date(2022, 1, 23, 22, 1, 1)
    const result = parsePgTimestamp('2022-02-23 22:01:01')
    expect(result).toEqual(date)
  })

  it('invalid timestamp', () => {
    expect(parsePgTimestamp.bind(null, '2022-02-23')).toThrow()
  })
})
