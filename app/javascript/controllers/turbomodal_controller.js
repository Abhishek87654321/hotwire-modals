import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="turbomodal"
export default class extends Controller {
  connect() {
    console.log("I am in turbomodal")
  }

  submitEnd(e){
    if (e.detail.success){
       this.hideModal();
    }
    console.log(e.detail.success)
  }

  hideModal(){
    this.element.remove()
  }
}
