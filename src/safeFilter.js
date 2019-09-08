import { executeArrayMethodOrFailSafe } from '../internals'

export default function safeFilter(...args) {
  return executeArrayMethodOrFailSafe('filter', ...args)
}
