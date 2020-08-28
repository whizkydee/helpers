import getFocusableNodes from './getFocusableNodes'

export default function getTabbableNodes(
  target: HTMLElement = document.documentElement
): HTMLElement[] | never[] {
  return getFocusableNodes(target).filter(
    elem =>
      elem instanceof HTMLElement && elem.getAttribute('tabindex') !== '-1'
  )
}
