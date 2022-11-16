class Modal {
  constructor(title, description, ...classes) {
    this.modal = createElement({
      tag: "div",
      classNames: ["modal"]
    });
    this.headerContainer = createElement({
      tag: "div",
      classNames: ["modal-header"]
    });
    // title
    this.title = createElement({
      tag: "div",
      classNames: ["modal-title"],
      innerText: title
    });
    // close button
    this.btnCloseModal = createElement({
      tag: "button",
      classNames: ["close-button"],
      innerHTML: "&times"
    });
    // description
    this.description = createElement({
      tag: "div",
      classNames: ["modal-body"],
      innerText: description
    });

    this.listenEvents();
  }
  listenEvents() {
    this.btnCloseModal.addEventListener("click", () => this.closeModal());
  }
  createModal() {
    this.modal.append(this.headerContainer);
    this.modal.append(this.description);
    this.headerContainer.append(this.title);
    this.headerContainer.append(this.btnCloseModal);

    return this.modal;
  }
  openModal() {
    const root = document.querySelector(".root");
    const overlay = document.querySelector(".overlay");

    root.append(this.createModal());
    overlay.classList.add("active");
  }
  closeModal() {
    this.modal.remove();
    const overlay = document.querySelector(".overlay");

    overlay.classList.remove("active");
  }
}
