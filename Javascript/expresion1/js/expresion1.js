var texto, info, expresion, valor;

/**
 * Función para validar campos con expresiones regulares
 */
function validaciones() {
	texto = document.getElementById('texto').value;
	info = document.getElementById('info');
	info.innerHTML += '<br>';

	/* EXPRESIONES REGULARES */
	//Validar que se ingrese un número de 3 dígitos enteros, el carácter punto y 2 dígitos decimales.
	// expresion = /^[0-9]{3}[.][0-9]{2}$/;
	expresion = /^\d{3}\.\d{2}$/;
	if (expresion.test(texto)) {
		info.innerHTML += 'El valor ' + texto + ' es CORRECTO <br>';
	} else {
		info.innerHTML += 'El valor ' + texto + ' es INCORRECTO <br>';
	}
}
