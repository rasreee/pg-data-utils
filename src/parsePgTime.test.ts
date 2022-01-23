import parsePgTime from './parsePgTime'

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
