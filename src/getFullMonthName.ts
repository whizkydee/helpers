import findIndex from './findIndex'
import monthNames, { MonthNames } from './monthNames'
import shortMonthNames, { ShortMonthNames } from './shortMonthNames'

export default function getFullMonthName(
  value: Date | ShortMonthNames
): MonthNames | null {
  if (value instanceof Date) return monthNames[value.getMonth()]
  const index = findIndex(
    shortMonthNames as any,
    (name: ShortMonthNames) => name === value
  )
  if (index === -1) return null
  return monthNames[index]
}
