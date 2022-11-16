const args = process.argv.slice(2);
const str = args.slice(2);

const passChange = function (str) {
  let text = "";
  for (letter of str) {
    if (letter === 'a') {
      text += '4';
    }
    else if (letter === 'l') {
      text += '1';
    }
    else if (letter === 'e') {
      text += '3';
    }
    else if (letter === 'o') {
      text += '0';
    }
    else {
      text += letter;
    }
  }
  return text;
}

console.log(passChange("Hello"))  