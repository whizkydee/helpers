export default function isPrintableChar(event) {
  const { keyCode: k, shiftKey, metaKey, ctrlKey, altKey } = event

  if (shiftKey || metaKey || ctrlKey || altKey) return false

  return (
    k === 32 ||
    (k > 47 && k < 58) ||
    (k > 64 && k < 91) ||
    (k > 95 && k < 112) ||
    (k > 185 && k < 193) ||
    (k > 218 && k < 223)
  )
}
