import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="share"
export default class extends Controller {
  static targets = ["result", "title", "body"];

  connect() {
    console.log("hey");
    console.log(this.data.get("urlValue"));
    console.log(this.resultTarget);
  }

  async share(e) {
    e.preventDefault();

    const shareData = {
      title: this.titleTarget.textContent,
      body: this.bodyTarget.textContent,
      url: this.data.get("urlValue"),
    };
    try {
      await navigator.share(shareData);
      this.resultTarget.textContent = "MDN shared successfully";
    } catch (err) {
      console.log(err);
      this.resultTarget.textContent = `Error: ${err}`;
    }
  }
}
