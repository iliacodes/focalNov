const inputString = process.argv.slice(2);

const passChange = function (inputString) {
  let result = "";
  for (letter of inputString) {
    if (letter === 'a') {
      result += '4';
    }
    else if (letter === 'l') {
      result += '1';
    }
    else if (letter === 'e') {
      result += '3';
    }
    else if (letter === 'o') {
      result += '0';
    }
    else {
      result += letter;
    }
  }
  return result;
}

console.log(passChange("Hello"))  