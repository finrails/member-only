import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log(`Controller: "Hello" is connected!`)
  }

  closeAlert() {
    this.element.remove()
  }
}
