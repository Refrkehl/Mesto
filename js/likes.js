const likeButtons = document.querySelectorAll('.elements__like-button'); //кнопка лайка
const activeButtons = document.querySelectorAll('.elements__like-btn-active'); //активированная кнопка лайка


function like(evt) {
    if (evt.target.classList.contains('elements__like-btn-active')) {
    evt.target.classList.remove('elements__like-btn-active');
    } else {
    evt.target.classList.add('elements__like-btn-active');
    };
};

for (likeButton of likeButtons) {
    likeButton.addEventListener('click', like);
};