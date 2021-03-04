/**
 * Función para validar campos con expresiones regulares
 */
function validaciones() {
	texto = document.getElementById('caja').value;
	info = document.getElementById('info');
	info.innerHTML += '<br>';

	/* EXPRESIONES REGULARES */
	//Expresion 1
	//expresion = /^[01-31]{2}[/][01-12]{2}[/][1900-2999]{4}$/;
	expresion = /^(0[0-2][0-9]|3[01])[/](0[1-9]|1[012])[/]\d{4}$/;

	//Comprobamos la expresion
	if (expresion.test(texto)) {
		info.innerHTML += 'CORRECTO';
	} else {
		info.innerHTML += 'FALSO';
	}
}
