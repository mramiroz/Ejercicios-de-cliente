const filas = 100;
const columnas = 100;

function crearTablero() {
  const tablero = [];
  for (let i = 0; i < filas; i++) {
    tablero[i] = [];
    for (let j = 0; j < columnas; j++) {
      tablero[i][j] = 0;
    }
  }
  return tablero;
}

function dibujarTablero() {
  const tableroDiv = document.getElementById("tablero");
  tableroDiv.innerHTML = "";

  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      const celda = document.createElement("div");
      celda.className = "cell";
      celda.addEventListener("click", function() {
        celda.classList.toggle("selected");
      });
      tableroDiv.appendChild(celda);
    }
    tableroDiv.appendChild(document.createElement("br"));
  }
}

dibujarTablero();
