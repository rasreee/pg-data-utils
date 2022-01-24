import { pgTimePatternNoMs, pgTimePatternWithMs } from './constants'
import { PgTime } from './types'

export function isPgTime(s: string): s is PgTime {
  return pgTimePatternNoMs.test(s) || pgTimePatternWithMs.test(s)
}
