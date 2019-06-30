import { executeArrayMethodOrFailSafe } from '../internals'

const safeReduceRight = (...args) =>
  executeArrayMethodOrFailSafe('reduceRight', ...args)

export default safeReduceRight
