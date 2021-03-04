/**
 * Función para validar campos con expresiones regulares
 */
function validaciones() {
	texto = document.getElementById('caja').value;
	info = document.getElementById('info');
	info.innerHTML += '<br>';

	/* EXPRESIONES REGULARES */
	//Validar un nombre, incluyendo nombres compuestos por dos palabras como mucho
	//expresion = /^[A-Za-z]+\s[A-Za-z]+$/;
	expresion = /^([A-Z][a-z]+)(\s[A-Z][a-z]+)?$/;

	//Comprobamos la expresion
	if (expresion.test(texto)) {
		info.innerHTML += 'CORRECTO';
	} else {
		info.innerHTML += 'FALSO';
	}
}
