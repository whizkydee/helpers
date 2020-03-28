export const inBrowser = () => typeof window !== 'undefined'
export const inWeex = () =>
  typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform
export const weexPlatform = () =>
  inWeex() && WXEnvironment.platform.toLowerCase()
export const isMacintosh = () =>
  inBrowser() && navigator.platform.indexOf('Mac') > -1
export const isWindows = () =>
  inBrowser() && navigator.platform.indexOf('Win') > -1
export const UA = inBrowser() && window.navigator.userAgent.toLowerCase()
export const isIE = () => UA && /msie|trident/.test(UA)
export const isIE9 = () => UA && UA.indexOf('msie 9.0') > 0
export const isEdge = () => UA && UA.indexOf('edge/') > 0
export const isAndroid = () =>
  (UA && UA.indexOf('android') > 0) || weexPlatform() === 'android'
export const isIOS = () =>
  (UA && /iphone|ipad|ipod|ios/.test(UA)) || weexPlatform() === 'ios'
export const isChrome = () => UA && /chrome\/\d+/.test(UA) && !isEdge()
export const isPhantomJS = () => UA && /phantomjs/.test(UA)
export const isFirefox = () => UA && UA.match(/firefox\/(\d+)/)
export const isFF = isFirefox
