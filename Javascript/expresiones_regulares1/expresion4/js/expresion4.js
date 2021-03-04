var texto,
	info,
	expresion;

function existeDia(dia, array) {
	var existe = false;
	for (i = 0; i < array.length; i++) {
		if (array[i] == dia) {
			existe = true;
		}
	}
	return existe;
}

/**
 * Función para validar campos con expresiones regulares
 */
function validaciones() {
	texto = document.getElementById('texto').value;
	info = document.getElementById('info');
	info.innerHTML += '<br>';

	/* EXPRESIONES REGULARES */
	//4- Confeccionar una expresión regular que valide el ingreso del nombre de un día de la semana, un espacio y un número de 1 o 2 dígitos
	expresion = /(lunes|martes|miercoles|jueves|viernes|sabado|domingo)\s\d{1,2}$/;

	if (expresion.test(texto)) {
		info.innerHTML += 'El valor ' + texto + ' es CORRECTO <br>';
	} else {
		info.innerHTML += 'El valor ' + texto + ' es INCORRECTO <br>';
	}
}
