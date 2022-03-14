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

form.addEventListener("submit", (e) => {
  if (!userName.validity.valid) {
    userName.classList.add("error");
    showErrorName();
    userName.nextElementSibling.style.visibility = "visible";
    e.preventDefault();
  }
});

function showErrorName() {
  if (userName.validity.valueMissing) {
    userName.nextElementSibling.textContent = "*Please enter your first name";
  } else if (userName.validity.patternMismatch) {
    userName.nextElementSibling.textContent =
      "Your name should only contain letters";
  } else if (userName.validity.tooShort) {
    userName.nextElementSibling.textContent =
      "*Your name should be min 3 and max 12 characters!";
  }
}
// if (!userLastName.validity.valid) {
//   userLastName.classList.add("error");
//   userLastName.nextElementSibling.style.visibility = "visible";
//   e.preventDefault();
// }
// if (!phone.validity.valid) {
//   phone.classList.add("error");
//   phone.nextElementSibling.style.visibility = "visible";
//   e.preventDefault();
// }
// if (!email.validity.valid) {
//   email.classList.add("error");
//   email.nextElementSibling.style.visibility = "visible";
//   e.preventDefault();
// }
// if (!password.validity.valid) {
//   password.classList.add("error");
//   password.nextElementSibling.style.visibility = "visible";
//   e.preventDefault();
// }
