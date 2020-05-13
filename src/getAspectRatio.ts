export default function getAspectRatio(
  a: number = screen.width,
  b: number = screen.height
): number {
  return b == 0 ? a : getAspectRatio(b, a % b)
}
