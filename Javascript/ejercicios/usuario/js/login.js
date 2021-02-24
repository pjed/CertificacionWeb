var veces = 1;
var ventana, ventanaDetalle, ventanaIntermedia;
var dni, nya, tfno, hijos;
var mostrarHijos = 0;
var comprobarNombre = 0;
var usuario = "";
var password = "";

var usuarioCorrecto = "alioli";
var passwordCorrecto = "alioli";

function comprobarDNI(dni) {
  var aux = false;
  var contenedor = document.getElementById("dni_error");
  if (dni.length !== 8) {
    contenedor.style.display = "block";
    document.getElementById("dni").style.backgroundColor = "red";
  } else {
    //Comprobar letra DNI
    var numero, let, letra;
    var expresion_regular_dni = /^[XYZ]?\d{5,8}[A-Z]$/;

    dni = dni.toUpperCase();

    if (expresion_regular_dni.test(dni) === true) {
      numero = dni.substr(0, dni.length - 1);
      numero = numero.replace("X", 0);
      numero = numero.replace("Y", 1);
      numero = numero.replace("Z", 2);
      let = dni.substr(dni.length - 1, 1);
      numero = numero % 23;
      letra = "TRWAGMYFPDXBNJZSQVHLCKET";
      letra = letra.substring(numero, numero + 1);
      if (letra != let) {
        //alert('Dni erroneo, la letra del NIF no se corresponde');
        contenedor.style.display = "block";
        document.getElementById("dni").style.backgroundColor = "red";
        aux = false;
      } else {
        //alert('Dni correcto');
        contenedor.style.display = "none";
        document.getElementById("dni").style.backgroundColor = "green";
        aux = true;
      }
    } else {
      //alert('Dni erroneo, formato no válido');
      contenedor.style.display = "block";
      document.getElementById("dni").style.backgroundColor = "red";
      aux = false;
    }
  }
  return aux;
}

function comprobarNombreVacio(nombre) {
  var aux = false;
  var contenedor = document.getElementById("nya_error");
  if (nombre == "") {
    contenedor.style.display = "block";
    document.getElementById("nya").style.backgroundColor = "red";
  } else {
    contenedor.style.display = "none";
    document.getElementById("nya").style.backgroundColor = "green";
    aux = true;
  }
  return aux;
}

function comprobarTfno(tfno) {
  var aux = false;
  var contenedor = document.getElementById("tfno_error");
  if (tfno.length !== 9) {
    contenedor.style.display = "block";
    document.getElementById("tfno").style.backgroundColor = "red";
  } else {
    contenedor.style.display = "none";
    document.getElementById("tfno").style.backgroundColor = "green";
    aux = true;
  }
  return aux;
}

function comprobarHijo(valor) {
  return valor !== "";
}

function comprobarEnviar() {
  dni = document.getElementById("dni").value;
  nya = document.getElementById("nya").value;
  tfno = document.getElementById("tfno").value;
  hijos = document.getElementById("hijos").value;

  if (mostrarHijos == 0) {
    if (hijos > 0) {
      for (i = 0; i < hijos; i++) {
        document.getElementById("hijos_info").innerHTML +=
          "Nombre y Apellidos del hijo " +
          (i + 1) +
          " <input type='text' name='nom" +
          (i + 1) +
          "' id='nom" +
          (i + 1) +
          "'><br>";
      }
    }
    mostrarHijos = 1;
  }

  var html =
    "<script src='js/login.js'></script>" +
    "<link rel='stylesheet' href='css/login.css'>" +
    "<div class='contenedor'>" +
    "<div class='hijo'>" +
    "<fieldset>" +
    "<legend>Datos a enviar</legend>" +
    "D/Dña. " +
    nya +
    ", con DNI " +
    dni +
    " tiene los siguientes hijos/as:" +
    "<br>";
  for (i = 0; i < hijos; i++) {
    if (
      comprobarDNI(dni) &&
      comprobarNombreVacio(nya) &&
      comprobarTfno(tfno) &&
      comprobarHijo(document.getElementById("nom" + (i + 1)).value)
    ) {
      html +=
        "Hijo " +
        (i + 1) +
        " " +
        document.getElementById("nom" + (i + 1)).value +
        "<br>";
      comprobarNombre = 0;
    } else {
      html += "Hijo " + (i + 1) + " No puede tener el nombre vacío" + "<br>";
      comprobarNombre = 1;
    }
  }
  html += "</div>" + "</div>" + "</fieldset>";

  if (comprobarNombre === 0) {
    ventanaDetalle = window.open("", ventana, "width=800,height=800");
    ventanaDetalle.document.write(html);
  }
}

function comprobarLogin() {
  var usuario = document.getElementById("login").value;
  var password = document.getElementById("password").value;

  var contador = 3;
  if (veces < contador) {
    if (usuario === usuarioCorrecto && password === passwordCorrecto) {
      ventana = window.open("", ventana, "width=800,height=800");

      var formulario =
        "<script src='js/login.js'></script>" +
        "<link rel='stylesheet' href='css/login.css'>" +
        "<h1>Bienvenido al sistema:  " +
        usuarioCorrecto +
        "</h1><br><br><br>" +
        "<div class='contenedor'>" +
        "<div class='hijo'>" +
        "<fieldset>" +
        "<legend>Datos Personales</legend>" +
        "<form action='#'>" +
        "DNI: <input type='text' name='dni' id='dni' placeholder='12345678'><br><br>" +
        "<div id='dni_error' style='display: none; color:red;'>El dni no contiene 8 cifras o la letra no corresponde al dni introducido por favor inserte uno válido</div>" +
        "Nombre y Apellidos: <input type='text' name='nya' placeholder='Nombre y Apellidos' id='nya'><br><br>" +
        "<div id='nya_error' style='display: none; color:red;'>El nombre y apellidos no puede estar vacio por favor inserte uno</div>" +
        "Tfno: <input type='number' name='tfno' maxlength='9' placeholder='123456789' id='tfno'><br><br>" +
        "<div id='tfno_error' style='display: none; color:red;'>El telefono no contiene 9 cifras por favor inserte uno válido</div>" +
        "Número de Hijos: <input type='number' name='hijos' placeholder='Número de hijos' value='1' id='hijos' minValue=1><br><br>" +
        "<div id='hijos_info'></div>" +
        "<br><br><input type='button' onclick='comprobarEnviar()' id='enviar' value='Enviar'><br><br>" +
        "</form>" +
        "</fieldset>" +
        "</div>" +
        "</div>";

      ventana.document.write(formulario);
      veces = 1;
      document.getElementById("salir").hidden = false;
      document.getElementById("entrar").disabled = true;
    } else {
      document.getElementById("informacion").innerHTML +=
        "Usuario y/o contraseña incorrectos" + "<br>";
    }
  } else {
    document.getElementById("informacion").innerHTML +=
      "Se desactiva por seguridad el boton de entrar intentelo mas tarde o reinicia la página" +
      "<br>";
    document.getElementById("entrar").disabled = true;
  }
  veces += 1;
}

function cerrar() {
  ventana.close();

  document.getElementById("salir").hidden = true;

  document.getElementById("login").value = "";
  document.getElementById("password").value = "";
  document.getElementById("login").focus();
  document.getElementById("entrar").disabled = false;
}
