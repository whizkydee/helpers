import weekdays, { WeekDays } from './weekdays'
import { ShortWeekdays } from './shortWeekdays'

export default function getShortWeekday(
  value: Date | WeekDays = new Date()
): ShortWeekdays | null {
  let result = value
  if (value instanceof Date) result = weekdays[value.getDay()]
  if (weekdays.indexOf(result as WeekDays) === -1) return null
  return (result as WeekDays).substring(0, 3) as ShortWeekdays
}
