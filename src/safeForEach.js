import { executeArrayMethodOrFailSafe } from '../internals'

export default function safeForEach(...args) {
  return executeArrayMethodOrFailSafe('forEach', ...args)
}
