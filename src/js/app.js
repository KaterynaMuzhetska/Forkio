import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();
/* Burger */
const burger = document.querySelector(".navbar__burger");
const nav = document.querySelector(".navbar__nav");
const body = document.querySelector("body");

document.addEventListener("click", (e) => {
  if (e.target.closest(".navbar__burger")) {
    burger.classList.toggle("active");
    nav.classList.toggle("visible");
  } else if (!e.target.closest(".navbar__nav")){
    burger.classList.remove("active");
    nav.classList.remove("visible");
  }
});
