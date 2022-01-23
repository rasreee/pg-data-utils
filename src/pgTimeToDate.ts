import {PG_TIME_FORMAT} from "./constants"
import {format} from "./lib/parse"

export const pgTimeToDate = (time: string): Date => {
  const result = parsed(time.slice(0, 8), PG_TIME_FORMAT, new Date())

  return result
}

