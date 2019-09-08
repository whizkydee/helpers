import weekdays from './weekdays'

export default function getShortWeekday(weekday) {
  if (weekdays.indexOf(weekday) === -1) return
  return weekday.substring(0, 3)
}
