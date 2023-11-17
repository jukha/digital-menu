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
  if (scrollPosition >= 190) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
});

const swiper = new Swiper(".food-item .swiper", {
  direction: "horizontal",
  pagination: {
    el: ".food-item .swiper-pagination",
  },

  navigation: {
    nextEl: ".food-item .swiper-button-next",
    prevEl: ".food-item .swiper-button-prev",
  },
});

const swiper1 = new Swiper(".swiper1", {
  slidesPerView: 3,
  spaceBetween: 0,
  breakpoints: {
    480: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 6,
    },
    1110: {
      slidesPerView: 7,
    },
  },
  pagination: ".swiper-pagination1",
  paginationClickable: true,

  navigation: {
    nextEl: ".swiper1-btn-next",
    prevEl: ".swiper1-btn-prev",
  },
});
