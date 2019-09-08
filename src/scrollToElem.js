export default function scrollToElem(targetElem, debounce = 100, opts) {
  if (!(targetElem instanceof HTMLElement)) return

  setTimeout(
    window.scrollTo(
      0,
      targetElem.offsetTop,
      (typeof opts === 'object' && opts) || { behaviour: 'smooth' }
    ),
    debounce
  )
}
