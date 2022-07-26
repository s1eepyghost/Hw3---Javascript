// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericalCharacters = "0123456789";
  var selectedCharacters = [];

  passwordText.value = password;

}

function writePassword() {
  event.preventDefault();
  password.value === "";
  var randomString = "";
  var passwordLength = prompt("How many characters do you want in your password? --Min:8 Max:128--");
  var uppercase = confirm("Do you want your password to have an uppercase letter?");
  var lowercase = confirm("Do you want your password to have a lowercase letter?");
  var numerical = confirm("Do you want your password to have a number?");
  var special = confirm("Do you want your password to have any special characters?");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password isn't inbetween 8 and 128 characters, please try again");
  }
  {

  }
  if (uppercase) {
    selectedCharacters + uppercaseCharacters;
  }
  if (lowercase) {
    selectedCharacters + lowercaseCharacters;
  }
  if (numerical) {
    selectedCharacters + numericalCharacters;
  }
  if (special) {
    selectedCharacters + specialCharacters;
  } 
  for (var i = 0; i < passwordLength; i++) {
    randomString + selectedCharacters.charAt(Math.floor(Math.random() * selectedCharacters.length));
  }
  password.value = randomString;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
