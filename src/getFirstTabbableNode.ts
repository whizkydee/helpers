import getTabbableNodes from './getTabbableNodes'

export default function getFirstTabbableNode(
  target: HTMLElement = document.documentElement
): HTMLElement | null {
  if (!(target instanceof HTMLElement)) return null
  const [firstTabbableNode] = getTabbableNodes(target)
  return firstTabbableNode || null
}
