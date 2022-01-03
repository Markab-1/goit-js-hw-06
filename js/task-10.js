function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('#controls button[data-create]');
const destroyBtn = document.querySelector('#controls button[data-destroy]');
const inputText = document.querySelector('input');
const boxesList = document.querySelector('div#boxes');

let amount = 0;

inputText.addEventListener("input", getAmount);

function getAmount(event) {
  amount = event.currentTarget.value;
}

createBtn.addEventListener("click", () => {
  createBoxes(amount);
});

function createBoxes(amount) {
  let elementWidth = 30;
  let elementHeight = 30;
  for (let i = 0; i < amount; i+=1){
  const divElement = document.createElement("li");
  divElement.style.width = `${elementWidth}px`;
  divElement.style.height = `${elementHeight}px`;
  divElement.style.backgroundColor = getRandomHexColor();
  elementWidth += 10;
  elementHeight += 10;
    boxesList.append(divElement);
  }
}

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});

function destroyBoxes() {
  const allDivElements = document.querySelectorAll('div#boxes li');
  for (let i = 0; i < allDivElements.length; i += 1){
     allDivElements[i].remove();
  }
};
