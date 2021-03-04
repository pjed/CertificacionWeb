var texto, info, expresion, valor;

/**
 * Función para validar campos con expresiones regulares
 */
function validaciones() {
	texto = document.getElementById('texto').value;
	info = document.getElementById('info');
	info.innerHTML += '<br>';
	/* EXPRESIONES REGULARES */
	//Validar el formato de un DNI. Sabiendo que las letras de un DNI son:
	//T-R-W-A-G-M-Y-F-P-D-X-B-N-J-Z-S-Q-V-H-L-C-K-E
	expresion = /^\d{8}[-](T|R|W|A|G|M|Y|F|P|D|X|B|N|J|Z|S|Q|V|H|L|C|K|E)$/;
	if (expresion.test(texto)) {
		info.innerHTML += 'El valor ' + texto + ' es CORRECTO <br>';
	} else {
		info.innerHTML += 'El valor ' + texto + ' es INCORRECTO <br>';
	}
}
