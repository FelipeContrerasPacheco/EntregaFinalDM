var myApp = new Framework7();

var $$ = Dom7;

var idWatch;
var map;
var marker;
var pos ;

var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});

$$(document).on('deviceready',initapp);

function initapp(){
  console.log("Dispositivo Listo.");
  $$("#guard").on("click", obtenercoordenadas);
}

function initMap() {
	var initial = {lat: -25.363, lng: 131.044};
	if( localStorage.getItem("latitud") != null){
		initial = {lat: localStorage.getItem("latitud"), lng: localStorage.getItem("longitud")};
	}
	

	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 17,
		center: initial
	});

	marker = new google.maps.Marker({
		position: initial,
		map: map
	});
     


}

 var onSuccess = function(position) {
 		myApp.hidePreloader();
               $$("#lat").val(position.coords.latitude);   
               $$("#lon").val(position.coords.longitude);
           
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
    	myApp.hidePreloader();
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

function obtenercoordenadas(){
   myApp.showPreloader("obteniendo posicion");
   navigator.geolocation.getCurrentPosition(onSuccess, onError);
}
