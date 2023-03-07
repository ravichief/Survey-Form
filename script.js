/*Survey form to gather information from the users. This could be feedback, information from
customers, or data for research purposes. You employ HTML to build the structure of your survey
form and to create the fields the users have to fill (name, age, gender, details of contact). CSS can
do the styling. JavaScript is for tasks associated with validation such as e-mail ID and character
limit.*/

const form = document.getElementById('survey-form');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const emailInput = document.getElementById('email');
const contactDetailsInput = document.getElementById('contact-details');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  const nameValue = nameInput.value.trim();
  const ageValue = ageInput.value;
  const emailValue = emailInput.value.trim();
  const contactDetailsValue = contactDetailsInput.value.trim();

  if (nameValue === '') {
    setErrorFor(nameInput, 'Name cannot be blank');
  } else {
    setSuccessFor(nameInput);
  }

  if (ageValue === '') {
    setErrorFor(ageInput, 'Age cannot be blank');
  } else if (isNaN(ageValue)) {
    setErrorFor(ageInput, 'Age must be a number');
  } else {
    setSuccessFor(ageInput);
  }

  if (emailValue === '') {
   
setErrorFor(emailInput, 'Email cannot be blank');
} else if (!isValidEmail(emailValue)) {
setErrorFor(emailInput, 'Email is not valid');
} else {
setSuccessFor(emailInput);
}

if (contactDetailsValue === '') {
setErrorFor(contactDetailsInput, 'Contact details cannot be blank');
} else {
setSuccessFor(contactDetailsInput);
}
}

function setErrorFor(input, message) {
const formControl = input.parentElement;
const errorElement = formControl.querySelector('.error');
input.classList.add('error-input');
errorElement.innerText = message;
}

function setSuccessFor(input) {
const formControl = input.parentElement;
const errorElement = formControl.querySelector('.error');
input.classList.remove('error-input');
errorElement.innerText = '';
}

function isValidEmail(email) {
const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
return emailRegex.test(email);
}