$(function() {
    $('.slider__inner, .news__slider-inner').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        infinite: false,
    });
    $('select').styler();

});