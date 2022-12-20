import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

var slideContainer1 = document.querySelector('.mySwiper1');
var slideContainer2 = document.querySelector('.mySwiper2');
var slideContainer3 = document.querySelector('.mySwiper3');
var slideContainer4 = document.querySelector('.mySwiper4');

//slider effect flip

var swiper1 = new Swiper(slideContainer1, {
    effect: "flip",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

var swiper2 = new Swiper(slideContainer2, {
  effect: "flip",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper3 = new Swiper(slideContainer3, {
  effect: "flip",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Slider per view

var swiper4 = new Swiper(slideContainer4, {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    autoplay:{
        delay:2000,
    },

    loop: true,

    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },

        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },

        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },

        1024: {
            slidesPerView: 4,
            spaceBetween: 40,
        }
      }
  });

//event hover

  slideContainer1.addEventListener('mouseenter', () => {
    //swiper.autoplay.start();
    swiper1.slideNext();
  });

  slideContainer1.addEventListener('mouseleave', () => {
    //swiper.autoplay.stop();
    swiper1.slideTo(0);
  });

  slideContainer2.addEventListener('mouseenter', () => {
    //swiper.autoplay.start();
    swiper2.slideNext();
  });

  slideContainer2.addEventListener('mouseleave', () => {
    //swiper.autoplay.stop();
    swiper2.slideTo(0);
  });
  slideContainer3.addEventListener('mouseenter', () => {
    //swiper.autoplay.start();
    swiper3.slideNext();
  });

  slideContainer3.addEventListener('mouseleave', () => {
    //swiper.autoplay.stop();
    swiper3.slideTo(0);
  });