// const password = document.getElementById ("password");
// const length = 12;

// const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lowerCase = "abcdefghijklmnopqrstuvwxyz";
// const number = "0123456789";
// const symbol = "!@#$%^&*()_+{}|<>?[]="

// const allChars = upperCase +lowerCase + number + symbol;

// function createPassword() {
//     let password = "";
//     password += upperCase [Math.floor(Math.random() * upperCase.length)];
//     password += lowerCase [Math.floor(Math.random() * lowerCase.length)];
//     password += number [Math.floor(Math.random() * number.length)];
//     password += symbol [Math.floor(Math.random() * symbol.length)];

//     while(length > password.length) {
//         password += allChars [Math.floor(Math.random() * allChars.length)];
//     }
//     passwordBox.value = password;
// }

const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+{}|<>?[]=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let newPassword = "";
  newPassword += upperCase[Math.floor(Math.random() * upperCase.length)];
  newPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  newPassword += number[Math.floor(Math.random() * number.length)];
  newPassword += symbol[Math.floor(Math.random() * symbol.length)];

  while (newPassword.length < length) {
    newPassword += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = newPassword;
}
