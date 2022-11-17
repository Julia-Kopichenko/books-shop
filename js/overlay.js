class Overlay {
  constructor() {
    this.overlay = newTag("div", { className: "overlay" });
    this.listenEvents();
  }
  render() {
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
