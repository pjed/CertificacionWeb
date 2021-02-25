var nombres = new Array("Pepe", "Juan", "Ana");
var correos = new Array("pepe@gmail.com", "juan@gmail.com", "ana@gmail.com");

var existe = false;

function enviarMail(correo, texto) {
  var datos = correo + "?subject= Asunto del correo" + "&body=" + texto;

  document.getElementById("info").innerHTML +=
  "Enviando correo a "+correo+"<br>";
  document.getElementById("info").style = "color: green;";
  window.open("mailto:" + datos);
}

function enviarTodos() {
  for (var i = 0; i < nombres.length; i++) {
      enviarMail(correos[i],"Hola como estas "+nombres[i]+"??")
  }
  document.getElementById("info").style = "color: green;";
  
}

function enviarCorreo() {
  var texto = document.getElementById("texto").value;
  var correo = document.getElementById("correo").value;

  if (existeUsuarioCorreo(correos, correo)) {
    document.getElementById("info").style.display = "none";
    enviarMail(correo, texto);
  } else {
    document.getElementById("info").style = "color: red;";
    document.getElementById("info").style.display = "block";
    document.getElementById("info").innerHTML =
      "El correo introducido no se encuentra almacenado inserte otro...";
  }
}

function anadirUsuario() {
  var nombreUsuario = document.getElementById("nombreUsuario").value;
  var correoUsuario = document.getElementById("correoUsuario").value;
  nombres.push(nombreUsuario);
  correos.push(correoUsuario);
  document.getElementById("info_usuarios").innerHTML =
    "Usuario: " + nombreUsuario + " añadido correctamente.<br>";
  document.getElementById("info_usuarios").style.display = "block";
  document.getElementById("info_usuarios").style = "color: green;";
}

function verUsuarios() {
  document.getElementById("info_usuarios").innerHTML +=
    "*********************<br>";
  document.getElementById("info_usuarios").innerHTML +=
    "*LISTADO USUARIOS*<br>";
  document.getElementById("info_usuarios").innerHTML +=
    "*********************<br>";
  for (var i = 0; i < nombres.length; i++) {
    document.getElementById("info_usuarios").innerHTML +=
      nombres[i] + " | " + correos[i] + "<br>";
  }
  document.getElementById("info_usuarios").style = "color: black;";
  document.getElementById("info_usuarios").style.display = "block";
}

function existeUsuarioCorreo(array, nombre) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === nombre) {
      existe = true;
    }
  }
  return existe;
}
