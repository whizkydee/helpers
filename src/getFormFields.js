export default function getFormFields(elem, selector = 'input[name]') {
  const normalizeName = v =>
    (typeof v === 'string' ? v : '').trim().replace(/\s+/g, '_')

  if (!(elem instanceof HTMLFormElement)) {
    return
  }

  return Array.from(elem.querySelectorAll(selector) || []).reduce(
    (acc, cur, index, fields) => ({
      ...acc,
      $fields: fields,
      [normalizeName(cur.name)]: cur.value,
    }),
    {}
  )
}
