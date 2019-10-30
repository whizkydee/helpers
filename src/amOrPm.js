export default function amOrPm(date) {
  let hours = date.getHours()
  let minutes = date.getMinutes()
  const period = hours >= 12 ? 'pm' : 'am'
  return (
    (hours = (hours %= 12) || 12) +
    ':' +
    (minutes = minutes < 10 ? '0' + minutes : minutes) +
    ' ' +
    period
  )
}
