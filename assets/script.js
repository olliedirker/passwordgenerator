// Assignment code here
var generateBtn = document.querySelector("#generate");
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var numberCase = ["1234567890"];
var symbolCase = ["!@#$%^&*()_+{}|:<>?-=[]\;',./'"];

var finalPassword = [];

function writePassword() {
  var passLength = window.prompt('How many characters is your password required to be? It must be between 8 and 128 characters');

  if (passLength) (passLength >= 8 || passLength >= 128){
    var wantUpperCase = window.confirm('Would you like your password to contain uppercase letters?');
    var wantLowerCase = window.confirm('Would you like your password to contain lowercase letters?');
    var wantNumberCase = window.confirm('Would you like your password to contain numbers?');
    var wantSymbolCase = window.confirm('Would you like your password to contain special characters?');
  };

  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
