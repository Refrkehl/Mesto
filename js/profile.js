const editBtn = document.getElementById('edit-btn'); //кнопка редактирования профиля
const closeBtn = document.getElementById('profile-close');//кнопка закрытия попапа профиля
const profilePopup = document.querySelector('.profile__popup')//див с попапом профиля

function togglePopup() {
    profilePopup.classList.toggle('hidden');
};

editBtn.addEventListener('click', function(){
    togglePopup();
});

closeBtn.addEventListener('click', function(){
    togglePopup();
});