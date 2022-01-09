// Assignment code here
var passwordLength
var numbersTrue
var uppercase
var lowercase
var symbols
var numbersString = "1234567890";
var uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseString = "abcdefghijklmnopqrstuvwxyz";
var symbolsString = "!@#$%^&*?";
var choicesString = "";
var finalPassword = "";

var generatePassword = function (){
  passwordLength = window.prompt("choose a password between 8 and 128 characters");
  while(passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
    passwordLength = window.prompt("incorrect: choose a password between 8 and 128 characters")
  }
  numbersTrue = confirm("would you like a number in your password");
  uppercase = confirm("do you want uppercase characters in your password");
  lowercase = confirm("do you want lowercase characters in your password");
  symbols = confirm("do you want symbols in your password");

  while(!numbersTrue && !uppercase && !lowercase && !symbols){
    window.alert("you must choose at least one character type");
    numbersTrue = confirm("would you like a number in your password");
    uppercase = confirm("do you want uppercase characters in your password");
    lowercase = confirm("do you want lowercase characters in your password");
    symbols = confirm("do you want symbols in your password");
  }
  if(numbersTrue) choicesString += numbersString;
  if(uppercase) choicesString += uppercaseString;
  if(lowercase) choicesString += lowercaseString;
  if(symbols) choicesString += symbolsString;
  
  for (var i = 0; i < passwordLength; i++){
    var choicesIndex = Math.floor(Math.random()*choicesString.length);
    finalPassword += choicesString[choicesIndex];
    
  }
  return finalPassword;
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