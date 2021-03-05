var texto, info;

function validarCampoObligatorio(campos) {
	texto = campos.texto.value;
	info = document.getElementById('info');

	//Si no es correcto el nombre
	if (!comprobarVacio(texto)) {
		info.innerHTML = '';
		//Lanzamos el mensaje de error
		info.innerHTML += 'Campo requerido<br>';
		info.className = 'error';
		return false;
	} else {
		info.className = 'ok';
		info.innerHTML = 'CORRECTO!<br>';
	}

	//Si no hay fallo devolvemos true
	return true;
}

function comprobarVacio(texto) {
	texto = texto.trim();
	return texto !== "";
}
