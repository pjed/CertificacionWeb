var nombre, email, cv;

function validar(campos) {
	nombre = document.getElementById('nombre').value;
	email = document.getElementById('email').value;
	cv = document.getElementById('cv').value;

	// Comprobar el nombre con la expresion regular
	var expresionNombre = /^[a-z]{3,}$/i;

	//Si no es correcto el nombre
	if (!expresionNombre.test(nombre)) {
		//Lanzamos el mensaje de error
		alert('Error en el nombre, inserte uno válido');
		return false;
	}

	// Comprobar el Email con la expresion regular
	var expresionEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	//Si no es correcto
	if (!expresionEmail.test(email)) {
		//Lanzamos el mensaje de error
		alert('Error en el email');
		return false;
	}

	// Comprobar el DNI con la expresion regular
	var expresionCV = /\.(pdf|odt|docx?)$/;

	//Si no es correcto
	if (!expresionCV.test(cv)) {
		//Lanzamos el mensaje de error
		alert('Error en la extensión del archivo');
		return false;
	}

	//Si no hay fallo devolvemos true
	return true;
}
