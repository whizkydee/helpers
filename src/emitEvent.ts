export default function emitEvent<T extends string>(
  el: HTMLElement,
  eventType: T,
  detail: CustomEventInit<T>
): boolean {
  let event

  if (typeof CustomEvent === 'function') {
    event = new CustomEvent(eventType, { detail })
  } else {
    event = document.createEvent('CustomEvent')
    event.initCustomEvent(eventType, true, true, detail)
  }

  return el.dispatchEvent(event)
}
