import monthNames from './monthNames'

const getShortMonthName = monthName => {
  if (monthNames.indexOf(monthName) === -1) return
  return monthName.substring(0, 3)
}

export default getShortMonthName
