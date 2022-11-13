class Modal {
  constructor(title, description, ...classes) {
    this.title = title;
    this.description = description;
  }
  createModal() {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.setAttribute("id", "modal");

    const headerContainer = document.createElement("div");
    headerContainer.classList.add("modal-header");
    // title
    const title = document.createElement("div");
    title.classList.add("modal-title");
    title.textContent = this.title;
    // close button
    const btnCloseModal = document.createElement("button");
    btnCloseModal.classList.add("close-button");
    btnCloseModal.innerHTML = "&times";
    btnCloseModal.onclick = () => this.closeModal();
    // description
    const description = document.createElement("div");
    description.classList.add("modal-body");
    description.textContent = this.description;
    // append
    modal.append(headerContainer);
    modal.append(description);
    headerContainer.append(title);
    headerContainer.append(btnCloseModal);

    return modal;
  }
  openModal() {
    root.append(this.createModal());
    overlay.classList.add("active");
  }
  closeModal() {
    document.querySelector(".modal").remove();
    overlay.classList.remove("active");
  }
}
