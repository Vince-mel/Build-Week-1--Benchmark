const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const check = document.getElementById("check");
const checkbox = document.getElementById("checkbox");
const anchor = document.getElementById("button");
check.addEventListener("click", () => {
  check.style.backgroundColor = "white";
  checkbox.removeAttribute("required");
});
anchor.addEventListener("click", () => {
  if (check.style.backgroundColor === "white") {
    window.location.assign(`./benchmark.html`);
  }
});
