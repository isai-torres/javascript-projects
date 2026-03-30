const botonCambiarColor = document.getElementById('changeColorButton');
const numeroDelColor = document.getElementById('numColor');

function generarColorHexadecimal() {
  let digitos = "0123456789ABCDEF";
  let colorHex ="#";

  for(let i = 0; i < 6; i++) {
    // math.random() generates a random decimal number between 0 and 1 without including 1, math.floor() rounds down to the nearest integer, and we multiply by 16 to get a valid index for the hexadecimal digit string.
    let indiceAleatorio = Math.floor(Math.random() * 16); 
    colorHex += digitos[indiceAleatorio];
  }

  return colorHex;
}

botonCambiarColor.addEventListener("click", function () {
  let nuevoColor = generarColorHexadecimal();
  
  document.body.style.backgroundColor = nuevoColor;
  numeroDelColor.textContent = nuevoColor;
});