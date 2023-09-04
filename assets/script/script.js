// Assignment code here
const passwordParams = {
   passwordLength: 0,
   lowercase: false,
   uppercase: false,
   includeNumbers: false,
   includeSpecialCharacters: false,
};

let generatedPassword = "";

const lowercaseLetters = [
   "a",
   "b",
   "c",
   "d",
   "e",
   "f",
   "g",
   "h",
   "i",
   "j",
   "k",
   "l",
   "m",
   "n",
   "o",
   "p",
   "q",
   "r",
   "s",
   "t",
   "u",
   "v",
   "w",
   "x",
   "y",
   "z",
];

const uppercaseLetters = [
   "A",
   "B",
   "C",
   "D",
   "E",
   "F",
   "G",
   "H",
   "I",
   "J",
   "K",
   "L",
   "M",
   "N",
   "O",
   "P",
   "Q",
   "R",
   "S",
   "T",
   "U",
   "V",
   "W",
   "X",
   "Y",
   "Z",
];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const specialCharacters = [
   "!",
   "@",
   "#",
   "$",
   "%",
   "^",
   "&",
   "*",
   "(",
   ")",
   "-",
   "_",
   "+",
   "=",
   "{",
   "}",
   "[",
   "]",
   "|",
   "\\",
   ":",
   ";",
   "<",
   ">",
   ",",
   ".",
   "?",
   "/",
];

function pickCharacters() {
   generatedPassword = "";
   for (let i = 0; i < passwordParams.passwordLength; i++) {
      let randomCharacter = Math.floor(Math.random() * 4);
      if (randomCharacter === 0 && passwordParams.lowercase) {
         let x = Math.floor(Math.random() * 26);
         generatedPassword += lowercaseLetters[x];
      } else if (randomCharacter === 1 && passwordParams.uppercase) {
         let x = Math.floor(Math.random() * 26);
         generatedPassword += uppercaseLetters[x];
      } else if (randomCharacter === 2 && passwordParams.includeNumbers) {
         let x = Math.floor(Math.random() * 10);
         generatedPassword += numbers[x];
      } else if (randomCharacter === 3 && passwordParams.includeSpecialCharacters) {
         let x = Math.floor(Math.random() * 28);
         generatedPassword += specialCharacters[x];
      } else {
         i--;
      }
   }
   return generatedPassword;
}

function generatePassword() {
   let userLength = prompt("Please choose a length between 8-128 characters");
   if (userLength === null) {
      return "Your Secure Password";
   }
   if (userLength >= 8 && userLength <= 128) {
      passwordParams.passwordLength = parseInt(userLength);
      passwordParams.lowercase = confirm("Would you like to use lowercase letters?");
      passwordParams.uppercase = confirm("Would you like to use uppercase letters?");
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
         return generatePassword();
      } else {
         return pickCharacters();
      }
   } else {
      generatePassword();
   }
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
