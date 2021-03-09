var check1, check2, check3, info;

function validarCheckbox(campos) {
	check1 = campos.check1;
	check2 = campos.check2;
	check3 = campos.check3;
	info = document.getElementById('info');

	//Comprobamos la expresion
	if (comprobarChecks(check1, check2, check3)) {
		info.innerHTML += 'CORRECTO - Ha selecionado por lo menos un checkbox<br>';
		return true;
	} else {
		info.innerHTML += 'INCORRECTO - Seleccione por lo menos un checkbox<br>';
		return false;
	}
}

/**
 * Función que comprueba que se ha seleccionado por lo menos un check
 * @param {check1} hijo 0 
 * @param {check2} hijo 1 
 * @param {check3} hijo 2 
 */
function comprobarChecks(check1, check2, check3) {
	if (check1.checked || check2.checked || check3.checked) {
		return true;
	}
	return false;
}
