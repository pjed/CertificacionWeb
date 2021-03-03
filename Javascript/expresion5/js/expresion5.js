var texto, info, expresion, valor;

/**
 * Función para validar campos con expresiones regulares
 */
function validaciones() {
	texto = document.getElementById('texto').value;
	info = document.getElementById('info');
	info.innerHTML += '<br>';

	/* EXPRESIONES REGULARES */
	//5 Validar el ingreso de una hora con el formato hh:mm:ss o hh:mm
	expresion = /^(0\d|1\d|2[0-3]):([0:5\d])(:([0-5]\d))?$/;
	if (expresion.test(texto)) {
		info.innerHTML += 'El valor ' + texto + ' es CORRECTO <br>';
	} else {
		info.innerHTML += 'El valor ' + texto + ' es INCORRECTO <br>';
	}
}
