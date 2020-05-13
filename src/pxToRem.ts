export default function pxToRem(
  rootPx: number = 16,
  px: number = 16
): string | void {
  if (typeof px !== 'number' || typeof rootPx !== 'number') return
  return (px / rootPx).toPrecision(2) + 'rem'
}
