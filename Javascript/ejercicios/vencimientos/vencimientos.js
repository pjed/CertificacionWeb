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

  if (pago == 0) {
    /* Si la fecha elegida es dia 29-30-31 y el mes es enero */
    if ((dia == 29 || dia == 30 || dia == 31) && mes == 1) {
      if (dia == 29) {
        dia = 1;
        mes = mes + 1;
      } else if (dia == 30) {
        dia = 2;
        mes = mes + 1;
      } else {
        dia = 3;
        mes = mes + 1;
      }
      /* para cualquier otra fecha */
    }

    /* Pago a 30 Días */
    mes = mes + 1;
    document.getElementById("info").innerHTML =
      "El pago a 30 días acaba el día " + dia + "/" + mes + "/" + anio;
  } else if (pago == 1) {
    /* Pago a 60 Días */
    mes = mes + 2;

    /* Si la fecha elegida es dia 28-29-30-31 y el mes es diciembre */
    document.getElementById("info").innerHTML =
      "El pago a 30 días acaba el día " + dia + "/" + mes + "/" + anio;
  } else {
    /* Pago a 90 Días */
    mes = mes + 3;
    /* Si la fecha elegida es dia 28-29-30 y el mes es noviembre */
    document.getElementById("info").innerHTML =
      "El pago a 30 días acaba el día " + dia + "/" + mes + "/" + anio;
  }
}
