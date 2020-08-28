import getFocusableNodes from './getFocusableNodes'

export default function getFirstFocusableNode(
  target: HTMLElement = document.documentElement
): HTMLElement | null {
  if (!(target instanceof HTMLElement)) return null
  const [firstFocusableNode] = getFocusableNodes(target)
  return firstFocusableNode || null
}
