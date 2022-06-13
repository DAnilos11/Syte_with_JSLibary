$(function(){

 $('.slider_inner').slick({
     nextArrow: '<button type="button"  class="slick_next slick_btn"></button>',
     prevArrow: '<button type="button"  class="slick_prev slick_btn"></button>',
     infinite: false
});
$('select').styler();
$('.news_slider').slick({
    nextArrow: '<button type="button"  class="slick_next slick_btn"></button>',
    prevArrow: '<button type="button"  class="slick_prev slick_btn"></button>',
    infinite: false

   
    
}); 
$('.header_btn_menu').on('click', function(){
    $('.menu_header ul').slideToggle();
      });
});
