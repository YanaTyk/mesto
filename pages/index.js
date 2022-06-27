const button = document.querySelector('.profile__button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');
const formElement =  document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__form_type_name');
const jobInput = document.querySelector('.popup__form_type_profession');
const element = document.querySelectorAll('.elements');
const elementButton = document.querySelectorAll('.element__button');
const profileName = document.querySelector('.profile__name');
const profession = document.querySelector('.profile__profession');

function openPopup() {
  popup.classList.remove('popup_hidden');
  }

function closePopup() {
  popup.classList.add('popup_hidden');
  }

button.addEventListener('click', function() {
  openPopup();
  nameInput.value = nameInput.textContent;
  jobInput.value = jobInput.textContent;
});

popupCloseButton.addEventListener('click', function() {
  closePopup();
});

function formSubmitHandler (evt) {
  evt.preventDefault();
    profileName.textContent = nameInput.value;
    profession.textContent = jobInput.value;
    popup.classList.add('popup_hidden');
    console.log(nameInput.textContent)
    console.log(jobInput.textContent)
}

formElement.addEventListener('submit', formSubmitHandler);



element.forEach(element => {
   {element.addEventListener('click', function() {
elementButton.forEach(elementButton => {
  elementButton.classList.toggle('element__button_active');
})})}});
