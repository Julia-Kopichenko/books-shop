const overlay = document.createElement("div");
overlay.classList.add("overlay");

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    modal.remove();
    overlay.classList.remove("active");
  });
});
