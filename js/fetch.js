fetch("../../books.json")
  .then((response) => response.json())
  .then((productsArray) => {
    renderProducts(productsArray);
  })
  .catch((error) => console.log(error));

function renderProducts(array) {

  array.forEach((data, index) => {
    let card = new CatalogCard(data, index);
    fragment.append(card.renderCard());
  });
  const cardsList = document.querySelector(".cards__list");
  cardsList.append(fragment);
}
