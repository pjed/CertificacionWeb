var texto, info, expresion;

function existeDia(dia, array) {
	var existe = false;
	for (i = 0; i < array.length; i++) {
		if (array[i] == dia) {
			existe = true;
		}
	}
	return existe;
}

/**
 * Función para validar campos con expresiones regulares
 */
function validaciones() {
	texto = document.getElementById('texto').value;
	info = document.getElementById('info');
	info.innerHTML += '<br>';

	/* EXPRESIONES REGULARES */
	//4- Confeccionar una expresión regular que valide el ingreso del nombre de un día de la semana, un espacio y un número de 1 o 2 dígitos
	expresion = /[[l][u][n][e][s]|[m][a][r][t][e][s]|[m][i][e][r][c][o][l][e][s]|[j][u][e][v][e][s]|[v][i][e][r][n][e][s]|[s][a][b][a][d][o]|[d][o][m][i][n][g][o]]\s\d{1,2}$/;

	if (expresion.test(texto)) {
		info.innerHTML += 'El valor ' + texto + ' es CORRECTO <br>';
	} else {
		info.innerHTML += 'El valor ' + texto + ' es INCORRECTO <br>';
	}
}
