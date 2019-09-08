export default function getEventPath(event) {
  return event && event instanceof Event
    ? (event.composedPath && event.composedPath()) || event.path
    : null
}
