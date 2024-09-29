//DEFINICION DE VARIABLES
var Fallo1, Fallo2, Fallo3;
var buttonElement = document.createElement("button");
var index,
  rondas = 0;
var puntuacion = 0;
var nivel = 0;
// Definición de las letras de las canciones y las opciones de distracción
var letrasCanciones = [
    "Tengo quemado el corazón estoy buscando en un bar alguien con quien bailar llorando en un antro que no sé dónde está cayendo en picado, pero me da igual",
    "La mano arriba, cintura sola da media vuelta, danza kuduro",
    "I got the eye of the tiger, a fighter daancing through the fire 'Cause I am a champion, and you're gonna hear me roar",
    "If you go hard you gotta get on the floor if you're a party freak then step on the floor",
    "Then he said, I`m here with my friends (ohh) he got to thinking and thats when he said where them girls at, girls at? (Woo)",
    "We'll be shootin' stars just passin' by you'll be comin' home with me tonight",
    "I threw your shit into a bag and pushed it down the stairs I crashed my car into the bridge",
    "We're up all night to get some we're up all night for good fun we're up all night to get lucky",
    "Boom clap, the sound of my heart the beat goes on and on and on and on and",
    "I wrote this song just looking at you, oh, oh yeah, the drums they swing low",
    "And nitty gritty dirty little freaks won't you come on and come on and raise your glass",
    "And I've never felt this way before and I swear this is true and I owe it all to you",
    "Velour jumpsuit and some house slippers dookie brown leather jacket that I found, dig it",
    "But you only need the light when it's burning low only miss the sun when it starts to snow",
    "Alicia fue a vivir a Barcelona y hoy ha venido a mi memoria Claudia tuvo un hijo",
    "Destápate, quítate el esmalte deja de taparte que nadie va a retratarte",
    "You hear the door slam and realize there's nowhere left to run",
    "Voy a ser mafiosa, la maravillosa que me teman los hombres malos",
    "When you believe in things that you don't understand, then you suffer",
    "Luces de colores, lo pasaré bien yo me preguntaba ¿Quién me la puede presentar?",
    "La canción que causa en ellas y sus cuerpos esa sensación",
    "Me siento prisionero de los dos luceros que alumbran tu cara",
    "Una vampiresa, soy una sanguinaria Carmilla, la de Styria, soy inmune a tus plegaria'",
    "Ella no era así, ella no era así, no sé quién la daño"
];
nombres = [
  "Corazon Quemado - Samurai",
  "Danza Kuduro - Daddy Yankee",
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
  "Supersition - Stevie Wonder",
  "Me colé en una fiesta - Mecano",
  "Salió el sol - Don Omar",
  "Entre Dos Aguas - Paco de Lucía",
  "BZRP Sessions 51 - Villano Antillano",
  "Callaíta - Bad Bunny",
];
var opcionesDistraccion = [
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
  "Danza Kuduro - Don Omar ft. Lucenzo",
];

var letras = document.getElementById("letras");
var selector_distracciones = Math.floor(
  Math.random() * (opcionesDistraccion.length - 2)
);
var espaciado = document.getElementById("espaciado");
var RondasHt = document.getElementById("rondas");

//Fin variables


/////CANVAS CRUCES
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
    cross.remove();
  });
}


//MOTOR DE VIDEO (mejor no tocar mucho XD)
document.addEventListener("DOMContentLoaded", function () {
  var index = 0;
  var videoElement = document.getElementById("video");
  RondasHt.innerText = "Ronda numero: " + rondas + "/7";
  //buttonElement.addEventListener("click", cambiarLetra);

  ////CREACION BOTON PUNTOS
  puntos = document.createElement("button");
  puntos.textContent = puntuacion;
  puntos.style.backgroundColor = "white";
  puntos.style.border = "2px solid #899ad5";
  puntos.style.padding = "20px";
  puntos.style.textAlign = "start";
  puntos.style.fontSize = "12px";
  puntos.style.fontFamily = "Roboto";
  puntos.style.fontWeight = "bold";
  puntos.style.borderRadius = "15px";
  document.body.appendChild(puntos);

  ////////CREACION BOTON ACIERTO
  buttonElement.textContent = letrasCanciones[index];
  buttonElement.style.backgroundColor = "white";
  buttonElement.style.border = "2px solid #7fb3d5";
  buttonElement.style.padding = "20px";
  buttonElement.style.textAlign = "center";
  buttonElement.style.fontSize = "16px";
  puntos.style.fontFamily = "Roboto";
  puntos.style.fontWeight = "bold";
  buttonElement.style.borderRadius = "5px";
  document.body.appendChild(buttonElement);
  
  var i = Math.floor(Math.random() * (letrasCanciones.length - 1));
  

  ///////////FUNCION CAMBIO DE LETRA
  function cambiarLetra() {
    
    if (i< (letrasCanciones.length - 1)) {
      index = i;
	  i=i+1;
    } else {
      index = i;
	  i = 1;
    }
    videoElement = letrasCanciones[index];
    buttonElement.textContent = nombres[index];
    letras.innerText = letrasCanciones[index];
      
    /////MODIFICACION BOTONES
    selector_distracciones = Math.floor(
      Math.random() * (opcionesDistraccion.length - 2)
    );
    Fallo1.textContent = opcionesDistraccion[selector_distracciones];
    Fallo1.style.backgroundColor = "white";
    // Crear un salto de línea

    Fallo2.textContent = opcionesDistraccion[selector_distracciones + 1];
    Fallo2.style.backgroundColor = "white";

    Fallo3.textContent = opcionesDistraccion[selector_distracciones + 2];
    Fallo3.style.backgroundColor = "white";

    /////NOTIFICACION ACIERTO
    buttonElement.style.backgroundColor = "green";
    mostrarEstrella();
    espaciado.innerText = "Has acertado! Aquí va otra letra";
    buttonElement.style.backgroundColor = "white";
    rondas += 1;
    RondasHt.innerText = "Ronda numero: " + rondas + "/7";
    setTimeout(ocultarEstrella, 1000);

    /////FIN de partida
    if (rondas >= 8) {
      localStorage.setItem("puntosTemp3", puntuacion);
      window.location.href = "FinalScreenLv3.html";
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

    //buttonElement.textContent = nombres[index];
    //buttonElement.addEventListener("click", cambiarLetra);
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
  buttonElement.addEventListener("click", cambiarLetra);

  ////////////CREACION BOTONES FALLOS
  selector_distracciones = Math.floor(
    Math.random() * (opcionesDistraccion.length - 2)
  );
  Fallo1 = document.createElement("button");
  Fallo1.textContent = opcionesDistraccion[selector_distracciones];
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
  Fallo2.textContent = opcionesDistraccion[selector_distracciones + 1];
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
  Fallo3.textContent = opcionesDistraccion[selector_distracciones + 2];
  Fallo3.style.backgroundColor = "white";
  Fallo3.style.border = "2px solid #7fb3d5";
  Fallo3.style.padding = "20px";
  Fallo3.style.textAlign = "center";
  Fallo3.style.fontSize = "16px";
  puntos.style.fontFamily = "Roboto";
  puntos.style.fontWeight = "bold";
  Fallo3.style.borderRadius = "5px";
  document.body.appendChild(Fallo3);

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

document.addEventListener("DOMContentLoaded", function () {
  var index = 0;
  var videoElement = document.getElementById("video");
  var letras = document.getElementById("letras"); // Obtener el elemento HTML por su ID

  // Asignar el contenido de letrasCanciones[index] al elemento HTML
  letras.innerText = letrasCanciones[index];

  RondasHt.innerText = "Ronda numero: " + rondas + "/7";
});


///salir al menu
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



document.addEventListener("DOMContentLoaded", function () {
  function exit() {
    localStorage.setItem("puntosTemp3", puntuacion);
    window.location.href = "juego.html";
  }
  salir.addEventListener("click", exit);
});
