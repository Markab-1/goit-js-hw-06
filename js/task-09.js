function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('button.change-color');
const textColor = document.querySelector('.color');

changeColorBtn.addEventListener("click", changeColor);

function changeColor(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  textColor.textContent = getRandomHexColor();
};