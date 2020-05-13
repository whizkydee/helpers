export default function isPrintableChar(event: KeyboardEvent): boolean {
  if (
    !(event instanceof KeyboardEvent) ||
    event.shiftKey ||
    event.metaKey ||
    event.ctrlKey ||
    event.altKey
  ) {
    return false
  }

  return (
    event.keyCode === 32 ||
    (event.keyCode > 47 && event.keyCode < 58) ||
    (event.keyCode > 64 && event.keyCode < 91) ||
    (event.keyCode > 95 && event.keyCode < 112) ||
    (event.keyCode > 185 && event.keyCode < 193) ||
    (event.keyCode > 218 && event.keyCode < 223)
  )
}
