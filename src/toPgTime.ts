import {PG_TIME_FORMAT} from "./constants"
import {format} from "./lib/format"


export function toPgTime(date: Date): string {
  const pgTime = format(date, PG_TIME_FORMAT)

  return pgTime
}
