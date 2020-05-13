export default function debounce<T extends (...args: any[]) => void>(
  fn: T,
  ms: number = 0
): (
    this: ThisParameterType<T>,
    ...args: Parameters<T>
  ) => ReturnType<T> {
  let timeoutId: ReturnType<typeof setTimeout> | undefined

  return function (
    this: ThisParameterType<T>,
    ...args: Parameters<T>
  ): any {
    clearTimeout(timeoutId as number | undefined)
    timeoutId = setTimeout(() => fn.apply(this, args), ms)
  }
}
