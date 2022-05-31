// Assignment code here
function writePassword(array) {
  var password = array.length, randomiseCharacters;
  var randomiseCharacters = {
    if(upperCase) { password += randomiseCharacters.upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
    if(lowerCase) { password += randomiseCharacters.lowerCase = "abcdefghijklmnopqrstuvwxyz" },
    if(numberCase) { password += randomiseCharacters.numberCase = "1234567890" },
    if(symbolCase) { password += randomiseCharacters.symbolCase = "!@#$%^&*()_+{}|:<>?-=[]\;',./'" }
  };

}
var passLength = Number(prompt('How many characters is your password required to be?'));
while (isNaN(passLength) || passLength < 8 || passlength > 128) passLength = Number(alert("Must be at least 8 chacters and a maximum of 128."));
var upperCase = confirm('Would you like your password to contain uppercase letters?');
var lowerCase = confirm('Would you like your password to contain lowercase letters?');
var numberCase = confirm('Would you like your password to contain numbers?');
var symbolCase = confirm('Would you like your password to contain special characters?');

while (upperCase && lowerCase && numberCase && symbolCase) {
  alert("You must at least pick one of the following");
  upperCase = confirm("Would you like your password to contain uppercase letters");
  lowerCase = confirm('Would you like your password to contain lowercase letters?');
  numberCase = confirm('Would you like your password to contain numbers?');
  symbolCase = confirm('Would you like your password to contain special characters?');
}
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
