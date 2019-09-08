import { executeArrayMethodOrFailSafe } from '../internals'

export default function safeReduce(...args) {
  return executeArrayMethodOrFailSafe('reduce', ...args)
}
