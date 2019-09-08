export default function pxToRem(rootPx = 16, px = 16) {
  if (typeof px !== 'number' || typeof rootPx !== 'number') return
  return (px / rootPx).toPrecision(2) + 'rem'
}
