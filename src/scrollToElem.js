const scrollToElem = (targetElem, debounce = 100, opts) => {
  if (!(targetElem instanceof HTMLElement)) return

  window.setTimeout(
    window.scrollTo(
      0,
      targetElem.offsetTop,
      (typeof opts === 'object' && opts) || { behaviour: 'smooth' }
    ),
    debounce
  )
}

export default scrollToElem
