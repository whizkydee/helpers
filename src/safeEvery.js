import { executeArrayMethodOrFailSafe } from '../internals'

const safeEvery = (...args) => executeArrayMethodOrFailSafe('every', ...args)

export default safeEvery
