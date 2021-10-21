import swal from 'sweetalert'
export function windowWarning() {
  swal({
    title: "Hmmm 🤔",
    text: "Too many matches found. Please enter a more specific query",
    button: false,
    timer: 3000
  })
}

export function windowError() {
  swal({
    title: "Oops 😟",
    text: "Nothing is found",
    button: false,
    className: "error",
    timer: 3000
  })
}