const cartSection = document.createElement("section");
cartSection.classList.add("cart-container");
// Title
const binSectionTitle = document.createElement("h2");
binSectionTitle.innerText = "Cart";

const binWrapper = document.createElement("div");
binWrapper.classList.add("card");
// allow drag and drop
binWrapper.ondragover = (event) => event.preventDefault();

const binTitle = document.createElement("h4");
binTitle.innerText = "Your order";
// Allert
const binAlert = document.createElement("div");
binAlert.classList.add("alert", "alert-secondary");
binAlert.innerText = "Cart is empty";
// Card Lists
const binCardsList = document.createElement("ul");
binCardsList.classList.add("bin-card-lists");
// Total price
const binTotalWrapper = document.createElement("div");
binTotalWrapper.classList.add("card-total");
const totalText = document.createElement("span");
totalText.classList.add("total__text");
totalText.innerHTML = "Cart Subtotal:  ";
const totalPrice = document.createElement("span");
totalPrice.classList.add("total__price");
totalPrice.innerHTML = 0;
const totalDollars = document.createElement("span");
totalDollars.classList.add("total__dollar");
totalDollars.innerHTML = " $";
// proceed to checkout
const binConfirmOrder = document.createElement("div");
binConfirmOrder.classList.add("bin-confirm", "none");
let btnConfirm = document.createElement("button");
btnConfirm.innerHTML = "Proceed to checkout";
btnConfirm.classList.add("btn");
// btnBin.addEventListener("click", (event) => this.addToBin(event));

cartSection.append(binSectionTitle);

cartSection.append(binWrapper);
binWrapper.append(binTitle);
binWrapper.append(binAlert);
binWrapper.append(binCardsList);
binWrapper.append(binTotalWrapper);

binTotalWrapper.append(totalText);
binTotalWrapper.append(totalPrice);
binTotalWrapper.append(totalDollars);

binWrapper.append(binConfirmOrder);
binConfirmOrder.append(btnConfirm);
