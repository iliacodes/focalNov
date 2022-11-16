const args = process.argv;
const numbers = args.slice(2);

let diceRoller = function (numbers) {
  let arr = [];
  for (let i = 0; i < numbers; i++) {
    let roll = (Math.random()) * 7;
    roll = Math.floor(roll);
    arr.push(roll);
  }
  return `Rolled ${numbers} dice: ${arr}`
};