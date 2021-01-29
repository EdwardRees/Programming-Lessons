let todos = [];
      function remove(i) {
        todos.splice(i, 1);
        show();
      }
      function cancel(i) {
        let todo = document.getElementById(`todo_${i}`);
        let temp = `<li id="todo_${i}">${todos[i]} <button onclick="remove(${i})" class="remove">Remove</button> <button onclick="update(${i})" class="update">Update</button> </li>`;
        todo.innerHTML = temp;
      }
      function save(i) {
        let todo = document.getElementById(`todo_${i}`);
        let new_todo = document.getElementById(`updated_todo_${i}`);
        todos[i] = new_todo.value;
        let temp = `<li id="todo_${i}">${todos[i]} <button onclick="remove(${i})" class="remove">Remove</button> <button onclick="update(${i})" class="update">Update</button> </li>`;
        todo.innerHTML = temp;
      }
      function update(i) {
        let todo = document.getElementById(`todo_${i}`);
        let temp = `<li id="todo_${i}"><input value=${todos[i]} id="updated_todo_${i}"> <button onclick="cancel(${i})" class="remove">Cancel</button> <button onclick="save(${i})" class="save" id="save_${i}">Save</button></li>`;
        todo.innerHTML = temp;
      }
      function show() {
        let str = "<ul>";
        for (let i = 0; i < todos.length; i++) {
          str += `<li id="todo_${i}">${todos[i]} <button onclick="remove(${i})" class="remove">Remove</button> <button onclick="update(${i})" class="update">Update</button> </li><br>`;
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