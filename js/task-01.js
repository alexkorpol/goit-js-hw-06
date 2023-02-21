const listOfCategory = document.querySelectorAll('.item');
console.log(`Number of categories: ${listOfCategory.length}`);
listOfCategory.forEach(i => {
  console.log(`Category: ${i.firstElementChild.textContent}`);
  console.log(`Elements: ${i.lastElementChild.children.length}`);
});





