export default function prefixWithZero(value, onlySingleFigures = true) {
  let number = Number(value)

  if (!onlySingleFigures) return '0' + number
  return onlySingleFigures && number < 10 ? '0' + number : '' + number
}
