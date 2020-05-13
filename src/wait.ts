export default function wait<T>(
  timeout: number = 0,
  cb: T
): number | undefined {
  if (typeof cb !== 'function') return
  return window.setTimeout(cb, timeout)
}
