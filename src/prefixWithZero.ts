export default function prefixWithZero(
  value: string | number,
  onlySingleFigures = true
): string {
  let number = Number(value)

  if (!onlySingleFigures) return '0' + number
  return String(number < 10 ? '0' + number : number)
}
