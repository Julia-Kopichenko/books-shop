//! body
const root = document.querySelector(".root");
//! header
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

//! main
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

fetch("./books.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    function getListContent() {
      let fragment = new DocumentFragment();

      data.forEach(({ author, title, price, description, imageLink }, index) => {
        fragment.append(renderCard({ author, title, price, description, imageLink }, index));
      });
      return fragment;
    }
    cardsList.append(getListContent());
  })

  .catch((error) => {
    console.log(error);
  });

function renderCard({ author, title, price, description, imageLink }, index) {
  console.log(index);
  let card = document.createElement("li");
  card.classList.add("card__container");
  card.setAttribute("id", `${index + 1}`); // change after
  card.innerHTML = `
<div class="card" data-id="01">
  <img class="card__img" src="${imageLink}" alt="${title}">
  <div class="card-body text-center">
    <p class="item-autor zagolovok">${author}</p>
    <h3 class="item-title zagolovok">${title}</h3>
    <a href="" class="btn-link">
      <button>Show more</button>
    </a>

    <div class="details-wrapper">
      <div class="items counter-wrapper">
        <div class="items__control" data-action="minus">-</div>
          <div class="items__current" data-counter>1</div>
          <div class="items__control" data-action="plus">+</div>
      </div>
      <div class="price">$ ${price}</div>
    </div>

    <button data-cart type="button" class="btn">+ в корзину</button>

  </div>
</div>
`;
  return card;
}
