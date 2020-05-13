const shortMonthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
] as const

type ShortMonthNames = typeof shortMonthNames[number]
export { shortMonthNames as default, ShortMonthNames }
