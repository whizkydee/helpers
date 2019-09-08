import { executeArrayMethodOrFailSafe } from '../internals'

export default function safeReduceRight(...args) {
  return executeArrayMethodOrFailSafe('reduceRight', ...args)
}
