import 'core-js/modules/es.array.from'

export default function getFormFields(
  elem,
  selector = 'input[name]:not([type="hidden"]):not([hidden]):not([type="submit"]):not([type="button"]):not([type="reset"]):not([type="image"])'
) {
  const normalizeName = v =>
    (typeof v === 'string' ? v.trim() : '').replace(/\s+/g, '_')

  if (!(elem instanceof HTMLFormElement)) return

  return Array.from(elem.querySelectorAll(selector) || []).reduce(
    (acc, cur) => ({
      ...acc,
      [normalizeName(cur.name)]: cur.value,
    }),
    {}
  )
}
