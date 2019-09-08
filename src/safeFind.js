import { executeArrayMethodOrFailSafe } from '../internals'

export default function safeFind(...args) {
  return executeArrayMethodOrFailSafe('find', ...args)
}
