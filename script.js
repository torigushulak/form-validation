function checkEmail() {
  let email = document.forms[myForm]["email"].value;
  if (!email.value) {
    email.style.border = '5px solid';
    email.style.borderColor = 'red';
  }
}

function checkCountry() {
  let country = document.forms[myForm]["country"].value;
  if (!country.value) {
    country.style.border = '5px solid';
    country.style.borderColor = 'red';
  }
}

function checkZip() {
  let zip = document.forms[myForm]["zip"].value;
  
  if (!zip.value) {
    zip.style.border = '5px solid';
    zip.style.borderColor = 'red';
  }
}

function checkPassword() {
  let password = document.forms[myForm]["password"].value;
  if (!password.value) {
    password.style.border = '5px solid';
    password.style.borderColor = 'red';
  }
}