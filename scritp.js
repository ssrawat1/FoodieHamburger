const hamburgerMenuContainer = document.querySelector(
  ".hamburger-menu-container"
);
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const closeIcon = document.querySelector(".close-icon");
const gotoTop = document.querySelector(".goToTop a"); // Target the <a> inside .goToTop
const body = document.querySelector("body div"); /* div inside the body */

hamburgerMenuContainer.addEventListener("click", (e) => {
  e.stopPropagation();
  header.classList.add("menu-open");
});

closeIcon.addEventListener("click", (e) => {
  header.classList.remove("menu-open");
});

gotoTop.addEventListener("click", (e) => {
  e.preventDefault();
  body.scrollTo(0, 0);
});

console.log(window);

window.addEventListener("click", (e) => {
  header.classList.remove("menu-open");
});

nav.addEventListener("click", (e) => {
  e.stopPropagation(); /* Event Bubling occur when we click on window object */
});
