class Modal {
  constructor(title, description, ...classes) {
    this.modal = newTag("div", { className: "modal" });
    this.headerContainer = newTag("div", { className: "modal-header" });
    // title
    this.title = newTag("div", { className: "modal-title", innerText: title });
    // close button
    this.btnCloseModal = newTag("button", { className: "close-button", innerHTML: "&times" });
    // description
    this.description = newTag("div", { className: "modal-body", innerText: description });

    this.listenEvents();
  }
  listenEvents() {
    this.btnCloseModal.addEventListener("click", () => this.closeModal());
  }
  render() {
    this.modal.append(this.headerContainer);
    this.modal.append(this.description);
    this.headerContainer.append(this.title);
    this.headerContainer.append(this.btnCloseModal);

    return this.modal;
  }
  openModal() {
    const root = document.querySelector(".root");
    const overlay = document.querySelector(".overlay");

    root.append(this.render());
    overlay.classList.add("active");
  }
  closeModal() {
    this.modal.remove();
    const overlay = document.querySelector(".overlay");

    overlay.classList.remove("active");
  }
}
