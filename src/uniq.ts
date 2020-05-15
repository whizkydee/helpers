export default function uniq<T>(array: ReadonlyArray<T>): T[] {
  return Array.from(new Set(array))
}
