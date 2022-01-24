import { pgDatePattern, PG_DATE_FORMAT } from '../date'
import { pgTimePatternNoMs, pgTimePatternWithMs, PG_TIME_FORMAT } from '../time'
import concatRegExp from '../_lib/concatRegExp'

export const PG_TIMESTAMP_FORMAT = `${PG_DATE_FORMAT} ${PG_TIME_FORMAT}`

export const pgTimestampPatternNoMs = concatRegExp(pgDatePattern, /\s/, pgTimePatternNoMs)
export const pgTimestampPatternWithMs = concatRegExp(pgDatePattern, /\s/, pgTimePatternWithMs)
