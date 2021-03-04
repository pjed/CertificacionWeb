var cod_pais, entidad, oficina, dc, cuenta;
var cod_paisCorrecto = false,
	entidadCorrecto = false,
	oficinaCorrecto = false,
	dcCorrecto = false,
	cuentaCorrecto = false;
var expresion1, expresion2, expresion3, expresioncc, expresion4;
var primera, segunda, tercera, cuarta, quinta, sexta, septima, octava, novena, decima;
var dcBueno;
/**
 * Función para validar campos con expresiones regulares
 */
function validaciones() {
	cod_pais = document.getElementById('cod_pais').value;
	entidad = document.getElementById('entidad').value;
	oficina = document.getElementById('oficina').value;
	dc = document.getElementById('dc').value;
	cuenta = document.getElementById('cuenta').value;

	info = document.getElementById('info');
	info.innerHTML += '<br>';

	/* EXPRESIONES REGULARES */
	//Expresion 1
	expresion1 = /^[E][S]\d{2}$/;
	expresion2 = /^\d{4}$/;
	expresion3 = /^\d{4}$/;
	expresioncc = /^\d{2}$/;
	expresion4 = /^\d{10}$/;

	if (expresion1.test(cod_pais)) {
		cod_paisCorrecto = true;
	}else{
		info.innerHTML += "Código Pais INCORRECTO<br>";
	}
	if (expresion2.test(entidad)) {
		entidadCorrecto = true;
	}else{
		info.innerHTML += "Código Entidad INCORRECTO<br>";
	}
	if (expresion3.test(oficina)) {
		oficinaCorrecto = true;
	}else{
		info.innerHTML += "Código Oficina INCORRECTO<br>";
	}
	if (expresioncc.test(dc)) {
		dcCorrecto = true;
	}else{
		info.innerHTML += "Código DC INCORRECTO<br>";
	}
	if (expresion4.test(cuenta)) {
		cuentaCorrecto = true;
	}else{
		info.innerHTML += "Cuenta Correo INCORRECTO<br>";
	}

	//Comprobamos que no falta ningun digito en los campos
	if (cod_paisCorrecto && entidadCorrecto && oficinaCorrecto && dcCorrecto && cuentaCorrecto) {
		//info.innerHTML += 'No faltan digitos estan todos';
		//Comprobamos los digitos de control
		var dcDigitos = calcularDigitosCC(entidad, oficina, cuenta, dc);
		if (dcDigitos) {
			info.innerHTML += 'DC Control CORRECTO';
		} else {
			info.innerHTML += 'DC Control FALSO';
		}
	} 
}

function calcularDigitosCC(entidad, oficina, CCC, dc) {
	var aux = false;
	digitoUno = calcularPrimerDigito(entidad, oficina);
	digitoDos = calcularSegundoDigito(CCC);

	dcBueno = digitoUno + '' + digitoDos;

	if (dcBueno === dc) {
		aux = true;
	}
	return aux;
}

function calcularPrimerDigito(entidad, oficina) {
	var sumaEntidad, sumaOficina;
	var arrayEntidad = Array.from(entidad);
	var arrayOficina = Array.from(oficina);
	//primer digito
	primera = arrayEntidad[0];
	primera = primera * 4;

	segunda = arrayEntidad[1];
	segunda = segunda * 8;

	tercera = arrayEntidad[2];
	tercera = tercera * 5;

	cuarta = arrayEntidad[3];
	cuarta = cuarta * 10;
	sumaEntidad = primera + segunda + tercera + cuarta;

	//segunda operacion
	primera = arrayOficina[0];
	primera = primera * 9;

	segunda = arrayOficina[1];
	segunda = segunda * 7;

	tercera = arrayOficina[2];
	tercera = tercera * 3;

	cuarta = arrayOficina[3];
	cuarta = cuarta * 6;
	sumaOficina = primera + segunda + tercera + cuarta;

	var resto = (sumaEntidad + sumaOficina) % 11;
	digitoUno = 11 - resto;

	if (digitoUno == 10) {
		digitoUno = 1;
	}
	return digitoUno;
}

function calcularSegundoDigito(oficina) {
	var array = Array.from(oficina);
	//segundo digito
	primera = array[0];
	segunda = array[1];
	tercera = array[2];
	cuarta = array[3];
	quinta = array[4];
	sexta = array[5];
	septima = array[6];
	octava = array[7];
	novena = array[8];
	decima = array[9];

	//Operaciones
	primera = primera * 1;
	segunda = segunda * 2;
	tercera = tercera * 4;
	cuarta = cuarta * 8;
	quinta = quinta * 5;
	sexta = sexta * 10;
	septima = septima * 9;
	octava = octava * 7;
	novena = novena * 3;
	decima = decima * 6;

	var suma = primera + segunda + tercera + cuarta + quinta + sexta + septima + octava + novena + decima;
	var resto = suma % 11;
	var segundoDigito = 11 - resto;

	if (segundoDigito == 11) {
		segundoDigito = 1;
	}

	return segundoDigito;
}
