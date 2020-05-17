export default function forEachValue<T extends { [key: string]: any }>(
  obj: T,
  callback: (value: T[keyof T], key: keyof T, obj: T) => unknown
): void {
  for (let key in obj) callback(obj[key], key, obj)
}
