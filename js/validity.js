//function jopaValidity (input) {
//    const valueLength = input.value.length;
//    const spanAlert = input.nextElementSibling;
//    const MIN_NAME_LENGTH = 2;
//    spanAlert.classList.add('visible');
//
//    if (valueLength === 0) {
//        spanAlert.textContent = 'Вы пропустили это поле.';
//        input.style.borderBottom = '1px solid red';
//    } else if (valueLength < MIN_NAME_LENGTH) {
//        spanAlert.textContent = 'Минимальное количество символов - 2.';
//        input.style.borderBottom = '1px solid red';
//        //inputProfileName.setCustomValidity('Минимальное количество символов - 2.');
//        //document.getElementById('profile-save').disabled = true;
//    } else {
//        spanAlert.textContent = '';
//        spanAlert.classList.remove('visible');
//        input.style.borderBottom = '1px solid #545454'
//    }
//};
//
//
//
//function spanReset () {
//    const spanAlerts = document.querySelectorAll('.alert');
//    
//    for (let spanAlert of spanAlerts) {
//    spanAlert.classList.remove('visible');
//    }
//}
//
//function validateProfileName () {
//    jopaValidity(inputProfileName);
//}
//
//function validateProfileCaption () {
//    jopaValidity(inputProfileCaption);
//}
//
//function validatePlaceName () {
//    jopaValidity(inputPlaceName);
//}
//
//inputProfileName.addEventListener('input', validateProfileName);
//inputProfileCaption.addEventListener('input', validateProfileCaption);
//inputPlaceName.addEventListener('input', validatePlaceName);
////    const valueLength = inputProfileCaption.value.length;
////    const MIN_NAME_LENGTH = 2;
////    const MAX_NAME_LENGTH = 100;
////
////    if (valueLength < MIN_NAME_LENGTH) {
////        inputProfileCaption.setCustomValidity('Минимальное количество символов - 2.');
////    } else if (valueLength > MAX_NAME_LENGTH) {
////        inputProfileCaption.setCustomValidity('Вы превысили допустимое количество символов. Удалите ' + (valueLength - MAX_NAME_LENGTH));
////    } else {
////        inputProfileCaption.setCustomValidity('');
////    }
////    inputProfileCaption.reportValidity();
////})
////
////inputPlaceName.addEventListener('input', () => {
////    const valueLength = inputPlaceName.value.length;
////    const MIN_NAME_LENGTH = 2;
////    const MAX_NAME_LENGTH = 30;
////
////    if (valueLength < MIN_NAME_LENGTH) {
////        inputPlaceName.setCustomValidity('Минимальное количество символов - 2.');
////    } else if (valueLength > MAX_NAME_LENGTH) {
////        inputPlaceName.setCustomValidity('Вы превысили допустимое количество символов. Удалите ' + (valueLength - MAX_NAME_LENGTH));
////    } else {
////        inputPlaceName.setCustomValidity('');
////    }
////
////    inputPlaceName.reportValidity();
////})
////
////
//
//function checkLink (evt) {
//    let regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
//    let linkType = evt.target.value.match(regex);
//    const spanAlert = evt.target.nextElementSibling;
//    spanAlert.classList.add('visible');
//
//    if (linkType === null) {
//        spanAlert.textContent = 'Пожалуйста, вставьте ссылку';
//    } else {
//        spanAlert.textContent = '';
//        
//    }
//};
//
//const formInput = document.querySelectorAll('input');
//
//formInput.forEach((input) => {
//    input.addEventListener("input", function () {
//        if (checkPlace()) {
//        input.closest("form").querySelector("button").classList.remove("disabled");
//        input.nextElementSibling.classList.remove('visible');
//        } else {
//        input.closest("form").querySelector("button").classList.add("disabled");
//        input.nextElementSibling.classList.add('visible');
//        }
//    });
//});
//
//formInput.forEach((input) => {
//    input.addEventListener("input", function () {
//        if (checkProfile()) {
//        input.closest("form").querySelector("button").classList.remove("disabled");
//        input.nextElementSibling.classList.remove('visible');
//        } else {
//        input.closest("form").querySelector("button").classList.add("disabled");
//        input.nextElementSibling.classList.add('visible');
//        }
//    });
//});
//
//
//function checkProfile () {
//    if (inputProfileName.validity.valid && profileCaption.validity.valid) {
//        return true;
//    } else {
//        return false;
//    }
//};
//
//function checkPlace () {
//    if (inputPlaceName.validity.valid && inputPlaceCaption.validity.valid) {
//        return true;
//    } else {
//        return false;
//    }
//};
//

const forms = document.querySelectorAll("form");

forms.forEach((form) => {
    form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    evt.stopPropagation();
    });
});
//
//
//inputPlaceCaption.addEventListener('input', checkLink);
//inputAvatarLink.addEventListener('input', checkLink);

const formInputs = document.querySelectorAll('input');

function checkForm (evt) {
    const formElement = evt.target.parentElement.parentElement;
    const baton = evt.target.closest('form').querySelector('button');

    if (formElement.checkValidity() === false) {
        baton.classList.add('disabled');
        baton.disabled = true;
    } else {
        baton.classList.remove('disabled');
        baton.disabled = false;
    }
}

//function spanReset (evt) {
//    const spanAlerts = evt.target.closest('.popup__block').querySelectorAll('.alert');
//
//    for (let spanAlert of spanAlerts) {
//    spanAlert.classList.remove('visible');
//    }
//}

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

