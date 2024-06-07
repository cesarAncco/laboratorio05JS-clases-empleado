import Empleado from "./empleado.js";

$(document).ready(function () {
  $("#formulario").submit(function (e) {
    e.preventDefault();
    const empleado = new Empleado();
    empleado.codigo = $("#codigo").val();
    empleado.nombre = $("#nombre").val();
    empleado.apellido = $("#apellido").val();
    empleado.correo = $("#email").val();
    empleado.cargo = $("#cargo").val();

    console.log(empleado);
    console.log("Sueldo Bruto: ", empleado.sueldoBruto());
    console.log("Descuento: ", empleado.descuento());
    console.log("Sueldo Neto: ", empleado.sueldoNeto());
  });
});
