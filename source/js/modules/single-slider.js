import '../vendor/swiper.js';

let swiper;

const initSingleSlider = () => {

  swiper = new window.Swiper('.feedback__slider', {

    loop: false,
    watchOverflow: true,
    allowTouchMove: true,
    slidesPerView: 1,

    // Navigation arrows
    navigation: {
      nextEl: '.feedback__button-next',
      prevEl: '.feedback__button-prev',
    },
  });
};

export {swiper, initSingleSlider};
