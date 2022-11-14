const root = document.querySelector(".root");
const main = document.createElement("main");
const maneContainer = document.createElement("div");
maneContainer.classList.add("container", "text-center");
//! row
const row = document.createElement("div");
row.classList.add("row");

root.append(header);
root.append(main);
root.append(overlay);

main.append(maneContainer);
maneContainer.append(row);

row.append(bookCatalog);
row.append(cartSection);
