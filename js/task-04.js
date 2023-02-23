// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать
// его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и
// инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай
// значение счетчика.
// Обновляй интерфейс новым значением переменной counterValue.


// варіант 1 зі стрілочними функціями
let counterValue = 0;
const decrBtn = document.querySelector('#counter button[data-action="decrement"]');
const incrBtn = document.querySelector('#counter button[data-action="increment"]');
const counter = document.querySelector('#counter #value');


decrBtn.addEventListener("click", () => {counterValue -= 1; counter.textContent = counterValue;});
incrBtn.addEventListener("click", () => { counterValue += 1; counter.textContent = counterValue; });

// ================================================================================

// варіант 2 з використанням event.target.dataset.action

// let counterValue = 0;
// const decrBtn = document.querySelector('#counter button[data-action="decrement"]');
// const incrBtn = document.querySelector('#counter button[data-action="increment"]');
// const counter = document.querySelector('#counter #value');


// const handleClick = (event) => {
//     console.log("event: ", event);
//     if (event.target.dataset.action === "decrement") {
//         counterValue -= 1;
//     } else {
//         counterValue += 1;
//     }
//     counter.textContent = counterValue;
// };

// decrBtn.addEventListener("click", handleClick);
// incrBtn.addEventListener("click", handleClick);