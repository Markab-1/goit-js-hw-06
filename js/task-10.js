const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const inputValue = document.querySelector('input');
const boxesList = document.querySelector('#boxes');

createBtn.addEventListener("click", createBoxes);

destroyBtn.addEventListener("click", destroyBoxes); 

function createBoxes() {
  let elementSize = 30;
  for (let i = 0; i < inputValue.value; i+=1){
    const divElement = document.createElement("li");
    divElement.style.cssText =
                          `width: ${elementSize}px; 
                           height: ${elementSize}px; 
                           background-color: ${getRandomHexColor()}`;

    boxesList.append(divElement);
    elementSize += 10;
  }
}

function destroyBoxes() {
  boxesList.innerHTML = '';
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}