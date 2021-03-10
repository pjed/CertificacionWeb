/**
 * Función que valida el campo texto sea nombre o apellidos y muestra el estado por pantalla
 * @param {*} elemento
 * @param {*} info
 */
function validarCampoTexto(elemento, info) {
	var dato = elemento.value.trim();
	var patron = /^[a-zA-Z\s]+$/;

	if (patron.test(dato)) {
		document.getElementById(info).innerHTML = 'Campo rellenado correctamente.';
		document.getElementById(info).className = 'correcto';
		return true;
	} else {
		document.getElementById(info).innerHTML = 'Debe rellenar este campo correctamente.';
		document.getElementById(info).className = 'error';
		return false;
	}
}

/**
 * Función que valida el DNI y muestra el estado por pantalla
 * @param {*} dni
 * @param {*} info
 */
function validarDni(dni, info) {
	var dato = dni.value.trim();
	var letrasDNI = [
		'T',
		'R',
		'W',
		'A',
		'G',
		'M',
		'Y',
		'F',
		'P',
		'D',
		'X',
		'B',
		'N',
		'J',
		'Z',
		'S',
		'Q',
		'V',
		'H',
		'L',
		'C',
		'K',
		'E',
	];
	var patron = /^\d{8}[A-Z]+$/;

	if (!patron.test(dato)) {
		document.getElementById(info).innerHTML = 'Formato Incorrecto';
		document.getElementById(info).className = 'error';
		return false;
	}

	var num_dni = parseInt(dato.substring(0, 8));
	var resto = num_dni % 23;
	//Se comprueba que la letra que ha metido el usuario sea igual que la de la posición del array
	if (dato.charAt(8) != letrasDNI[resto]) {
		document.getElementById(info).innerHTML = 'Letra del DNI Incorrecta';
		document.getElementById(info).className = 'error';
		return false;
	} else {
		document.getElementById(info).innerHTML = 'Campo rellenado correctamente.';
		document.getElementById(info).className = 'correcto';
		return true;
	}
}

/**
 * Función que valida el formato fecha introducido
 * @param {*} campo
 */
function validarFormatoFecha(campo) {
	var patron = /^([0-2][0-9]|3[01])[/](0[1-9]|1[012])[/]\d{4}$/;
	if (patron.test(campo)) {
		return true;
	} else {
		return false;
	}
}

/**
 * Función que comprueba si la fecha existe
 * @param {*} fecha
 */
function existeFecha(fecha) {
	var array_fecha = fecha.split('/');
	var day = array_fecha[0];
	var month = array_fecha[1];
	var year = array_fecha[2];
	var fecha_sin_dia = new Date(year, month, '0');

	//"fecha_sin_dia" es una fecha del mes y año indicados
	//sin asignarle ningún día concreto del mes, por lo que al
	//hacer getDate(), te devuelve el nº real de días que tiene
	//ese mes (teniendo en cuenta si es bisiesto, etc.)
	var num_dias_mes = fecha_sin_dia.getDate();
	if (parseInt(day) > num_dias_mes) {
		return false;
	}
	return true;
}

/**
 * Función que valida la fecha y muestra el estado por pantalla
 * @param {*} fecha
 * @param {*} info
 */
function validarFecha(fecha, info) {
	var fecha = fecha.value.trim();
	if (fecha != '') {
		if (validarFormatoFecha(fecha)) {
			if (existeFecha(fecha)) {
				document.getElementById(info).innerHTML = 'Campo rellenado correctamente.';
				document.getElementById(info).className = 'correcto';
				return true;
			} else {
				document.getElementById(info).innerHTML = 'La fecha introducida no existe.';
				document.getElementById(info).className = 'error';
				return false;
			}
		} else {
			document.getElementById(info).innerHTML = 'El formato de la fecha es incorrecto.';
			document.getElementById(info).className = 'error';
			return false;
		}
	} else {
		document.getElementById(info).innerHTML = '';
		document.getElementById(info).className = 'correcto';
		return true;
	}
}

/**
 * Función que valida el número de teléfono introducido y muestra el estado por pantalla
 * @param {*} telefono
 * @param {*} info
 */
function validarTelefono(telefono, info) {
	var numero = telefono.value.trim();
	var patron = /^[6-9]\d{2}(\s\d{2}){3}$/;

	if (numero != '') {
		if (patron.test(numero)) {
			document.getElementById(info).innerHTML = 'Campo rellenado correctamente.';
			document.getElementById(info).className = 'correcto';
			return true;
		} else {
			document.getElementById(info).innerHTML = 'Número Incorrecto.';
			document.getElementById(info).className = 'error';
			return false;
		}
	} else {
		document.getElementById(info).innerHTML = '';
		document.getElementById(info).className = 'correcto';
		return true;
	}
}

/**
 * Función que valida el email y muestra el estado por pantalla
 * @param {*} email
 * @param {*} info
 */
function validarEmail(email, info) {
	correo = email.value.trim();
	var patron = /^\w+([.-]\w+)*@\w+([.-]\w+)*\.\w{2,4}$/;

	if (correo != '') {
		if (patron.test(correo)) {
			document.getElementById(info).innerHTML = 'Campo rellenado correctamente.';
			document.getElementById(info).className = 'correcto';
			return true;
		} else {
			document.getElementById(info).innerHTML = 'Email Incorrecto.';
			document.getElementById(info).className = 'error';
			return false;
		}
	} else {
		document.getElementById(info).innerHTML = '';
		document.getElementById(info).className = 'correcto';
		return true;
	}
}

/**
 * Función que comprueba si se ha seleccionado alguna opcion del select y muestra el estado por pantalla
 * @param {*} op
 * @param {*} info
 */
function validarSelect(op, info) {
	var opcion = op.value;

	if (opcion == null || opcion == '') {
		document.getElementById(info).innerHTML = 'No ha seleccionado un estado civil.';
		document.getElementById(info).className = 'error';
		return false;
	} else {
		document.getElementById(info).innerHTML = 'Ha elegido la opción: ' + opcion;
		document.getElementById(info).className = 'correcto';
		return true;
	}
}
/**
 * Función que valida si se ha seleccionado un checkbox como minimo y muestra el estado por pantalla
 * @param {*} op
 * @param {*} info
 */
function validarCheckbox(op, info) {
	var grupo = document.getElementsByName(op);
	var marcados = [];
	var contador = 0;

	//OPCION ELEGANTE
	for (var pos in grupo) {
		if (grupo[pos].type == 'checkbox') {
			if (grupo[pos].checked) {
				marcados[contador] = grupo[pos].value;
				contador++;
			}
		}
	}

	if (contador == 0) {
		document.getElementById(info).innerHTML = 'No ha seleccionado ningún valor.';
		document.getElementById(info).className = 'error';
		return false;
	} else {
		document.getElementById(info).innerHTML =
			'Ha seleccionado ' + contador + ' valores, que tienen como id: ' + marcados;
		document.getElementById(info).className = 'correcto';
		return true;
	}
}

/**
 * Función validar radio button y muestra el estado por pantalla
 * @param {*} op
 * @param {*} info
 */
function validarRadioButton(op, info) {
	var grupo = document.getElementsByName(op);
	var marcado;

	for (var pos in grupo) {
		if (grupo[pos].type == 'radio') {
			if (grupo[pos].checked) {
				marcado = grupo[pos].value;
			}
		}
	}

	if (marcado == null) {
		document.getElementById(info).innerHTML = 'No ha seleccionado ningún valor.';
		document.getElementById(info).className = 'error';
		return false;
	} else {
		document.getElementById(info).innerHTML = 'Ha seleccionado el valor: ' + marcado;
		document.getElementById(info).className = 'correcto';
		return true;
	}
}

/**
 * Función que valida todos los campos y muestra información si ha ocurrido algún error
 * @param {*} campos
 */
function validarTodo(campos) {
	var nombreOK = validarCampoTexto(campos.nombre, 'info_nombre');
	var apellidosOK = validarCampoTexto(campos.apellidos, 'info_apellidos');
	var dniOK = validarDni(campos.dni, 'info_dni');
	var fechaOK = validarFecha(campos.fnacimiento, 'info_fnacimiento');
	var telefonoOK = validarTelefono(campos.telefono, 'info_telefono');
	var emailOK = validarEmail(campos.email, 'info_email');
	var ocupacionOK = validarSelect(campos.ocupacion, 'info_ocupacion');
	var aficionesOK = validarCheckbox('aficiones', 'info_aficiones');
	var sexoOK = validarRadioButton('sexo', 'info_sexo');

	if (nombreOK && apellidosOK && dniOK && ocupacionOK && aficionesOK && sexoOK) {
		return true;
	} else {
		return false;
	}
}

/**
 * Función que limpia todos los campos a vacio
 */
function resetearCampos() {
	document.getElementById('info_nombre').innerHTML = '';
	document.getElementById('info_apellidos').innerHTML = '';
	document.getElementById('info_dni').innerHTML = '';
	document.getElementById('info_fnacimiento').innerHTML = '';
	document.getElementById('info_telefono').innerHTML = '';
	document.getElementById('info_email').innerHTML = '';
	document.getElementById('ocupacion').value = 0;
	document.getElementById('info_ocupacion').innerHTML = '';
	document.getElementById('info_aficiones').innerHTML = '';
	document.getElementById('info_sexo').innerHTML = '';
}
