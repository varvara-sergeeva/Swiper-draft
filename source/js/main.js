console.log("hellow!");

new Swiper('.section__slider', {
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  autoHeight: true,
  slidesPerView: 3.3,
  spaceBetween: 40,
  centeredSlides: true,
  //стартовый слайд - отсчет начинается с нуля
  initialSlide: 1,
  // бесконечная прокрутка
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  grabCursor: true,
  //! адаптивность
  //breakpoints: {
  //  320: {
  //    slidesPerView: 1,
  //  },
  //  640: {
  //    slidesPerView: 2,
  //  },
  //  998: {
  //    slidesPerView: 3,
  //  },
  //},
})
