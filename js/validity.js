const forms = document.querySelectorAll("form");

forms.forEach((form) => {
    form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    evt.stopPropagation();
    });
});

const formInputs = document.querySelectorAll('input');

//включение/отключение кнопок, если формы не соответствуют условиям валидации
function checkForm (evt) {
    const formElement = evt.target.parentElement.parentElement;
    const button = evt.target.closest('form').querySelector('button');

    if (formElement.checkValidity() === false) {
        button.classList.add('disabled');
        button.disabled = true;
    } else {
        button.classList.remove('disabled');
        button.disabled = false;
    }
}

//проверка валидности текстовых полей ввода
function checkNameValidity (evt) {
    const spanAlert = evt.target.nextElementSibling;

    if (evt.target.value.length === 0) {
        spanAlert.classList.add('visible');
        spanAlert.textContent = 'Вы пропустили это поле.';
    } else if (evt.target.value.length < 2) {
        spanAlert.classList.add('visible');
        spanAlert.textContent = 'Минимальное количество символов - 2.';
    } else {
        spanAlert.classList.remove('visible');
        spanAlert.textContent = '';
    }
}

//проверка валидности полей ввода с ссылкой
function checkLinkValidity (evt) {
    const spanAlert = evt.target.nextElementSibling;

    if (!evt.target.validity.valid) {
        spanAlert.classList.add('visible');
        spanAlert.textContent = 'Пожалуйста, вставьте ссылку';
    } else if (evt.target.value.length === 0) {
        spanAlert.classList.add('visible');
        spanAlert.textContent = 'Вы пропустили это поле.';
    } else {
        spanAlert.classList.remove('visible');
        spanAlert.textContent = '';
    }
}

for (input of formInputs) {
    input.addEventListener('input', checkForm);

    if (input.type === 'text') {
        input.addEventListener('input', checkNameValidity);
    } else {
        input.addEventListener('input', checkLinkValidity);
    }
};

