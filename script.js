const form = document.querySelector("form");
const userName = document.getElementById("firstname");
const userLastName = document.getElementById("lastname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmationPasswordInput = document.getElementById("pswd-confirm");
const userPasswordIcon = document.querySelector(".material-icons-outlined");
const confirmationPasswordIcon = document.querySelector(
  ".material-icons-outlined.confirm"
);

/* Inputs Event Listeners */

userName.addEventListener("input", () => {
  if (userName.validity.valid) {
    userName.classList.remove("error");
    userName.nextElementSibling.style.visibility = "hidden";
  }
  inputUserNameError();
  userName.value = firstLetterToUpperCase(userName.value); // turn the first letter to upperCase
});

userLastName.addEventListener("input", () => {
  if (userLastName.validity.valid) {
    userLastName.classList.remove("error");
    userLastName.nextElementSibling.style.visibility = "hidden";
  }
});

email.addEventListener("input", () => {
  if (email.validity.valid) {
    email.classList.remove("error");
    email.nextElementSibling.style.visibility = "hidden";
  }
});

phone.addEventListener("input", () => {
  if (phone.validity.valid) {
    phone.classList.remove("error");
    phone.nextElementSibling.style.visibility = "hidden";
  }
});

password.addEventListener("input", () => {
  if (password.validity.valid) {
    password.classList.remove("error");
    password.nextElementSibling.style.visibility = "hidden";
  }
});

/* Form Event Listener Validation*/

form.addEventListener("submit", (e) => {
  if (!userName.validity.valid) {
    userName.classList.add("error");
    userName.nextElementSibling.style.visibility = "visible";
    showErrorName();
    e.preventDefault();
  }
  if (!userLastName.validity.valid) {
    userLastName.classList.add("error");
    userLastName.nextElementSibling.style.visibility = "visible";
    showErrorLastName();
    e.preventDefault();
  }
  if (!email.validity.valid) {
    email.classList.add("error");
    email.nextElementSibling.style.visibility = "visible";
    showErrorEmail();
    e.preventDefault();
  }
  if (!phone.validity.valid) {
    phone.classList.add("error");
    phone.nextElementSibling.style.visibility = "visible";
    showErrorPhone();
    e.preventDefault();
  }
  if (!password.validity.valid) {
    password.classList.add("error");
    password.nextElementSibling.style.visibility = "visible";
    showErrorPassword();
    e.preventDefault();
  }
  if (confirmationPasswordInput.value !== password.value) {
    confirmationPasswordInput.classList.add("error");
    confirmationPasswordInput.nextElementSibling.style.visibility = "visible";
    showConfirmationError();
    e.preventDefault();
  }
});

/*Password Event Listener */

//password
userPasswordIcon.addEventListener("click", passwordVisibility);

//password confirmation
confirmationPasswordIcon.addEventListener(
  "click",
  confirmationPasswordInputVisibility
);

/* Password visibility function */

function passwordVisibility() {
  //toggle the visibility icon for password input
  if (userPasswordIcon.textContent.trim() === "visibility_off") {
    userPasswordIcon.textContent = "visibility";
    password.type = "text";
  } else {
    userPasswordIcon.textContent = "visibility_off";
    password.type = "password";
  }
}

function confirmationPasswordInputVisibility() {
  //toggle the visibility icon for confirmation input
  if (confirmationPasswordIcon.textContent.trim() === "visibility_off") {
    confirmationPasswordIcon.textContent = "visibility";
    confirmationPasswordInput.type = "text";
  } else {
    confirmationPasswordIcon.textContent = "visibility_off";
    confirmationPasswordInput.type = "password";
  }
}

/* Input Error Functions */

function inputUserNameError() {
  //
  if (userName.value.match(/[0-9]/g) || userName.value.length < 2) {
    // if input is number or less than 2 chars
    userName.nextElementSibling.style.visibility = "visible";
    showErrorName();
  }
}

/*Input Check Functions */

function firstLetterToUpperCase(string) {
  if (string.indexOf(" ") >= 0) {
    //check if there is space between characters.
    return string
      .split(" ")
      .map((text) => text.charAt(0).toUpperCase() + text.slice(1))
      .join(" ");
    // turns the first letter after space to upperCase
  } else return string.charAt(0).toUpperCase() + string.slice(1);
}

/*Validation Error Functions */

function showErrorName() {
  if (userName.validity.valueMissing) {
    userName.nextElementSibling.textContent = "*Please enter your first name";
  } else if (userName.validity.patternMismatch) {
    userName.nextElementSibling.textContent =
      "*Your name should only contain alphabetical characters";
  } else if (userName.validity.tooShort)
    userName.nextElementSibling.textContent =
      "*Your name should contain min 2 and max 25 characters!";
}

function showErrorLastName() {
  if (userLastName.validity.valueMissing) {
    userLastName.nextElementSibling.textContent =
      "*Please enter your last name";
  } else if (userLastName.validity.patternMismatch) {
    userLastName.nextElementSibling.textContent =
      "*Your last name should only contain alphabetical characters";
  } else if (userLastName.validity.tooShort)
    userLastName.nextElementSibling.textContent =
      "*Your last name should contain min 4 and max 25 characters!";
}

function showErrorEmail() {
  if (email.validity.valueMissing) {
    email.nextElementSibling.textContent =
      "You need to enter an e-mail address.";
  } else if (email.validity.typeMismatch) {
    email.nextElementSibling.textContent =
      "*Entered value needs to be an e-mail address.'";
  }
}

function showErrorPhone() {
  if (phone.validity.valueMissing) {
    phone.nextElementSibling.textContent =
      "You need to enter your phone number.";
  } else if (phone.validity.patternMismatch) {
    phone.nextElementSibling.textContent =
      "*Entered characters needs to be numbers'";
  } else if (phone.validity.tooShort) {
    phone.nextElementSibling.textContent = "Phone number too short";
  }
}

function showErrorPassword() {
  const lowerCaseLetters = /[a-z]/g;
  const upperCaseLetters = /[A-Z]/g;
  const numbers = /[0-9]/g;
  if (password.validity.valueMissing) {
    password.nextElementSibling.textContent = "*You need to enter a password.";
  } else if (!password.value.match(lowerCaseLetters)) {
    password.nextElementSibling.textContent =
      "*Password must contain at least one lowercase letter.";
  } else if (!password.value.match(upperCaseLetters)) {
    password.nextElementSibling.textContent =
      "*Password must contain at least one uppercase letter.";
  } else if (!password.value.match(numbers)) {
    password.nextElementSibling.textContent =
      "*Password must contain at least one number.";
  } else if (password.validity.tooShort) {
    password.nextElementSibling.textContent =
      "*Password need to be at least 8 characters";
  }
}

function showConfirmationError() {
  if (confirmationPasswordInput.value !== "" && password.value === "") {
    confirmationPasswordInput.nextElementSibling.textContent =
      "*You have not entered any password yet!";
  } else if (confirmationPasswordInput.value !== password.value) {
    confirmationPasswordInput.nextElementSibling.textContent =
      "*Password does not match";
  }
}
