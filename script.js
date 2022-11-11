//! body
const root = document.querySelector(".root");

//! 1 header
const header = document.createElement("header");
header.classList.add("header");
//! headerContainer
const headerContainer = document.createElement("div");
headerContainer.classList.add("container", "text-center");
//! logo
const logo = document.createElement("img");
logo.setAttribute("src", "./assets/images/logo-book.png");
logo.setAttribute("width", "100");
logo.setAttribute("alt", "logo book");
//! h1
const h1 = document.createElement("h1");
h1.innerText = "world books";
//! leadText
const leadText = document.createElement("p");
leadText.classList.add("lead-text");
leadText.innerText = "Welcome to amazing book shop!";

//! 2 main
const main = document.createElement("main");
//! headerContainer
const maneContainer = document.createElement("div");
maneContainer.classList.add("container", "text-center");
//! h2
const h2 = document.createElement("h2");
h2.innerText = "Book Catalog";
//! row
const row = document.createElement("div");
row.classList.add("row");
//! catalog__container
const catalog = document.createElement("div");
catalog.classList.add("catalog__container");
//! books list
const cardsList = document.createElement("ul");
cardsList.classList.add("row", "cards__list");

//! order__container
const order = document.createElement("div");
order.classList.add("order__container");

//! order

//! 3 overlay
const overlay = document.createElement("div");
overlay.classList.add("overlay");

// HEADER
root.append(header);
header.append(headerContainer);
headerContainer.append(logo);
headerContainer.append(h1);
headerContainer.append(leadText);

// MAIN
root.append(main);
main.append(maneContainer);
maneContainer.append(h2);
maneContainer.append(row);

row.append(catalog);
catalog.append(cardsList);

row.append(order);

// OVERLAY
root.append(overlay);

let books = [];

class BookCard {
  constructor(author, title, price, description, imageLink, ...classes) {
    this.author = author;
    this.title = title;
    this.price = price;
    this.imageLink = imageLink;
    this.description = description;
  }
  renderCard() {
    let cardContainer = document.createElement("li");
    cardContainer.classList.add("card__container");
    // card.setAttribute("id", `${index + 1}`); // change after

    let card = document.createElement("div");
    card.classList.add("card");

    let img = document.createElement("img");
    img.classList.add("card__img");
    img.src = this.imageLink;
    img.alt = this.title;

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "text-center");

    let autor = document.createElement("p");
    autor.classList.add("item-autor", "zagolovok");
    autor.textContent = this.author;

    let title = document.createElement("h3");
    title.classList.add("item-title", "zagolovok");
    title.textContent = this.title;

    let btnOpenModal = document.createElement("button");
    btnOpenModal.innerHTML = "Show more";
    btnOpenModal.classList.add("btn-link");
    btnOpenModal.onclick = () => new Modal(this.title, this.description).openModal();

    let detailsWrapper = document.createElement("div");
    detailsWrapper.classList.add("details-wrapper");
    detailsWrapper.innerHTML = `<div class="items counter-wrapper">
            <div class="items__control" data-action="minus">-</div>
              <div class="items__current" data-counter>1</div>
              <div class="items__control" data-action="plus">+</div>
          </div>
          <div class="price">$ ${this.price}</div>`;

    let btnBin = document.createElement("button");
    btnBin.innerHTML = "+ в корзину";
    btnBin.classList.add("btn");
    // btnOpenModal.onclick = () => openModal();

    cardContainer.append(card);
    card.append(img);
    card.append(cardBody);
    cardBody.append(autor);
    cardBody.append(autor);
    cardBody.append(title);
    cardBody.append(btnOpenModal);
    cardBody.append(detailsWrapper);
    cardBody.append(btnBin);

    return cardContainer;
  }
}

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

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    modal.remove();
    overlay.classList.remove("active");
  });
});

fetch("./books.json")
  .then((response) => response.json())
  .then((data) => {
    function getListContent() {
      let fragment = new DocumentFragment();

      data.forEach(({ author, title, price, description, imageLink }, index) => {
        let card = new BookCard(author, title, price, description, imageLink);
        books.push(card);
        fragment.append(card.renderCard());
      });
      return fragment;
    }
    cardsList.append(getListContent());
  })
  .catch((error) => console.log(error));
