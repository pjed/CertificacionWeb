/**
 * Función para validar campos con expresiones regulares
 */
function validaciones() {
	texto = document.getElementById('caja').value;
	info = document.getElementById('info');
	info.innerHTML += '<br>';

	/* EXPRESIONES REGULARES */
	expresion = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,12}$/;

	//Comprobamos la expresion
	if (expresion.test(texto)) {
		info.innerHTML += 'CORRECTO';
	} else {
		info.innerHTML += 'FALSO';
	}
}
