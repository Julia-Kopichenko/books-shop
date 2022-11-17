let fragment = new DocumentFragment();

const root = newTag("div", { className: "root" });

root.append(new Header().render());
root.append(new Main().render());
root.append(new Overlay().render());

fragment.append(root);

document.body.append(fragment);
