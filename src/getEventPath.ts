export default function getEventPath(
  event: Event & { path?: EventTarget[] }
): (EventTarget | null)[] {
  if (!(event instanceof Event)) return []

  return (
    (Array.isArray(event.path) && event.path) ||
    (typeof event.composedPath == 'function' && event.composedPath()) ||
    (function fallback() {
      const path = []
      let target = event.target

      while (target !== window && (target as HTMLElement).parentNode !== null) {
        path.push(target)
        target = (target as HTMLElement).parentNode
      }

      path.push(document, window)

      return path
    })()
  )
}
