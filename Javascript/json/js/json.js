var personas = [
  { nombre: "Pepe", email: "pepe@gmail.com" },
  { nombre: "Ana", email: "ana@gmail.com" },
  { nombre: "Luis", email: "luis@gmail.com" },
];

var existe = false;

function enviarMail(correo, texto) {
  var datos = correo + "?subject= Asunto del correo" + "&body=" + texto;

  document.getElementById("info").innerHTML +=
    "Enviando correo a " + correo + "<br>";
  document.getElementById("info").style = "color: green;";
  window.open("mailto:" + datos);
}

function enviarTodos() {
  for (var i = 0; i < personas.length; i++) {
    enviarMail(
      personas[i].email,
      "Hola como estas " + personas[i].nombre + "??"
    );
  }
  document.getElementById("info").style = "color: green;";
}

function enviarCorreo() {
  var texto = document.getElementById("texto").value;
  var correo = document.getElementById("correo").value;

  if (existeUsuarioCorreo(personas, correo)) {
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
  personas.push({ nombre: nombreUsuario, email: correoUsuario });
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
  for (var i = 0; i < personas.length; i++) {
    document.getElementById("info_usuarios").innerHTML +=
      personas[i].nombre + " | " + personas[i].email + "<br>";
  }
  document.getElementById("info_usuarios").style = "color: black;";
  document.getElementById("info_usuarios").style.display = "block";
}

function existeUsuarioCorreo(array, email) {
  existe = false;
  for (i = 0; i < array.length; i++) {
    if (array[i].email === email) {
      existe = true;
    }
  }
  return existe;
}
