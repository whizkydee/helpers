export default function prefixWithZero(value, onlySingleFigures = true) {
  let number = Number(value)

  if (!onlySingleFigures) return '0' + number
  return number < 10 ? '0' + number : '' + number
}
