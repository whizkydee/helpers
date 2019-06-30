import { executeArrayMethodOrFailSafe } from '../internals'

const safeSome = (...args) => executeArrayMethodOrFailSafe('some', ...args)

export default safeSome
