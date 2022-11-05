const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateEmail();
})

function validateEmail() {
    // const emptyEmail = (emailValue) ? true : false;
    const validEmail = email.value.trim();
    // checks if email is valid

    if(validEmail === '') {
      setErrorFor(email, 'Oops! Please add your email');
    } else if (!isEmail(validEmail)) {
    setErrorFor(email, 'Oops! Please check your email');
    } else {
        removeError(email, '');
    }
};

//takes an input and sends out a message
function setErrorFor(input, message) {
    const formGroup = input.parentElement; //.form-group
    const small = document.querySelector('small');
    small.classList.add('error'); // add error message inside small tag
    small.innerHTML = message; // add error class
};

function removeError(input, message) {
    const formGroup = input.parentElement; //.form-group
    const small = document.querySelector('small');
    small.classList.remove('error');
    small.innerHTML = message;
};

function isEmail(email) {

    const regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regx.test(email);
};