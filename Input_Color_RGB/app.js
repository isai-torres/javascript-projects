const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

// Function to update the background color based on the RGB values
function actualizarColor(rojo, verde, azul) {
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
  document.body.style.backgroundColor = colorRGB;
}

// Add event listeners to the input elements to update the color when the values change
inputRojo.addEventListener('change', (e) => {
  rojo = e.target.value;
  //rojo = inputRojo.value; // Another way to get the value also remove the (e) parameter and use the inputRojo.value directly
  textoRojo.innerText = rojo;
  actualizarColor(rojo, verde, azul);
});

inputVerde.addEventListener('change', (e) => {
  verde = e.target.value;
  //verde = inputVerde.value; // Another way to get the value also remove the (e) parameter and use the inputVerde.value directly
  textoVerde.innerText = verde;
  actualizarColor(rojo, verde, azul);
});

inputAzul.addEventListener('change', (e) => {
  azul = e.target.value;
  //azul = inputAzul.value; // Another way to get the value also remove the (e) parameter and use the inputAzul.value directly
  textoAzul.innerText = azul;
  actualizarColor(rojo, verde, azul);
});