interface ChromeCompatEvent extends Event {
  path?: EventTarget[]
}

export default function getEventPath(
  event: ChromeCompatEvent
): EventTarget[] | null {
  if (!(event instanceof Event)) return null

  return (
    (Array.isArray(event.path) && event.path) ||
    (typeof event.composedPath == 'function' && event.composedPath()) ||
    (function fallback() {
      const path = []
      let target = event.target as Node & ParentNode

      while (target.parentNode !== null) {
        path.push(target)
        target = target.parentNode
      }

      path.push(document, window)

      return path
    })()
  )
}
