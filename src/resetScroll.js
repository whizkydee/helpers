const resetScroll = (elem = document.documentElement) => {
  if (elem && elem instanceof HTMLElement) {
    elem.scrollTop = 0
    elem.scrollLeft = 0
  } else throw new TypeError("Expected 'elem' to be HTMLElement.")
}

export default resetScroll
