class Counter {
  constructor(count) {
    this.count = count;

    this.counterWrapper = createElement({
      tag: "div",
      classNames: ["counter-wrapper", "items"],
    });
    this.counter = createElement({
      tag: "div",
      classNames: ["items__control", "count"],
      innerText: this.count == undefined ? 1 : this.count,
    });
    this.btnMinus = createElement({
      tag: "div",
      classNames: ["items__control"],
      innerText: "-",
    });
    this.btnPlus = createElement({
      tag: "div",
      classNames: ["items__control"],
      innerText: "+",
    });

    this.listenEvents();
  }
  renderCounter() {
    this.counterWrapper.append(this.btnMinus);
    this.counterWrapper.append(this.counter);
    this.counterWrapper.append(this.btnPlus);

    return this.counterWrapper;
  }
  listenEvents() {
    this.btnPlus.addEventListener("click", (event) => this.increment(event));
    this.btnMinus.addEventListener("click", (event) => this.decrement(event));
  }
  increment(event) {
    const card = event.target.closest(".bin-card-wrapper");
    if (card) {
      const price = +card.querySelector(".price").innerText;
      increaseTotalPrice(price);
    }
    this.counter.innerText = ++this.counter.innerText;
  }
  decrement(event) {
    if (+this.counter.innerText > 1) {
      const card = event.target.closest(".bin-card-wrapper");
      if (card) {
        const price = +card.querySelector(".price").innerText;
        decreaseTotalPrice(price);
      }
      this.counter.innerText = --this.counter.innerText;
    }
  }
}
