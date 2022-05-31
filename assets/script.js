// Assignment code here
function generatePassword(array){
var password = array.length, randomiseCharacters;
var randomiseCharacters ={
if (upperCase) {password += randomiseCharacters.upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"},
if (lowerCase) {password += randomiseCharacters.lowerCase = "abcdefghijklmnopqrstuvwxyz"},
if (numberCase) {password += randomiseCharacters.numberCase = "1234567890"},
if (symbolCase) {password += randomiseCharacters.symbolCase = "!@#$%^&*()_+{}|:<>?-=[]\;',./'"}
};

}
var passLength = Number(prompt('How long is your password required to be?'));
while (isNaN(passLength) || passLength < 8


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
