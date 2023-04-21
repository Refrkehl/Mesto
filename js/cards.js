const template = document.querySelector('.elements__template').content.querySelector('.elements__card'); //темплейт, содержащий див с карточкой
const elementsList = document.querySelector('.elements__container'); //див для добавления карточки
const createBtn = document.getElementById('add-button'); //кнопка добавления карточки места
const placeCloseBtn = document.getElementById('place-close-btn'); //кнопка закрытия карточки
const elementsPopup = document.querySelector('.elements__popup') //попап с добавлением карточки
const editBtn = document.getElementById('edit-btn'); //кнопка редактирования профиля
const closeBtn = document.getElementById('profile-close');//кнопка закрытия попапа профиля
const profilePopup = document.querySelector('.profile__popup')//див с попапом профиля
const profileForm = document.querySelector('[name="profile-edit"]'); //форма редактирования профиля
const inputProfileName = document.querySelector('[name="profileName"]'); // поле ввода имени из попапа профиля
const profileSaveButton = document.getElementById('profile-save');
const profileName = document.querySelector('.profile__name');
const cardCreateForm = document.querySelector('[name="place-create"]')
const placeCreateButton = document.getElementById('place-create-btn');
const inputProfileCaption = document.querySelector('[name="profileCaption"]'); // поле ввода описания из попапа профиля
const profileCaption = document.querySelector('.profile__name-caption');
const inputPlaceName = document.querySelector('[name="placeName"]'); //поле ввода имени из попапа добавления места
const placeName = document.getElementById('place-name');
const inputPlaceCaption = document.querySelector('[name="placeCaption"]'); //поле ввода ссылки на картинку из попапа добавления места
const placeCaption = document.getElementById('place-caption');
const fullPhoto = document.querySelector('.photo__full-size'); // попап с полноразмерной фотографией
const photo = document.querySelector('.photo'); // фото в полном размере
const photoCaption = document.querySelector('.photo__caption'); //описание фото в полном размере
const photoCloseBtn = document.querySelector('.photo__close-btn'); //кнопка закрытия фото-попапа

const avatarPopup = document.querySelector('.avatar__popup'); //попап формы изменения аватара
const avatarPopupForm = document.querySelector('[name="avatar-change"]'); //форма смены аватара
const inputAvatarLink = document.querySelector('[name="avatarChangeName"]'); //поле ввода формы аватара
const avatarPopupBtn = document.getElementById('avatar-change-btn');//кнопка попапа автара
const avatarPopupCloseBtn = document.getElementById('avatar-close-btn'); //кнопка закрытия попапа аватара
const avatarBtn = document.getElementById('avatar-edit'); //кнопка открытия попапа аватара


//Создаёт новую карточку, клонируя шаблон
function createCard (element) {
    const newCard = template.cloneNode(true);
    const cardImage = newCard.querySelector('.elements__card-image');

    cardImage.alt = element.name;
    cardImage.src = element.link;
    newCard.querySelector('.elements__card-name').textContent = element.name;

    cardImage.addEventListener('click', openFullPhoto);
    newCard.querySelector('.elements__like-button').addEventListener('click', like);
    newCard.querySelector('.elements__delete-btn').addEventListener('click', deleteCard);
    return newCard;
};

cards.forEach(element => {
    elementsList.append(createCard(element));
});

// Добавляет/убирает лайк на карточке
function like(evt) {
    evt.target.classList.toggle('elements__like-btn-active');
}
// Удаляет карточку
function deleteCard(evt) {
    evt.target.closest('.elements__card').remove();
}

// попап редактирования профиля
// Открывает/закрывает попап редактирования профиля
function toggleProfilePopup() {
    profilePopup.classList.toggle('hidden');
};

editBtn.addEventListener('click', function(){
    profileSaveButton.disabled = true;
    profileSaveButton.classList.add('disabled');
    toggleProfilePopup();
});

closeBtn.addEventListener('click', function(){
    toggleProfilePopup();
});


// попап добавления карточки
// Открывает/закрывает попап добавления карточки
function toggleElementsPopup() {
    elementsPopup.classList.toggle('hidden');
};
// Отключает кнопку формы создания карточки при открытии попапа
createBtn.addEventListener('click', function(){
    placeCreateButton.disabled = true;
    placeCreateButton.classList.add('disabled');
    toggleElementsPopup();
});

placeCloseBtn.addEventListener('click', function(){
    toggleElementsPopup();
});

//Задаёт значения заголовка и описания профиля в инпутах формы, когда попап открыт
function getPopupEditValue() {
    inputProfileName.value = profileName.textContent;
    inputProfileCaption.value = profileCaption.textContent;
};

function editProfileName (){
    profileName.textContent = inputProfileName.value;
    profileCaption.textContent = inputProfileCaption.value;
    profileForm.reset();
    toggleProfilePopup();
}

profileForm.addEventListener('submit', editProfileName)

// Создаёт новую карточку
function addNewCard(evt){
    evt.preventDefault();
    const cardDetails = createCard ({
        name: inputPlaceName.value, 
        link: inputPlaceCaption.value
    });
    elementsList.append(cardDetails);
    cardCreateForm.reset();
    toggleElementsPopup();
}

cardCreateForm.addEventListener('submit', addNewCard);


//попап изменения аватарки
function toggleAvatarPopup() {
    avatarPopup.classList.toggle('hidden');
};


//Отключает кнопку отправки формы при открытии попапа
avatarBtn.addEventListener('click', function(){
    avatarPopupBtn.disabled = true;
    avatarPopupBtn.classList.add('disabled');
    toggleAvatarPopup();
});

avatarPopupCloseBtn.addEventListener('click', function(){
    toggleAvatarPopup();
});

// Изменяет имя и подпись профиля после отправки формы попапа
avatarPopupForm.addEventListener('submit', function () {
    const profileAvatarImg = document.querySelector('.profile__avatar');

    profileAvatarImg.src = inputAvatarLink.value;
    avatarPopupForm.reset();
});


//Добавляет класс скрытия попапу с фотографией
function togglePhotoPopup() {
    fullPhoto.classList.toggle('hidden');
};

photoCloseBtn.addEventListener('click', function () {
    togglePhotoPopup();
});

// Открывает полноразмерное изображение
function openFullPhoto(evt){
    photo.src = evt.target.src;
    photo.alt = evt.target.alt;
    photoCaption.textContent = evt.target.alt;
    togglePhotoPopup();
}

// Сбрасывает(скрывает) спаны с ошибкой ввода
function spanReset (evt) {
    const spanAlerts = evt.target.closest('.popup__block').querySelectorAll('.alert');

    for (let spanAlert of spanAlerts) {
    spanAlert.classList.remove('visible');
    }
}

closeBtn.addEventListener('click', spanReset);
placeCloseBtn.addEventListener('click', spanReset);
avatarPopupCloseBtn.addEventListener('click', spanReset);

getPopupEditValue();