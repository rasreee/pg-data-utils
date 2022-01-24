import { formatPgTime } from './formatters'

describe('formatters', () => {
  describe('formatPgTime', () => {
    it('formats to pg time string', () => {
      expect(formatPgTime(new Date(0, 0, 0, 10, 32, 55))).toEqual('10:32:55')
    })
  })
})
