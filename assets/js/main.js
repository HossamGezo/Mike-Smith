let menuBtn = document.querySelector(".menu-btn");
let burger = document.querySelector(".menu-btn__burger");
let nav = document.querySelector(".nav");
let menuNav = document.querySelector(".menu-nav");
let items = document.querySelectorAll(".menu-nav__item");

menuBtn.addEventListener("click", _ => {
  burger.classList.toggle("open");
  nav.classList.toggle("open");
  menuNav.classList.toggle("open");
  items.forEach(item => {
    item.classList.toggle("open");
  })
});