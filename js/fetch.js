let books = [];

fetch("./books.json")
  .then((response) => response.json())
  .then((data) => {
    function getListContent() {
      let fragment = new DocumentFragment();

      data.forEach(({ author, title, price, description, imageLink }, index) => {
        let card = new CatalogCard(author, title, price, description, imageLink, index);
        books.push(card);
        fragment.append(card.renderCard());
      });
      return fragment;
    }
    cardsList.append(getListContent());
  })
  .catch((error) => console.log(error));
