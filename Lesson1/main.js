import { isEmail } from './email-check.js';
import { isPhoneNumber } from './phone-check.js';
import { isNumeric, isAlphabetic } from './alpha-check.js';

function checkText() {
  const textInput = document.getElementById("text-input").value;
  
  if (isNumeric(textInput)) {
    alert("This is a numeric text.");
  } else if (isAlphabetic(textInput)) {
    alert("This is an alphabetic text.");
  } else {
    alert("This is neither numeric nor alphabetic text.");
  }
}

function checkEmail() {
  const emailInput = document.getElementById("email-input").value;
  
  if (isEmail(emailInput)) {
    alert("This is a valid email.");
  } else {
    alert("This is not a valid email.");
  }
}

function checkPhoneNumber() {
  const phoneInput = document.getElementById("phone-input").value;
  
  if (isPhoneNumber(phoneInput)) {
    alert("This is a valid phone number.");
  } else {
    alert("This is not a valid phone number.");
  }
}

