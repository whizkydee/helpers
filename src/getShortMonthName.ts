import monthNames, { MonthNames } from './monthNames'
import { ShortMonthNames } from './shortMonthNames'

export default function getShortMonthName(
  value: Date | MonthNames = new Date()
): ShortMonthNames | null {
  let result: typeof value = value
  if (value instanceof Date) result = monthNames[value.getMonth()]
  if (monthNames.indexOf(result as MonthNames) === -1) return null
  return (result as any).substring(0, 3)
}
