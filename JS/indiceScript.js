var buttonElement = document.createElement("button");
var buttonElement2 = document.createElement("button");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var p5 = document.getElementById("p5");



document.addEventListener("DOMContentLoaded", function () {
  ///botonShow
  buttonElement.textContent = "Calendario de Ferias y Eventos";
  document.body.appendChild(buttonElement);
  
  

  function ranking() {
	document.body.appendChild(buttonElement2);
	buttonElement.remove();
    p1.innerText = "Navidalia, Ciudad de la Navidad \n Recinto ferial de Getafe, 29 Nov. - 6 Enero 2025";
    p2.innerText = "'Trullo XXL' en Boadilla del Monte \n Fiestas del Rosario, 4 - 13 Octubre 2024 ";
    p3.innerText = "'Flash Maxx' en San Nicasio, Leganés \n Fiestas de San Nicasio, 4 - 13 Octubre 2024 ";
    p4.innerText = "Mas ubicaciones y fechas \n PROXIMAMENTE";
    p5.innerText = "";
  }
  buttonElement.addEventListener("click", ranking);
});

document.addEventListener("DOMContentLoaded", function () {
  ///botonShow
  buttonElement2.textContent = "Ocultar calendario";


  function hide() {
	document.body.appendChild(buttonElement);
	buttonElement2.remove();
    p1.innerText = "";
    p2.innerText = "";
    p3.innerText = "";
    p4.innerText = "";
    p5.innerText = "";
  }
  buttonElement2.addEventListener("click", hide);
});


