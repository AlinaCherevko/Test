import Swiper from 'swiper';
import { Navigation, Keyboard, Pagination } from 'swiper/modules';

import 'swiper/css';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 6,
  loop: true,
  speed: 600,

  modules: [Navigation, Keyboard, Pagination],

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    // nextEl: '.swiper-button-next',
    // prevEl: '.swiper-button-prev',
  },

  keyboard: {
    enabled: true,
  },

  breakpoints: {
    1440: {
      //   slidesPerView: 1,
      //   spaceBetween: 24,
    },
  },
});

const swiperB = new Swiper('.brands__swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 6,
  loop: true,
  speed: 600,

  modules: [Navigation, Keyboard, Pagination],

  pagination: {
    el: '.swiper-pagination2',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  keyboard: {
    enabled: true,
  },

  breakpoints: {
    1440: {
      //   slidesPerView: 1,
      //   spaceBetween: 24,
    },
  },
});
