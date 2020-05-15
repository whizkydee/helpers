export default function forEachValue<T extends { [key: string]: any }>(
  obj: T,
  fn: (value: T[keyof T], key: keyof T, obj: T) => unknown
): void {
  for (let key in obj) fn(obj[key], key, obj)
}
