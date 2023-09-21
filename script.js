setTimeout(() => {
  var loader = document.getElementById("loader_bg");
  loader.classList.add('loaded')
}, "3000");

document.addEventListener("DOMContentLoaded", (event) => {
  const swiper = new Swiper("#swiper1", {
    // Optional parameters
    loop: true,
    effect: "fade",
    autoplay:true,
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
  
  const  swiper2 = new Swiper("#swiper2", {
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