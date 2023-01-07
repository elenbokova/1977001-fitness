import '../vendor/swiper.js';

const feedback = document.querySelector('[data-id="feedback"]');
let swiper;

const initSingleSlider = () => {

  feedback.dataset.js = '';

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
