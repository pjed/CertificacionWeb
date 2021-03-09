var genero, info, selectedValue;

function validarRadiobutton(campos) {
	genero = campos.genero;
	info = document.getElementById('info');

	//Comprobamos que ha seleccionado algun radiobutton
	if (comprobarRadio(genero)) {
		info.innerHTML += 'El seleccionado es: ' + selectedValue + '<br>';
	} else {
		info.innerHTML += 'INCORRECTO - Seleccione por lo menos una opción<br>';
		return false;
	}
}

/**
 * Función que comprueba que se ha seleccionado un radio
 * @param {m} radiobutton masculino
 * @param {f} radiobutton femenino
 */
function comprobarRadio(g) {
	for (const radio of g) {
		if (radio.checked) {
			selectedValue = radio.value;
			return true;
		}
	}
	return false;
}
