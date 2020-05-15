export default function isPlainObject(
  payload: any
): payload is Record<
  PropertyKey,
  PropertyKey | bigint | boolean | null | object | any[] | undefined
> {
  if (typeof payload != 'object' || payload === null) return false

  let proto = payload
  for (; Object.getPrototypeOf(proto) !== null; )
    proto = Object.getPrototypeOf(proto)

  return Object.getPrototypeOf(payload) === proto
}
