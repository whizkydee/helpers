import { executeArrayMethodOrFailSafe } from '../internals'

export default function safeFindIndex(...args) {
  return executeArrayMethodOrFailSafe('findIndex', ...args)
}
