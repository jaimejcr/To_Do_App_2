const body = document.querySelector("body");

function bodyHtml() {
  body.innerHTML = `
<h1>To-Do List </h1>
<div class="center-container">
  <form>
    <label for="todoInput">Type a new to do:</label>
    <input type="text" id="todoInput" name="todo">
    <div>
        <button id="btn" type="submit">Add</button>
        <button id="clearBtn" type="submit">Clear</button>
    </div>
  </form>
 </div> 
`;
}
bodyHtml();
const listaDeTareas = document.createElement("ol");
listaDeTareas.id = "taskList";
body.appendChild(listaDeTareas);

function addTaskButton() {
  const form = document.querySelector("form");
  const addButton = document.querySelector("#btn");
  const input = document.querySelector("#todoInput");
  addButton.addEventListener("click", (event) => {
    event.preventDefault();
    const inputValue = input.value;
    if (inputValue === "") {
      alert("El campo está vacío, ingresa una tarea.");
    } else {
      const tarea = document.createElement("li");
      tarea.id = "tarea";
      tarea.textContent = inputValue;
      const deleteTask = document.createElement("button");
      deleteTask.className = "delete-btn";
      deleteTask.textContent = "Eliminar";
      deleteTask.addEventListener("click", () => {
        listaDeTareas.removeChild(tarea);
      });
      tarea.appendChild(deleteTask);
      listaDeTareas.appendChild(tarea);
    }
  });
  return listaDeTareas;
}
addTaskButton();

function clear() {
  const clearBtn = document.querySelector("#clearBtn");
  const lista = listaDeTareas;
  clearBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (lista.childElementCount === 0) {
      alert("No hay ninguna tarea añadida.");
    } else {
      lista.innerHTML = "";
    }
    console.log(lista.children);
  });
}
clear();
