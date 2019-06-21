import weekdays from './weekdays'

const getShortWeekday = weekday => {
  if (weekdays.indexOf(weekday) === -1) return
  return weekday.substring(0, 3)
}

export default getShortWeekday
