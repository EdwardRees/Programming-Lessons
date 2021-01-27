const debug = false;

function getId(id) {
  return document.getElementById(id);
}

function loaded() {
  if (debug) {
    getId("intro").hidden = true;
    getId("game").hidden = false;
  }
  getId("gameplay").hidden = true;
  getId("gameover").hidden = true;
}

function toggleView() {
  getId("intro").hidden = !getId("intro").hidden;
  getId("game").hidden = !getId("game").hidden;
}

function hideUserInput() {
  getId("user-details").hidden = true;
}
function isValidInput(str) {
  return str.length > 0;
}

function validateUserInputs() {
  let user1name = getId("user_1_name").value;
  let user1marker = getId("user_1_marker").value;
  let user2marker = getId("user_2_marker").value;
  let user2name = getId("user_2_name").value;
  if (!isValidInput(user1name)) {
    alert("Player 1 name needs to be filled!");
    return false;
  } else if (!isValidInput(user1marker)) {
    alert("Player 1 marker needs to be filled!");
    return false;
  } else if (!isValidInput(user2name)) {
    alert("Player 2 name needs to be filled!");
    return false;
  } else if (!isValidInput(user2marker)) {
    alert("Player 2 marker needs to be filled!");
    return false;
  }
  return true;
}

let users = {};
let turn = 0;
let board = [];
let currentUser = "";

function initializeUsers() {
  if (!validateUserInputs()) {
    return;
  }
  hideUserInput();
  let user1 = {
    username: getId("user_1_name").value,
    marker: getId("user_1_marker").value,
    score: 0,
  };
  let user2 = {
    username: getId("user_2_name").value,
    marker: getId("user_2_marker").value,
    score: 0,
  };
  users = { "User 1": user1, "User 2": user2 };
  return users;
}

function initializeBoard() {
  for (let i = 0; i < 3; i++) {
    board.push([]);
    for (let j = 0; j < 3; j++) {
      board[i].push("_");
    }
  }
  return board;
}

function update(row, col) {
  board[row][col] = users[currentUser].marker;
  alternate();
  setCurrentPlayer();
  drawBoard();
  if (!stillPlaying()) {
    endGame();
  }
}

function blockFormatString(boardValue) {
  return `<span class="board-value used">${boardValue}</span> `;
}

function boardFormatString(boardValue, i, j) {
  if (boardValue === "_") {
    return `<button onclick="update(${i},${j})" class="board-value">${boardValue}</button> `;
  } else {
    return blockFormatString(boardValue);
  }
}

function htmlBoard() {
  let str = "";
  for (let i = 0; i < 3; i++) {
    str += boardFormatString(board[i][0], i, 0);
    str += "<span> | </span>";
    str += boardFormatString(board[i][1], i, 1);
    str += "<span> | </span>";
    str += boardFormatString(board[i][2], i, 2);
    str += "<br><br>";
  }
  return str;
}

function drawBoard() {
  getId("board").innerHTML = htmlBoard();
}

function initialize() {
  initializeUsers();
  initializeBoard();
  getId("gameplay").hidden = false;
  begin();
}

function hasHorizontalWin() {
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] === board[i][1] &&
      board[i][0] === board[i][2] &&
      board[i][0] === users["User 1"].marker
    ) {
      return "User 1";
    } else if (
      board[i][0] === board[i][1] &&
      board[i][0] === board[i][2] &&
      board[i][0] === users["User 2"].marker
    ) {
      return "User 2";
    }
  }
  return "Neither";
}

function hasVerticalWin() {
  for (let i = 0; i < 3; i++) {
    if (
      board[0][i] === board[1][i] &&
      board[0][i] === board[2][i] &&
      board[0][i] === users["User 1"].marker
    ) {
      return "User 1";
    } else if (
      board[0][i] === board[1][i] &&
      board[0][i] === board[2][i] &&
      board[0][i] === users["User 2"].marker
    ) {
      return "User 2";
    }
  }
  return "Neither";
}

function hasDiagonalWin() {
  if (
    board[0][0] === board[1][1] &&
    board[0][0] === board[2][2] &&
    board[0][0] === users["User 1"].marker
  ) {
    return "User 1";
  } else if (
    board[0][2] === board[1][1] &&
    board[0][2] === board[2][0] &&
    board[0][2] === users["User 1"].marker
  ) {
    return "User 1";
  } else if (
    board[0][0] === board[1][1] &&
    board[0][0] === board[2][2] &&
    board[0][0] === users["User 2"].marker
  ) {
    return "User 2";
  } else if (
    board[0][2] === board[1][1] &&
    board[0][2] === board[2][0] &&
    board[0][2] === users["User 2"].marker
  ) {
    return "User 2";
  }

  return "Neither";
}

function canStillPlay() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === "_") {
        return true;
      }
    }
  }
  return false;
}

function stillPlaying() {
  return (
    hasHorizontalWin() === "Neither" &&
    hasVerticalWin() === "Neither" &&
    hasDiagonalWin() === "Neither" &&
    canStillPlay()
  );
}

function alternate() {
  turn++;
}

function setCurrentPlayer() {
  if (turn % 2 === 0) {
    currentUser = "User 1";
  } else {
    currentUser = "User 2";
  }
}

function getCurrentPlayer() {
  return currentUser;
}

function begin() {
  currentUser = "User 1";
  drawBoard();
}

function getScoreboard() {
  let str = "";
  let user1 = users["User 1"];
  let user2 = users["User 2"];
  str += `<p class="scoreboard">Scoreboard: </p>`;
  str += `<p class="scoreboard-usernames">${user1.username} : ${user2.username}</p>`;
  str += `<p class="scoreboard-scores">${user1.score} : ${user2.score}</p>`;

  getId("scoreboard").innerHTML = str;
}

function endGame() {
  getId("board").innerHTML = endingBoard();
  let horizontalWinner = hasHorizontalWin();
  let verticalWinner = hasVerticalWin();
  let diagonalWinner = hasDiagonalWin();
  if (horizontalWinner !== "Neither") {
    getId(
      "winner"
    ).innerHTML = `<span>${users[horizontalWinner].username} won!</span>`;
    users[horizontalWinner].score += 1;
  } else if (verticalWinner !== "Neither") {
    getId(
      "winner"
    ).innerHTML = `<span>${users[verticalWinner].username} won!</span>`;
    users[verticalWinner].score += 1;
  } else if (diagonalWinner !== "Neither") {
    getId(
      "winner"
    ).innerHTML = `<span>${users[diagonalWinner].username} won!</span>`;
    users[diagonalWinner].score += 1;
  } else {
    getId("winner").innerHTML = `<span>No Winner! Tie Game!</span>`;
  }
  getId("gameover").hidden = false;
  getId("scoreboard").hidden = false;
  getScoreboard();
}

function endingBoard() {
  let str = "";
  for (let i = 0; i < 3; i++) {
    str += blockFormatString(board[i][0]);
    str += "<span> | </span>";
    str += blockFormatString(board[i][1]);
    str += "<span> | </span>";
    str += blockFormatString(board[i][2]);
    str += "<br><br>";
  }
  return str;
}

function reset() {
  board = [];
  users = {};
  getId("gameplay").hidden = true;
  getId("gameover").hidden = true;
  getId("user-details").hidden = false;
  getId("user_1_name").value = "";
  getId("user_1_marker").value = "";
  getId("user_2_marker").value = "";
  getId("user_2_name").value = "";
  getId("scoreboard").hidden = true;
  turn = 0;
}

function repeat() {
  board = [];
  turn = 0;
  getId("gameover").hidden = true;
  initializeBoard();
  begin();
}

function quit(){
  reset();
  toggleView();
}