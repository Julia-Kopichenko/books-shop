class Counter {
  constructor(count) {
    this.count = count;
  }
  renderCounter() {
    const counterWrapper = document.createElement("div");
    counterWrapper.classList.add("counter-wrapper", "items");

    const counter = document.createElement("div");
    counter.classList.add("items__control", "count");
    counter.setAttribute("data-action", "counter");
    counter.innerText = this.count == undefined ? 1 : this.count;

    const btnMinus = document.createElement("div");
    btnMinus.classList.add("items__control");
    btnMinus.setAttribute("data-action", "minus");
    btnMinus.innerText = "-";
    btnMinus.addEventListener("click", (event) => {
      if (+counter.innerText > 1) {
        const card = event.target.closest(".bin-card-wrapper");
        if (card) {
          const price = +card.querySelector(".price").innerText;
          decreaseTotalPrice(price);
        }
        counter.innerText = --counter.innerText;
      }
    });

    const btnPlus = document.createElement("div");
    btnPlus.classList.add("items__control");
    btnPlus.setAttribute("data-action", "plus");
    btnPlus.innerText = "+";
    btnPlus.addEventListener("click", (event) => {
      const card = event.target.closest(".bin-card-wrapper");
      if (card) {
        const price = +card.querySelector(".price").innerText;
        increaseTotalPrice(price);
      }
      counter.innerText = ++counter.innerText;
    });

    counterWrapper.append(btnMinus);
    counterWrapper.append(counter);
    counterWrapper.append(btnPlus);
    return counterWrapper;
  }
}
