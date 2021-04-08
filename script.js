// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var charSet = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numeric: "0123456789",
  special: "!@#$%^&*()-_+=[{]}\|;:,<.>/?"
};

var passlength = prompt("How long would you like your password? Enter a number between 8 and 128.")
var lowerCase = confirm("Would you like this password to contain lowercase letters?")
var upperCase = confirm("Would you like this password to contain uppercase letters?")
var number = confirm("Would you like this password to contain numbers?")
var symbol = confirm("Would you like this password to special characters?")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}