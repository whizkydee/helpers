export default function isPlainObject(obj) {
  if (typeof obj != 'object' || obj === null) return false

  let proto = obj
  for (; Object.getPrototypeOf(proto) !== null; )
    proto = Object.getPrototypeOf(proto)

  return Object.getPrototypeOf(obj) === proto
}
