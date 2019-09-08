export default function wait(timeout = 0, cb) {
  if (typeof cb !== 'function') return
  window.setTimeout(cb, timeout)
}
