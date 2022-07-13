const profileButton = document.querySelector('.profile__button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');
const formElement =  document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__filled_type_name');
const jobInput = document.querySelector('.popup__filled_type_profession');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');

function togglePopup() {
  popup.classList.toggle('popup_opened');
  }

function formSubmitHandler (evt) {
  evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = jobInput.value;
    togglePopup();
}

function inputText() {
  nameInput.value = nameInput.textContent;
  jobInput.value = jobInput.textContent;
  togglePopup();
}

profileButton.addEventListener('click', inputText);

popupCloseButton.addEventListener('click', togglePopup);


formElement.addEventListener('submit', formSubmitHandler);
