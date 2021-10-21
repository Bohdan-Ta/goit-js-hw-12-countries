import refs from './refs'

export function createCountryList(template, data) {
  refs.countryLi.insertAdjacentHTML('beforeend', template(data))
}