var genero, info;

function validarFecha(campos) {
	genero = campos.genero;
	info = document.getElementById('info');

	//Comprobamos que ha seleccionado algun radiobutton
	if (comprobarRadio(genero)) {
		info.innerHTML += 'CORRECTO';
		return true;
	} else {
		info.innerHTML += 'INCORRECTO - Seleccione por lo menos una opción';
		return false;
	}
}

/**
 * Función que comprueba que se ha seleccionado un radio
 * @param {m} radiobutton masculino
 * @param {f} radiobutton femenino
 */
function comprobarRadio(g) {
	var aux = false;
	for (var i = 0; i < g.lenght; i++) {
		if (g[i].checked) {
			aux = true;
		}
	}
	return aux;
}
