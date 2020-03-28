export default function emitEvent(el, eventType, detail) {
  let event

  if (typeof CustomEvent === 'function') {
    event = new CustomEvent(eventType, { detail })
  } else {
    event = document.createEvent('CustomEvent')
    event.initCustomEvent(eventType, true, true, detail)
  }

  return el.dispatchEvent(event)
}
