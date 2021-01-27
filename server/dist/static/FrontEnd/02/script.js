let counter = 0;
function show() {
  document.getElementById("counter").innerHTML = counter;
}
function add() {
  counter += 1;
  show();
}
function subtract() {
  counter -= 1;
  show();
}
