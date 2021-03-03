var texto, info, expresion, valor;

/**
 * Función para validar campos con expresiones regulares
 */
function validaciones() {
	texto = document.getElementById('texto').value;
	info = document.getElementById('info');
	info.innerHTML += '<br>';

	/* EXPRESIONES REGULARES */
	//2 Solicitar el ingreso de la coordenada de un punto. El formato a ingresar por teclado es:	(999,999) Los números pueden tener entre 1 y 3 dígitos
	expresion = /^[(]\d{1,3}[,]\d{1,3}[)]$/;
	if (expresion.test(texto)) {
		info.innerHTML += 'El valor ' + texto + ' es CORRECTO <br>';
	} else {
		info.innerHTML += 'El valor ' + texto + ' es INCORRECTO <br>';
	}
}
