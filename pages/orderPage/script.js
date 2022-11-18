const root = document.querySelector(".root");
root.prepend(new Header().render());

const row = document.querySelector(".row");

// add cart
row.append(new Cart().render());

// add changes to cart
const cardAlert = document.querySelector(".alert");
const cardConfirm = document.querySelector(".bin-confirm");
const totalPrice = document.querySelector(".total__price");

cardAlert.classList.add("none");
cardConfirm.classList.add("none");
totalPrice.innerHTML = localStorage.getItem("totalPrice");
// -----------------------------------------------------------

// add products from local storage to cart
const cartLists = document.querySelector(".cart-lists");

function getFromLocalStorage() {
  let products = [];
  if (localStorage.getItem("storedProducts")) products = JSON.parse(localStorage.getItem("storedProducts"));

  return products;
}

// add cards to Cart
getFromLocalStorage().forEach((productInfo) => {
  cartLists.append(new CartCard(productInfo).renderCard());
  toggleBinStatus();
});
// ------------------------------------------------------
