const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  centeredSlides: true,
  effect: 'slide',
  grabCursor: true,
  speed: 1000,

  breakpoints: {
    320: {
      spaceBetween: 10,
    },
    480: {
      spaceBetween: 10,
    },
    768: {
      spaceBetween: 15,
    },
    1200: {
      spaceBetween: 20,
    },
  },

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
