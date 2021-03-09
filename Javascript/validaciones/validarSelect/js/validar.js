var opcion, info;

function validarSelect(campos) {
	opcion = campos.opcion.value;
	info = document.getElementById('info');

	//Comprobamos la expresion
	if (opcion !== "0") {
		info.innerHTML += 'CORRECTO. Has elegido la opcion: '+opcion+"<br>";
		return true;
	} else {
		info.innerHTML += 'INCORRECTO. Selecciona una opción.<br>';
		return false;
	}
}
