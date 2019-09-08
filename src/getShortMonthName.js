import monthNames from './monthNames'

export default function getShortMonthName(monthName) {
  if (monthNames.indexOf(monthName) === -1) return
  return monthName.substring(0, 3)
}
