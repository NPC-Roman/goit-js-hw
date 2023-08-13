import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

form.addEventListener('input', throttle(onTextareaInput, 500));
form.addEventListener('submit', onFormSubmit);

const LOCAL_KEY = 'feedback-form-state';

onTextMsg();

function onTextMsg() {
  const saveInput = JSON.parse(localStorage.getItem(LOCAL_KEY));
  if (saveInput) {
    input.value = saveInput.Email;
    textarea.value = saveInput.Message;
  }
}

function onTextareaInput(evt) {
  let message = { Email: input.value, Message: textarea.value };

  localStorage.setItem(LOCAL_KEY, JSON.stringify(message));
}

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log({ Email: input.value, Message: textarea.value });

  evt.currentTarget.reset();
  localStorage.removeItem(LOCAL_KEY);
}
