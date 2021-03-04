var texto, info, expresion, valor;

/**
 * Función para validar campos con expresiones regulares
 */
function validaciones() {
	texto = document.getElementById('texto').value;
	info = document.getElementById('info');
	info.innerHTML += '<br>';

	/* EXPRESIONES REGULARES */
	//Validar que se ingresa un número real (positivo o negativo), cuyo separador de decimales puede ser la coma o el punto
	//expresion = /^[+-]?\d{2}[,.]?\d{2}$/;
	expresion = /^[+-]?[0-9]+([.,][0-9]+)?$/;
	if (expresion.test(texto)) {
		info.innerHTML += 'El valor ' + texto + ' es CORRECTO <br>';
	} else {
		info.innerHTML += 'El valor ' + texto + ' es INCORRECTO <br>';
	}
}
