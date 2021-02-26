var fecha;
var pago;
var date;
var dias;

function calculaVencimiento() {
  fecha = document.getElementById("fecha").value;

  date = new Date(fecha);

  pago = document.getElementById("pago").value;

  //Si es a 30 dias
  if (pago == 0) {
    dias = 30;
    
    fecha = date.setDate(date.getDate() + dias);
    date = new Date(fecha);
    
    /* Escribo la fecha del pago a 30 días */
    document.getElementById("info").innerHTML =
      "El pago a 30 días acaba el día " +
      date.getDay() +
      "/" +
      (date.getMonth() + 1) +
      "/" +
      date.getFullYear();

    //Si es a 60 dias
  } else if (pago == 1) {
    /* Escribo la fecha del pago a 60 días */
    dias = 60;

    
    fecha = date.setDate(date.getDate() + dias);
    date = new Date(fecha);
    
    /* Escribo la fecha del pago a 30 días */
    document.getElementById("info").innerHTML =
      "El pago a 60 días acaba el día " +
      date.getDay() +
      "/" +
      (date.getMonth() + 1) +
      "/" +
      date.getFullYear();
  } else {
    /* Pago a 90 Días */
    dias = 90;

    fecha = date.setDate(date.getDate() + dias);
    date = new Date(fecha);
    
    /* Escribo la fecha del pago a 30 días */
    document.getElementById("info").innerHTML =
      "El pago a 90 días acaba el día " +
      date.getDay() +
      "/" +
      (date.getMonth() + 1) +
      "/" +
      date.getFullYear();
  }
}
