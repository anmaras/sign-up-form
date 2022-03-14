const form = document.querySelector("form");
const userName = document.getElementById("firstname");
const userLastName = document.getElementById("lastname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("pswd-confirm");

userName.addEventListener("input", () => {
  if (userName.validity.valid) {
    userName.classList.remove("error");
    userName.nextElementSibling.style.visibility = "hidden";
  }
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
    showErrorPhone();
    e.preventDefault();
  }
});

function showErrorName() {
  if (userName.validity.valueMissing) {
    userName.nextElementSibling.textContent = "*Please enter your first name";
  } else if (userName.validity.patternMismatch) {
    userName.nextElementSibling.textContent =
      "*Your name should only contain alphabetical characters";
  } else if (userName.validity.tooShort)
    userName.nextElementSibling.textContent =
      "*Your name should contain min 3 and max 25 characters!";
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
