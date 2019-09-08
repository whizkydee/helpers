import { executeArrayMethodOrFailSafe } from '../internals'

export default function safeSome(...args) {
  return executeArrayMethodOrFailSafe('some', ...args)
}
