let string = "";
let shift = 10;
let letters = [];

function get(id) {
  return document.getElementById(id);
}

function discover() {
  letters = [];
  string = get("string").value;
  getLetters();
  setReverse();
  setPalindromic();
  setVowels();
  setConsonants();
  setEncrypted();
}

function getLetters(){
  for(let i=0; i<string.length; i++){
    if(!letters.includes(string.charAt(i))){
      letters.push(string.charAt(i));
    }
  }
}

function reverse() {
  let chars = [];
  let reversal = [];
  for (let i = 0; i < string.length; i++) {
    chars.push(string.charAt(i));
  }
  for (let j = string.length - 1; j > -1; j--) {
    reversal.push(chars[j]);
  }
  let reversed = "";
  for (let i = 0; i < reversal.length; i++) {
    reversed += reversal[i];
  }
  return reversed;
}

function setReverse() {
  get("reversed").innerHTML = `<span>${reverse()}</span>`;
}

function palindromic() {
  let reversed = reverse();
  if (string === reversed) {
    return `<span>${string} is a palindrome!</span>`;
  } else {
    return `<span>${string} is not a palindrome!</span>`;
  }
}

function setPalindromic() {
  get("palindromic").innerHTML = palindromic();
}

function countVowels() {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < letters.length; i++) {
    if (vowels.includes(letters[i])) {
      count++;
    }
  }
  return count;
}

function countConsonants() {
  let consonants = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let count = 0;
  for (let i = 0; i < letters.length; i++) {
    if (consonants.includes(letters[i])) {
      count++;
    }
  }
  return count;
}

function setVowels() {
  get(
    "vowels"
  ).innerHTML = `<span>There are ${countVowels()} Vowels in ${string}</span>`;
}

function setConsonants() {
  get(
    "consonants"
  ).innerHTML = `<span>There are ${countConsonants()} Consonants in ${string}</span>`;
}

function encrypt() {
  let encrypted = "";
  for (let i = 0; i < string.length; i++) {
    encrypted += String.fromCharCode(string.charAt(i).charCodeAt(0) + shift);
  }
  return encrypted;
}

function setEncrypted(){
  get("encrypted").innerHTML = `<span>The encrypted version of ${string} with a shift of ${shift} is: ${encrypt()}</span>`
}