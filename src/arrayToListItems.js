export default function arrayToListItems(arr, listID) {
  return (el => (
    (el = document.querySelector('#' + listID)),
    (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))
  ))()
}
