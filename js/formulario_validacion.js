$(document).ready(function () {

  $(`#botonEnviar`).prop('disabled', true);

  const expresiones = {
    inputCodigo: /[a-zA-Z0-9]{2,50}$/,
    inputNombre: /^[A-Za-z\s]{4,50}$/,
    inputApellido: /^[A-Za-z\s]{4,50}$/,
    inputCorreo: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  };

  const campos = {
    inputCodigo: false,
    inputNombre: false,
    inputApellido: false,
    inputCorreo: false,
    inputCargo: false,
  };

  const validarCampo = (expresion, input, campo) => {
    if (expresion.test($(input).val())) {
      $(`#${campo}`).addClass("is-valid").removeClass("is-invalid");
      campos[campo] = true;
    } else {
      $(`#${campo}`).addClass("is-invalid").removeClass("is-valid");
      campos[campo] = false;
    }
  };

  const validarSelect = (target, campo) => {
    if ($(target).val() !== "") {
      $(`#${campo}`).addClass("is-valid").removeClass("is-invalid");
      campos[campo] = true;
    } else {
      $(`#${campo}`).addClass("is-invalid").removeClass("is-valid");
      campos[campo] = false;
    }
  }

  const validarFormulario = (e) => {
    e.preventDefault();
    const target = e.target;
    const name = $(target).attr("name");

    switch (name) {
      case "inputCodigo":
        validarCampo(expresiones.inputCodigo, target, "inputCodigo");
        break;
      case "inputNombre":
        validarCampo(expresiones.inputNombre, target, "inputNombre");
        break;
      case "inputApellido":
        validarCampo(expresiones.inputApellido, target, "inputApellido");
        break;
      case "inputCorreo":
        validarCampo(expresiones.inputCorreo, target, "inputCorreo");
        break;
      case "inputCargo":
        validarSelect(target, "inputCargo");
        break;
    }

    if (campos["inputCodigo"] && campos["inputNombre"] && campos["inputApellido"] && campos["inputCorreo"] && campos["inputCargo"]) {
      $(`#botonEnviar`).prop('disabled', false);
    }

  };

  $("#formulario input").on("blur", validarFormulario);
  $("#formulario select").on("blur", validarFormulario);

});
