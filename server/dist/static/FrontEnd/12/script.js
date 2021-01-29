/*
 * TICTACTOE CORE LOGIC
 */
let board = [];
let player1 = "X";
let player2 = "O";
let currentPlayer = "";
let turn = 0;

function initializeBoard() {
  for (let i = 0; i < 3; i++) {
    board.push([]);
    for (let j = 0; j < 3; j++) {
      board[i].push("_");
    }
  }
}

function setup() {
  initializeBoard();
  currentPlayer = player1;
}
function alternate() {
  turn++;
  if (turn % 2 == 0) {
    currentPlayer = player1;
  } else {
    currentPlayer = player2;
  }
}

function boardSet(row, col) {
  board[row][col] = currentPlayer;
}

function hasHorizontalWin() {
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] === board[i][1] &&
      board[i][0] === board[i][2] &&
      board[i][0] === player1
    ) {
      return player1;
    } else if (
      board[i][0] === board[i][1] &&
      board[i][0] === board[i][2] &&
      board[i][0] === player1
    ) {
      return player2;
    }
  }
  return null;
}

function hasVerticalWin() {
  for (let i = 0; i < 3; i++) {
    if (
      board[0][i] === board[1][i] &&
      board[0][i] === board[2][i] &&
      board[0][i] === player1
    ) {
      return player1;
    } else if (
      board[0][i] === board[1][i] &&
      board[0][i] === board[2][i] &&
      board[0][i] === player2
    ) {
      return player2;
    }
  }
  return null;
}

function hasDiagonalWin() {
  if (
    board[0][0] === board[1][1] &&
    board[0][0] === board[2][2] &&
    board[0][0] === player1
  ) {
    return player1;
  } else if (
    board[0][2] === board[1][1] &&
    board[0][2] === board[2][0] &&
    board[0][2] === player1
  ) {
    return player1;
  } else if (
    board[0][0] === board[1][1] &&
    board[0][0] === board[2][2] &&
    board[0][0] === player2
  ) {
    return player2;
  } else if (
    board[0][2] === board[1][1] &&
    board[0][2] === board[2][0] &&
    board[0][2] === player2
  ) {
    return player2;
  }
  return null;
}

function stillPlayable() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === "_") {
        return true;
      }
    }
  }
  return false;
}

function canStillPlay() {
  return (
    hasHorizontalWin() === null &&
    hasVerticalWin() === null &&
    hasDiagonalWin() === null &&
    stillPlayable()
  );
}

/*
 * DOM INTERACTION
 */
function get(id) {
  return document.getElementById(id);
}

function load() {
  setup();
  drawBoard();
}

function domSet(row, col) {
  boardSet(row, col);
  alternate();
  drawBoard();
  if (!canStillPlay()) {
    endGame();
  }
}

function formatButton(str, row, col) {
  return `<button class="board-value" onclick="domSet(${row}, ${col})">${str}</button>`;
}

function formatText(str) {
  return `<span class="board-value">${str}</span>`;
}

function format(str, row, col) {
  if (str === "_") {
    return formatButton(str, row, col);
  }
  return formatText(str);
}

function draw(end = false) {
  let str = "";
  if (!end) {
    for (let i = 0; i < 3; i++) {
      str += format(board[i][0], i, 0);
      str += "<span> | </span>";
      str += format(board[i][1], i, 1);
      str += "<span> | </span>";
      str += format(board[i][2], i, 2);
      str += "<br><br>";
    }
  } else {
    for (let i = 0; i < 3; i++) {
      str += formatText(board[i][0]);
      str += "<span> | </span>";
      str += formatText(board[i][1]);
      str += "<span> | </span>";
      str += formatText(board[i][2]);
      str += "<br><br>";
    }
  }
  return str;
}

function drawBoard() {
  get("game").innerHTML = draw();
}

function endGame() {
  get("game").innerHTML = draw(true);
  let horizontalWinner = hasHorizontalWin();
  let verticalWinner = hasVerticalWin();
  let diagonalWinner = hasDiagonalWin();
  let winner = "";
  if (horizontalWinner !== null) {
    if (horizontalWinner === "X") {
      winner = "Player 1";
    } else {
      winner = "Player 2";
    }
    get("winner").innerHTML = `<span>${winner} wins!</span>`;
  } else if (verticalWinner !== null) {
    if (verticalWinner === "X") {
      winner = "Player 1";
    } else {
      winner = "Player 2";
    }
    get("winner").innerHTML = `<span>${winner} wins!</span>`;
  } else if (diagonalWinner !== null) {
    if (diagonalWinner === "X") {
      winner = "Player 1";
    } else {
      winner = "Player 2";
    }
    get("winner").innerHTML = `<span>${winner} wins!</span>`;
  } else {
    get("winner").innerHTML = "None, tie game";
  }
  get("gameover").hidden = false;
}

function reset() {
  board = [];
  turn = 0;
  setup();
  drawBoard();
  get("gameover").hidden = true;
}
