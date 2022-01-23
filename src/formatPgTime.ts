import { PG_TIME_FORMAT } from './constants'
import format from 'date-fns/format'

export default function formatPgTime(date: Date): string {
  const pgTime = format(date, PG_TIME_FORMAT)

  return pgTime
}
