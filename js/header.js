const header = document.createElement("header");
header.classList.add("header");

const headerContainer = document.createElement("div");
headerContainer.classList.add("container", "text-center");
// logo
const logo = document.createElement("img");
logo.setAttribute("src", "./assets/images/logo-book.png");
logo.setAttribute("width", "100");
logo.setAttribute("alt", "logo book");
// h1
const h1 = document.createElement("h1");
h1.innerText = "world books";
headerContainer.append(h1);

// let fragment = new DocumentFragment();
// let title = document.createElement("h1");
// title.innerText = "world books";
// fragment.appendChild(title);
// headerContainer.appendChild(fragment);

// leadText
const leadText = document.createElement("p");
leadText.classList.add("lead-text");
leadText.innerText = "Welcome to amazing book shop!";

header.append(headerContainer);
headerContainer.append(logo);
headerContainer.append(h1);
headerContainer.append(leadText);
