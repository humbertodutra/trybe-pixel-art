const paletaDeCores = document.querySelectorAll('.color');
let colorSelected = 'black';
const quadroDeCores = document.getElementById('pixel-board');
const btnClean = document.getElementById('clear-board');
const btnNewColor = document.getElementById('new-colours');

btnClean.addEventListener('click', () => {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    const element = pixel[index];
    element.style.backgroundColor = 'white';
  }

});

quadroDeCores.addEventListener('click', (e) => {
  e.target.style.backgroundColor = colorSelected;
});

function selectColor(e) {
  const g = e.target;
  document.getElementsByClassName('selected')[0].classList.remove('selected');
  g.classList.add('selected');
  colorSelected = e.target.style.backgroundColor;
}

paletaDeCores[0].addEventListener('click', selectColor);
paletaDeCores[1].addEventListener('click', selectColor);
paletaDeCores[2].addEventListener('click', selectColor);
paletaDeCores[3].addEventListener('click', selectColor);
paletaDeCores[4].addEventListener('click', selectColor);
paletaDeCores[5].addEventListener('click', selectColor);

function gerarCor() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  const rgba = `rgb(${r}, ${g}, ${b})`;
  return rgba;
}

function loadColors() {
  paletaDeCores[0].style.backgroundColor = 'black';
  paletaDeCores[1].style.backgroundColor = gerarCor();
  paletaDeCores[2].style.backgroundColor = gerarCor();
  paletaDeCores[3].style.backgroundColor = gerarCor();
  paletaDeCores[4].style.backgroundColor = gerarCor();
  paletaDeCores[5].style.backgroundColor = gerarCor();
}

btnNewColor.addEventListener('click', () => {
  paletaDeCores[0].style.backgroundColor = gerarCor();
  paletaDeCores[1].style.backgroundColor = gerarCor();
  paletaDeCores[2].style.backgroundColor = gerarCor();
  paletaDeCores[3].style.backgroundColor = gerarCor();
  paletaDeCores[4].style.backgroundColor = gerarCor();
  paletaDeCores[5].style.backgroundColor = gerarCor();
});

const input = document.getElementById('board-size');
const vqv = document.getElementById('generate-board');

function deleteBoard() {
  const pixels = document.querySelectorAll('.pixel');
  console.log(pixels.length);
  if (pixels.length > 0) {
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].remove();
    }
  }
}

function verify(value) {
  if (value <= 5) return 5;
  if (value >= 50) return 50;
  return value;
}
function newBoard() {
  const { value } = input;
  const newValue = verify(value);
  if (value === '' || value > 50 || value < 5) {
    alert('Invalid Board, please put values between 5 and 50 !');
  } else {
    quadroDeCores.style = `grid-template-columns: repeat(${newValue}, 40px);`;
    for (let index = 0; index < (newValue * newValue); index += 1) {
      const creating = document.createElement('div');
      creating.className = 'pixel';
      quadroDeCores.appendChild(creating);
    }
  }
}

vqv.addEventListener('click', () => {
  deleteBoard();
  newBoard();
});

window.onload = function onload() {
  loadColors();
};
