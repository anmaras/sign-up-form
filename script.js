const inputs = document.querySelectorAll("input");
const warning = document.querySelector("input + p");
const warnings = document.querySelectorAll("input + p");

warnings.forEach((warning) => (warning.style.visibility = "hidden"));

inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    visible(input.id);
  });
});

inputs.forEach((input) => {
  input.addEventListener("blur", () => hidden(input.id));
});

inputs.forEach((input) => {
  input.addEventListener("input", () => validation(input.value, input.id));
});

// functions

function visible(value) {
  document.querySelector(`#${value} + p`).style.visibility = "visible";
}

function hidden(value) {
  document.querySelector(`#${value} + p`).style.visibility = "hidden";
}

function validation(value, id) {
  console.log(typeof value);
  let numbers = /[0-9]/g;
  if (value === "") {
    document.querySelector(`#${id} + p`).textContent =
      "*Please enter a valid name";
  }

  if (value.match(numbers)) {
    return (document.querySelector(`#${id} + p`).textContent =
      "*Name should contain letters only");
  }
}
