export default function isArrayLike(value: any): boolean {
  return value != null && typeof value[Symbol.iterator] === 'function'
}
