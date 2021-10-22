export default function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.com/v2/name/${searchQuery}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else if (result.status === 404) {
        windowError()
      }
    }).catch(error => alert(error))
}