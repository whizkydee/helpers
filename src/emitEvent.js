const emitEvent = (el, eventType, detail) =>
  el.dispatchEvent(new CustomEvent(eventType, { detail }))

export default emitEvent
