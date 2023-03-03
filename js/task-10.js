// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку
// Создать, после чего рендерится коллекция.При нажатии на кнопку
// Очистить, коллекция элементов очищается.


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

// const inputNumberElem = document.querySelector('#controls').firstElementChild;
const inputNumberElem = document.querySelector('[type="number"]');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const divBoxes = document.querySelector('#boxes');
let selectNumber = 1;


function getNumber() {
  selectNumber = inputNumberElem.value;
  createBoxes(selectNumber);
}

function destroyBoxes() {
  //  1-й вариант (работает быстрее второго)
  inputNumberElem.value = "";
  const arrRemoves = divBoxes.childNodes;
  const arrRemovesDivAdd = [...arrRemoves];
  arrRemovesDivAdd.map(el => el.remove());

  // 2-й вариант
  // location.reload();
  }
  

function createBoxes(amount) {
  const arrDivBoxes = [];
  for (let i = 0; i < amount; i += 1) {
    const arrDivOneElement = 
     `<div style = "width:${String(30 + 10 * i)}px; 
                    height:${String(30 + 10 * i)}px; 
                    background-color: ${getRandomHexColor()}"></div>`;
    arrDivBoxes.push(arrDivOneElement);
  }
    
    divBoxes.insertAdjacentHTML('afterbegin', arrDivBoxes.join(''));
}
  

btnCreate.addEventListener("click", getNumber);
btnDestroy.addEventListener("click", destroyBoxes);
