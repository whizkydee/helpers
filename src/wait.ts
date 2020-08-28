export default function wait(
  timeout: number = 0,
  cb: () => unknown
): number | void {
  if (typeof cb !== 'function') return
  return window.setTimeout(cb, timeout)
}
