var producto1,
	producto2,
	producto3,
	cuantosSeleccionados = 0,
	productoIDs = '',
	info;

function validarCheckbox(campos) {
	producto1 = campos.producto1;
	producto2 = campos.producto2;
	producto3 = campos.producto3;
	info = document.getElementById('info');

	//Comprobamos la expresion
	cuantosSeleccionados = comprobarChecks(producto1, producto2, producto3, cuantosSeleccionados);

	if (cuantosSeleccionados > 0) {
		info.innerHTML += 'CORRECTO - <br>Ha selecionado ' + cuantosSeleccionados + ' con los IDs <br>' + productoIDs + '<br>';
		return true;
	} else {
		info.innerHTML += 'INCORRECTO - Seleccione por lo menos un producto<br>';
		return false;
	}
}

/**
 * Función que comprueba que se ha seleccionado por lo menos un check
 * @param {producto1}
 * @param {producto2}
 * @param {producto3}
 */
function comprobarChecks(producto1, producto2, producto3, cuantos) {

	for (const check of producto1) {
		if (check.checked) {
			productoIDs +="Producto 1 ->"+ check.value+" ";
			cuantos += 1;
		}
	}
	productoIDs += "<br>";
	for (const check of producto2) {
		if (check.checked) {
			productoIDs +="Producto 2 ->"+ check.value+" ";
			cuantos += 1;
		}
	}
	productoIDs += "<br>";
	for (const check of producto3) {
		if (check.checked) {
			productoIDs +="Producto 3 ->"+ check.value+" ";
			cuantos += 1;
		}
	}
	productoIDs += "<br>";
	return cuantos;
}
