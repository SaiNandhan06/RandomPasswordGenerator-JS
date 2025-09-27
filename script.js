//Random Password Generator
function generatePassword(length, lowerCase, upperCase, numbers, symbols) {
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolsChars = "!@#$%^&*()_+";

  let allowedChars = "";
  let password = "";

  allowedChars += lowerCase ? lowerCaseChars : "";
  allowedChars += upperCase ? upperCaseChars : "";
  allowedChars += numbers ? numberChars : "";
  allowedChars += symbols ? symbolsChars : "";

  if (length <= 0) {
    return `Password length must be atleast 1`;
  }
  if (allowedChars.length === 0) {
    return `Atleast 1 set of trueers must be selected`;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  return password;
}

const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

function showPassword() {
  const password = generatePassword(
    passwordLength,
    includeLowerCase,
    includeUpperCase,
    includeNumbers,
    includeSymbols
  );
  document.getElementById("myPass").textContent = password;
//   console.log(`Generated Password: ${password}`);
}
