import findIndex from './findIndex'
import monthNames from './monthNames'
import shortMonthNames from './shortMonthNames'

const getFullMonthName = monthName => {
  const index = findIndex(shortMonthNames, name => name === monthName)
  if (index === -1) return
  return monthNames[index]
}

export default getFullMonthName
