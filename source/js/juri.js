import Swiper from './vendor/swiper-bundle';

new Swiper('.juri__slider-wrapper', {
  navigation: {
    prevEl: '.juri__button-slider--prev',
    nextEl: '.juri__button-slider--next'
  },

  slidesPerView: 1,
  spaceBetween: 40,
  loop: true,
  simulateTouch: false,
  touchRatio: 0.5,

  breakpoints: {
    768: {
      slidesPerView: 2
    },
    1366: {
      slidesPerView: 4
    }
  }
});
