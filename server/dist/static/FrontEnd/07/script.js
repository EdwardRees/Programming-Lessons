let todos = [];
      function remove(i) {
        todos.splice(i, 1);
        show();
      }
      function show() {
        let str = "<ul>";
        for (let i = 0; i < todos.length; i++) {
          str += `<li id="todo_${i}">${todos[i]} <button onclick="remove(${i})" class="remove">Remove</button> </li><br>`;
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