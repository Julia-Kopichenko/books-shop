class Main {
  constructor() {
    this.main = newTag("main");
    this.container = newTag("div", { className: "container text-center" });
    this.row = newTag("div", { className: "row" });
  }
  render() {
    this.main.append(this.container);
    this.container.append(this.row);
    this.row.append(new BookCatalog().render());
    this.row.append(new Cart().render());

    return this.main;
  }
}
