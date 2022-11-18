class ButtonRemove {
  constructor(tooltip) {
    this.button = newTag("button", { className: "btn-remove" });
    this.img = newTag("img", { src: "../../assets/images/free-icon-waste-8134513.png", width: "35", height: "35" });
    this.img.setAttribute("data-tooltip", tooltip);

    this.listenEvents();
  }
  render() {
    this.button.append(this.img);
    return this.button;
  }
  listenEvents() {
    this.button.addEventListener("click", (event) => {
      this.deleteCard(event);
    });
  }
  deleteCard(event) {
    if (event.target.closest("#btn-remove-all")) {
      const list = document.querySelectorAll(".bin-card-wrapper");
      for (let card of list) {
        card.remove();
      }
      resetTotalPrice();
    } else {
      const card = event.target.closest(".bin-card-wrapper");
      const price = card.querySelector(".price").innerText;
      const count = card.querySelector(".count").innerText;
      decreaseTotalPrice(price * count);
      card.remove();
    }
    //Bin status display
    toggleBinStatus();
  }
}
