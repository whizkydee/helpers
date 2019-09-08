export default function getAspectRatio(a = screen.width, b = screen.height) {
  return b == 0 ? a : getAspectRatio(b, a % b)
}
