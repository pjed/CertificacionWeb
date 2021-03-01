/* METODOS PARA EL EXAMEN */

/**
 * Método #1 que nos permite encontrar un elemento en el array y nos dice si esta o no está
 * @param {*} elemento elemento para buscar en el array
 * @param {*} array array con la informacion
 */
function buscar(elemento, array) {
	var existe = false;
	for (var i = 0; i < array.length; i++) {
		if (array[i] == texto) {
			existe = true;
		}
	}
	return existe;
}

/**
 * Método que nos permite añadir un elemento nuevo al array
 * @param {*} array array con la informacion
 * @param {*} elemento elemento para añadir al array
 * @param {*} informacion input para mostrar la informacion
 */

function anadir(array, elemento, informacion) {
	array.push(elemento);
	informacion.value += 'Elemento ' + elemento + ' añadido correctamente';
}

/**
 * Método que nos permite mostrar la información de un array
 * @param {*} array array con la informacion
 * @param {*} informacion input para mostrar la informacion
 */
function mostrar(array, informacion) {
	for (var i = 0; i < array.length; i++) {
		informacion.innerHTML += array[i] + ', ';
	}
}

/**
 * Método que permite buscar un elemento por parametro y modificarlo por un elemento nuevo
 * @param {*} array array con la informacion 
 * @param {*} elemento elemento a buscar
 * @param {*} elemento_nuevo elemento nuevo para sobrescribir el elemento antiguo
 */
function modificarElemento(array, elemento, elemento_nuevo) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] == elemento) {
			array[i] = elemento_nuevo;
		}
	}
}

/**
 * Método que permite modificar un elemento según la posición que nos pasen por parámetro
 * @param {*} indice indice del array buscado 
 * @param {*} valor valor para modificar
 * @param {*} array array con la información
 */
function modificarElementoPosicion(indice, valor, array){
    array[indice] = valor;
}

/**
 * Método que permite limpiar campos id que se nos pase por parametro y con su valor
 * @param {*} id identificador del input para resetear 
 * @param {*} valor valor del input que queramos que tenga
 */
function limpiarCampos(id, valor){
    document.getElementById(id).value = valor;
}
