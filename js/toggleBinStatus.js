function toggleBinStatus() {
  const binWrapper = document.querySelector(".bin-card-lists");
  const cardAlert = document.querySelector(".alert");
  const cardConfirm = document.querySelector(".bin-confirm");
  if (binWrapper.children.length > 0) {
    cardAlert.classList.add("none");
    cardConfirm.classList.remove("none");
  } else {
    cardAlert.classList.remove("none");
    cardConfirm.classList.add("none");
  }
}
