const shortWeekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const

type ShortWeekdays = typeof shortWeekdays[number]
export { shortWeekdays as default, ShortWeekdays }
