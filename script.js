document.addEventListener("DOMContentLoaded", (event) => {
const  swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  effect: "fade",
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const  swiper2 = new Swiper(".swiper2", {
  // Optional parameters
  loop: true,
  spaceBetween: 30,
  breakpoints: {
    600: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
});

