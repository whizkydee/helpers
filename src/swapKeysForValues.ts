// TODO: Fix/improve this type definition

type KeyFromValue<V, T extends Record<PropertyKey, PropertyKey>> = {
  [K in keyof T]: V extends T[K] ? K : never
}[keyof T]

export type Swap<T extends Record<PropertyKey, PropertyKey>> = {
  [V in T[keyof T]]: KeyFromValue<V, T>
}

export default function swapKeysForValue<
  T extends Record<PropertyKey, PropertyKey>
>(obj: T): Swap<T> {
  let swaped: unknown = {}
  for (let key in obj) (swaped as any)[obj[key]] = key
  return swaped as Swap<T>
}
