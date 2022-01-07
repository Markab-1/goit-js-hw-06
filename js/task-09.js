const changeColorBtnRef = document.querySelector('.change-color');
const textColorRef = document.querySelector('.color');

changeColorBtnRef.addEventListener("click", changeColor);

function changeColor(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  textColorRef.textContent = getRandomHexColor();
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
