import { executeArrayMethodOrFailSafe } from '../internals'

const safeFindIndex = (...args) =>
  executeArrayMethodOrFailSafe('findIndex', ...args)

export default safeFindIndex
