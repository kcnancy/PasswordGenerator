// Assignment Code
var generateBtn = document.getElementById("generate");

function generatePassword(){


//Variable Input Arrays
var Numeric = ["0", "1", "2", "3", "4", "5","6","7","8","9" ];
var SpecialCharacter = ["!","@.","#","$","%","*","(",")","_","-","=","+","~","`","<",];
var UpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var LowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//clear array

var resultArray = [];
var userArray = [];

UpperCase [1]


//Prompt to confirm length of password

var confirmLength = prompt("How many characters would you like in your password?");

//Loop if answer is not a valid length
while(confirmLength <=8 || confirmLength >=128) {
  alert("Password must be between 8 and 128 character. Try again");
  var confirmLength = prompt("How many characters would you like in your password?");
}


//Determine parameters of password with prompts
  var confirmSpecialCharacter = confirm ("Do you want to include special characters in your password?");
  var confirmNumeric = confirm ("Do you want numbers in your password?");
  var confirmUpperCase = confirm ("Do you want Upper Case letters in your password?");
  var confirmLowerCase = confirm ("Do you want lower case letters in your password?");
    //Loop if no parameters are selected
    while(confirmNumeric === false && confirmSpecialCharacter === false && confirmUpperCase === false && confirmLowerCase === false){alert("Your password must contain at least 1 special character, number, Upper Case or lower case value!"); 
  alert("You must choose at least one parameter");

  var confirmSpecialCharacter = confirm ("Do you want to include special characters in your password?");
  var confirmNumeric = confirm ("Do you want numbers in your password?");
  var confirmUpperCase = confirm ("Do you want Upper Case letters in your password?");
  var confirmLowerCase = confirm ("Do you want lower case letters in your password?");
} 

//Begin password generation

if (confirmNumeric){
  resultArray = resultArray.concat(Numeric);
}

if (confirmUpperCase){
  resultArray = resultArray.concat(UpperCase);
}

if (confirmLowerCase){
  resultArray = resultArray.concat(LowerCase);
}

if (confirmSpecialCharacter){
  resultArray = resultArray.concat(SpecialCharacter);
}
console.log(resultArray)

for (var i = 0; i < confirmLength; i++) {
  
  userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]);
}
return userArray.join("");
}
//Write Password to textbox
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);