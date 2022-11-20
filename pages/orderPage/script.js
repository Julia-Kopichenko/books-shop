const root = document.querySelector(".root");
root.prepend(new Header().render());
root.append(new Overlay().render());

const row = document.querySelector(".row");

// add cart
row.append(new Cart().renderToOrderPage());

// add totalPrice
const totalPrice = document.querySelector(".total__price");

totalPrice.innerHTML = localStorage.getItem("totalPrice");
// -----------------------------------------------------------

// add products from local storage to cart
const cartLists = document.querySelector(".cart-lists");

function getFromLocalStorage() {
  let products = [];
  if (localStorage.getItem("storedProducts")) products = JSON.parse(localStorage.getItem("storedProducts"));

  return products;
}

// add products to Cart
getFromLocalStorage().forEach((productInfo) => {
  cartLists.append(new CartCard(productInfo).renderCardToOrderPage());
});
// ------------------------------------------------------
