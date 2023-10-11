const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll('li.item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(categoryItem => {
  const categoryName = categoryItem.firstElementChild;
  const itemCount = categoryItem.lastElementChild.children;

  console.log(`Category: ${categoryName.textContent}`);
  console.log(`Elements: ${itemCount.length}`);
});
