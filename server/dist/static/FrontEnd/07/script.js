let todos = [];
function show() {
  let str = "<ul>";
  for (let i = 0; i < todos.length; i++) {
    str += `<li id="todo_${i}">${todos[i]} </li><br>`;
  }
  str += "</ul>";
  document.getElementById("todos").innerHTML = str;
}
function add() {
  let value = document.getElementById("todo").value;
  todos.push(value);
  document.getElementById("todo").value = "";
  show();
}
