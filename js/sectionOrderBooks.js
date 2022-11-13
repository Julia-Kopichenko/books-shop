const orderSection = document.createElement("section");
orderSection.classList.add("order-container");
// Title
const binSectionTitle = document.createElement("h2");
binSectionTitle.innerText = "Order Books";

const binWrapper = document.createElement("div");
binWrapper.classList.add("card");

const binConfermOrder = document.createElement("div");
binConfermOrder.classList.add("card-body", "border-top");

const binTitle = document.createElement("h4");
binTitle.innerText = "Ваш заказ";
// Allert
const binAlert = document.createElement("div");
binAlert.classList.add("alert", "alert-secondary");
binAlert.innerText = "Корзина пуста";
// Card Lists
const binCardsList = document.createElement("ul");
binCardsList.classList.add("bin-card-lists");
// Total price
const binTotalWrapper = document.createElement("div");
binTotalWrapper.classList.add("card-total");
const totalText = document.createElement("span");
totalText.classList.add("total__text");
totalText.innerHTML = "Total:  ";
const totalPrice = document.createElement("span");
totalPrice.classList.add("total__price");
totalPrice.innerHTML = 0;
const totalDollars = document.createElement("span");
totalDollars.classList.add("total__dollar");
totalDollars.innerHTML = " $";

orderSection.append(binSectionTitle);

orderSection.append(binWrapper);
binWrapper.append(binTitle);
binWrapper.append(binAlert);
binWrapper.append(binCardsList);
binWrapper.append(binTotalWrapper);

binTotalWrapper.append(totalText);
binTotalWrapper.append(totalPrice);
binTotalWrapper.append(totalDollars);

// orderSection.append(binConfermOrder);

binConfermOrder.innerHTML = `	<h5 class="card-title">Оформить заказ</h4>
						<form>
							<div class="form-group">
								<input type="text" class="form-control" placeholder="Ваш номер телефона">
							</div>
							<button type="submit" class="btn btn-primary">Заказать</button>
						</form>`;

// 						<!-- Стоимость заказа -->
// 						<div class="cart-total">
// 							<p><span class="h5">Доставка:</span> <span class="delivery-cost free">бесплатно</span> </p>
// 							<p><span class="h5">Итого:</span> <span class="total-price">330</span> <span class="rouble">₽</span></p>
// 						</div>
// 						<!-- // Стоимость заказа -->

// 					</div>

// 					<!-- Оформить заказ -->
// 					<div id="order-form" class="card-body border-top">

// 					</div>

// `;
binWrapper.append(binConfermOrder);
