// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>

// В JavaScript есть массив строк.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

// const heading = document.createElement("h1");
// console.log(heading); // <h1></h1>

// heading.textContent = "This is a heading";
// console.log(heading); // <h1>This is a heading</h1>

// element.after(el1, el2, ...) - 
// добавляет один или несколько элементов после элемента element.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',

];

const list = document.querySelector("ul#ingredients");
let ingredientsCopy;

ingredientsCopy = ingredients.map(ingredient => {
    const elementArray = document.createElement("li");
    elementArray.textContent = ingredient;
    elementArray.className = "item";
    return elementArray;
});

console.log(ingredientsCopy);

list.append(...ingredientsCopy);
