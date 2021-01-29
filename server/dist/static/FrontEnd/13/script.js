/**
 * Debug flag; used for loaded to jump to game page
 */
const debug = false;

/**
 * Helper for writing document.getElementById
 * @param {*} id id of DOM element
 */
function getId(id) {
  return document.getElementById(id);
}

/**
 * Initial load function, hide certain elements
 */
function loaded() {
  if (debug) {
    getId("intro").hidden = true;
    getId("game").hidden = false;
  }
  getId("gameplay").hidden = true;
  getId("gameover").hidden = true;
}

/**
 * Toggles intro and game views
 */
function toggleView() {
  getId("intro").hidden = !getId("intro").hidden;
  getId("game").hidden = !getId("game").hidden;
}

/**
 * Hides the user input form
 */
function hideUserInput() {
  getId("user-details").hidden = true;
}

/**
 * Checks if the given string is not empty
 * @param {*} str String to test
 * @returns `true` if str isn't empty, `false` otherwise
 */
function isValidInput(str) {
  return str.length > 0;
}

/**
 * Checks if user inputs are valid
 * @returns `true` if all inputs are valid, `false` if any are invalid. Also sends alerts for invalid responses
 */
function validateUserInputs() {
  let user1name = getId("user_1_name").value;
  let user1marker = getId("user_1_marker").value;
  let user2marker = getId("user_2_marker").value;
  let user2name = getId("user_2_name").value;
  if (
    isValidInput(user1name) &&
    isValidInput(user1marker) &&
    isValidInput(user2name) &&
    isValidInput(user2marker)
  ) {
    return true;
  } else if (!isValidInput(user1name)) {
    alert("Player 1 name needs to be filled!");
  } else if (!isValidInput(user1marker)) {
    alert("Player 1 marker needs to be filled!");
  } else if (!isValidInput(user2name)) {
    alert("Player 2 name needs to be filled!");
  } else if (!isValidInput(user2marker)) {
    alert("Player 2 marker needs to be filled!");
  }
  return false;
}

/**
 * Object of users: Keep track of users information
 */
let users = {};

/**
 * Turn count: count how many turns have occurred
 */
let turn = 0;

/**
 * Board: Board being used
 */
let board = [];

/**
 * Current User: Keep track of the current user
 */
let currentUser = "";

/**
 * Initialize the users as long as the inputs are valid
 * @returns `users` Object of users after initialization
 */
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

/**
 * Initializes an empty board
 * @returns `board` with
 *
 * [
 *
 * ['_', '_', '_'],
 *
 * ['_', '_', '_'],
 *
 * ['_', '_', '_']
 *
 * ]
 */
function initializeBoard() {
  for (let i = 0; i < 3; i++) {
    board.push([]);
    for (let j = 0; j < 3; j++) {
      board[i].push("_");
    }
  }
  return board;
}

/**
 * Update the board at that row and column, alternates players, draws the board again, lastly checks if the game is still underway. If not, calls endGame function
 * @param {*} row row to update at
 * @param {*} col column to update at
 */
function update(row, col) {
  board[row][col] = users[currentUser].marker;
  alternate();
  drawBoard();
  if (!stillPlaying()) {
    endGame();
  }
}

/**
 * Specific format for blocks used
 * @param {*} boardValue Board value to use
 * @returns HTML String with board value contained in a span
 */
function blockFormatString(boardValue) {
  return `<span class="board-value used">${boardValue}</span> `;
}

/**
 * Formats the board values as HTML strings for use
 * @param {*} boardValue board value to format
 * @param {*} row row to update at
 * @param {*} col column to update at
 * @returns HTML string with board value contained in a button or span
 */
function boardFormatString(boardValue, row, col) {
  if (boardValue === "_") {
    return `<button onclick="update(${row},${col})" class="board-value">${boardValue}</button> `;
  } else {
    return blockFormatString(boardValue);
  }
}

/**
 * Generates the board
 * @returns HTML string representation of the board
 */
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

/**
 * Draws the HTML board, setting it in the DOM
 */
function drawBoard() {
  getId("board").innerHTML = htmlBoard();
}

/**
 * Initializes the users object, board, shows the game, and begins the gameplay
 */
function initialize() {
  initializeUsers();
  initializeBoard();
  getId("gameplay").hidden = false;
  begin();
}

/**
 * Checks for a horizontal win
 *
 * @returns `User 1` if user 1 wins horizontally, `User 2` if user 2 wins horizontally, or `Neither` if no one wins or has won yet
 */
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

/**
 * Checks for a vertically win
 *
 * @returns `User 1` if user 1 wins vertically, `User 2` if user 2 wins vertically, or `Neither` if no one wins or has won yet
 */
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

/**
 * Checks for a diagonal win
 *
 * @returns `User 1` if user 1 wins diagonally, `User 2` if user 2 wins diagonally, or `Neither` if no one wins or has won yet
 */
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

/**
 * Checks if any available space is present
 * @returns `true` if a `_` is still present, `false` otherwise
 */
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

/**
 * Checks if no one has won and if there are still empty spaces
 * @returns `true` if no victor and empty spaces remain, `false` otherwise
 */
function stillPlaying() {
  return (
    hasHorizontalWin() === "Neither" &&
    hasVerticalWin() === "Neither" &&
    hasDiagonalWin() === "Neither" &&
    canStillPlay()
  );
}

/**
 * Increments the turn and switches the current User
 */
function alternate() {
  turn++;
  if (turn % 2 === 0) {
    currentUser = "User 1";
  } else {
    currentUser = "User 2";
  }
}

/**
 * Sets the current user to User 1
 * then draws the board
 */
function begin() {
  currentUser = "User 1";
  drawBoard();
}

/**
 * Gets the scoreboard values and creates the HTML string, updating it within the DOM
 */
function getScoreboard() {
  let str = "";
  let user1 = users["User 1"];
  let user2 = users["User 2"];
  str += `<p class="scoreboard">Scoreboard: </p>`;
  str += `<p class="scoreboard-usernames">${user1.username} : ${user2.username}</p>`;
  str += `<p class="scoreboard-scores">${user1.score} : ${user2.score}</p>`;

  getId("scoreboard").innerHTML = str;
}

/**
 * End game clean up functionality
 *
 * Prints out the winner to the DOM
 *
 * Shows the gameover text and shows the Scoreboard
 */
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

/**
 * Creates the ending board HTML string
 *
 * @returns HTML string of the ending board
 */
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

/**
 * Resets all data
 */
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

/**
 * Play again functionality
 */
function repeat() {
  board = [];
  turn = 0;
  getId("gameover").hidden = true;
  initializeBoard();
  begin();
}

/**
 * Quit game; resets and reverts to home screen
 */
function quit() {
  reset();
  toggleView();
}
