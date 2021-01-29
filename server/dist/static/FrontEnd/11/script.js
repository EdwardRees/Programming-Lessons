let words = ["dog", "computer"];

let word = "";

let hidden = [];

let guesses = 0;
let guessLimit = 5;

let guessedLetters = [];
let correctLetters = [];

/* Game Functions */

function setWord() {
  let index = parseInt(Math.random() * words.length);
  word = words[index];
}

function getWord() {
  return word;
}

function hideLetters() {
  for (let i = 0; i < word.length; i++) {
    let char = word.charAt(i);
    if (char !== " ") {
      hidden.push("*");
    } else {
      hidden.push(" ");
    }
  }
}

function contains(letter) {
  return word.includes(letter);
}

function check(letter) {
  if (guessedLetters.includes(letter)) {
    return true;
  }
  guessedLetters.push(letter);
  if (!contains(letter)) {
    return false;
  }
  correctLetters.push(letter);
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) === letter) {
      hidden[i] = word.charAt(i);
    }
  }
  return true;
}

function getGuessesLeft() {
  return guessLimit - (guessedLetters.length - correctLetters.length);
}

function toString(list) {
  let str = "";
  for (let i = 0; i < list.length; i++) {
    str += list[i];
  }
  return str;
}

function getGuessedLetters() {
  return toString(guessedLetters);
}

function getHiddenWord() {
  return toString(hidden);
}

/* DOM Functions */

function get(id) {
  return document.getElementById(id);
}

function setup() {
  setWord();
  hideLetters();
  get("word").innerHTML = `${getHiddenWord()}`;
  get("guessesLeft").innerHTML = `${getGuessesLeft()}`;
  get("guess").value = "";
  get("guess").disabled = false;
}

function guess() {
  let guessValue = get("guess").value;
  check(guessValue);
  get("guessedLetters").innerHTML = `${getGuessedLetters()}`;
  get("guessesLeft").innerHTML = `${getGuessesLeft()}`;
  get("word").innerHTML = `${getHiddenWord()}`;
  get("guess").value = "";
  if (getHiddenWord() === word) {
    get(
      "gameover"
    ).innerHTML = `Congratulations! Your word was <strong>${word}</strong>. You guessed it in <i>${guessedLetters.length}</i> letters!`;
    handleGameOver();
  } else if (getGuessesLeft() === 0) {
    get(
      "gameover"
    ).innerHTML = `Unfortunately you used all your guesses! The word was <strong>${word}</strong>.`;
    handleGameOver();
  }
}

function handleGameOver() {
  get("guess").value = "Gameover!";
  get("guess").disabled = true;
  get("gameover").hidden = false;
  get("play-again").hidden = false;
}

function reset() {
  hidden = [];
  guessedLetters = [];
  correctLetters = [];
  get("guessedLetters").innerHTML = "";
  setup();
  get("gameover").hidden = true;
  get("play-again").hidden = true;
}
