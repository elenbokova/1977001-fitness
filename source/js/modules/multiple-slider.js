import '../vendor/swiper.js';

let swiper;

const initMultipleSlider = () => {

  swiper = new window.Swiper('.team__slider', {

    loop: true,
    watchOverflow: true,
    allowTouchMove: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 30,
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.team__button-next',
      prevEl: '.team__button-prev',
    },
  });
};

export {swiper, initMultipleSlider};
