// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

var cantidad_foto;

$$(document).on('deviceready',initapp);

function initapp(){
  cantidad_foto = 0;
  console.log("dispositivo listo!!!");
  $$('#tomar_foto').on('click',tomarfoto);
}

function tomarfoto(){
  console.log("tomar foto!!");
  navigator.camera.getPicture(onSuccess, onFail, options);
}
var options = {
        sourceType: 1,
        quality: 50,
        destinationType: 1,
        allowEdit: false,
        correctOrientation: true,
        saveToPhotoAlbum: true
}


function onSuccess(imageURI) {
    create_foto(imageURI);
}

function onFail(message) {
    console.log('Failed because: ' + message);
}

function clickOnFoto(url_img){
    console.log("click en foto");
    console.log(url_img);
    var popupHTML = '';
    popupHTML += '<div class="popup">';
    popupHTML += '<div class="content-block">';
    popupHTML += '<img src="'+url_img+'" width="100%"/>';
    popupHTML += '<p><a href="#" class="close-popup">Cerrar</a></p>';
    popupHTML += '</div>';
    popupHTML += '</div>';
  myApp.popup(popupHTML);
}

function create_foto(imageURI){
    var html_text = "";
    html_text += '<li class="item-content">';
    html_text += '<div class="item-media">';
    html_text += '<img src="'+imageURI+'" onclick="clickOnFoto(\''+imageURI+'\');" width="44">';
    html_text += '</div>';
    html_text += '<div class="item-inner">';
    html_text += '<div class="item-title-row">';
    html_text += '<div class="item-title">Foto '+cantidad_foto+'</div>';
    html_text += '</div>';
    html_text += '<div class="item-subtitle">UBB</div>';
    html_text += '</div>';
    html_text += '</li>';
    cantidad_foto++;
    $$('#container_foto').append(html_text);
}