/**
 * Función para validar campos con expresiones regulares
 */
function validaciones() {
	texto = document.getElementById('caja').value;
	info = document.getElementById('info');
	info.innerHTML += '<br>';

	/* EXPRESIONES REGULARES */
	//Validar ISBN de 13 dígitos, siempre empieza en 978 o 979
	expresion = /^97[8|9]\d{10}$/;

	//Comprobamos la expresion
	if (expresion.test(texto)) {
		info.innerHTML += 'CORRECTO';
	} else {
		info.innerHTML += 'FALSO';
	}
}
