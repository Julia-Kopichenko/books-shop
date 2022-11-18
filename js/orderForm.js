const form = document.querySelector("#form");
console.log(form);

function submitHandler(event) {
  event.preventDefault();
  // do validation
}
function resetHandler(event) {
  event.preventDefault();
}
form.addEventListener("submit", (event) => submitHandler(event));
form.addEventListener("reset", (event) => resetHandler(event));
