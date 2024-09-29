var buttonElement = document.createElement("button");

document.addEventListener("DOMContentLoaded", function () {
  ///botonShow
  buttonElement.textContent = "Conoce más sobre nosotros";

  document.body.appendChild(buttonElement);

  function ranking() {
    window.location.href = "descripcion.html";
  }
  buttonElement.addEventListener("click", ranking);
});
