// Напиши скрипт, который изменяет цвета фона элемента <body> через
//  инлайн стиль при клике на button.change - color и выводит значение
//  цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерации случайного цвета используй функцию getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor());
console.log(getRandomHexColor());
console.log(getRandomHexColor());
const newColor = getRandomHexColor();
const body = document.body;
console.log(body);

const BtnChangeColor = document.querySelector(".change-color");
console.log("BtnChangeColor:", BtnChangeColor);
BtnChangeColor.addEventListener("click", changeColor);
function changeColor(even) {
  body.style.backgroundColor = newColor;

}