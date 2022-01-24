import { PgTime, TimeValues } from '../time'
import { DateValues, PgDate } from '../date'

export type PgTimestamp = `${PgDate} ${PgTime}`

export type TimestampValues = DateValues & TimeValues
