// const overlay = document.createElement("div");
// overlay.classList.add("overlay");

// overlay.addEventListener("click", () => {
//   const modals = document.querySelectorAll(".modal");
//   modals.forEach((modal) => {
//     modal.remove();
//     overlay.classList.remove("active");
//   });
// });

class Overlay {
  constructor() {
    this.overlay = document.createElement("div");
    this.overlay.classList.add("overlay");
    this.listenEvents();
  }
  renderOverlay() {
    return this.overlay;
  }
  listenEvents() {
    this.overlay.addEventListener("click", () => this.closeModals());
  }
  closeModals() {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
      modal.remove();
      this.overlay.classList.remove("active");
    });
  }
}
