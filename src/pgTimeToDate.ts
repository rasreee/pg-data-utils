import { PG_TIME_FORMAT } from './constants'
import { parse } from './lib/parse'

export const pgTimeToDate = (time: string): Date => {
  const result = parse(time.slice(0, 8), PG_TIME_FORMAT, new Date())

  return result
}
