var fecha, info;

/**
 * Función que permite validar una fecha introducida por teclado
 * @param {campos} campos que existen en el formulario 
 */
function validarFecha(campos) {
	fecha = campos.texto.value.trim();
	info = document.getElementById('info');

	//Comprobamos la expresion
	if (validarFormatoFecha(fecha)) {
		//info.innerHTML += 'El formato de la fecha es correcta<br>';
		if (existeFecha(fecha)) {
			//info.innerHTML += 'La fecha existe y es correcta<br>';
			return true;
		} else {
			info.innerHTML += 'La fecha no existe y es incorrecta<br>';
			return false;
		}
	} else {
		info.innerHTML += 'El formato de la fecha es incorrecta<br>';
		return false;
	}
}

/**
 * Función que permite comprobar si la fecha introducida es real o no
 * @param {fecha} introducida por teclado
 */
function existeFecha(fecha) {
	var aux = false;

	var f = fecha.split("/");
	
	if ((f[0]!=="30" && f[1]!=="02") || (f[0]!=="31" && f[1]!=="02")) {
		aux = true;
	}

	return aux;
}

/**
 * Función que permite validar el formato de la fecha
 * @param {fecha} introducida por teclado
 */
function validarFormatoFecha(fecha) {
	var aux = false;
	expresion = /^(0[0-2][0-9]|3[01])[/](0[1-9]|1[012])[/]\d{4}$/;
	if (expresion.test(fecha)) {
		aux = true;
	}
	return aux;
}
