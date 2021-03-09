var texto, info;

function validarDNI(campos) {
	texto = campos.texto.value;
	info = document.getElementById('info');

	expresion = /^\d{8}[-](T|R|W|A|G|M|Y|F|P|D|X|B|N|J|Z|S|Q|V|H|L|C|K|E)$/;
	if (expresion.test(texto) && comprobarLetra(texto)) {
		info.innerHTML += 'El valor ' + texto + ' es CORRECTO <br>';
		return true;
	} else {
		info.innerHTML += 'El valor ' + texto + ' es INCORRECTO <br>';
		return false;
	}
}

/**
 * Método que comprueba la letra del dni que sea correcta
 * @param {dni} numero dni completo 
 */
function comprobarLetra(dni){
	var parteletra = dni.substring(dni.length-1);
	var parteNumero = dni.substring(0,8);
	var array = new Array("T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E");
	var resto = parteNumero % 23;

	if(array[resto]!==parteletra){
		return false;
	}

	return true;
}