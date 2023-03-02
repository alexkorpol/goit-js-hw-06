// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку
// Создать, после чего рендерится коллекция.При нажатии на кнопку 
// Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр
// - число.Функция создает столько < div >, сколько указано в amount 
// и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего
//  на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
//  Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Создай функцию destroyBoxes(), которая очищает содержимое 
// div#boxes, тем самым удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumberElem = document.querySelector('#controls').firstElementChild;
console.log("inputNumberElem:", inputNumberElem);
const btnCreate = document.querySelector('button[data-create]');
console.log("btnCreate:", btnCreate);
const btnDestroy = document.querySelector('button[data-destroy]');
console.log("btnDestroy:", btnDestroy);
let rangeNumber = 1;

function getNumber() {
  rangeNumber = inputNumberElem.value;
  console.log("rangeNumber:", rangeNumber);
}

function clearNumber() {
  inputNumberElem.value = 1;
  rangeNumber = 1;
  console.log("rangeNumber:", rangeNumber);
}
btnCreate.addEventListener("click", getNumber); 
btnDestroy.addEventListener("click", clearNumber); 


// incrBtn.addEventListener("click", () => { counterValue += 1; counter.textContent = counterValue; });

