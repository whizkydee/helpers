import { executeArrayMethodOrFailSafe } from '../internals'

export default function safeSort(...args) {
  return executeArrayMethodOrFailSafe('sort', ...args)
}
