const email = document.getElementById("email");
const country = document.getElementById("country");
const zip = document.getElementById("zipcode");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const form = document.getElementById("signup");

const showError = (input, message) => {
  console.log("SHOW ERROR");
  console.log("input", input);
  console.log("message", message);

  const formField = input.parentElement;
  const error = formField.querySelector("small");
  error.textContent = "";
  error.textContent = message;
};

const showCorrect = (input) => {
  const formField = input.parentElement;
  const error = formField.querySelector("small");
  error.textContent = "";
};

const isEmailValid = (email) => {
  // const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const isEmail = filter.test(email)

  console.log("Type email", typeof email)
  console.log("isEmail", isEmail)
  return isEmail
};

const isZipValid = (zip) => {
  const re = /[T]\d[A-Z] *\d[A-Z]\d/;
  return re.test(zip);
};

const isPasswordValid = () => {
  const re = /(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})(?=.*[0-9])/;
  return re.test(password);
};

const checkEmail = () => {
  let valid = false;
  const checkedEmail = isEmailValid(email.textContent);
  console.log("Checked Email", checkedEmail);
  if (email.textContent == "" || null) {
    showError(email, "Email is required");
  } else if (checkedEmail == false) {
    showError(email, "Email is not valid");
  } else {
    showCorrect(email);
    valid = true;
  }
  return valid;
};

const checkCountry = () => {
  let valid = false;
  if (country.textContent == "" || null) {
    showError(country, "Country is required");
  } else {
    showCorrect(country);
    valid = true;
  }
  return valid;
};

const checkZip = () => {
  let valid = false;
  const checkedZip = isZipValid(zip.textContent);
  if (zip.textContent == "" || null) {
    showError(zip, "Zip Code is required");
  } else if (checkedZip == false) {
    showError(zip, "Zip Code is not valid");
  } else {
    showCorrect(zip);
    valid = true;
  }
  return valid;
};

const checkPassword = () => {
  let valid = false;
  const checkedPassword = isPasswordValid(password.textContent);
  if (password.textContent == "" || null) {
    showError(password, "Password is required");
  } else if (checkedPassword == false) {
    showError(
      password,
      "Password is not valid. You must have at least 1 uppercase letter, 1 special case character, 1 number, and 8 characters long"
    );
  } else {
    showCorrect(password);
    valid = true;
  }
  return valid;
};

const checkConfirmPassword = () => {
  let valid = false;
  if (isPasswordValid == true || null) {
    if (password == confirmPassword) {
      showCorrect(confirmPassword);
      valid = true;
    } else {
      showError(confirmPassword, "Passwords do not match");
    }
  } else {
    showError(confirmPassword, "Password does not match the paramiters yet");
  }
  return valid;
};

// form.addEventListener('submit', function (e) {
//     // prevent from submitting
//     e.preventDefault();

//     checkEmail();

//     checkCountry();

//     checkZip();

//     checkPassword();

//     checkConfirmPassword();

// });

form.addEventListener("input", function () {
  console.log("________________________");
  checkEmail();
  checkCountry();
  checkZip();
  checkPassword();
  checkConfirmPassword();
});
