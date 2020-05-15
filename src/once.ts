export default function once<T extends (...args: any[]) => void>(
  fn: T
): (this: ThisParameterType<T>, ...args: Parameters<T>) => ReturnType<T> {
  let called = false
  return function (this: ThisParameterType<T>, ...args: Parameters<T>): any {
    if (called) return
    called = true
    return fn.apply(this, args)
  }
}
