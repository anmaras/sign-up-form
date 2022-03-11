const inputs = document.querySelectorAll("input");
const warning = document.querySelector("input + p");
const warnings = document.querySelectorAll("input + p");

warnings.forEach((warning) => (warning.style.visibility = "hidden"));

inputs.forEach((input) => {
  input.addEventListener("focus", (e) => visible(e.target.id));
});

inputs.forEach((input) => {
  input.addEventListener("blur", (e) => hidden(e.target.id));
});

inputs.forEach((input) => {
  input.addEventListener("input", (e) =>
    validation(e.target.value, e.target.id)
  );
});

function visible(value) {
  console.log();
  document.querySelector(`#${value} + p`).style.visibility = "visible";
}

function hidden(value) {
  document.querySelector(`#${value} + p`).style.visibility = "hidden";
}

function validation(input, value) {
  const numbers = /[0-9]/g;
  let test = value;
  if (input.match(numbers)) {
    for (let i = 0; i < warnings.length; i++) {
      warnings[i].textContent = "Name cant be a number";
    }
  } else warnings[i].textContent = "Please enter a valid name";
}
