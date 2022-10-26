const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {

    //get the values from inputs and removes white space entered by user
    const emailValue = email.value.trim();

    if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
        setSuccessFor(email);
    }
};

function setErrorFor(input, message) {
    const formGroup = input.parentElement; //.form-group
    const small = formGroup.querySelector("small");
    formGroup.className = "form-group error"; // add error message inside small tag
    small.innerHTML = message; // add error class
}

function setSuccessFor(input) {
	const formGroup = input.parentElement;
	formGroup.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}