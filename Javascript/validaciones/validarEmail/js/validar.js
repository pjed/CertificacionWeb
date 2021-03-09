var email, info;

/**
 * Función que ejecuta la validación del email
 * @param {campos} introducidos del formulario 
 */
function validarEmail(campos) {
	email = campos.email.value.trim();
	info = document.getElementById('info');

	//Comprobamos la expresion
	if (comprobarEmail(email)) {
		info.innerHTML += 'Email CORRECTO<br>';
		return true;
	} else {
		info.innerHTML += 'Email INCORRECTO<br>';
		return false;
	}
}

/**
 * Función que comprueba que el email es correcto
 * @param {email} introducido por teclado 
 */
function comprobarEmail(email){
	
	var expresion = /^[^.-_][a-zA-Z0-9]+@[a-zA-Z0-9.-_]+[.][a-zA-Z0-9-]+$/;

	if(expresion.test(email)){
		return true;
	}

	return false;
}
