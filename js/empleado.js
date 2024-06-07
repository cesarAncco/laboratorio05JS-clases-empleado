class Empleado {
  codigo;
  nombre;
  apellido;
  correo;
  cargo;

  sueldoBruto() {
    let sueldo = 0;
    switch (this.cargo) {
      case "Jefe":
        sueldo = 5000;
        break;
      case "Analista":
        sueldo = 4000;
        break;
      case "Programador":
        sueldo = 3000;
        break;
      case "Soporte":
        sueldo = 2000;
        break;
      case "Asistente":
        sueldo = 1000;
        break;
      default:
        sueldo = 0;
        break;
    }
    return sueldo;
  }

  descuento() {
    let sueldo = this.sueldoBruto();
    return sueldo * (12.5 / 100);
  }

  sueldoNeto() {
    let sueldo = this.sueldoBruto();
    return sueldo - this.descuento();
  }
}

// const empleado = new Empleado();
// empleado.codigo = 1;
// empleado.nombre = "Cesar";
// empleado.apellido = "Ancco";
// empleado.correo = "canccor@gmail.com";
// empleado.cargo = "Jefe";

// console.log(empleado);
// console.log(empleado.sueldoBruto());
// console.log(empleado.descuento());
// console.log(empleado.sueldoNeto());

$(document).ready(function(){
  $('#formulario').submit(function(e){
    e.preventDefault();
    const empleado = new Empleado();
    empleado.codigo = $('#codigo').val();
    empleado.nombre = $('#nombre').val();
    empleado.apellido = $('#apellido').val();
    empleado.correo = $('#email').val();
    empleado.cargo = $('#cargo').val();

    console.log(empleado);
    console.log('Sueldo Bruto: ', empleado.sueldoBruto());
    console.log('Descuento: ', empleado.descuento());
    console.log('Sueldo Neto: ', empleado.sueldoNeto());
  })
})