//1. Prompt the user for password criteria
//    a. Password length 8 < 128
//    b.  Numbers, uppercase, lowercase, special characters
//2. Validate the input
//3. Generate password
//4. Display password to the page

//Available characters
var numbers = ['0','1', '2', '3','4','5','6','7','8','9'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var specialChar = ['!','#','$','%','^','&','*','(',')','/','?'];

//1. Prompt the user 
//   a. Make sure password is within correct range 
function getPasswordCriteria() {
  var userChoseLength = prompt("How long do you want your password to be?");
    while ((userChoseLength < 8) || (userChoseLength > 126)) {
    userChoseLength = prompt("Please enter length between 8 and 126");}
  
  var userChoseNumbers = confirm("Do you want numbers in your password?");
  var userChoseUpperCase = confirm("Do you want uppercase letters in your password?");
  var userChoseLowerCase = confirm("Do you want lowercase letters in your password?");
  var userChoseSpecialChar = confirm("Do you want special characters in your password?");
  

//2. Validate the input (edge cases!)

//Options we are choosing from and defining their length
  var options = {
    userChoseLength: userChoseLength,
    userChoseNumbers: userChoseNumbers,
    userChoseUpperCase: userChoseUpperCase,
    userChoseLowerCase: userChoseLowerCase,
    userChoseSpecialChar: userChoseSpecialChar,
  };
  return options;
}

function createRandom(length) {
    var randomNum = Math.floor(Math.random()*length);
    return randomNum;
}

function generatePassword() {
  var userChose = getPasswordCriteria();
  var availableChars= [];
  var passwordArr = [];

  if(userChose.userChoseNumbers) {
    availableChars = availableChars.concat(numbers);
  } if(userChose.userChoseUpperCase) {
    availableChars = availableChars.concat(upperCase);
  } if(userChose.userChoseLowerCase) {
    availableChars = availableChars.concat(lowerCase);
  } if(userChose.userChoseSpecialChar) {
    availableChars = availableChars.concat(specialChar);
  }

  for(var i= 0; i < userChose.userChoseLength; i++) {
    passwordArr.push(availableChars[createRandom(availableChars.length)]);
  }

  return passwordArr.join("");

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
