export default function memoize<
  T extends (...args: any[]) => void,
  U = never | ReturnType<T>
>(
  fn: T
): {
  (this: ThisParameterType<T>): ReturnType<T>
  cache: Map<U, U>
} {
  const cache = new Map()
  const result = function (this: ThisParameterType<T>) {
    const value = arguments[0]
    return cache.has(value)
      ? cache.get(value)
      : cache.set(value, fn.call(this, value)) && cache.get(value)
  }
  result.cache = cache
  return result
}
