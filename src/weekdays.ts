const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
] as const

type WeekDays = typeof weekdays[number]

export { weekdays as default, WeekDays }
