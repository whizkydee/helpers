export default function emitEvent(el, eventType, detail) {
  return el.dispatchEvent(new CustomEvent(eventType, { detail }))
}
