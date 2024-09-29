var buttonElement = document.createElement("button");

document.addEventListener("DOMContentLoaded", function () {
  ///botonShow
  buttonElement.textContent = "Conoce más sobre nosotros";
  buttonElement.style.backgroundColor = 'rgba(0,0,0, 0.5)';
  buttonElement.style.border = "1px solid white";
  buttonElement.style.padding = "0.5vw";
  buttonElement.style.textAlign = "center";
  buttonElement.style.fontSize = "1.5vw";
  buttonElement.style.fontFamily = "'Roboto', bold";
  buttonElement.style.color = 'white';
  buttonElement.style.fontWeight = 'bold';
  buttonElement.style.borderRadius = "3px";
  document.body.appendChild(buttonElement);

  function ranking() {
    window.location.href = "descripcion.html";
  }
  buttonElement.addEventListener("click", ranking);
});