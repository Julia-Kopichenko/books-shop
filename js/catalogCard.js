class CatalogCard {
  constructor({ author, title, price, description, imageLink }, index) {
    this.author = author;
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageLink = imageLink;

    this.cardContainer = createElement({
      tag: "li",
      classNames: ["card__container"],
      attributes: {
        draggable: "true",
        "data-id": index + 1,
      },
    });
    this.card = createElement({
      tag: "div",
      classNames: ["card"],
    });
    this.cardImg = createElement({
      tag: "img",
      classNames: ["card__img"],
      attributes: {
        src: this.imageLink,
        alt: this.title,
      },
    });
    this.cardBody = createElement({
      tag: "div",
      classNames: ["card-body", "text-center"],
    });
    this.cardAutor = createElement({
      tag: "p",
      classNames: ["item-autor", "zagolovok"],
      innerText: this.author,
    });
    this.cardTitle = createElement({
      tag: "h3",
      classNames: ["item-title", "zagolovok"],
      innerText: this.title,
    });
    this.btnOpenModal = createElement({
      tag: "button",
      classNames: ["btn-link"],
      innerHTML: "Show more",
    });
    this.detailsWrapper = createElement({
      tag: "div",
      classNames: ["details-wrapper"],
    });
    this.counter = new Counter().renderCounter();
    this.priceWrapper = createElement({
      tag: "div",
      classNames: ["price-wrapper"],
    });
    this.priceText = createElement({
      tag: "span",
      innerText: "$ ",
    });
    this.price = createElement({
      tag: "span",
      classNames: ["price"],
      innerText: this.price,
    });
    this.btnBin = createElement({
      tag: "button",
      classNames: ["btn"],
      innerHTML: "Add to cart",
    });

    this.listenEvents();
  }
  renderCard() {
    this.cardContainer.append(this.card);
    this.card.append(this.cardImg);
    this.card.append(this.cardBody);
    this.cardBody.append(this.cardAutor);
    this.cardBody.append(this.cardTitle);
    this.cardBody.append(this.btnOpenModal);
    this.cardBody.append(this.detailsWrapper);
    this.cardBody.append(this.btnBin);
    this.detailsWrapper.append(this.counter);
    this.detailsWrapper.append(this.priceWrapper);
    this.priceWrapper.append(this.priceText);
    this.priceWrapper.append(this.price);

    return this.cardContainer;
  }
  listenEvents() {
    this.cardContainer.addEventListener("dragend", (event) => this.addToBin(event));
    this.btnOpenModal.addEventListener("click", () => this.openModal(this.title, this.description));
    this.btnBin.addEventListener("click", (event) => this.addToBin(event));
  }
  addToBin(event) {
    const card = event.target.closest(".card__container");

    const binWrapper = document.querySelector(".bin-card-lists");

    const productInfo = {
      id: card.dataset.id,
      author: card.querySelector(".item-autor").innerText,
      title: card.querySelector(".item-title").innerText,
      price: card.querySelector(".price").innerText,
      imageLink: card.querySelector(".card__img").getAttribute("src"),
      count: card.querySelector(".count").innerText,
    };
    const itemInBin = binWrapper.querySelector(`[data-id = "${productInfo.id}"]`);
    // if the item is in the bin and else
    if (itemInBin) {
      const counterElement = itemInBin.querySelector(".count");
      counterElement.innerText = +counterElement.innerText + +productInfo.count;
    } else {
      binWrapper.append(new BinCard(productInfo).renderCard());
    }
    increaseTotalPrice(productInfo.price * productInfo.count);
    //Bin status display
    toggleBinStatus();
    //reset the counter
    card.querySelector(".count").innerText = "1";
  }
  openModal(title, description) {
    console.log(title);
    new Modal(title, description).openModal();
  }
}
