import getFirstTabbableNode from './getFirstTabbableNode'
import getLastTabbableNode from './getLastTabbableNode'

export default function trapFocus(
  event: KeyboardEvent,
  elem: HTMLElement = document.documentElement
) {
  if (
    !(event instanceof KeyboardEvent) ||
    !(elem instanceof HTMLElement) ||
    (event.key !== 'Tab' && event.keyCode !== 9)
  )
    return

  let firstTabbableEl = getFirstTabbableNode(elem)
  let lastTabbableEl = getLastTabbableNode(elem)
  const activateFocusTrap = () => {
    if (event.shiftKey) {
      if (document.activeElement === firstTabbableEl) {
        lastTabbableEl!.focus()
        event.preventDefault()
      }
    } else {
      if (document.activeElement === lastTabbableEl) {
        firstTabbableEl!.focus()
        event.preventDefault()
      }
    }
  }

  activateFocusTrap()
}
