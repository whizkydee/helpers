import getFirstFocusableNode from './getFirstFocusableNode'
import getLastFocusableNode from './getLastFocusableNode'

export default function trapFocus(
  event: KeyboardEvent,
  elem: HTMLElement = document.documentElement
): (() => void) | void {
  if (
    !(event instanceof KeyboardEvent) ||
    !(elem instanceof HTMLElement) ||
    (event.key !== 'Tab' && event.keyCode !== 9)
  )
    return

  let firstFocusableEl = getFirstFocusableNode(elem)
  let lastFocusableEl = getLastFocusableNode(elem)
  const activateFocusTrap = () => {
    if (event.shiftKey) {
      if (document.activeElement === firstFocusableEl) {
        ;(lastFocusableEl as HTMLElement).focus()
        event.preventDefault()
      }
    } else {
      if (document.activeElement === lastFocusableEl) {
        ;(firstFocusableEl as HTMLElement).focus()
        event.preventDefault()
      }
    }
  }

  activateFocusTrap()
}
