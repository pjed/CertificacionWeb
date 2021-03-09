var texto, info;

function validarFecha(campos) {
	texto = campos.texto.value;
	info = document.getElementById('info');

	
	expresion = /^(0[0-2][0-9]|3[01])[/](0[1-9]|1[012])[/]\d{4}$/;

	//Comprobamos la expresion
	if (expresion.test(texto)) {
		info.innerHTML += 'CORRECTO';
		return true;
	} else {
		info.innerHTML += 'FALSO';
		return false;
	}
}
