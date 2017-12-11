
// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});


$$(document).on('deviceready',initapp);

function initapp(){
  console.log("dispositivo listo!!!");
  $$("#publicar").on("click",click_btn);
  $$("#atras").on("click",click_btn2);
  $$("#camara").on("click",click_btn3);
  $$("#cerrar").on("click",click_btn4);

}

function click_btn(){
  console.log("click");
  document.location="publicar.html";
}
function click_btn2(){
  console.log("click");
  document.location="main.html";
}
function click_btn3(){
  console.log("click");
  document.location="tomarFoto.html";
}
function click_btn4(){
  console.log("click");
  document.location="index.html";
}
