class CartCard {
  constructor({ id, author, title, price, imageLink, count }) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.price = price;
    this.imageLink = imageLink;
    this.count = count;
  }
  renderCard() {
    const binCard = document.createElement("li");
    binCard.classList.add("bin-card-wrapper");
    binCard.setAttribute("data-id", `${this.id}`);

    const aboutWrapper = document.createElement("div");
    aboutWrapper.classList.add("bin-card");

    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("bin-card__img");
    const img = document.createElement("img");
    img.src = this.imageLink;
    img.alt = this.title;

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "text-center");
    // Autor
    let autor = document.createElement("p");
    autor.classList.add("item-autor", "zagolovok");
    autor.textContent = this.author;
    // Title
    let title = document.createElement("h3");
    title.classList.add("item-title", "zagolovok");
    title.textContent = this.title;
    // Details
    const detailsWrapper = document.createElement("div");
    detailsWrapper.classList.add("details-wrapper");
    // counter
    const counter = new Counter(this.count).render();
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
    btnBin.innerHTML = "delete";
    btnBin.classList.add("btn");
    btnBin.onclick = (event) => this.deleteCard(event);

    binCard.append(aboutWrapper);
    binCard.append(btnBin);

    aboutWrapper.append(imgWrapper);
    aboutWrapper.append(cardBody);

    imgWrapper.append(img);

    cardBody.append(autor);
    cardBody.append(title);
    cardBody.append(detailsWrapper);

    detailsWrapper.append(counter);
    detailsWrapper.append(priseWrapper);
    priseWrapper.append(priseText);
    priseWrapper.append(price);

    return binCard;
  }
  deleteCard(event) {
    const card = event.target.closest(".bin-card-wrapper");
    const count = card.querySelector(".count").innerText;
    decreaseTotalPrice(this.price * count);
    card.remove();
    //Bin status display
    toggleBinStatus();
  }
}
