const burgerButton = document.getElementById("burger-button");
const headerBurger = document.getElementById("header__burger");

burgerButton.addEventListener("click", () => {
  if (burgerButton.classList.contains("open")) {
    burgerButton.classList.remove("open");
  } else {
    burgerButton.classList.add("open");
  }

  if (headerBurger.classList.contains("open")) {
    headerBurger.classList.remove("open");
  } else {
    headerBurger.classList.add("open");
  }
});
