import { PG_TIME_FORMAT } from './constants'
import parse from 'date-fns/parse'

export default function parsePgTime(time: string): Date {
  const result = parse(time.slice(0, 8), PG_TIME_FORMAT, new Date())

  return result
}
