fetch("./books.json")
  .then((response) => response.json())
  .then((data) => {
    cardsList.append(getListContent(data));
  })
  .catch((error) => console.log(error));

function getListContent(data) {
  let fragment = new DocumentFragment();

  data.forEach((data, index) => {
    let card = new CatalogCard(data, index);
    fragment.append(card.renderCard());
  });
  return fragment;
}
