// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  // Password character set
  var charSet = {
    lower: "abcdefghijklmnopqrstuvwxyz",
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numeric: "0123456789",
    special: "!@#$%^&*()_-=+{[}]|:;,<.>/?"
  };  

// Variables
var passLength = "";
var confirmLower;
var confirmUpper;
var confirmNumeric;
var confirmSpecial;

// Function
function generatePassword() {

  // Question asking length of password
  var passLength = prompt("How long would you like your password? Enter a number between 8 and 128.");

  // Alert if password !between 8 and 128. Loops until character requirements are met
  if (passLength < 8 || passLength > 128) {
    alert("Password must be 8-128 characters!");
    var passLength = prompt("How long would you like your password? Enter a number between 8 and 128.");
  }

  // Questions asking specifications of password
  var confirmLower = confirm("Would you like this password to contain lowercase letters?");
  var confirmUpper = confirm("Would you like this password to contain uppercase letters?");
  var confirmNumeric = confirm("Would you like this password to contain numbers?");
  var confirmSpecial = confirm("Would you like this password to special characters?");

  // Alert if password does not contain any of the specifications. Loops until at least one specification is chosen
  if (!confirmLower && !confirmUpper && !confirmNumeric && !confirmSpecial) {
    alert("Password must contain a lowercase character, uppercase character, number, or special character!");
    var confirmLower = confirm("Would you like this password to contain lowercase letters?");
    var confirmUpper = confirm("Would you like this password to contain uppercase letters?");
    var confirmNumeric = confirm("Would you like this password to contain numbers?");
    var confirmSpecial = confirm("Would you like this password to special characters?");
  }

  // Concatinating the character sets based on confirmations above
  var passSet = "";

  if (confirmLower) {
    passSet = passSet.concat(charSet.lower);
  }

  if (confirmUpper) {
    passSet = passSet.concat(charSet.upper);
  }

  if (confirmNumeric) {
    passSet = passSet.concat(charSet.numeric);
  }

  if (confirmSpecial) {
    passSet = passSet.concat(charSet.special);
  }

  console.log(passSet)

  // For loop selecting random characters from character set
  var randomPass = "";

  for (var i = 0; i < passLength; i++) {
    randomPass = randomPass + passSet[(Math.floor(Math.random() * passSet.length))];
    console.log(randomPass)
  } return randomPass;
}


