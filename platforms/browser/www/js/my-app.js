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

  
  $$("#iniciar").on("click", click_btn);
  $$("#guardar").on("click", registrarUsuario);
  $$("#pub").on("click", publicar);
}






function click_btn(){
  console.log("click");
  var correo = $$("#correo").val();
  var password = $$("#password").val();

  if(correo.length >0 && password.length >0){
 myApp.showPreloader("Iniciando Sesión...");
      $$.ajax({
        url: 'https://feacontr.000webhostapp.com/login.php',
        method: 'POST',
        dataType:'json',
        data: {
          email: correo,
          pass: password
        },
        success: function(data){
            myApp.hidePreloader();
            console.log(data);
             if(data.respuesta){
              console.log("ok");
              localStorage.setItem('id_usuario', data.id);
              console.log(data.id);
              document.location="main.html";
             }else{
              myApp.alert('datos incorrectos');
             }
        },
        error: function(){
          myApp.hidePreloader();
          myApp.alert('error');
}
});
  }else{
    myApp.alert("Debe llenar los campos", "Advertencia");
  }
}


//funcion para registrar usuarios
function registrarUsuario(){
  myApp.showPreloader("Registrando...");
 console.log("registrar");
  var nombre=$$("#nombre").val();
  var apellido=$$("#apellido").val();
  var email=$$("#email").val();
  var pass=$$("#pass").val();
  var sexo=$$("#sexo").val();
  var edad=$$("#edad").val();    


  if(nombre.length >0 && apellido.length >0 && email.length >0 &&  pass.length >0 && sexo.length >0 && edad.length >0 ){
      $$.ajax({
          dataType: "json",
          method: "GET",
          data:{
              nombre: nombre,
              apellido: apellido,
              email: email,
              pass: pass,
              sexo: sexo,
              edad: edad
          },
          url: 'https://feacontr.000webhostapp.com/conexion.php',
          success: function(respuesta){
              console.log(respuesta.respuesta);
              if(respuesta.respuesta){
                 myApp.alert("Registro exitoso", "Portal");
                  myApp.closeModal(".popup-registro");
                   myApp.hidePreloader();

              }else{
                  myApp.hidePreloader();
                   myApp.alert("Debe llenar los campos", "Advertencia");
              }
          },
          error: function(){

               myApp.alert("Debe llenar los campos", "Advertencia");
          }
      });
  }else{
      myApp.alert("Debe llenar los campos", "Advertencia");
  }
}

//funcion para publicar
function publicar(){
  myApp.showPreloader("Publicando en PortalNews...");
  var titulo=$$("#titulo").val();
  var comentario=$$("#comentario").val();
  var lat=$$("#lat").val();
  var lon=$$("#lon").val();
  var idu=localStorage.getItem('id_usuario');
  console.log(idu);


  if(titulo.length >0 && comentario.length >0 && lat.length >0 &&  lon.length >0 && idu.length>0 ){
      $$.ajax({
          dataType: "json",
          method: "GET",
          data:{
              titulo: titulo,
              comentario: comentario,
              ltd: lat,
              lng: lon,
              id_usuario: idu
          },
          url: 'https://feacontr.000webhostapp.com/publicar.php',
          success: function(respuesta){
              console.log(respuesta.respuesta);
              if(respuesta.respuesta){
                 myApp.alert("Publicación exitosa", "Portal");
                  myApp.closeModal(".popup-registro");
                   myApp.hidePreloader();

              }else{
                  myApp.hidePreloader();
                   myApp.alert("Debe llenar los campos", "Advertencia");
              }
          },
          error: function(){

               myApp.alert("Debe llenar los campos", "Advertencia");
          }
      });
  }else{
      myApp.alert("Debe llenar los campos", "Advertencia");
  }
}





$$('.popup-about').on('popup:opened', function () {
  console.log('About Popup opened')
});
$$('.popup-about').on('popup:close', function () {
  console.log('About Popup is closing')
});
$$('.popup-registro').on('popup:opened', function () {
  console.log('About Popup opened')
});
$$('.popup-registro').on('popup:close', function () {
  console.log('About Popup is closing')
});


