function createElement({ ...data }) {
  const { tag, innerText, classNames, attributes, innerHTML } = data;
  let element;
  if (tag) {
    element = document.createElement(tag);
  }
  if (classNames) {
    element.classList.add(...classNames);
  }
  if (innerText) {
    element.innerText = innerText;
  }
  if (innerHTML) {
    element.innerHTML = innerHTML;
  }
  if (attributes) {
    for (let key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
  }
  return element;
}

function addToDocumentFragment(element) {
  let fragment = new DocumentFragment();
  fragment.append(element);
  return fragment;
}
