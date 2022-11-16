class Header {
  constructor() {
    this.header = createElement({
      tag: "header",
      classNames: ["header"],
    });
    this.headerContainer = createElement({
      tag: "div",
      classNames: ["container", "text-center"],
    });
    // logo
    this.logo = addToDocumentFragment(
      createElement({
        tag: "img",
        attributes: {
          src: "./assets/images/logo-book.png",
          height: "100%",
          width: "100",
          alt: "logo book",
        },
      })
    );
    this.h1 = createElement({
      tag: "h1",
      innerText: "world books",
    });
    // leadText
    this.leadText = createElement({
      tag: "p",
      classNames: ["lead-text"],
      innerText: "Welcome to amazing book shop!",
    });
  }
  renderHeader() {
    this.header.append(this.headerContainer);
    this.headerContainer.append(this.logo);
    this.headerContainer.append(this.h1);
    this.headerContainer.append(this.leadText);

    return this.header;
  }
}
