// Assignment code here
const passwordParams = {
   passwordLength: 0,
   lowerCase: false,
   lowerCase: false,
   upperCase: false,
   includeNumbers: false,
   includeSpecialCharacters: false,
};
function generatePassword() {
   let userLength = prompt("Please choose a length between 8-128 characters");
   if (userLength >= 8 && userLength <= 128) {
      passwordParams.passwordLength = parseInt(userLength);
      passwordParams.lowerCase = confirm("Would you like to use lowercase letters?");
      passwordParams.upperCase = confirm("Would you like to use uppercase letters?");
      passwordParams.includeNumbers = confirm("Would you like to use numbers?");
      passwordParams.includeSpecialCharacters = confirm("Would you like to use special characters?");
      let count = 0;
      for (const key in passwordParams) {
         if (passwordParams[key] === true) {
            count++;
         }
      }
      if (count < 2) {
         alert("Please have at least 2 different character types");
         count = 0;
         generatePassword();
      }
   } else if (userLength === null) {
      return "Your Secure Password";
   } else {
      generatePassword();
   }
}

function passwordLength() {}

function lowerCase() {}

function upperCase() {}

function includeNumbers() {}

function includeSpecialCharacters() {}
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
