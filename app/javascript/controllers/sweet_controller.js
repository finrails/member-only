import Swal from 'sweetalert2'
import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  initialize() {
    this.redirect = false
  }

  logOutConfirmation(event) {
    if (this.redirect) return

    event.preventDefault()

    Swal.fire({
      title: 'Do you want to log out?',
      showCancelButton: true,
      confirmButtonText: 'Yes, i want to!',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.redirect = true
        this.element.click()
      }
    })
  }
}
