var texto, info;

function validarCampoTexto(campos) {
	texto = campos.texto.value.trim();
	info = document.getElementById('info');

	
	/*var expresion = "/^[a-zA-Z\s]+$/";

	if(expresion.test(texto)){
		info.className = 'ok';
		info.innerHTML = 'CORRECTO!<br>';
	}else{
		info.className = 'error';
		info.innerHTML = 'Escribe solo texto no números. <br>';
	}*/

	var esNumero = isNaN(parseInt(texto));
	if (!esNumero) {
		info.className = 'error';
		info.innerHTML = 'Escribe solo texto no números. <br>';
		return false;
	}

	if (texto.length < 5 && texto.length < 10) {
		info.className = 'error';
		info.innerHTML = 'El texto tiene que ser mayor a 5 digitos y menor que 10. <br>';
		return false;
	}

	info.className = 'ok';
	info.innerHTML = 'CORRECTO!<br>';
	//Si no hay fallo devolvemos true
	return true;


}
