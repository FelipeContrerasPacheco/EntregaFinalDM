

var myApp = new Framework7();
 
var mainView = myApp.addView('.view-main',{

        dynamicNavBar: true
});

// 1 Slide Per View, 50px Between
var mySwiper1 = myApp.swiper('.swiper-1', {
  pagination:'.swiper-1 .swiper-pagination',
  spaceBetween: 50
});
 
// 2 Slides Per View, 20px Between
var mySwiper2 = myApp.swiper('.swiper-2', {
  pagination:'.swiper-2 .swiper-pagination',
  spaceBetween: 20,
  slidesPerView: 2
});
 
// 3 Slides Per View, 10px Between
var mySwiper3 = myApp.swiper('.swiper-3', {
  pagination:'.swiper-3 .swiper-pagination',
  spaceBetween: 10,
  slidesPerView: 3
});
 
// Vertical, 0px Between
var mySwiperVertical = myApp.swiper('.swiper-vertical', {
  pagination:'.swiper-vertical .swiper-pagination',
  direction: 'vertical'
});
 
// Slow speed
var mySwiperSlow = myApp.swiper('.swiper-slow', {
  pagination:'.swiper-slow .swiper-pagination',
  speed: 600
});       