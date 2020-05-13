import isObject from './isObject'

export default function scrollToElem(
  targetElem: any,
  debounce: number = 100,
  opts?: ScrollToOptions
): number | void {
  if (!(targetElem instanceof HTMLElement)) return

  const defaultOpts: ScrollToOptions = {
    left: 0,
    top: targetElem.offsetTop,
    behavior: 'smooth',
  }

  const doScroll = () => {
    window.scrollTo(Object.assign(defaultOpts, isObject(opts) ? opts : {}))
  }

  return window.setTimeout(doScroll, debounce)
}
