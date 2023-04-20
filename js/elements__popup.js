const createBtn = document.getElementById('add-button'); //кнопка добавления карточки места
const placeCloseBtn = document.getElementById('place-close-btn'); //кнопка закрытия карточки
const elementsPopup = document.querySelector('.elements__popup') //попап с добавлением карточки

function toggleElementsPopup() {
    elementsPopup.classList.toggle('hidden');
};

createBtn.addEventListener('click', function(){
    toggleElementsPopup();
});

placeCloseBtn.addEventListener('click', function(){
    toggleElementsPopup();
});