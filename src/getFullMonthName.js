import findIndex from './findIndex'
import monthNames from './monthNames'
import shortMonthNames from './shortMonthNames'

export default function getFullMonthName(monthName) {
  const index = findIndex(shortMonthNames, name => name === monthName)
  if (index === -1) return
  return monthNames[index]
}
