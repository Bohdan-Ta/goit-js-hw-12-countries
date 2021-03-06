import debounce from 'lodash.debounce';
import refs from './refs'
import { windowError, windowWarning }  from './notifications'
import { createCountryList } from './createCountryList'
import countryTpl from '../template/listCountry.hbs'
import countriesTpl from '../template/countriesMarkFlag.hbs'
import fetchCountries from './fetchCountries';

export function findCounry(evt) {
  if (!evt.target.value) {
    return refs.countryLi.innerHTML = ''
  }

  refs.countryLi.innerHTML = ''
  
  fetchCountries(evt.target.value).then(result => {
    if (result.length > 10) {
      return windowWarning()
    } else if (result.length > 2 && result.length < 10) {
      createCountryList(countriesTpl, result)
    } else if (result.length === 1) {
      createCountryList(countryTpl, result)
    } 
  })
}

refs.inputEl.addEventListener('input', debounce(findCounry, 500))