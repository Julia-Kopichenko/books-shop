const form = document.forms["form"];
const allInput = Array.from(form);
const btnSubmit = document.getElementById("btn-submit");
const btnReset = document.getElementById("btn-reset");

// add listeners
allInput.forEach((input) => {
  if (!input.classList.contains("btn")) {
    input.addEventListener("blur", inputHandler);
    input.addEventListener("input", inputHandler);
  }
});
btnSubmit.addEventListener("click", buttonSubmitHandler);
btnReset.addEventListener("click", clearForm);

// add attribute "is-valid" to inputs with "required"
const validInputArr = [];
allInput.forEach((element) => {
  if (element.hasAttribute("required")) {
    element.setAttribute("is-valid", "0");
    validInputArr.push(element);
  }
});

//change date format
const date = document.getElementById("delivery-date");
const date_now = new Date();
date.value = date_now.getFullYear() + "-" + (date_now.getMonth() + 1) + "-" + (date_now.getDate() + 1);
date.setAttribute("min", date_now.getFullYear() + "-" + (date_now.getMonth() + 1) + "-" + (date_now.getDate() + 1));
date.setAttribute("max", date_now.getFullYear() + "-" + (date_now.getMonth() + 2) + "-" + (date_now.getDate() + 1));

// check all inputs for validity
function allInputsAreValid() {
  const isAllValid = [];
  validInputArr.forEach((el) => {
    isAllValid.push(el.getAttribute("is-valid"));
  });
  const isValid = isAllValid.every((el) => {
    if (el == 1) {
      return true;
    } else {
      return false;
    }
  });

  if (isValid) {
    btnSubmit.removeAttribute("disabled");
  } else {
    btnSubmit.setAttribute("disabled", "disabled");
  }
}

// button submit handler
function buttonSubmitHandler(event) {
  event.preventDefault();
  // get current info
  const name = document.querySelector("#name").value;
  const surName = document.querySelector("#surname").value;
  const street = document.querySelector("#street").value;
  const houseNum = document.querySelector("#houseNum").value;
  const flatNum = document.querySelector("#flatNum").value;
  const deliveryDate = document.querySelector("#delivery-date").value;
  let description = document.createElement("p");
  description.innerHTML =
    `Сustomer:\n` +
    `name:  ${name}\n` +
    `surName:  ${surName}\n` +
    `Delivery address:\n` +
    `street: ${street}, house number: ${houseNum}, flat number: ${flatNum}\n` +
    `Delivery date:  ${deliveryDate}\n`;
  // open summarized information
  new Modal("The order created", description.innerHTML).openModal();
}
// input handler
function inputHandler({ target }) {
  if (target.hasAttribute("required")) {
    errorMessage = target.nextElementSibling;
    if (target.checkValidity()) {
      errorMessage.classList.add("none");
      target.classList.remove("invalid");
      target.setAttribute("is-valid", "1");
      allInputsAreValid();
    } else {
      errorMessage.classList.remove("none");
      target.setAttribute("is-valid", "0");
      target.classList.add("invalid");
      allInputsAreValid();
    }
  }
}

// clear form function
function clearForm() {
  allInput.forEach((input) => {
    if (!input.classList.contains("btn")) {
      input.value = "";
      if (input.hasAttribute("required")) {
        input.setAttribute("is-valid", "0");
        input.classList.remove("invalid");
        input.nextElementSibling.classList.add("none");
      }
      btnSubmit.setAttribute("disabled", "disabled");
    }
  });
}
