let roll1 =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/1024px-Dice-1-b.svg.png";
let roll2 =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dice-2-b.svg/600px-Dice-2-b.svg.png";
let roll3 =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Dice-3-b.svg/600px-Dice-3-b.svg.png";
let roll4 =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/768px-Dice-4-b.svg.png";
let roll5 =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/768px-Dice-5-b.svg.png";
let roll6 =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Dice-6a-b.svg/1024px-Dice-6a-b.svg.png";

function roll() {
  let die = parseInt(Math.random() * 6 + 1);
  let src = "";
  switch (die) {
    case 1:
      src = roll1;
      break;
    case 2:
      src = roll2;
      break;
    case 3:
      src = roll3;
      break;
    case 4:
      src = roll4;
      break;
    case 5:
      src = roll5;
      break;
    default:
      src = roll6;
      break;
  }
  document.getElementById("dice").innerHTML = `<img src="${src}" />`
  console.log(die);
}
