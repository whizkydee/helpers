import getFocusableNodes from './getFocusableNodes'

export default function getLastFocusableNode(
  target: HTMLElement = document.documentElement
): HTMLElement | null {
  if (!(target instanceof HTMLElement)) return null
  const allNodes = getFocusableNodes(target)
  return allNodes[allNodes.length - 1]
}
