"use strict";

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY || window.pageYOffset;

  if (scrollPosition >= 50) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
});
