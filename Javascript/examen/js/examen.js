/* VARIABLES GLOBALES*/
var vivero = new Array("pino", "abeto", "encina", "mimosa");
var semillaConsultar, semillaNueva;
var existeItem;
var informacion;
var campoVacio = false;

/**
 * Función que permite consultar las existencias de un producto dado
 */
function consultarExistencias() {
  informacion = document.getElementById("informacion");

  //Limpiamos la caja de informacion inicialmente
  limpiarCampos(informacion, "");

  // Recojemos los valores de la semilla a consultar como del contenedor de informacion
  semillaConsultar = document.getElementById("itemConsultar").value;

  //Comprobamos que nos introduzca algun valor
  campoVacio = comprobarcampoVacio(semillaConsultar);

  if (campoVacio) {
    document.getElementById("itemConsultar").style.border = "solid black";
    //Miramos que la semilla introducida este en el vivero
    existeItem = buscarSemillaVivero(semillaConsultar, vivero);

    // Si existe la semilla mostramos la información en el contenedor información
    if (existeItem) {
      informacion.innerHTML += semillaConsultar + " SI HAY EN STOCK<br>";
    } else {
      informacion.innerHTML += semillaConsultar + " NO HAY EN STOCK<br>";
    }
  }

  if (!campoVacio) {
    informacion.innerHTML += "Introduzca algun valor en la caja de busqueda";
    document.getElementById("itemConsultar").style.border = "thick solid red";
    document.getElementById("itemConsultar").focus();
  }
}

/**
 * Función que nos permite añadir semillas nuevas al vivero.
 */
function addSemilla() {
  informacion = document.getElementById("informacion");

  //Limpiamos la caja de informacion inicialmente
  limpiarCampos(informacion, "");

  // Recojemos la semilla a añadir y el cuadro de informacion para mostrar las semillas del vivero
  semillaNueva = document.getElementById("itemAdd").value;

  //Comprobamos que nos introduzca algun valor
  campoVacio = comprobarcampoVacio(semillaNueva);

  if (campoVacio) {
    document.getElementById("itemAdd").style.border = "solid black";

    //Añadirmos la semilla nueva al vivero
    anadirSemilla(vivero, semillaNueva, informacion);

    //Mostramos el vivero para ver que si se ha añadido correctamente
    mostrarVivero(vivero, informacion);
  }

  if (!campoVacio) {
    informacion.innerHTML += "Introduzca algun valor en la caja de busqueda";
    document.getElementById("itemAdd").style.border = "thick solid red";
    document.getElementById("itemAdd").focus();
  }
}

/**
 * Función que llama a crear informe del vivero
 */
function mostrarInforme() {
  informacion = document.getElementById("informacion");

  //Limpiamos la caja de informacion inicialmente
  limpiarCampos(informacion, "");

  //Creamos y mostramos el informe
  crearInforme(vivero, informacion);
}

/**
 * Método que nos permite encontrar una semilla
 * @param {semilla} semilla para buscar
 * @param {vivero} vivero con las semillas existentes
 */
function buscarSemillaVivero(semilla, vivero) {
  var existe = false;
  for (var i = 0; i < vivero.length; i++) {
    if (vivero[i] == semilla) {
      existe = true;
    }
  }
  return existe;
}

/**
 * Método que nos permite añadir una semilla
 * @param {vivero} vivero con las semillas existentes
 * @param {semilla} para añadir al vivero
 * @param {informacion} contenedor informacion para mostrar lo que ocurra
 */
function anadirSemilla(vivero, semilla, informacion) {
  vivero.push(semilla);
  informacion.innerHTML += semilla + " añadida al vivero<br>";
}

/**
 * Método que nos permite mostrar las existencias actuales del vivero
 * @param {vivero} vivero con las semillas existentes
 * @param {informacion} contenedor informacion para mostrar lo que ocurra
 */
function mostrarVivero(vivero, informacion) {
  informacion.innerHTML += "<br>";
  informacion.innerHTML += "EXISTENCIAS VIVERO ACTUALES <br>";
  for (var i = 0; i < vivero.length; i++) {
    informacion.innerHTML += vivero[i] + "<br>";
  }
}

/**
 * Método que limpia un campo al valor que se le indique
 * @param {informacion} contenedor informacion para mostrar lo que ocurra
 * @param {valor} valor al que queramos resetear el campo anterior
 */
function limpiarCampos(informacion, valor) {
  informacion.innerHTML = valor;
}

/**
 * Método que crea y muestra el informe de las semillas existentes
 * @param {vivero} vivero con las semillas existentes
 * @param {informacion} contenedor informacion para mostrar lo que ocurra
 */
function crearInforme(vivero, informacion) {
  informacion.innerHTML +=
    "Tenemos un total de " + vivero.length + " tipos de semillas que son: <br>";
  for (var i = 0; i < vivero.length; i++) {
    informacion.innerHTML += "- " + vivero[i] + "<br>";
  }
}

/**
 * Función que comprueba si introduce texto en el campo
 * @param {texto} a comprobar si viene vacio 
 */
function comprobarcampoVacio(texto) {
  return texto !== "";
}
