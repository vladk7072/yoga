$(function () {
  new Swiper(".plans__slider", {
    effect: "cube",
    cubeEffect: {
      slideShadows: false,
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
    grabCursor: true,
    slideToClickedSlide: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    navigation: {
      nextEl: ".plans__slide-next",
      prevEl: ".plans__slide-prev",
    },
  });

  $(".teachers__slider").slick({
    centerMode: true,
    slidesToShow: 5,
    prevArrow: ".teachers__prev-btn",
    nextArrow: ".teachers__next-btn",
    responsive: [
      {
        breakpoint: 1541,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 801,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 533,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2
      //   }
      // },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ],
  });

  new Swiper(".what__slider", {
    effect: "cube",
    cubeEffect: {
      slideShadows: false,
      shadow: false,
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
    grabCursor: true,
    slideToClickedSlide: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    navigation: {
      nextEl: ".what__slide-next",
      prevEl: ".what__slide-prev",
    },
  });

  $(".header__burger").click(function () {
    $(".header__burger").toggleClass("header__burger--active");
    $(".header__menu").toggleClass("header__menu--active");
  });

  

});
