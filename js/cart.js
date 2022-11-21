class Cart {
  constructor() {
    this.cart = newTag("section", { className: "cart-container" });
    this.title = newTag("h2", { className: "text-center", innerText: "Cart" });
    this.binWrapper = newTag("div", { className: "card" });
    this.binTitle = newTag("h4", { className: "text-center", innerText: "Your order" });
    this.binAlert = newTag("div", { className: "alert alert-secondary", innerText: "Cart is empty" });
    this.binCardsList = newTag("ul", { className: "cart-lists" });
    this.binTotalWrapper = newTag("div", { className: "card-total" });
    // Total price
    this.wrapper = newTag("div", { className: "fl-space-between" });
    this.binTotalWrapper = newTag("div", { className: "card-total" });
    this.totalText = newTag("span", { className: "total__text", innerHTML: "Cart Subtotal:  " });
    this.totalPrice = newTag("span", { className: "total__price", innerHTML: this.currentNotalPrice || 0 });
    this.totalDollars = newTag("span", { className: "total__dollar", innerHTML: " $" });
    // btn delete all
    this.btnRemove = new ButtonRemove("Clear all").render();
    this.btnRemove.setAttribute("id", "btn-remove-all");
    this.btnRemove.classList.add("none");

    // proceed to checkout
    this.binConfirmOrder = newTag("div", { className: "bin-confirm none" });
    this.btnConfirm = newTag("button", { className: "btn", innerHTML: "Proceed to checkout" });

    this.listenEvents();
  }
  render() {
    this.cart.append(this.title);
    this.cart.append(this.binWrapper);
    this.binWrapper.append(this.binTitle);
    this.binWrapper.append(this.binAlert);
    this.binWrapper.append(this.binCardsList);
    this.binWrapper.append(this.wrapper);

    this.wrapper.append(this.binTotalWrapper);
    this.wrapper.append(this.btnRemove);

    this.binTotalWrapper.append(this.totalText);
    this.binTotalWrapper.append(this.totalPrice);
    this.binTotalWrapper.append(this.totalDollars);
    this.binWrapper.append(this.binConfirmOrder);
    this.binConfirmOrder.append(this.btnConfirm);

    return this.cart;
  }
  renderToOrderPage() {
    this.cart.append(this.title);
    this.cart.append(this.binWrapper);
    this.binWrapper.append(this.binTitle);
    this.binWrapper.append(this.binCardsList);
    this.binWrapper.append(this.wrapper);
    this.wrapper.append(this.binTotalWrapper);
    this.binTotalWrapper.append(this.totalText);
    this.binTotalWrapper.append(this.totalPrice);
    this.binTotalWrapper.append(this.totalDollars);

    return this.cart;
  }
  listenEvents() {
    //  DRAG AND DROP
    const dragEnter = (e) => {
      e.preventDefault();
    };
    const dragOver = (e) => {
      e.preventDefault();
    };
    this.binWrapper.addEventListener("dragenter", dragEnter);
    this.binWrapper.addEventListener("dragover", dragOver);

    this.btnConfirm.addEventListener("click", () => {
      this.openOrderPage();
      this.setToLocalStorage();
    });
  }
  openOrderPage() {
    window.location.href = "../orderPage/index.html";
  }
  getOrderList() {
    let orderList = [];
    const list = document.querySelectorAll(".bin-card-wrapper");
    for (let card of list) {
      const productInfo = {
        id: card.dataset.id,
        author: card.querySelector(".item-autor").innerText,
        title: card.querySelector(".item-title").innerText,
        price: card.querySelector(".price").innerText,
        imageLink: card.querySelector("img").getAttribute("src"),
        count: card.querySelector(".count").innerText,
      };
      orderList.push(productInfo);
    }
    return orderList;
  }
  getTotalPrice() {
    return document.querySelector(".total__price").innerText;
  }
  setToLocalStorage() {
    const arrayProducts = this.getOrderList();
    const totalPrice = this.getTotalPrice();
    localStorage.setItem("storedProducts", JSON.stringify(arrayProducts));
    localStorage.setItem("totalPrice", totalPrice);
  }
}
