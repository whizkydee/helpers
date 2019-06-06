const getEventPath = event => {
  return event && event instanceof Event
    ? event.path || (event.composedPath && event.composedPath())
    : null
}

export default getEventPath
