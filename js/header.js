class Header {
  constructor() {
    this.header = newTag("header", { className: "header" });
    this.headerContainer = newTag("div", { className: "container text-center" });
    // logo
    this.logo = newTag("img", {
      src: "./assets/images/logo-book.png",
      height: "100%",
      width: "100",
      alt: "logo book",
    });
    this.h1 = newTag("h1", { innerText: "world books" });
    this.leadText = newTag("p", { className: "lead-text", innerText: "Welcome to amazing book shop!" });
  }
  render() {
    this.header.append(this.headerContainer);
    this.headerContainer.append(this.logo);
    this.headerContainer.append(this.h1);
    this.headerContainer.append(this.leadText);

    return this.header;
  }
}
