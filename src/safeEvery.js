import { executeArrayMethodOrFailSafe } from '../internals'

export default function safeEvery(...args) {
  return executeArrayMethodOrFailSafe('every', ...args)
}
