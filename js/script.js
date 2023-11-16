"use strict";

const decrementBtn = document.querySelector(".decrement-btn");
const incrementBtn = document.querySelector(".increment-btn");
const itemQuantity = document.querySelector(".item-quantity");

function handleIncrement() {
  itemQuantity.textContent = Number(itemQuantity.textContent) + 1;
}
function handleDecrement() {
  if (Number(itemQuantity.textContent) < 2) return;
  itemQuantity.textContent = Number(itemQuantity.textContent) - 1;
}

incrementBtn.addEventListener("click", handleIncrement);
decrementBtn.addEventListener("click", handleDecrement);

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY || window.pageYOffset;

  if (scrollPosition >= 40) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
    // loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});
