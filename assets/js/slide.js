// Slide main
$(document).ready(function () {
  $('.slide-main').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});
//
$(document).ready(function () {
  $('.logo-slider').slick({
    slidesToShow: 5,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    infinite: true
  });
});