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
			info.innerHTML += 'La fecha no existe<br>';
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
	var aux = true;

	var f = fecha.split('/');
	var day = f[0];
	var month = f[1];
	var year = f[2];

	//Le pasamos 0 para que al crear el objeto date sin dia por que no existe el dia 0
	var date = new Date(year, month, '0');

	//Cuando hace date.getDate() como le hemos pasado 0 nos da los dias que tenia el mes y año 
	//que nos han introducido si por ejemplo le metemos un dia mas alto de 31 ya nos da error.
	if ((parseInt(day)) > (parseInt(date.getDate()))) {
		aux = false;
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
