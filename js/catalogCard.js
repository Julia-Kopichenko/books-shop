class CatalogCard {
  constructor(author, title, price, description, imageLink, index, ...classes) {
    this.author = author;
    this.title = title;
    this.price = price;
    this.imageLink = imageLink;
    this.description = description;
    this.index = index;
  }
  renderCard() {
    let cardContainer = document.createElement("li");
    cardContainer.setAttribute("data-id", `${this.index + 1}`);
    cardContainer.setAttribute("draggable", "true");
    cardContainer.classList.add("card__container");
    // add eventListener on drag and drop
    cardContainer.ondragend = (event) => this.addToBin(event);

    let card = document.createElement("div");
    card.classList.add("card");
    let img = document.createElement("img");
    img.classList.add("card__img");
    img.src = this.imageLink;
    img.alt = this.title;
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "text-center");
    let autor = document.createElement("p");
    autor.classList.add("item-autor", "zagolovok");
    autor.textContent = this.author;
    let title = document.createElement("h3");
    title.classList.add("item-title", "zagolovok");
    title.textContent = this.title;
    // Button show more
    let btnOpenModal = document.createElement("button");
    btnOpenModal.innerHTML = "Show more";
    btnOpenModal.classList.add("btn-link");
    btnOpenModal.addEventListener("click", () => this.openModal(this.title, this.description));
    // Details
    const detailsWrapper = document.createElement("div");
    detailsWrapper.classList.add("details-wrapper");
    // counter
    const counter = new Counter().renderCounter();
    // prise
    const priseWrapper = document.createElement("div");
    priseWrapper.classList.add("price-wrapper");
    const priseText = document.createElement("span");
    priseText.innerText = "$ ";
    const price = document.createElement("span");
    price.classList.add("price");
    price.innerText = this.price;
    // Button Bin
    let btnBin = document.createElement("button");
    btnBin.innerHTML = "Add to cart";
    btnBin.classList.add("btn");
    btnBin.addEventListener("click", (event) => this.addToBin(event));

    cardContainer.append(card);

    card.append(img);
    card.append(cardBody);

    cardBody.append(autor);
    cardBody.append(title);
    cardBody.append(btnOpenModal);
    cardBody.append(detailsWrapper);
    cardBody.append(btnBin);

    detailsWrapper.append(counter);
    detailsWrapper.append(priseWrapper);

    priseWrapper.append(priseText);
    priseWrapper.append(price);

    return cardContainer;
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
  dragToBin(event) {
    console.log("Drag");
  }
  openModal(title, description) {
    new Modal(title, description).openModal();
  }
}
