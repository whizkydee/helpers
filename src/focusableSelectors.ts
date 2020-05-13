export default [
  'a[href]:not([hidden])',
  'area[href]:not([hidden])',
  'button:not(:disabled):not([hidden])',
  'embed:not([hidden])',
  'iframe:not([hidden])',
  'input:not([type="hidden"]):not(:disabled):not([hidden])',
  'object:not([hidden])',
  'select:not(:disabled):not([hidden])',
  'textarea:not(:disabled):not([hidden])',
  '[tabindex]:not([tabindex="-1"]):not([hidden])',
  '[contenteditable]:not([contenteditable="false"]):not([hidden])',
] as const
