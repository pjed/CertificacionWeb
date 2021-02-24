function comprobar() {
  var fecha = new Date();
  var Ndia = fecha.getDay();
  var dia = fecha.getDate();
  var mes = fecha.getMonth()+1;
  var ano = fecha.getFullYear();



  if(Ndia === 3){
    Ndia ="Miercoles";
  }

  var ven = 0;

  var f = document.getElementById("fecha1").value;

  var d = f.substring(8,10);

  alert(d);

  document.getElementById("fecha").value =
    "A " + Ndia + " con fecha " + dia + "-" + mes + "-" + ano;

    var info = document.getElementById("info").innerHTML = "La fecha es: "+d;
}
