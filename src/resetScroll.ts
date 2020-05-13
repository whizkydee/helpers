export default function resetScroll(
  elem: HTMLElement = document.documentElement
): void {
  if (!(elem instanceof HTMLElement)) return

  elem.scrollTop = 0
  elem.scrollLeft = 0
}
