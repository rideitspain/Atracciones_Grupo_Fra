//DEFINICION DE VARIABLES
var Fallo1, Fallo2, Fallo3, salir;
var buttonElement = document.createElement("button");
var index,
  rondas = 0;
var puntuacion = 0;
var nivel = 0;
var videos = [
  "video1.mp4",
  "video2.mp4",
  "video3.mp4",
  "video4.mp4",
  "video5.mp4",
  "video6.mp4",
  "video7.mp4",
  "video8.mp4",
  "video9.mp4",
  "video10.mp4",
  "video11.mp4",
  "video12.mp4",
  "video13.mp4",
  "video14.mp4",
  "video15.mp4",
  "video16.mp4",
  "video17.mp4",
  "video18.mp4",
  "video19.mp4",
  "video20.mp4",
  "video21.mp4",
  "video22.mp4",
  "video23.mp4",
  "video24.mp4",
];
nombres = [
  "Corazon Quemado - Samurai",
  "Danza Kuduro - Don Omar ft. Lucenzo",
  "Roar - Katy Perry",
  "On the Floor - Pitbull y JLo",
  "Where are the Girls At - David Guetta",
  "Neon Lights - Demi Lovato",
  "I Love It - Icona Pop",
  "Get Lucky - Daft Punk",
  "Boom Clap - Charli XCX",
  "Trumpets - Jason Derulo",
  "Raise Your Glass - Pink",
  "The Time - Dirty Peas",
  "Thrift Shop - Macklemore",
  "Let Her Go - Passenger",
  "Son mis amigos - Amaral",
  "Atrevete te te - Calle 13",
  "Thriller - Michael Jackson",
  "Mafiosa - Nathy Peluso",
  "Me colé en una fiesta - Mecano",
  "Supersition - Stevie Wonder",
  "Salió el sol - Don Omar",
  "Entre Dos Aguas - Paco de Lucía",
  "BZRP Sessions 51 - Villano Antillano",
  "Callaíta - Bad Bunny",
];
var distracciones = [
  "Despacito - Luis Fonsi ft Daddy Yankee",
  "Shape of You - Ed Sheeran",
  "See You Again - Wiz Khalifa",
  "Uptown Funk - Mark Ronson ft Bruno Mars",
  "Gangnam Style - PSY",
  "Sugar - Maroon 5",
  "Sorry - Justin Bieber",
  "Vikram Vikram - Kamal Haasan",
  "Como Camarón - Estopa",
  "Gasolina - Daddy Yankee",
  "Back to Black - Amy Winehouse",
  "Satanás - La Tropa Vallenata",
  "La Tortura - Shakira ft. Alejandro Sanz",
  "Bailando - Enrique Iglesias ft. Descemer Bueno, Gente De Zona",
  "Hasta Que Te Conocí - Maná",
  "La Camisa Negra - Juanes",
  "La Bicicleta - Carlos Vives, Shakira",
  "Me Enamora - Juanes",
  "La Gozadera - Gente De Zona ft. Marc Anthony",
  "Clandestino - Shakira, Maluma",
  "Bailando Por el Mundo - Juan Magán ft. Pitbull, El Cata",
  "Vivir Mi Vida - Marc Anthony",
  "Ai Se Eu Te Pego - Michel Teló",
  "Danza Kuduro - Daddy Yankee",
];

var selector_distracciones = Math.floor(
  Math.random() * (distracciones.length - 2)
);
var espaciado = document.getElementById("espaciado");
var RondasHt = document.getElementById("rondas");

salir = document.createElement("button");
salir.textContent = "Salir al Menú";
salir.style.backgroundColor = "white";
salir.style.border = "2px solid #899ad5";
salir.style.padding = "20px";
salir.style.fontSize = "14px";
salir.style.fontFamily = "Roboto";
salir.style.borderRadius = "5px";

// Establecer posición absoluta
salir.style.position = "absolute";

// Posicionar en la esquina inferior derecha
salir.style.bottom = "15%"; // Ajusta la distancia desde abajo según necesites
salir.style.right = "20%"; // Ajusta la distancia desde la derecha según necesites

document.body.appendChild(salir);

//fin variables

// Función para mostrar las cruces rojas
function mostrarCruces() {

    var crossElement = document.createElement("div");
    crossElement.classList.add("cross");
    document.body.appendChild(crossElement);
  }



// Función para ocultar las cruces rojas
function ocultarCruces() {
   // Obtener todas las estrellas
  var crosses = document.querySelectorAll(".cross");

   // Recorrer todas las cruces y eliminarlas
   
   crosses.forEach(function(cross) {
	   cross.classList.add('ocultar')
   cross.remove();
  });
}

//MOTOR DE VIDEO (mejor no tocar mucho XD)
document.addEventListener("DOMContentLoaded", function () {
  var index = 0;
  var videoElement = document.getElementById("video");
  RondasHt.innerText = "Ronda numero: " + rondas + "/10";

  ////CREACION BOTON PUNTOS
  puntos = document.createElement("button");
  puntos.textContent = puntuacion;
  puntos.style.backgroundColor = "white";
  puntos.style.border = "2px solid #899ad5";
  puntos.style.padding = "20px";
  puntos.style.textAlign = "start";
  puntos.style.fontSize = "13px";
  puntos.style.fontFamily = "Roboto";
  puntos.style.fontWeight = "bold";
  puntos.style.borderRadius = "15px";
  document.body.appendChild(puntos);

  ////////CREACION BOTON ACIERTO
  buttonElement.textContent = videos[index];
  buttonElement.style.backgroundColor = "white";
  buttonElement.style.border = "2px solid #7fb3d5";
  buttonElement.style.padding = "20px";
  buttonElement.style.textAlign = "center";
  buttonElement.style.fontSize = "16px";
  puntos.style.fontFamily = "Roboto";
  puntos.style.fontWeight = "bold";
  buttonElement.style.borderRadius = "5px";
  document.body.appendChild(buttonElement);

  // BOTÓN SALIR AL MENÚ

  ///////////FUNCION CAMBIO DE VIDEO
  var i = Math.floor(Math.random() * (videos.length - 1));
  
  ///////////FUNCION CAMBIO DE VIDEO
  function cambiarVideo() {
    
    if (i< (videos.length - 1)) {
      index = i;
	  i=i+1;
    } else {
      index = i;
	  i = 1;
    }
    videoElement.src = "media/" + videos[index];
    videoElement.play();
    buttonElement.textContent = nombres[index];

    /////MODIFICACION BOTONES
    selector_distracciones = Math.floor(
      Math.random() * (distracciones.length - 2)
    );
    Fallo1.textContent = distracciones[selector_distracciones];
    Fallo1.style.backgroundColor = "white";
    // Crear un salto de línea

    Fallo2.textContent = distracciones[selector_distracciones + 1];
    Fallo2.style.backgroundColor = "white";

    Fallo3.textContent = distracciones[selector_distracciones + 2];
    Fallo3.style.backgroundColor = "white";

    /////NOTIFICACION ACIERTO
    buttonElement.style.backgroundColor = "green";
    mostrarEstrella();
    espaciado.innerText = "Has acertado! Aquí va otro video";
    buttonElement.style.backgroundColor = "white";
    rondas += 1;
    RondasHt.innerText = "Ronda numero: " + rondas + "/7";
    setTimeout(ocultarEstrella, 1000);



    /////FIN de partida
    if (rondas >= 8) {
      localStorage.setItem("puntosTemp", puntuacion);
      window.location.href = "FinalScreenLv1.html";
    }

    //PUNTOS
    puntuacion += 5;
    puntos.textContent = puntuacion;
    puntos.style.backgroundColor = "green";

    ///////////REORGANIZACION DE BOTONES
    Fallo1.remove();
    Fallo2.remove();
    Fallo3.remove();
    buttonElement.remove();

    var posicionRandom = Math.random() * 4;

    if (posicionRandom <= 1) {
      document.body.appendChild(buttonElement);
      document.body.appendChild(Fallo1);
      document.body.appendChild(Fallo2);
      document.body.appendChild(Fallo3);
    } else if (posicionRandom <= 2) {
      document.body.appendChild(Fallo2);
      document.body.appendChild(Fallo3);
      document.body.appendChild(buttonElement);
      document.body.appendChild(Fallo1);
    } else if (posicionRandom <= 3) {
      document.body.appendChild(Fallo3);
      document.body.appendChild(buttonElement);
      document.body.appendChild(Fallo1);
      document.body.appendChild(Fallo2);
    } else {
      document.body.appendChild(Fallo1);
      document.body.appendChild(Fallo2);
      document.body.appendChild(Fallo3);
      document.body.appendChild(buttonElement);
    }
  }


//////CANVAS ESTRELLAS
// Función para mostrar las estrellas doradas
function mostrarEstrella() {
    var starElement = document.createElement("div");
    starElement.classList.add("star");
    // Añadir la estrella al documento
    document.body.appendChild(starElement);
    // Añadir la clase "animated" después de un breve retardo para aplicar la animación

}


// Función para ocultar la estrella dorada
function ocultarEstrella() {
   // Obtener todas las estrellas
  var stars = document.querySelectorAll(".star");

   // Recorrer todas las estrellas y eliminarlas
  stars.forEach(function(star) {
    star.remove();
  });

}


  ////////////MODIFICACION BOTON ACIERTO
  buttonElement.textContent = nombres[index];
  buttonElement.addEventListener("click", cambiarVideo);

  ////////////CREACION BOTONES FALLOS
  selector_distracciones = Math.floor(
    Math.random() * (distracciones.length - 2)
  );
  Fallo1 = document.createElement("button");
  Fallo1.textContent = distracciones[selector_distracciones];
  Fallo1.style.backgroundColor = "white";
  Fallo1.style.border = "2px solid #7fb3d5";
  Fallo1.style.padding = "20px";
  Fallo1.style.textAlign = "center";
  Fallo1.style.fontSize = "16px";
  puntos.style.fontFamily = "Roboto";
  puntos.style.fontWeight = "bold";
  Fallo1.style.borderRadius = "5px";
  document.body.appendChild(Fallo1);

  Fallo2 = document.createElement("button");
  Fallo2.textContent = distracciones[selector_distracciones + 1];
  Fallo2.style.backgroundColor = "white";
  Fallo2.style.border = "2px solid #7fb3d5";
  Fallo2.style.padding = "20px";
  Fallo2.style.textAlign = "center";
  Fallo2.style.fontSize = "16px";
  puntos.style.fontFamily = "Roboto";
  puntos.style.fontWeight = "bold";
  Fallo2.style.borderRadius = "5px";
  document.body.appendChild(Fallo2);

  Fallo3 = document.createElement("button");
  Fallo3.textContent = distracciones[selector_distracciones + 2];
  Fallo3.style.backgroundColor = "white";
  Fallo3.style.border = "2px solid #7fb3d5";
  Fallo3.style.padding = "20px";
  Fallo3.style.textAlign = "center";
  Fallo3.style.fontSize = "16px";
  puntos.style.fontFamily = "Roboto";
  puntos.style.fontWeight = "bold";
  Fallo3.style.borderRadius = "5px";
  document.body.appendChild(Fallo3);

  // Inicia reproducción del primer video
  videoElement.play();
});

///salir al menu
document.addEventListener("DOMContentLoaded", function () {
  function exit() {
    localStorage.setItem("puntosTemp", puntuacion);
    window.location.href = "juego.html";
  }
  salir.addEventListener("click", exit);
});

//DETECTOR FALLOS

document.addEventListener("DOMContentLoaded", function () {
  function fallo1() {
    Fallo1.style.backgroundColor = "red";
    mostrarCruces();
    puntuacion -= 2;
    puntos.textContent = puntuacion;
    puntos.style.backgroundColor = "red";
    espaciado.innerText = "Has fallado, y has perdido 2 puntos";
    setTimeout(ocultarCruces, 1000);
  }
  Fallo1.addEventListener("click", fallo1);
});

document.addEventListener("DOMContentLoaded", function () {
  function fallo2() {
    Fallo2.style.backgroundColor = "red";
    mostrarCruces();
    puntuacion -= 2;
    puntos.textContent = puntuacion;
    puntos.style.backgroundColor = "red";
    espaciado.innerText = "Has fallado, y has perdido 2 puntos";
    setTimeout(ocultarCruces, 1000);
  }
  Fallo2.addEventListener("click", fallo2);
});

document.addEventListener("DOMContentLoaded", function () {
  function fallo3() {
    Fallo3.style.backgroundColor = "red";
    mostrarCruces();
    puntuacion -= 2;
    puntos.textContent = puntuacion;
    puntos.style.backgroundColor = "red";
    espaciado.innerText = "Has fallado, y has perdido 2 puntos";
    setTimeout(ocultarCruces, 1000);
  }
  Fallo3.addEventListener("click", fallo3);
});