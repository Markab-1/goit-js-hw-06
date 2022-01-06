const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredientsRef = document.querySelector('#ingredients');

const listOfIngredients = ingredients.map(ingredient => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add("item");

  return ingredientItem;
});

listOfIngredientsRef.append(...listOfIngredients);