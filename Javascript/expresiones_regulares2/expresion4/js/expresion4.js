/**
 * Función para validar campos con expresiones regulares
 */
function validaciones() {
	texto = document.getElementById('texto').value;
	info = document.getElementById('info');
	info.innerHTML += '<br>';

	/* EXPRESIONES REGULARES */
	//4- Validar una matrícula de un coche con formato NNNNLLL
	//Entre los números y las letras puede haber o no, espacio
	expresion = /^\d{4}\s?[B-DF-HJ-NPR-TV-Z]{3}$/;

	if (expresion.test(texto)) {
		info.innerHTML += 'El valor ' + texto + ' es CORRECTO <br>';
	} else {
		info.innerHTML += 'El valor ' + texto + ' es INCORRECTO <br>';
	}
}
