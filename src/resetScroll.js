export default function resetScroll(elem = document.documentElement) {
  if (!(elem instanceof HTMLElement)) return

  elem.scrollTop = 0
  elem.scrollLeft = 0
}
