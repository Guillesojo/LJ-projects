// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function promedio() {
  var n1, n2, respuesta;
  n1 = Number(prompt("Inserta el primer numero"));
  n2 = Number(prompt("Inserta el segundo numero"));
  respuesta = (n1 + n2) / 2;
  document.getElementById("Boton").innerHTML = "El promedio es: " + respuesta;
}

function mult() {
  var n1, n2, respuesta;
  n1 = Number(prompt("Inserta el primer numero"));
  n2 = Number(prompt("Inserta el segundo numero"));
  respuesta = n1 * n2;
  document.getElementById("Boton1").innerHTML = "El resultado es: " + respuesta;
}
