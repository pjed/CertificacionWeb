var veces = 1;
var ventana;

function comprobarEnviar() {
  var dni = document.getElementById("dni").value;
  var nya = document.getElementById("nya").value;
  var tfno = document.getElementById("tfno").value;
  var hijos = document.getElementById("hijos").value;

  if (hijos > 0) {
    alert("hijos: " + hijos);
    for (i = 0; i < hijos; i++) {
      alert("<input type='text' name='nom" + i + "' id='nom" + i + "'>");
      ventana.document.getElementById("hijos").innerHTML +=
        "<input type='text' name='nom' id='nom' + i + >";
    }
  } else {
    ventana.document.getElementById("hijos").innerHTML += document.write(
      "No tiene hijos"
    );
  }
}

function comprobarLogin() {
  var usuario = "";
  var password = "";

  var usuarioCorrecto = "alioli";
  var passwordCorrecto = "alioli";

  var usuario = document.getElementById("login").value;
  var password = document.getElementById("password").value;

  var contador = 3;
  if (veces < contador) {
    if (usuario === usuarioCorrecto && password === passwordCorrecto) {
      ventana = window.open("", ventana, "width=800,height=800");

      var formulario =
        "<script src='js/login.js'></script>" +
        "Bienvenido al sistema:  " +
        usuarioCorrecto +
        "<br><br><br>" +
        "<form action='#'>" +
        "DNI: <input type='text' name='dni' id='dni'><br><br>" +
        "Nombre y Apellidos: <input type='text' name='nya' id='nya'><br><br>" +
        "Tfno: <input type='text' name='tfno' id='tfno'><br><br>" +
        "Número de Hijos: <input type='number' name='hijos' id='hijos'><br><br>" +
        "<div id='hijos'></div>" +
        "<input type='button' onclick='comprobarEnviar()' id='enviar' value='Enviar'><br><br>" +
        "</form>";

      ventana.document.write(formulario);
      document.getElementById("salir").hidden = false;
      document.getElementById("entrar").disabled = true;
    } else {
      document.getElementById("informacion").innerHTML +=
        "Usuario y/o contraseña incorrectos" + "<br>";
    }
    veces += 1;
  } else {
    document.getElementById("informacion").innerHTML +=
      "Se desactiva por seguridad el boton de entrar intentelo mas tarde o reinicia la página" +
      "<br>";
    document.getElementById("entrar").disabled = true;
  }
}

function cerrar() {
  ventana.close();

  document.getElementById("salir").hidden = true;

  document.getElementById("login").value = "";
  document.getElementById("password").value = "";
  document.getElementById("login").focus();
  document.getElementById("entrar").disabled = false;
}
