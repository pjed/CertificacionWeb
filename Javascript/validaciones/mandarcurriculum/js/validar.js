var nombre, email, cv, info_nombre, info_email, info_archivo;

function validar(campos) {
	nombre = campos.nombre.value;
	email = campos.email.value;
	cv = campos.cv.value;
	info_nombre = document.getElementById("info_nombre");
	info_email = document.getElementById("info_email");
	info_archivo = document.getElementById("info_archivo");

	// Comprobar el nombre con la expresion regular
	var expresionNombre = /^[a-z]{3,}$/i;

	//Si no es correcto el nombre
	if (!expresionNombre.test(nombre)) {
		info_nombre.innerHTML = "";
		//Lanzamos el mensaje de error
		info_nombre.innerHTML += 'Error en el nombre, inserte uno válido<br>';
		info_nombre.className = "error";
		return false;
	} else {
		info_nombre.className = "ok";
		info_nombre.innerHTML = 'Nombre correcto<br>';
	}

	// Comprobar el Email con la expresion regular
	var expresionEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	//Si no es correcto
	if (!expresionEmail.test(email)) {
		info_email.innerHTML = "";
		//Lanzamos el mensaje de error
		info_email.className = "error";
		info_email.innerHTML += 'Error en el email<br>';
		return false;
	}else{
		info_email.className = "ok";
		info_email.innerHTML = 'Email correcto<br>';
	}

	// Comprobar el DNI con la expresion regular
	var expresionCV = /\.(pdf|odt|docx?)$/;

	//Si no es correcto
	if (!expresionCV.test(cv)) {
		info_archivo.innerHTML = "";
		//Lanzamos el mensaje de error
		info_archivo.className = "error";
		info_archivo.innerHTML += 'Error en la extensión del archivo<br>';
		return false;
	}else{
		info_archivo.className = "ok";
		info_archivo.innerHTML = 'Extensión correcta<br>';
	}

	//Si no hay fallo devolvemos true
	return true;
}