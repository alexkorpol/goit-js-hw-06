// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
//  подставляет его текущее значение в span#name - output.Если инпут пустой,
// в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputName = document.querySelector("#name-input");
const span = document.querySelector("#name-output");
console.log("inputName -->", inputName);
console.log("span -->", span);
inputName.addEventListener("input", letter);
function letter(event) {
    span.textContent = event.currentTarget.value;
    if (span.textContent === "") {
        return span.textContent =  "Anonymous"
        }
    } 
    
