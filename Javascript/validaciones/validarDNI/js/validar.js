var texto, info;

function validarDNI(campos) {
	texto = campos.texto.value;
	info = document.getElementById('info');

	expresion = /^\d{8}[-](T|R|W|A|G|M|Y|F|P|D|X|B|N|J|Z|S|Q|V|H|L|C|K|E)$/;
	if (expresion.test(texto)) {
		info.innerHTML += 'El valor ' + texto + ' es CORRECTO <br>';
		return true;
	} else {
		info.innerHTML += 'El valor ' + texto + ' es INCORRECTO <br>';
		return false;
	}
}
