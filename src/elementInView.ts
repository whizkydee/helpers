export interface Offset {
  top?: number
  right?: number
  bottom?: number
  left?: number
}

export interface ElementInViewOptions {
  threshold?: number
  offset?: Offset
}

export default function elementInView(
  element: HTMLElement,
  options?: ElementInViewOptions
): boolean {
  const { top, right, bottom, left, width, height, } = element.getBoundingClientRect()

  options = {
    threshold: 0,
    offset: { top: 0, right: 0, bottom: 0, left: 0 },
    ...options,
  }

  const intersection = {
    t: bottom,
    r: window.innerWidth - left,
    b: window.innerHeight - top,
    l: right,
  }

  const threshold = {
    x: options.threshold! * width,
    y: options.threshold! * height,
  }

  return (
    intersection.t > (options.offset!.top || 0) + threshold.y &&
    intersection.r > (options.offset!.right || 0) + threshold.x &&
    intersection.b > (options.offset!.bottom || 0) + threshold.y &&
    intersection.l > (options.offset!.left || 0) + threshold.x
  )
}
