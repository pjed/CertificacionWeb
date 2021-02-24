var fecha;
var pago;
var date;
var dia, mes, anio;

function calculaVencimiento() {
  fecha = document.getElementById("fecha").value;

  date = new Date(fecha);
  dia = date.getDate();
  mes = date.getMonth() + 1;
  anio = date.getFullYear();

  pago = document.getElementById("pago").value;

  //Si es a 30 dias
  if (pago == 0) {
    /* El mes es enero */
    if (mes == 1) {
      //Si comprobar si los dias son 29-30-31
      if (dia == 29) {
        dia = 1;
        mes = 2;
      } else if (dia == 30) {
        dia = 2;
        mes = 2;
      } else if (dia == 31) {
        dia = 3;
        mes = 2;
      }
    } else {
      /* Si los dias son otros */
      mes = mes + 1;
    }

    /* Escribo la fecha del pago a 30 días */
    mes = mes + 1;
    document.getElementById("info").innerHTML =
      "El pago a 30 días acaba el día " + dia + "/" + mes + "/" + anio;

    //Si es a 60 dias
  } else if (pago == 1) {
    //El mes es diciembre
    if (mes == 12) {
      //Comprobar si los dias son 29, 30 o 31
      if (dia == 29) {
        dia = 1;
        mes = 3;
      } else if (dia == 30) {
        dia = 2;
        mes = 3;
      } else if (dia == 31) {
        dia = 3;
        mes = 3;
      }
    } else {
      /* para cualquier otra fecha */
      mes = mes + 2;
    }

    /* Escribo la fecha del pago a 60 días */
    document.getElementById("info").innerHTML =
      "El pago a 60 días acaba el día " + dia + "/" + mes + "/" + anio;
  } else {
    /* Pago a 90 Días */
    //El mes es noviembre
    if (mes == 11) {
      //Comprobar si los dias son 29, 30 o 31
      if (dia == 29) {
        dia = 1;
        mes = 3;
      } else if (dia == 30) {
        dia = 2;
        mes = 3;
      } else if (dia == 31) {
        dia = 3;
        mes = 3;
      }
    } else {
      /* para cualquier otra fecha */
      mes = mes + 3;
    }

    /* Escribo la fecha del pago a 90 días */
    document.getElementById("info").innerHTML =
      "El pago a 90 días acaba el día " + dia + "/" + mes + "/" + anio;
  }
}
