import { executeArrayMethodOrFailSafe } from '../internals'

const safeFind = (...args) => executeArrayMethodOrFailSafe('find', ...args)

export default safeFind
