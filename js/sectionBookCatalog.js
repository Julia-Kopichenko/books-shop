const bookCatalog = document.createElement("section");
bookCatalog.classList.add("catalog-container");
// Title
const bookCatalogSectionTitle = document.createElement("h2");
bookCatalogSectionTitle.innerText = "Book Catalog";
// books list
const cardsList = document.createElement("ul");
cardsList.classList.add("row", "cards__list");

bookCatalog.append(bookCatalogSectionTitle);
bookCatalog.append(cardsList);
