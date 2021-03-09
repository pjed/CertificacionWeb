var texto, info;

function validarTelefono(campos) {
	texto = campos.texto.value;
	info = document.getElementById('info');

	
	expresion = /^\d{9}$/;

	//Comprobamos la expresion
	if (expresion.test(texto)) {
		info.innerHTML += 'TELÉFONO CORRECTO<br>';
		return true;
	} else {
		info.innerHTML += 'TELÉFONO FALSO<br>';
		return false;
	}
}
