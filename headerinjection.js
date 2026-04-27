let elem = document.createElement("div");
elem.innerHTML = "<link rel='stylesheet' href = 'https://yabligowski.github.io/wed-dev/header.css'>";
document.body.prepend(elem);

fetch("https://yabligowski.github.io/wed-dev/header.css")
.then((result) => result.text())
.then((text) => {elem.innerHTML = elem.innerHTML +text;})
.catch((e) => console.error(e));
