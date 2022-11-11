function tabs(n)
{
  $('.tabs-nav a').removeClass('active');
  $('.tabs-nav a.t'+n).addClass('active');
  $('.tabs-block').fadeOut(0);
  $('.tabs-block.tab_'+n).fadeIn(222);
};

$(document).ready(function() {
  /*======Menu-toggle=============*/
  $(".burger").on("click", function() {
    $(this).toggleClass("active");
    $(".header__menu").toggleClass('active');
    $('body').addClass('hidden');
  });

  $(".close-btn").on("click", function(event) {
    event.preventDefault()
    $(".header__menu").removeClass('active');
    $('body').removeClass('hidden');
  });

  $(".close-bg").on("click", function(event) {
    event.preventDefault()
    $(".header__menu").removeClass('active');
    $('body').removeClass('hidden');
  });
  /*==========/menu-toggle=========*/

  /*===============Slide-box=================*/
    $(".open-slide-box").on("click", function (event) {
        name_Slidebox = $(this).attr('data-slide-box');
        event.preventDefault();
        $(".slide-box."+name_Slidebox).show();
        $(".slide-box."+name_Slidebox).addClass('show');
        $(".slide-box").not(".slide-box."+name_Slidebox).hide();
        $(".slide-box").not(".slide-box."+name_Slidebox).removeClass('show');
        $('body').addClass("hidden");
    });
    $(".close-btn,  .close-bg").on("click", function (event) {
        event.preventDefault();
        $(".slide-box").removeClass('show');
        $('body').removeClass("hidden");
    });
  /*==============/slide-box=================*/

  /*=========FAQ=========*/
  $(".faq__question").on("click", function() {
    $(this).toggleClass("active");
    $(this).next().slideToggle();
  });
  /*=========/FAQ=========*/

  /*=========Form-add=========*/
  $(".form-add").on("click", function() {
    $(this).toggleClass("active");
    $(".form__block-add").slideToggle();
  });
  /*=========/form-add=========*/

  /*===========Range=============*/
    $( "#slider-range-price" ).slider({
      range:'min',
      min: 10000,
      max: 1000000,
      value: 30000,
      slide: function( event, ui ) {
        $('#loan-price').html(ui.value);
       }
    });

    $( "#slider-range-period" ).slider({
      range:'min',
      min: 1,
      max: 24,
      value: 4,
      slide: function( event, ui ) {
        $('#loan-period').html(ui.value);
       }
    });
  /*===========range=============*/

  /*=============Sliders===========*/
  /*========view-slider========*/
  $('.view-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
  });
  /*=======/view-slider========*/
  /*=============/sliders===========*/
});

