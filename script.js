// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables
var confirmLength
var confirmSpecialCharacter
var confirmNumeric
var confirmUpperCase
var confirmLowerCase

//Variable Input Arrays
var Numeric = ["0", "1", "2", "3", "4", "5","6","7","8","9" ];
var SpecialCharacter = ["!","@.","#","$","%","*","(",")","_","-","=","+","~","`","<",];
var UpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var LowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//Prompt functions

function generateOptions(){
  var Length = parseInt(prompt("How many characters would you like in your password?"));

  if (Length <8){
    alert('Password must be at least 8 characters!');
    return; }

  if(Length >128){
    alert('Password must be less than 129 characters!');
    return; }
    
  var confirmSpecialCharacter = confirm("Do you want to include special characters in your password?");
  var confirmNumeric = confirm("Do you want numbers in your password?");
  var confirmUpperCase = confirm("Do you want Upper Case letters in your password?");
  var confirmationLowerCase = confirm("Do you want lower case letters in your password?");

  if (!confirmNumeric && !confirmSpecialCharacter && !confirmUpperCase && !confirmLowerCase){alert("Your password must contain at least 1 special character, number, Upper Case or lower case value!");
} 
















}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
