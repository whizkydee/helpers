export default function rgbToHex(r, g, b) {
  return ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0')
}
