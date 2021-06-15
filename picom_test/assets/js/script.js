document.addEventListener('DOMContentLoaded', function () {
  let swiperMain = new Swiper('.main-slider', {


    slidesPerView: 1,
    watchOverflow: true,

    navigation: {
      nextEl: '.main-right',
      prevEl: '.main-left',
    },

    allowTouchMove: false,
  });
});