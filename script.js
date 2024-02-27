
function validateMyForm() {
  let password = document.getElementById('password').value;
  let passwordConfirm = document.getElementById('passwordConfirm').value;
  if (password !== passwordConfirm) {
    alert('passwords do not match');
  } else {
   $("#submit").unbind('click').click(); 
  }
}
