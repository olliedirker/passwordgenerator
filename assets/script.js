var letters = "abcdefghijklmnopqrstuvwyxz";
var numbers = "1234567890";
var specialChars = "!@#$%^&*()_+?><,./:;'{}[]|";
// toUpperCase is a built in JavaScript function that will take our letters variable and make it all uppercase
var uppercase = letters.toUpperCase();
var password = [];
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // password is an array, and we want to join everything to make a string.
  var finalPassword = password.join("");

  passwordText.value = finalPassword;
}

function generatePassword() {
  var passLength = window.prompt("How long do you want your password to be? Please pick between 8 and 128");

  if (passLength >= 8 && passLength <= 128) {
    // We are passing the value of the variable passLength into our passwordChoices function.
    passwordChoices(passLength);
  } else {
    window.alert("Please pick a number between 8 and 128!");
  }
}

function passwordChoices(passLength) {

  //these are all of our prompts, which all pass true or false values. Okay returns true and cancel returns false.
  var wantLower = window.confirm('Click okay for lowercase, cancel for no lowercase.');
  var wantUpper = window.confirm('Click okay for uppercase, cancel for no uppercase.');
  var wantNumber = window.confirm('Click okay for numbers, cancel for no numbers.');
  var wantSpecial = window.confirm('Click okay for special characters, cancel for no special characters.');

  // these conditional statements are basically finding what the users wants in their password, and adds it to our variable "x".
  if (wantLower === true) {
    var x = (letters);
  } else if (wantLower === false) {
    // we want to define x as an empty string if the first choice is false because we will not be able to concat our choices if we don't have a string to concat
    var x = "";
  } if (wantUpper === true) {
    var x = x.concat(uppercase);
  } if (wantNumber === true) {
    var x = x.concat(numbers);
  } if (wantSpecial === true) {
    var x = x.concat(specialChars);
  }

  // here we are passing x, which contains all of the characters that the user has selected. We are also passing passLength because we will need it for our next function.
  randomPassword(x, passLength);

}

function randomPassword(x,passLength) {
  // passLength is whatever number that the user has chosen for their password.
  for (var i=0; i< passLength; i++) {
    // our function will then keep looping and choosing a random character from our x string, which contains all of the user's choices.
    var makePassword = x[Math.floor(Math.random() * x.length)];
    // we have to push this into password, which is an empty array in order to save this value of makePassword.
    password.push(makePassword);
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
