const profileButton = document.querySelector('.profile__button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');
const formElement =  document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__filled_type_name');
const jobInput = document.querySelector('.popup__filled_type_profession');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');

function togglePopup() {
  popup.classList.add('popup_opened');
  }

function closePopup() {
  popup.classList.remove('popup_opened');
  }


function formSubmitHandler (evt) {
  evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = jobInput.value;
    popup.classList.add(closePopup());
}

function inputText() {
  togglePopup();
  nameInput.value = nameInput.textContent;
  jobInput.value = jobInput.textContent;
}

profileButton.addEventListener('click', inputText);

popupCloseButton.addEventListener('click', closePopup);


formElement.addEventListener('submit', formSubmitHandler);
