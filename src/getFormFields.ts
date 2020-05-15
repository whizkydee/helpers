import { slice } from './_internals'

export default function getFormFields<
  T extends HTMLInputElement | HTMLTextAreaElement
>(
  elem: HTMLFormElement,
  selectors: string = defaultSelectors
): {
  [key: string]: string
} {
  if (!(elem instanceof HTMLFormElement)) return {}

  const normalizeName = (v: any): string => String(v || '').replace(/\s+/g, '_')
  return (slice(elem.querySelectorAll(selectors)) as T[]).reduce(
    (acc, elem) => ({
      ...acc,
      [normalizeName((elem as T).name)]: (elem as T).value,
    }),
    {}
  )
}

const defaultSelectors = `input[name]:not([aria-hidden="true"]):not([type="hidden"]):not(:disabled):not([hidden]):not([type="submit"]):not([type="button"]):not([type="reset"])not([type="image"]),
textarea[name]:not([aria-hidden="true"]):not([type="hidden"]):not(:disabled):not([hidden]):not([type="submit"]):not([type="button"]):not([type="reset"])not([type="image"])`
