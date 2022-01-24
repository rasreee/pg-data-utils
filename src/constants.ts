import { concatRegExp } from './_lib/concatRegExp'

export const PG_DATE_FORMAT = 'yyyy-MM-dd'

export const pgDatePattern = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/

export const PG_TIME_FORMAT = 'HH:mm:ss'

export const pgTimePatternNoMs = /(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)/g
export const pgTimePatternWithMs = /(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d):(?:[012345]\d)/g

export const PG_TIMESTAMP_FORMAT = `${PG_DATE_FORMAT} ${PG_TIME_FORMAT}`

export const pgTimestampPatternNoMs = concatRegExp(pgDatePattern, /\s/, pgTimePatternNoMs)
export const pgTimestampPatternWithMs = concatRegExp(pgDatePattern, /\s/, pgTimePatternWithMs)
