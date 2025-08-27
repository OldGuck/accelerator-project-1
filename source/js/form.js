const form = document.querySelector('.free-lesson-form');
const nameInput = document.querySelector('.free-lesson-form__input--name');
const phoneInput = document.querySelector('.free-lesson-form__input--phone');
const nameError = document.querySelector('.free-lesson-form__error--name');
const phoneError = document.querySelector('.free-lesson-form__error--phone');
const submitButton = document.querySelector('.free-lesson-form__button');

const nameExpression = /^[a-zа-яё ]+$/i;
const phoneExpression = /^[+0-9 ]+$/i;

const ErrorMessage = {
  NAME_ERROR:  'Имя только из букв и пробелов',
  PHONE_ERROR: 'Телефон должен быть без букв',
};

const validateInput = (input, expression, errorField, errorMessage) => {
  const isValid = expression.test(input.value);

  if (input.value !== '') {
    if (!isValid) {
      input.classList.add('free-lesson-form__input--error');
      errorField.textContent = errorMessage;
      return false;
    }

    input.classList.remove('free-lesson-form__input--error');
    errorField.textContent = '';
    return true;
  }

  input.classList.add('free-lesson-form__input--error');
  errorField.textContent = 'Поле обязательно к заполнению';
  return false;
};

submitButton.addEventListener('click', (evt) => {
  evt.preventDefault();

  const nameIsValid = validateInput(nameInput, nameExpression, nameError, ErrorMessage.NAME_ERROR);
  const phoneIsValid = validateInput(phoneInput, phoneExpression, phoneError, ErrorMessage.PHONE_ERROR);

  if (nameIsValid && phoneIsValid) {
    form.submit();
  }
});
