import weekdays, { WeekDays } from './weekdays'
import findIndex from './findIndex'
import shortWeekdays, { ShortWeekdays } from './shortWeekdays'

export default function getFullWeekday(
  value: Date | ShortWeekdays
): WeekDays | null {
  if (value instanceof Date) return weekdays[value.getDay()]
  const index = findIndex(
    shortWeekdays as any,
    (name: ShortWeekdays) => name === value
  )
  if (index === -1) return null
  return weekdays[index]
}
