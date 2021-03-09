var telefono, info;

function validarTelefono(campos) {
	telefono = campos.telefono.value.trim();
	info = document.getElementById('info');

	
	expresion = /^[6-9]\d{2}(\s[0-9]{3}){2}$/;

	//Comprobamos la expresion
	if (expresion.test(telefono)) {
		info.innerHTML += 'TELÉFONO CORRECTO<br>';
		return true;
	} else {
		info.innerHTML += 'TELÉFONO FALSO<br>';
		return false;
	}
}
