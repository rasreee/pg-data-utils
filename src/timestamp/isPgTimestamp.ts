import { pgTimestampPatternNoMs, pgTimestampPatternWithMs } from './constants'
import { PgTimestamp } from './types'

export function isPgTimestamp(s: string): s is PgTimestamp {
  return pgTimestampPatternNoMs.test(s) || pgTimestampPatternWithMs.test(s)
}
