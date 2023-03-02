// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том,
//  что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект,
//  где имя поля будет именем свойства, а значение поля - значением свойства.
// Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const loginForm = document.querySelector(".login-form");
console.log("loginForm==>>", loginForm);

loginForm.addEventListener("submit", treatmentSubmit);


function treatmentSubmit(event) {
    event.preventDefault();

    const {
    elements: { email, password }
    } = event.currentTarget;
    console.log("event.currentTarget", event.currentTarget.elements)
    console.log("email", email.innerHTML, "password", password.innerHTML);
    console.log("email.value", email.value, "password.value", password.value);
    
    if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
    }
    
    const outPut = { email: email.value, password: password.value };
    console.log("Вихідні дані завдання", outPut);
    event.currentTarget.reset();
}




