import '../vendor/swiper.js';

const team = document.querySelector('[data-id="team"]');
let swiper;

const hideDuplicates = () => {
  const duplicates = document.querySelectorAll('.swiper-slide-duplicate');
  duplicates.forEach((element) => {
    element.removeAttribute('tabindex');
  });
};

const initMultipleSlider = () => {

  team.dataset.js = '';

  swiper = new window.Swiper('.team__slider', {

    loop: true,
    watchOverflow: true,
    allowTouchMove: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 30,
        initialSlide: 2,
      },
      576: {
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 30,
        initialSlide: 2,
      },
      1023: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },

    navigation: {
      nextEl: '.team__button-next',
      prevEl: '.team__button-prev',
    },
  });
  hideDuplicates();
};

export {swiper, initMultipleSlider};
