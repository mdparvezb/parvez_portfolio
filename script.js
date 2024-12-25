const menu = document.querySelector(".mobile-menu");
const menuIcon = document.querySelector(".hamberger-icon");
const closeIcon = document.querySelector(".close-img");
const nav = document.querySelector("nav");

menuIcon.addEventListener("click", showMenu);
closeIcon.addEventListener("click", closeMenu);

console.log();

function showMenu() {
  menu.style.display = "block";
}

function closeMenu() {
  menu.style.display = "none";
}

window.addEventListener("scroll", () => {
  if (scrollY > 60) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
