class BookCatalog {
  constructor() {
    this.bookCatalog = newTag("section", { className: "catalog-container" });
    this.title = newTag("h2", { innerText: "Book Catalog" });
    this.cardsList = newTag("ul", { className: "row cards__list" });
  }
  render() {
    this.bookCatalog.append(this.title);
    this.bookCatalog.append(this.cardsList);

    return this.bookCatalog;
  }
}
