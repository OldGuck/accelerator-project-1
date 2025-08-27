import Swiper from './vendor/swiper-bundle';

new Swiper('.reviews__slider-wrapper', {
  navigation: {
    prevEl: '.reviews__button-slider--prev',
    nextEl: '.reviews__button-slider--next'
  },

  slidesPerView: 1,
  spaceBetween: 100,
  simulateTouch: false,
  touchRatio: 0.5,
});
