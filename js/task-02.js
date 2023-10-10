const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];


const ingredientsUl = document.getElementById('ingredients');

const liElements = ingredients.map((ingredient) => {
  const liElement = document.createElement('li');
  console.log(liElement);
  liElement.textContent = ingredient;
  liElement.classList.add('item');
  return liElement;
});
ingredientsUl.append(...liElements);
