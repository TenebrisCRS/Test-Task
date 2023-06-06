$(function () {
  $('.slider__list').slick({
    slidesToShow: 3,
    arrows: true,
    variableWidth: true,
    adaptiveHeight: true,
    centerMode: false,
    focusOnSelect: true,
    asNavFor: '.slider__list-big',
    appendArrows: $('.slider__navigation-box'),
    easing: 'easy-in-out',
    prevArrow: '<button type="button" class="slick-prev"><?xml version="1.0" encoding="UTF-8"?><svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4.5" y="-4.5" width="48" height="47" rx="23.5" transform="matrix(-1 0 0 1 57 9)" fill="white"/><path d="M30 23L25 28L30 33" stroke="#454545" stroke-width="3" stroke-linecap="square" stroke-linejoin="round"/><rect x="4.5" y="-4.5" width="48" height="47" rx="23.5" transform="matrix(-1 0 0 1 57 9)" stroke="#F5F5F4" stroke-width="9"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><?xml version="1.0" encoding="UTF-8"?><svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4.5" y="4.5" width="48" height="47" rx="23.5" fill="white"/><path d="M27 23L32 28L27 33" stroke="#454545" stroke-width="3" stroke-linecap="square" stroke-linejoin="round"/><rect x="4.5" y="4.5" width="48" height="47" rx="23.5" stroke="#F5F5F4" stroke-width="9"/></svg></button>'
  })

  $('.slider__list-big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider__list',
  });
})