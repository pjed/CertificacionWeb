function comprobar() {
  var fecha = new Date();
  var Ndia = fecha.getDay();
  var dia = fecha.getDate();
  var mes = fecha.getMonth()+1;
  var ano = fecha.getFullYear();

  var diasSemana = new Array("Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo");
  var meses = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio", "Agosto", "Septiembre","Octubre","Noviembre","Diciembre");

  var f = document.getElementById("fecha").value;
  var fe = new Date(f);
  var NdiaSel = fe.getDay();
  var diaSel = fe.getDate();
  var mesSel = fe.getMonth()+1;
  var anioSel = fe.getFullYear();

  document.getElementById("info").innerHTML +=
    "DIA ACTUAL " + diasSemana[Ndia-1] + " con fecha " + dia + " de " + meses[mes-1] + " del " + ano+"<br>";

    document.getElementById("info").innerHTML +=
      "DIA SELECCIONADO " + diasSemana[Ndia-1] + " con fecha " + diaSel + " de " + meses[mesSel-1] + " del " + anioSel+"<br>";
}

