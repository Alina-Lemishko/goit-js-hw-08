// Import

import throttle from 'lodash.throttle';


// Variables

const form = document.querySelector(".feedback-form");
form.addEventListener('submit', onSubmit);
form.addEventListener('input', throttle(getInputValue, 500));
const STORAGE_KEY = 'feedback-form-state';
const obj = {};

populateTextarea()

// Functions

function onSubmit(event) {
  event.preventDefault();

  form.reset();
  console.log(localStorage.getItem(STORAGE_KEY))
  localStorage.removeItem(STORAGE_KEY);
}


function getInputValue(event) {
  obj[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
  
}


function populateTextarea() {
  let items = JSON.parse(localStorage.getItem(STORAGE_KEY));
  
  if (items) {
    for (let key of Object.keys(items)) {
            form[key].value = items[key]
        }
  }
}

