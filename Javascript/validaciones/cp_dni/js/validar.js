var cp, dni;
function validar(campos) {
	cp = campos.cp.value;
	dni = campos.dni.value;

	// Comprobar el Codigo Postal con la expresion regular
	var expresionCP = /^([0-4]\d|5[0-2])\d{3}$/;

	//Si no es correcto el codigo postal
	if (!expresionCP.test(cp)) {
		//Lanzamos el mensaje de error
		alert('Error en el CP');
		return false;
	}

	// Comprobar el DNI con la expresion regular
	var expresionDNI = /^([0-9]{8}\-[A-Z])$/;

	//Si no es correcto
	if (!expresionDNI.test(dni)) {
		//Lanzamos el mensaje de error
		alert('Error en el DNI');
		return false;
	}

	//Si no hay fallo devolvemos true
	return true;
}
