class Cart {
  constructor() {
    this.cart = newTag("section", { className: "cart-container" });
    this.title = newTag("h2", { innerText: "Cart" });
    this.binWrapper = newTag("div", { className: "card" });
    this.binTitle = newTag("h4", { innerText: "Your order" });
    this.binAlert = newTag("div", { className: "alert alert-secondary", innerText: "Cart is empty" });
    this.binCardsList = newTag("ul", { className: "bin-card-lists" });
    this.binTotalWrapper = newTag("div", { className: "card-total" });
    // Total price
    this.binTotalWrapper = newTag("div", { className: "card-total" });
    this.totalText = newTag("span", { className: "total__text", innerHTML: "Cart Subtotal:  " });
    this.totalPrice = newTag("span", { className: "total__price", innerHTML: "0" });
    this.totalDollars = newTag("span", { className: "total__dollar", innerHTML: " $" });
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
    this.binWrapper.append(this.binTotalWrapper);
    this.binTotalWrapper.append(this.totalText);
    this.binTotalWrapper.append(this.totalPrice);
    this.binTotalWrapper.append(this.totalDollars);
    this.binWrapper.append(this.binConfirmOrder);
    this.binConfirmOrder.append(this.btnConfirm);

    return this.cart;
  }
  listenEvents() {
    this.binWrapper.ondragover = (event) => event.preventDefault();
  }
}
