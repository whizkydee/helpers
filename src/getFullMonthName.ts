import findIndex from './findIndex'
import monthNames, { MonthNames } from './monthNames'
import shortMonthNames, { ShortMonthNames } from './shortMonthNames'

export default function getFullMonthName(
  value: Date | ShortMonthNames = new Date()
): MonthNames | null {
  if (value instanceof Date) return monthNames[value.getMonth()]
  const index = findIndex(shortMonthNames.slice(), name => name === value)
  if (index === -1) return null
  return monthNames[index]
}
