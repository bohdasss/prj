// $(function () {
//   $(".slider").slick({
//     arrows: true,
//     fade: true,

//     dots: true,
//     prevArrow: `<button type="button" class="slider__arrow slider__arrow-left"><img src="./img/arr-l.svg"></button>`,
//     nextArrow: `<button type="button" class="slider__arrow slider__arrow-right"><img src="./img/arr-r.svg"></button>`,
//   });
// });

const swiper = new Swiper(".swiper", {
  // loop: true,
  // mousewhell: true,
  // keyboard: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});
